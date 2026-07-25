# Execution model

```text
.clrty source
    ↓  clrtyc
execution graph (JSON)
    ↓  CLRTY-1 mempool / HELIX
invariant validation
    ↓
canonical L1 commit (chain 1202)
```

1. Parse module → extract invariants + outcomes  
2. Hash outcome bodies for replay integrity  
3. Bind settlement to `clrty-1`  
4. Validators re-evaluate invariants on the candidate state root  

No EVM opcode stream is required for native CLRTY modules. External intake rails (ETH/BNB/BTC) still settle **value** into CLRTY under payment-rails policy.
