# Architecture primitives — 20×5 sets (876–975)

> Generated 2026-07-26T18:58:16Z · module `MisArchitecturePrimitives.clrty` · RPC `clrty_getMisArchitecturePrimitives`

Five **sets of 20** unique symbols (100 total):

| Set | Prefix | Role |
| --- | --- | --- |
| 1 | `clrty::fn::*` | Invariant functions (gradient clamp, spectral lock, PCA, …) |
| 2 | `clrty::call::*` | Dispatch / SIMD / DMA / barriers |
| 3 | `clrty::embed::*` | Multi-branch embed pipelines (MoE, attention fork, …) |
| 4 | `clrty::method::*` | Paradigms (monadic errors, type-state, zero-alloc slab, …) |
| 5 | `dev_*` | Proprietary execution (prefetch, branchless select, HugePage align, …) |

Full indexed list (boot SSOT):

| n | id | Name | Definition |
| --- | --- | --- | --- |
| 876 | sml-876 | `ClrtyFn01` | Architecture primitive clrty::fn #1: ClrtyFn01 |
| 877 | sml-877 | `ClrtyFn02` | Architecture primitive clrty::fn #2: ClrtyFn02 |
| 878 | sml-878 | `ClrtyFn03` | Architecture primitive clrty::fn #3: ClrtyFn03 |
| 879 | sml-879 | `ClrtyFn04` | Architecture primitive clrty::fn #4: ClrtyFn04 |
| 880 | sml-880 | `ClrtyFn05` | Architecture primitive clrty::fn #5: ClrtyFn05 |
| 881 | sml-881 | `ClrtyFn06` | Architecture primitive clrty::fn #6: ClrtyFn06 |
| 882 | sml-882 | `ClrtyFn07` | Architecture primitive clrty::fn #7: ClrtyFn07 |
| 883 | sml-883 | `ClrtyFn08` | Architecture primitive clrty::fn #8: ClrtyFn08 |
| 884 | sml-884 | `ClrtyFn09` | Architecture primitive clrty::fn #9: ClrtyFn09 |
| 885 | sml-885 | `ClrtyFn10` | Architecture primitive clrty::fn #10: ClrtyFn10 |
| 886 | sml-886 | `ClrtyFn11` | Architecture primitive clrty::fn #11: ClrtyFn11 |
| 887 | sml-887 | `ClrtyFn12` | Architecture primitive clrty::fn #12: ClrtyFn12 |
| 888 | sml-888 | `ClrtyFn13` | Architecture primitive clrty::fn #13: ClrtyFn13 |
| 889 | sml-889 | `ClrtyFn14` | Architecture primitive clrty::fn #14: ClrtyFn14 |
| 890 | sml-890 | `ClrtyFn15` | Architecture primitive clrty::fn #15: ClrtyFn15 |
| 891 | sml-891 | `ClrtyFn16` | Architecture primitive clrty::fn #16: ClrtyFn16 |
| 892 | sml-892 | `ClrtyFn17` | Architecture primitive clrty::fn #17: ClrtyFn17 |
| 893 | sml-893 | `ClrtyFn18` | Architecture primitive clrty::fn #18: ClrtyFn18 |
| 894 | sml-894 | `ClrtyFn19` | Architecture primitive clrty::fn #19: ClrtyFn19 |
| 895 | sml-895 | `ClrtyFn20` | Architecture primitive clrty::fn #20: ClrtyFn20 |
| 896 | sml-896 | `ClrtyCall01` | Architecture primitive clrty::call #21: ClrtyCall01 |
| 897 | sml-897 | `ClrtyCall02` | Architecture primitive clrty::call #22: ClrtyCall02 |
| 898 | sml-898 | `ClrtyCall03` | Architecture primitive clrty::call #23: ClrtyCall03 |
| 899 | sml-899 | `ClrtyCall04` | Architecture primitive clrty::call #24: ClrtyCall04 |
| 900 | sml-900 | `ClrtyCall05` | Architecture primitive clrty::call #25: ClrtyCall05 |
| 901 | sml-901 | `ClrtyCall06` | Architecture primitive clrty::call #26: ClrtyCall06 |
| 902 | sml-902 | `ClrtyCall07` | Architecture primitive clrty::call #27: ClrtyCall07 |
| 903 | sml-903 | `ClrtyCall08` | Architecture primitive clrty::call #28: ClrtyCall08 |
| 904 | sml-904 | `ClrtyCall09` | Architecture primitive clrty::call #29: ClrtyCall09 |
| 905 | sml-905 | `ClrtyCall10` | Architecture primitive clrty::call #30: ClrtyCall10 |
| 906 | sml-906 | `ClrtyCall11` | Architecture primitive clrty::call #31: ClrtyCall11 |
| 907 | sml-907 | `ClrtyCall12` | Architecture primitive clrty::call #32: ClrtyCall12 |
| 908 | sml-908 | `ClrtyCall13` | Architecture primitive clrty::call #33: ClrtyCall13 |
| 909 | sml-909 | `ClrtyCall14` | Architecture primitive clrty::call #34: ClrtyCall14 |
| 910 | sml-910 | `ClrtyCall15` | Architecture primitive clrty::call #35: ClrtyCall15 |
| 911 | sml-911 | `ClrtyCall16` | Architecture primitive clrty::call #36: ClrtyCall16 |
| 912 | sml-912 | `ClrtyCall17` | Architecture primitive clrty::call #37: ClrtyCall17 |
| 913 | sml-913 | `ClrtyCall18` | Architecture primitive clrty::call #38: ClrtyCall18 |
| 914 | sml-914 | `ClrtyCall19` | Architecture primitive clrty::call #39: ClrtyCall19 |
| 915 | sml-915 | `ClrtyCall20` | Architecture primitive clrty::call #40: ClrtyCall20 |
| 916 | sml-916 | `ClrtyEmbed01` | Architecture primitive clrty::embed #41: ClrtyEmbed01 |
| 917 | sml-917 | `ClrtyEmbed02` | Architecture primitive clrty::embed #42: ClrtyEmbed02 |
| 918 | sml-918 | `ClrtyEmbed03` | Architecture primitive clrty::embed #43: ClrtyEmbed03 |
| 919 | sml-919 | `ClrtyEmbed04` | Architecture primitive clrty::embed #44: ClrtyEmbed04 |
| 920 | sml-920 | `ClrtyEmbed05` | Architecture primitive clrty::embed #45: ClrtyEmbed05 |
| 921 | sml-921 | `ClrtyEmbed06` | Architecture primitive clrty::embed #46: ClrtyEmbed06 |
| 922 | sml-922 | `ClrtyEmbed07` | Architecture primitive clrty::embed #47: ClrtyEmbed07 |
| 923 | sml-923 | `ClrtyEmbed08` | Architecture primitive clrty::embed #48: ClrtyEmbed08 |
| 924 | sml-924 | `ClrtyEmbed09` | Architecture primitive clrty::embed #49: ClrtyEmbed09 |
| 925 | sml-925 | `ClrtyEmbed10` | Architecture primitive clrty::embed #50: ClrtyEmbed10 |
| 926 | sml-926 | `ClrtyEmbed11` | Architecture primitive clrty::embed #51: ClrtyEmbed11 |
| 927 | sml-927 | `ClrtyEmbed12` | Architecture primitive clrty::embed #52: ClrtyEmbed12 |
| 928 | sml-928 | `ClrtyEmbed13` | Architecture primitive clrty::embed #53: ClrtyEmbed13 |
| 929 | sml-929 | `ClrtyEmbed14` | Architecture primitive clrty::embed #54: ClrtyEmbed14 |
| 930 | sml-930 | `ClrtyEmbed15` | Architecture primitive clrty::embed #55: ClrtyEmbed15 |
| 931 | sml-931 | `ClrtyEmbed16` | Architecture primitive clrty::embed #56: ClrtyEmbed16 |
| 932 | sml-932 | `ClrtyEmbed17` | Architecture primitive clrty::embed #57: ClrtyEmbed17 |
| 933 | sml-933 | `ClrtyEmbed18` | Architecture primitive clrty::embed #58: ClrtyEmbed18 |
| 934 | sml-934 | `ClrtyEmbed19` | Architecture primitive clrty::embed #59: ClrtyEmbed19 |
| 935 | sml-935 | `ClrtyEmbed20` | Architecture primitive clrty::embed #60: ClrtyEmbed20 |
| 936 | sml-936 | `ClrtyMethod01` | Architecture primitive clrty::method #61: ClrtyMethod01 |
| 937 | sml-937 | `ClrtyMethod02` | Architecture primitive clrty::method #62: ClrtyMethod02 |
| 938 | sml-938 | `ClrtyMethod03` | Architecture primitive clrty::method #63: ClrtyMethod03 |
| 939 | sml-939 | `ClrtyMethod04` | Architecture primitive clrty::method #64: ClrtyMethod04 |
| 940 | sml-940 | `ClrtyMethod05` | Architecture primitive clrty::method #65: ClrtyMethod05 |
| 941 | sml-941 | `ClrtyMethod06` | Architecture primitive clrty::method #66: ClrtyMethod06 |
| 942 | sml-942 | `ClrtyMethod07` | Architecture primitive clrty::method #67: ClrtyMethod07 |
| 943 | sml-943 | `ClrtyMethod08` | Architecture primitive clrty::method #68: ClrtyMethod08 |
| 944 | sml-944 | `ClrtyMethod09` | Architecture primitive clrty::method #69: ClrtyMethod09 |
| 945 | sml-945 | `ClrtyMethod10` | Architecture primitive clrty::method #70: ClrtyMethod10 |
| 946 | sml-946 | `ClrtyMethod11` | Architecture primitive clrty::method #71: ClrtyMethod11 |
| 947 | sml-947 | `ClrtyMethod12` | Architecture primitive clrty::method #72: ClrtyMethod12 |
| 948 | sml-948 | `ClrtyMethod13` | Architecture primitive clrty::method #73: ClrtyMethod13 |
| 949 | sml-949 | `ClrtyMethod14` | Architecture primitive clrty::method #74: ClrtyMethod14 |
| 950 | sml-950 | `ClrtyMethod15` | Architecture primitive clrty::method #75: ClrtyMethod15 |
| 951 | sml-951 | `ClrtyMethod16` | Architecture primitive clrty::method #76: ClrtyMethod16 |
| 952 | sml-952 | `ClrtyMethod17` | Architecture primitive clrty::method #77: ClrtyMethod17 |
| 953 | sml-953 | `ClrtyMethod18` | Architecture primitive clrty::method #78: ClrtyMethod18 |
| 954 | sml-954 | `ClrtyMethod19` | Architecture primitive clrty::method #79: ClrtyMethod19 |
| 955 | sml-955 | `ClrtyMethod20` | Architecture primitive clrty::method #80: ClrtyMethod20 |
| 956 | sml-956 | `ClrtyDev01` | Architecture primitive clrty::dev #81: ClrtyDev01 |
| 957 | sml-957 | `ClrtyDev02` | Architecture primitive clrty::dev #82: ClrtyDev02 |
| 958 | sml-958 | `ClrtyDev03` | Architecture primitive clrty::dev #83: ClrtyDev03 |
| 959 | sml-959 | `ClrtyDev04` | Architecture primitive clrty::dev #84: ClrtyDev04 |
| 960 | sml-960 | `ClrtyDev05` | Architecture primitive clrty::dev #85: ClrtyDev05 |
| 961 | sml-961 | `ClrtyDev06` | Architecture primitive clrty::dev #86: ClrtyDev06 |
| 962 | sml-962 | `ClrtyDev07` | Architecture primitive clrty::dev #87: ClrtyDev07 |
| 963 | sml-963 | `ClrtyDev08` | Architecture primitive clrty::dev #88: ClrtyDev08 |
| 964 | sml-964 | `ClrtyDev09` | Architecture primitive clrty::dev #89: ClrtyDev09 |
| 965 | sml-965 | `ClrtyDev10` | Architecture primitive clrty::dev #90: ClrtyDev10 |
| 966 | sml-966 | `ClrtyDev11` | Architecture primitive clrty::dev #91: ClrtyDev11 |
| 967 | sml-967 | `ClrtyDev12` | Architecture primitive clrty::dev #92: ClrtyDev12 |
| 968 | sml-968 | `ClrtyDev13` | Architecture primitive clrty::dev #93: ClrtyDev13 |
| 969 | sml-969 | `ClrtyDev14` | Architecture primitive clrty::dev #94: ClrtyDev14 |
| 970 | sml-970 | `ClrtyDev15` | Architecture primitive clrty::dev #95: ClrtyDev15 |
| 971 | sml-971 | `ClrtyDev16` | Architecture primitive clrty::dev #96: ClrtyDev16 |
| 972 | sml-972 | `ClrtyDev17` | Architecture primitive clrty::dev #97: ClrtyDev17 |
| 973 | sml-973 | `ClrtyDev18` | Architecture primitive clrty::dev #98: ClrtyDev18 |
| 974 | sml-974 | `ClrtyDev19` | Architecture primitive clrty::dev #99: ClrtyDev19 |
| 975 | sml-975 | `ClrtyDev20` | Architecture primitive clrty::dev #100: ClrtyDev20 |


See [Operational rulebook](operational-rulebook.md) for enforcement checklist.
