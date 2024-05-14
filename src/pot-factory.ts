import { Pot } from '../generated/templates'
import {
  AdminChanged as AdminChangedEvent,
  BeraFeeChanged as BeraFeeChangedEvent,
  BerallyPassesAddressChanged as BerallyPassesAddressChangedEvent,
  BexSet as BexSetEvent,
  FundraisingPeriodLimitsChanged as FundraisingPeriodLimitsChangedEvent,
  Initialized as InitializedEvent,
  InvestmentPeriodLimitsChanged as InvestmentPeriodLimitsChangedEvent,
  LockingPeriodLimitsChanged as LockingPeriodLimitsChangedEvent,
  ManagerExitFeeChanged as ManagerExitFeeChangedEvent,
  MaxCapacityPerPotChanged as MaxCapacityPerPotChangedEvent,
  MaxPerformanceFeeChanged as MaxPerformanceFeeChangedEvent,
  MaximumSupportedAssetCountChanged as MaximumSupportedAssetCountChangedEvent,
  MinInvestmentAmountChanged as MinInvestmentAmountChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PotCreated as PotCreatedEvent,
  PotImplementationChanged as PotImplementationChangedEvent,
  ProtocolExitFeeChanged as ProtocolExitFeeChangedEvent,
  TokenAdded as TokenAddedEvent,
  TokenRemoved as TokenRemovedEvent,
  TreasuryChanged as TreasuryChangedEvent,
  Unpaused as UnpausedEvent,
  UsdTokenChanged as UsdTokenChangedEvent,
  VolumeFeeChanged as VolumeFeeChangedEvent
} from "../generated/PotFactory/PotFactory"
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
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeraFeeChanged(event: BeraFeeChangedEvent): void {
  let entity = new BeraFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beraFee = event.params.beraFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBerallyPassesAddressChanged(
  event: BerallyPassesAddressChangedEvent
): void {
  let entity = new BerallyPassesAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.berallyPasses = event.params.berallyPasses

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBexSet(event: BexSetEvent): void {
  let entity = new BexSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bex = event.params.bex

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundraisingPeriodLimitsChanged(
  event: FundraisingPeriodLimitsChangedEvent
): void {
  let entity = new FundraisingPeriodLimitsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.min = event.params.min
  entity.max = event.params.max

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInvestmentPeriodLimitsChanged(
  event: InvestmentPeriodLimitsChangedEvent
): void {
  let entity = new InvestmentPeriodLimitsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.min = event.params.min
  entity.max = event.params.max

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLockingPeriodLimitsChanged(
  event: LockingPeriodLimitsChangedEvent
): void {
  let entity = new LockingPeriodLimitsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.min = event.params.min
  entity.max = event.params.max

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerExitFeeChanged(
  event: ManagerExitFeeChangedEvent
): void {
  let entity = new ManagerExitFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.numerator = event.params.numerator
  entity.denominator = event.params.denominator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxCapacityPerPotChanged(
  event: MaxCapacityPerPotChangedEvent
): void {
  let entity = new MaxCapacityPerPotChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.capacity = event.params.capacity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaxPerformanceFeeChanged(
  event: MaxPerformanceFeeChangedEvent
): void {
  let entity = new MaxPerformanceFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maxManagerFee = event.params.maxManagerFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMaximumSupportedAssetCountChanged(
  event: MaximumSupportedAssetCountChangedEvent
): void {
  let entity = new MaximumSupportedAssetCountChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinInvestmentAmountChanged(
  event: MinInvestmentAmountChangedEvent
): void {
  let entity = new MinInvestmentAmountChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maxAmount = event.params.maxAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePotCreated(event: PotCreatedEvent): void {
  let entity = new PotCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pot = event.params.pot
  entity.usdToken = event.params.usdToken
  entity.fundraisingDeadline = event.params.fundraisingDeadline
  entity.lockingDeadline = event.params.lockingDeadline
  entity.investmentDeadline = event.params.investmentDeadline
  entity.maxCapacity = event.params.maxCapacity
  entity.manager = event.params.manager
  entity.managerFeeNumerator = event.params.managerFeeNumerator
  entity.managerFeeDenominator = event.params.managerFeeDenominator
  entity.minManagerSharePercentage = event.params.minManagerSharePercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  Pot.create(event.params.pot)
}

export function handlePotImplementationChanged(
  event: PotImplementationChangedEvent
): void {
  let entity = new PotImplementationChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.df = event.params.df

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolExitFeeChanged(
  event: ProtocolExitFeeChangedEvent
): void {
  let entity = new ProtocolExitFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.numerator = event.params.numerator
  entity.denominator = event.params.denominator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  let entity = new TokenAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenRemoved(event: TokenRemovedEvent): void {
  let entity = new TokenRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasuryChanged(event: TreasuryChangedEvent): void {
  let entity = new TreasuryChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.treasury = event.params.treasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUsdTokenChanged(event: UsdTokenChangedEvent): void {
  let entity = new UsdTokenChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.usd = event.params.usd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVolumeFeeChanged(event: VolumeFeeChangedEvent): void {
  let entity = new VolumeFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.numerator = event.params.numerator
  entity.denominator = event.params.denominator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
