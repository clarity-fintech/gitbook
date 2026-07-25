# Value density (VD) simulation (716–730)

Economic throughput per payload byte guiding gas caps, routing, fees, and slashing on CLRTY-1.

## Boot SSOT

[`CLRTY_SUBSTRATE/boot/clrty1_value_density_716_730.json`](../../../CLRTY_SUBSTRATE/boot/clrty1_value_density_716_730.json)

Module: `languages/mis-ml/surfaces/ValueDensitySimulation.clrty`

## Formula

\[
VD = \frac{\text{FeesCaptured} + \text{TokensBurned}}{\text{PayloadSizeBytes}}, \quad R_{VD} = \frac{\text{GasConsumed}}{VD}
\]

## Specs (716–730)

ValueDensityVector · DynamicVDScalingFactor · PayloadEfficiencyFloor · ComputeToDensityRatio · ValueDensityCircuitBreaker · PriorityVDRouter · StaticVDInferenceFeature · DensityBasedFeeDiscount · ValueDensityTelemetryStream · PeakLoadVDSimulator · VDBasedSlashingMultiplier · ValueDensityEpochAggregate · ZeroValuePayloadFilter · ValueDensityTargetFloor · DynamicBlockCapacityAdapter

## Rules

- Moving average **128** ticks; circuit breaker on **>50%** VD drop
- Peak-load sim **100,000** req/sec; epoch aggregate **1,280** ticks

## RPC

`clrty_getValueDensityInvariants`
