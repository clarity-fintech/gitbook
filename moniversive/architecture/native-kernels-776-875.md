# Native MIS kernels (776–875) — catalog 001–100

> Generated 2026-07-29T03:15:30Z · module `MisNativeKernels.clrty` · RPC `clrty_getMisNativeKernels`

ZK intrinsics, DMA, EVM-bridge kernels, ML tensor ops, substrate/cosmos extensions, and system integrity controls (native `.clrty` / `.mis` surfaces).

| n | id | Name | Definition |
| --- | --- | --- | --- |
| 776 | sml-776 | `PoseidonHashLeaf` | MIS kernel 001 (crypto): Poseidon Hash Leaf |
| 777 | sml-777 | `Blake3Chunk` | MIS kernel 002 (crypto): Blake3 Chunk |
| 778 | sml-778 | `Sha256RollingLetter` | MIS kernel 003 (crypto): Sha256 Rolling Letter |
| 779 | sml-779 | `Ed25519VerifyGate` | MIS kernel 004 (crypto): Ed25519 Verify Gate |
| 780 | sml-780 | `Secp256k1Recover` | MIS kernel 005 (crypto): Secp256k1 Recover |
| 781 | sml-781 | `X25519Dh` | MIS kernel 006 (crypto): X25519 Dh |
| 782 | sml-782 | `AesGcmSeal` | MIS kernel 007 (crypto): Aes Gcm Seal |
| 783 | sml-783 | `ChaCha20Poly` | MIS kernel 008 (crypto): Cha Cha20 Poly |
| 784 | sml-784 | `HkdfExpand` | MIS kernel 009 (crypto): Hkdf Expand |
| 785 | sml-785 | `MerkleProve` | MIS kernel 010 (crypto): Merkle Prove |
| 786 | sml-786 | `CommitmentOpen` | MIS kernel 011 (crypto): Commitment Open |
| 787 | sml-787 | `NullifierCheck` | MIS kernel 012 (crypto): Nullifier Check |
| 788 | sml-788 | `SchnorrAggregate` | MIS kernel 013 (crypto): Schnorr Aggregate |
| 789 | sml-789 | `BlsPairingGate` | MIS kernel 014 (crypto): Bls Pairing Gate |
| 790 | sml-790 | `KeccakDigest` | MIS kernel 015 (crypto): Keccak Digest |
| 791 | sml-791 | `HmacAuthTag` | MIS kernel 016 (crypto): Hmac Auth Tag |
| 792 | sml-792 | `Argon2idBound` | MIS kernel 017 (crypto): Argon2id Bound |
| 793 | sml-793 | `FixedPointQ824` | MIS kernel 018 (math): Fixed Point Q824 |
| 794 | sml-794 | `MonotonicClamp` | MIS kernel 019 (math): Monotonic Clamp |
| 795 | sml-795 | `SpectralNormBound` | MIS kernel 020 (math): Spectral Norm Bound |
| 796 | sml-796 | `DotProductExact` | MIS kernel 021 (math): Dot Product Exact |
| 797 | sml-797 | `SoftmaxApprox` | MIS kernel 022 (math): Softmax Approx |
| 798 | sml-798 | `ExpTaylorBound` | MIS kernel 023 (math): Exp Taylor Bound |
| 799 | sml-799 | `Log2Approx` | MIS kernel 024 (math): Log2 Approx |
| 800 | sml-800 | `SqrtNewton` | MIS kernel 025 (math): Sqrt Newton |
| 801 | sml-801 | `ModInverse` | MIS kernel 026 (math): Mod Inverse |
| 802 | sml-802 | `GcdEuclid` | MIS kernel 027 (math): Gcd Euclid |
| 803 | sml-803 | `MatrixMulTile` | MIS kernel 028 (math): Matrix Mul Tile |
| 804 | sml-804 | `Convolution1d` | MIS kernel 029 (math): Convolution1d |
| 805 | sml-805 | `FftRadix2` | MIS kernel 030 (math): Fft Radix2 |
| 806 | sml-806 | `PolyEvalHorner` | MIS kernel 031 (math): Poly Eval Horner |
| 807 | sml-807 | `InterpolateLagrange` | MIS kernel 032 (math): Interpolate Lagrange |
| 808 | sml-808 | `EntropyShannon` | MIS kernel 033 (math): Entropy Shannon |
| 809 | sml-809 | `KlDivergenceBound` | MIS kernel 034 (math): Kl Divergence Bound |
| 810 | sml-810 | `MisDictInsert` | MIS kernel 035 (collections): Mis Dict Insert |
| 811 | sml-811 | `MisDictLookup` | MIS kernel 036 (collections): Mis Dict Lookup |
| 812 | sml-812 | `MisSetAdd` | MIS kernel 037 (collections): Mis Set Add |
| 813 | sml-813 | `MisSetContains` | MIS kernel 038 (collections): Mis Set Contains |
| 814 | sml-814 | `VectorMapPush` | MIS kernel 039 (collections): Vector Map Push |
| 815 | sml-815 | `VectorMapGet` | MIS kernel 040 (collections): Vector Map Get |
| 816 | sml-816 | `BoundedDeque` | MIS kernel 041 (collections): Bounded Deque |
| 817 | sml-817 | `RingBufferTick` | MIS kernel 042 (collections): Ring Buffer Tick |
| 818 | sml-818 | `SparseIndex` | MIS kernel 043 (collections): Sparse Index |
| 819 | sml-819 | `DenseBitmap` | MIS kernel 044 (collections): Dense Bitmap |
| 820 | sml-820 | `PriorityHeap` | MIS kernel 045 (collections): Priority Heap |
| 821 | sml-821 | `SortedVecInsert` | MIS kernel 046 (collections): Sorted Vec Insert |
| 822 | sml-822 | `HashMapRobin` | MIS kernel 047 (collections): Hash Map Robin |
| 823 | sml-823 | `ArenaAllocSlot` | MIS kernel 048 (collections): Arena Alloc Slot |
| 824 | sml-824 | `SlabFreeList` | MIS kernel 049 (collections): Slab Free List |
| 825 | sml-825 | `CowBuffer` | MIS kernel 050 (collections): Cow Buffer |
| 826 | sml-826 | `SliceWindow` | MIS kernel 051 (collections): Slice Window |
| 827 | sml-827 | `AtomicLoadAcq` | MIS kernel 052 (concurrency): Atomic Load Acq |
| 828 | sml-828 | `AtomicStoreRel` | MIS kernel 053 (concurrency): Atomic Store Rel |
| 829 | sml-829 | `AtomicCas` | MIS kernel 054 (concurrency): Atomic Cas |
| 830 | sml-830 | `AtomicFetchAdd` | MIS kernel 055 (concurrency): Atomic Fetch Add |
| 831 | sml-831 | `SpinLockGuard` | MIS kernel 056 (concurrency): Spin Lock Guard |
| 832 | sml-832 | `RwLockShared` | MIS kernel 057 (concurrency): Rw Lock Shared |
| 833 | sml-833 | `RwLockExclusive` | MIS kernel 058 (concurrency): Rw Lock Exclusive |
| 834 | sml-834 | `ChannelSend` | MIS kernel 059 (concurrency): Channel Send |
| 835 | sml-835 | `ChannelRecv` | MIS kernel 060 (concurrency): Channel Recv |
| 836 | sml-836 | `BarrierWait` | MIS kernel 061 (concurrency): Barrier Wait |
| 837 | sml-837 | `SemaphoreAcquire` | MIS kernel 062 (concurrency): Semaphore Acquire |
| 838 | sml-838 | `OnceInit` | MIS kernel 063 (concurrency): Once Init |
| 839 | sml-839 | `ThreadLocalKey` | MIS kernel 064 (concurrency): Thread Local Key |
| 840 | sml-840 | `WorkStealQueue` | MIS kernel 065 (concurrency): Work Steal Queue |
| 841 | sml-841 | `ParkUnpark` | MIS kernel 066 (concurrency): Park Unpark |
| 842 | sml-842 | `SeqCstFence` | MIS kernel 067 (concurrency): Seq Cst Fence |
| 843 | sml-843 | `RelaxedCounter` | MIS kernel 068 (concurrency): Relaxed Counter |
| 844 | sml-844 | `TcpConnectBound` | MIS kernel 069 (net): Tcp Connect Bound |
| 845 | sml-845 | `UdpDatagram` | MIS kernel 070 (net): Udp Datagram |
| 846 | sml-846 | `HttpGetStatus` | MIS kernel 071 (net): Http Get Status |
| 847 | sml-847 | `WsFrameParse` | MIS kernel 072 (net): Ws Frame Parse |
| 848 | sml-848 | `DnsResolve` | MIS kernel 073 (net): Dns Resolve |
| 849 | sml-849 | `TlsHandshake` | MIS kernel 074 (net): Tls Handshake |
| 850 | sml-850 | `QuicStreamOpen` | MIS kernel 075 (net): Quic Stream Open |
| 851 | sml-851 | `RpcCallEncode` | MIS kernel 076 (net): Rpc Call Encode |
| 852 | sml-852 | `RpcCallDecode` | MIS kernel 077 (net): Rpc Call Decode |
| 853 | sml-853 | `PeerIdHash` | MIS kernel 078 (net): Peer Id Hash |
| 854 | sml-854 | `GossipFanout` | MIS kernel 079 (net): Gossip Fanout |
| 855 | sml-855 | `NatPunch` | MIS kernel 080 (net): Nat Punch |
| 856 | sml-856 | `BandwidthThrottle` | MIS kernel 081 (net): Bandwidth Throttle |
| 857 | sml-857 | `LatencySample` | MIS kernel 082 (net): Latency Sample |
| 858 | sml-858 | `PacketChecksum` | MIS kernel 083 (net): Packet Checksum |
| 859 | sml-859 | `MultipartAssemble` | MIS kernel 084 (net): Multipart Assemble |
| 860 | sml-860 | `FsOpenRead` | MIS kernel 085 (sys): Fs Open Read |
| 861 | sml-861 | `FsWriteAtomic` | MIS kernel 086 (sys): Fs Write Atomic |
| 862 | sml-862 | `EnvGet` | MIS kernel 087 (sys): Env Get |
| 863 | sml-863 | `ProcessSpawn` | MIS kernel 088 (sys): Process Spawn |
| 864 | sml-864 | `SignalTrap` | MIS kernel 089 (sys): Signal Trap |
| 865 | sml-865 | `MmapRegion` | MIS kernel 090 (sys): Mmap Region |
| 866 | sml-866 | `PageAlignAssert` | MIS kernel 091 (sys): Page Align Assert |
| 867 | sml-867 | `CpuAffinityPin` | MIS kernel 092 (sys): Cpu Affinity Pin |
| 868 | sml-868 | `ClockMonoNs` | MIS kernel 093 (sys): Clock Mono Ns |
| 869 | sml-869 | `RandFill` | MIS kernel 094 (sys): Rand Fill |
| 870 | sml-870 | `TempFile` | MIS kernel 095 (sys): Temp File |
| 871 | sml-871 | `DirWalk` | MIS kernel 096 (sys): Dir Walk |
| 872 | sml-872 | `SymlinkResolve` | MIS kernel 097 (sys): Symlink Resolve |
| 873 | sml-873 | `UlimitCheck` | MIS kernel 098 (sys): Ulimit Check |
| 874 | sml-874 | `CgroupLimit` | MIS kernel 099 (sys): Cgroup Limit |
| 875 | sml-875 | `SandboxEnter` | MIS kernel 100 (sys): Sandbox Enter |


Clone kernel tree: [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML)
