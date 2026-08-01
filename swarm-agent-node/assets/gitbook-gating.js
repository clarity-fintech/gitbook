/**
 * GitBook SWARM private docs — client-side tier gating.
 * Validates JWT via /v1/auth/verify and shows/hides data-required-tier sections.
 */
const DEFAULT_API = 'https://api.clarity-fintech.com';

const TIER_RANK = {
  starter: 1,
  wallet_fund: 2,
  dev_portal: 3,
  elite: 4,
  enterprise: 5,
};

function readStoredToken() {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('token') || params.get('jwt');
  if (fromQuery) return fromQuery;
  try {
    const raw = localStorage.getItem('clrty_wallet_session');
    if (raw) {
      const parsed = JSON.parse(raw);
      return parsed?.token || parsed?.jwtToken || '';
    }
  } catch {
    /* ignore */
  }
  return '';
}

async function verifySwarmAccess(token, apiBase = DEFAULT_API) {
  const res = await fetch(`${apiBase}/v1/auth/verify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ token }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.valid !== true) {
    return { valid: false, error: data.error || 'verify_failed', chainId: 1202 };
  }
  return data;
}

function resolvePurchasedTierKey(verifyResult) {
  if (verifyResult.tier_key && TIER_RANK[verifyResult.tier_key]) {
    return verifyResult.tier_key;
  }
  const offer = String(verifyResult.tier || '');
  if (offer.includes('webb_starter') || offer.includes('starter')) return 'starter';
  if (offer.includes('wallet_fund') || offer.includes('clrty_pay_wallet')) return 'wallet_fund';
  if (offer.includes('dev_portal') || offer.includes('tier_pro')) return 'dev_portal';
  if (offer.includes('tier_elite') || offer.includes('elite')) return 'elite';
  if (offer.includes('tier_enterprise') || offer.includes('enterprise')) return 'enterprise';
  return null;
}

function tierMeetsRequirement(purchasedKey, requiredKey) {
  if (!purchasedKey || !requiredKey) return false;
  const purchasedRank = TIER_RANK[purchasedKey] || 0;
  const requiredRank = TIER_RANK[requiredKey] || 99;
  if (purchasedKey === requiredKey) return true;
  if (purchasedRank >= requiredRank) return true;
  return false;
}

function applySectionVisibility(verifyResult) {
  const purchasedKey = resolvePurchasedTierKey(verifyResult);
  const unlockedSections = new Set(verifyResult.gitbook_sections || []);
  const nodes = document.querySelectorAll('[data-required-tier]');

  nodes.forEach((node) => {
    const required = node.getAttribute('data-required-tier');
    const sectionSlug = node.getAttribute('data-section-id') || required;
    const allowed =
      tierMeetsRequirement(purchasedKey, required) ||
      unlockedSections.has(sectionSlug) ||
      unlockedSections.has(required);
    node.style.display = allowed ? '' : 'none';
    node.setAttribute('data-gated-unlocked', allowed ? 'true' : 'false');
  });

  document.documentElement.setAttribute('data-swarm-tier', purchasedKey || 'none');
  document.documentElement.setAttribute('data-swarm-payment-rail', verifyResult.payment_rail || 'none');
}

function renderLockedBanner() {
  const existing = document.getElementById('swarm-gitbook-gate-banner');
  if (existing) return;
  const banner = document.createElement('div');
  banner.id = 'swarm-gitbook-gate-banner';
  banner.setAttribute('role', 'alert');
  banner.style.cssText =
    'position:sticky;top:0;z-index:9999;padding:12px 16px;background:#1a1033;color:#e2e8f0;font:14px/1.4 system-ui;border-bottom:1px solid #7c3aed55';
  banner.innerHTML =
    '<strong>Private SWARM docs</strong> — Sign in with Clarity Wallet after checkout to unlock tier-gated sections. ' +
    '<a href="https://exchange.clarity-fintech.com/login" style="color:#67e8f9">Login</a>';
  document.body.prepend(banner);
}

/**
 * Validate JWT and render tier-gated GitBook sections.
 * @param {{ apiBase?: string, token?: string, onVerified?: Function }} opts
 */
export async function validateAndRenderSwarmDocs(opts = {}) {
  const token = opts.token || readStoredToken();
  if (!token) {
    renderLockedBanner();
    applySectionVisibility({ valid: false, gitbook_sections: [] });
    return { valid: false, error: 'token_missing', chainId: 1202 };
  }

  const verifyResult = await verifySwarmAccess(token, opts.apiBase || DEFAULT_API);
  if (verifyResult.valid) {
    applySectionVisibility(verifyResult);
    const banner = document.getElementById('swarm-gitbook-gate-banner');
    if (banner) banner.remove();
  } else {
    renderLockedBanner();
    applySectionVisibility({ valid: false, gitbook_sections: [] });
  }

  if (typeof opts.onVerified === 'function') {
    opts.onVerified(verifyResult);
  }
  return verifyResult;
}

if (typeof window !== 'undefined' && document.readyState !== 'loading') {
  validateAndRenderSwarmDocs().catch(() => renderLockedBanner());
} else if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    validateAndRenderSwarmDocs().catch(() => renderLockedBanner());
  });
}

export { verifySwarmAccess, tierMeetsRequirement, resolvePurchasedTierKey };
