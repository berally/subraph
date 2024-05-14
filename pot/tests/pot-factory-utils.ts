import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeraFeeChanged,
  BerallyPassesAddressChanged,
  BexSet,
  FundraisingPeriodLimitsChanged,
  Initialized,
  InvestmentPeriodLimitsChanged,
  LockingPeriodLimitsChanged,
  ManagerExitFeeChanged,
  MaxCapacityPerPotChanged,
  MaxPerformanceFeeChanged,
  MaximumSupportedAssetCountChanged,
  MinInvestmentAmountChanged,
  OwnershipTransferred,
  Paused,
  PotCreated,
  PotImplementationChanged,
  ProtocolExitFeeChanged,
  TokenAdded,
  TokenRemoved,
  TreasuryChanged,
  Unpaused,
  UsdTokenChanged,
  VolumeFeeChanged
} from "../generated/PotFactory/PotFactory"

export function createAdminChangedEvent(admin: Address): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return adminChangedEvent
}

export function createBeraFeeChangedEvent(beraFee: BigInt): BeraFeeChanged {
  let beraFeeChangedEvent = changetype<BeraFeeChanged>(newMockEvent())

  beraFeeChangedEvent.parameters = new Array()

  beraFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "beraFee",
      ethereum.Value.fromUnsignedBigInt(beraFee)
    )
  )

  return beraFeeChangedEvent
}

export function createBerallyPassesAddressChangedEvent(
  berallyPasses: Address
): BerallyPassesAddressChanged {
  let berallyPassesAddressChangedEvent =
    changetype<BerallyPassesAddressChanged>(newMockEvent())

  berallyPassesAddressChangedEvent.parameters = new Array()

  berallyPassesAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "berallyPasses",
      ethereum.Value.fromAddress(berallyPasses)
    )
  )

  return berallyPassesAddressChangedEvent
}

export function createBexSetEvent(bex: Address): BexSet {
  let bexSetEvent = changetype<BexSet>(newMockEvent())

  bexSetEvent.parameters = new Array()

  bexSetEvent.parameters.push(
    new ethereum.EventParam("bex", ethereum.Value.fromAddress(bex))
  )

  return bexSetEvent
}

export function createFundraisingPeriodLimitsChangedEvent(
  min: BigInt,
  max: BigInt
): FundraisingPeriodLimitsChanged {
  let fundraisingPeriodLimitsChangedEvent =
    changetype<FundraisingPeriodLimitsChanged>(newMockEvent())

  fundraisingPeriodLimitsChangedEvent.parameters = new Array()

  fundraisingPeriodLimitsChangedEvent.parameters.push(
    new ethereum.EventParam("min", ethereum.Value.fromUnsignedBigInt(min))
  )
  fundraisingPeriodLimitsChangedEvent.parameters.push(
    new ethereum.EventParam("max", ethereum.Value.fromUnsignedBigInt(max))
  )

  return fundraisingPeriodLimitsChangedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createInvestmentPeriodLimitsChangedEvent(
  min: BigInt,
  max: BigInt
): InvestmentPeriodLimitsChanged {
  let investmentPeriodLimitsChangedEvent =
    changetype<InvestmentPeriodLimitsChanged>(newMockEvent())

  investmentPeriodLimitsChangedEvent.parameters = new Array()

  investmentPeriodLimitsChangedEvent.parameters.push(
    new ethereum.EventParam("min", ethereum.Value.fromUnsignedBigInt(min))
  )
  investmentPeriodLimitsChangedEvent.parameters.push(
    new ethereum.EventParam("max", ethereum.Value.fromUnsignedBigInt(max))
  )

  return investmentPeriodLimitsChangedEvent
}

export function createLockingPeriodLimitsChangedEvent(
  min: BigInt,
  max: BigInt
): LockingPeriodLimitsChanged {
  let lockingPeriodLimitsChangedEvent = changetype<LockingPeriodLimitsChanged>(
    newMockEvent()
  )

  lockingPeriodLimitsChangedEvent.parameters = new Array()

  lockingPeriodLimitsChangedEvent.parameters.push(
    new ethereum.EventParam("min", ethereum.Value.fromUnsignedBigInt(min))
  )
  lockingPeriodLimitsChangedEvent.parameters.push(
    new ethereum.EventParam("max", ethereum.Value.fromUnsignedBigInt(max))
  )

  return lockingPeriodLimitsChangedEvent
}

export function createManagerExitFeeChangedEvent(
  numerator: BigInt,
  denominator: BigInt
): ManagerExitFeeChanged {
  let managerExitFeeChangedEvent = changetype<ManagerExitFeeChanged>(
    newMockEvent()
  )

  managerExitFeeChangedEvent.parameters = new Array()

  managerExitFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "numerator",
      ethereum.Value.fromUnsignedBigInt(numerator)
    )
  )
  managerExitFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "denominator",
      ethereum.Value.fromUnsignedBigInt(denominator)
    )
  )

  return managerExitFeeChangedEvent
}

export function createMaxCapacityPerPotChangedEvent(
  capacity: BigInt
): MaxCapacityPerPotChanged {
  let maxCapacityPerPotChangedEvent = changetype<MaxCapacityPerPotChanged>(
    newMockEvent()
  )

  maxCapacityPerPotChangedEvent.parameters = new Array()

  maxCapacityPerPotChangedEvent.parameters.push(
    new ethereum.EventParam(
      "capacity",
      ethereum.Value.fromUnsignedBigInt(capacity)
    )
  )

  return maxCapacityPerPotChangedEvent
}

export function createMaxPerformanceFeeChangedEvent(
  maxManagerFee: BigInt
): MaxPerformanceFeeChanged {
  let maxPerformanceFeeChangedEvent = changetype<MaxPerformanceFeeChanged>(
    newMockEvent()
  )

  maxPerformanceFeeChangedEvent.parameters = new Array()

  maxPerformanceFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "maxManagerFee",
      ethereum.Value.fromUnsignedBigInt(maxManagerFee)
    )
  )

  return maxPerformanceFeeChangedEvent
}

export function createMaximumSupportedAssetCountChangedEvent(
  count: BigInt
): MaximumSupportedAssetCountChanged {
  let maximumSupportedAssetCountChangedEvent =
    changetype<MaximumSupportedAssetCountChanged>(newMockEvent())

  maximumSupportedAssetCountChangedEvent.parameters = new Array()

  maximumSupportedAssetCountChangedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )

  return maximumSupportedAssetCountChangedEvent
}

export function createMinInvestmentAmountChangedEvent(
  maxAmount: BigInt
): MinInvestmentAmountChanged {
  let minInvestmentAmountChangedEvent = changetype<MinInvestmentAmountChanged>(
    newMockEvent()
  )

  minInvestmentAmountChangedEvent.parameters = new Array()

  minInvestmentAmountChangedEvent.parameters.push(
    new ethereum.EventParam(
      "maxAmount",
      ethereum.Value.fromUnsignedBigInt(maxAmount)
    )
  )

  return minInvestmentAmountChangedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPotCreatedEvent(
  pot: Address,
  usdToken: Address,
  fundraisingDeadline: BigInt,
  lockingDeadline: BigInt,
  investmentDeadline: BigInt,
  maxCapacity: BigInt,
  manager: Address,
  managerFeeNumerator: BigInt,
  managerFeeDenominator: BigInt,
  minManagerSharePercentage: i32
): PotCreated {
  let potCreatedEvent = changetype<PotCreated>(newMockEvent())

  potCreatedEvent.parameters = new Array()

  potCreatedEvent.parameters.push(
    new ethereum.EventParam("pot", ethereum.Value.fromAddress(pot))
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam("usdToken", ethereum.Value.fromAddress(usdToken))
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "fundraisingDeadline",
      ethereum.Value.fromUnsignedBigInt(fundraisingDeadline)
    )
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "lockingDeadline",
      ethereum.Value.fromUnsignedBigInt(lockingDeadline)
    )
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "investmentDeadline",
      ethereum.Value.fromUnsignedBigInt(investmentDeadline)
    )
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxCapacity",
      ethereum.Value.fromUnsignedBigInt(maxCapacity)
    )
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "managerFeeNumerator",
      ethereum.Value.fromUnsignedBigInt(managerFeeNumerator)
    )
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "managerFeeDenominator",
      ethereum.Value.fromUnsignedBigInt(managerFeeDenominator)
    )
  )
  potCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "minManagerSharePercentage",
      ethereum.Value.fromUnsignedBigInt(
        BigInt.fromI32(minManagerSharePercentage)
      )
    )
  )

  return potCreatedEvent
}

export function createPotImplementationChangedEvent(
  df: Address
): PotImplementationChanged {
  let potImplementationChangedEvent = changetype<PotImplementationChanged>(
    newMockEvent()
  )

  potImplementationChangedEvent.parameters = new Array()

  potImplementationChangedEvent.parameters.push(
    new ethereum.EventParam("df", ethereum.Value.fromAddress(df))
  )

  return potImplementationChangedEvent
}

export function createProtocolExitFeeChangedEvent(
  numerator: BigInt,
  denominator: BigInt
): ProtocolExitFeeChanged {
  let protocolExitFeeChangedEvent = changetype<ProtocolExitFeeChanged>(
    newMockEvent()
  )

  protocolExitFeeChangedEvent.parameters = new Array()

  protocolExitFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "numerator",
      ethereum.Value.fromUnsignedBigInt(numerator)
    )
  )
  protocolExitFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "denominator",
      ethereum.Value.fromUnsignedBigInt(denominator)
    )
  )

  return protocolExitFeeChangedEvent
}

export function createTokenAddedEvent(asset: Address): TokenAdded {
  let tokenAddedEvent = changetype<TokenAdded>(newMockEvent())

  tokenAddedEvent.parameters = new Array()

  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )

  return tokenAddedEvent
}

export function createTokenRemovedEvent(asset: Address): TokenRemoved {
  let tokenRemovedEvent = changetype<TokenRemoved>(newMockEvent())

  tokenRemovedEvent.parameters = new Array()

  tokenRemovedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )

  return tokenRemovedEvent
}

export function createTreasuryChangedEvent(treasury: Address): TreasuryChanged {
  let treasuryChangedEvent = changetype<TreasuryChanged>(newMockEvent())

  treasuryChangedEvent.parameters = new Array()

  treasuryChangedEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return treasuryChangedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createUsdTokenChangedEvent(usd: Address): UsdTokenChanged {
  let usdTokenChangedEvent = changetype<UsdTokenChanged>(newMockEvent())

  usdTokenChangedEvent.parameters = new Array()

  usdTokenChangedEvent.parameters.push(
    new ethereum.EventParam("usd", ethereum.Value.fromAddress(usd))
  )

  return usdTokenChangedEvent
}

export function createVolumeFeeChangedEvent(
  numerator: BigInt,
  denominator: BigInt
): VolumeFeeChanged {
  let volumeFeeChangedEvent = changetype<VolumeFeeChanged>(newMockEvent())

  volumeFeeChangedEvent.parameters = new Array()

  volumeFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "numerator",
      ethereum.Value.fromUnsignedBigInt(numerator)
    )
  )
  volumeFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "denominator",
      ethereum.Value.fromUnsignedBigInt(denominator)
    )
  )

  return volumeFeeChangedEvent
}
