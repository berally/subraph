import { FlexiblePot, NonFlexiblePot } from '../generated/templates'
import {
  AdminChanged as AdminChangedEvent,
  BeraFeeChanged as BeraFeeChangedEvent,
  PassesAddressChanged as PassesAddressChangedEvent,
  DefaultFundraisingPeriodChanged as DefaultFundraisingPeriodChangedEvent,
  DefaultLockingPeriodChanged as DefaultLockingPeriodChangedEvent,
  ManagerExitFeeChanged as ManagerExitFeeChangedEvent,
  MaxCapacityPerPotChanged as MaxCapacityPerPotChangedEvent,
  MaxPerformanceFeeChanged as MaxPerformanceFeeChangedEvent,
  MaximumSupportedAssetCountChanged as MaximumSupportedAssetCountChangedEvent,
  MinInvestmentAmountChanged as MinInvestmentAmountChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  FlexiblePotCreated as FlexiblePotCreatedEvent,
  NonFlexiblePotCreated as NonFlexiblePotCreatedEvent,
  PotImplementationChanged as PotImplementationChangedEvent,
  ProtocolExitFeeChanged as ProtocolExitFeeChangedEvent,
  TokenAdded as TokenAddedEvent,
  TokenRemoved as TokenRemovedEvent,
  TreasuryChanged as TreasuryChangedEvent,
  Unpaused as UnpausedEvent,
  UsdTokenChanged as UsdTokenChangedEvent,
  PotUpgraded as PotUpgradedEvent
} from "../generated/PotFactory/PotFactory"
import {
  AdminChanged,
  BeraFeeChanged,
  PassesAddressChanged,
  DefaultFundraisingPeriodChanged,
  DefaultLockingPeriodChanged,
  ManagerExitFeeChanged,
  MaxCapacityPerPotChanged,
  MaxPerformanceFeeChanged,
  MaximumSupportedAssetCountChanged,
  MinInvestmentAmountChanged,
  OwnershipTransferred,
  Paused,
  FlexiblePotCreated,
  NonFlexiblePotCreated,
  PotImplementationChanged,
  ProtocolExitFeeChanged,
  TokenAdded,
  TokenRemoved,
  TreasuryChanged,
  Unpaused,
  UsdTokenChanged,
  PotUpgraded
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

export function handlePassesAddressChanged(
  event: PassesAddressChangedEvent
): void {
  let entity = new PassesAddressChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.passes = event.params.passes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultFundraisingPeriodChanged(
  event: DefaultFundraisingPeriodChangedEvent
): void {
  let entity = new DefaultFundraisingPeriodChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.defaultFundraisingPeriod = event.params.defaultFundraisingPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultLockingPeriodChanged(
  event: DefaultLockingPeriodChangedEvent
): void {
  let entity = new DefaultLockingPeriodChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.defaultLockingPeriod = event.params.defaultLockingPeriod

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

export function handleFlexiblePotCreated(event: FlexiblePotCreatedEvent): void {
  let entity = new FlexiblePotCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pot = event.params.pot
  entity.usdToken = event.params.usdToken
  entity.fundraisingDeadline = event.params.fundraisingDeadline
  entity.lockingDeadline = event.params.lockingDeadline
  entity.maxCapacity = event.params.maxCapacity
  entity.manager = event.params.manager
  entity.performanceFeeNumerator = event.params.performanceFeeNumerator
  entity.performanceFeeDenominator = event.params.performanceFeeDenominator
  entity.potId = event.params.id
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  FlexiblePot.create(event.params.pot)
}

export function handleNonFlexiblePotCreated(event: NonFlexiblePotCreatedEvent): void {
  let entity = new NonFlexiblePotCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pot = event.params.pot
  entity.usdToken = event.params.usdToken
  entity.fundraisingDeadline = event.params.fundraisingDeadline
  entity.maxCapacity = event.params.maxCapacity
  entity.manager = event.params.manager
  entity.performanceFeeNumerator = event.params.performanceFeeNumerator
  entity.performanceFeeDenominator = event.params.performanceFeeDenominator
  entity.potId = event.params.id
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  NonFlexiblePot.create(event.params.pot)
}

export function handlePotImplementationChanged(
  event: PotImplementationChangedEvent
): void {
  let entity = new PotImplementationChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.potType = event.params.potType
  entity.implementation = event.params.implementation
  entity.version = event.params.version

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
  entity.asset = event.params.token
  entity.tokenType = event.params.tokenType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenRemoved(event: TokenRemovedEvent): void {
  let entity = new TokenRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.asset = event.params.token

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

export function handlePotUpgraded(event: PotUpgradedEvent): void {
  let entity = new PotUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pot = event.params.pot
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
