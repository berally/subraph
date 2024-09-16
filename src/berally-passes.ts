import {
  Initialized as InitializedEvent,
  ManagerFeePercentageChanged as ManagerFeePercentageChangedEvent,
  ReferralFeePercentageChanged as ReferralFeePercentageChangedEvent,
  TransferFeeChanged as TransferFeeChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProtocolFeePercentageChanged as ProtocolFeePercentageChangedEvent,
  Trade as TradeEvent,
  Approval as ApprovalEvent,
  Transfer as TransferEvent,
  UpdateWhitelist as UpdateWhitelistEvent
} from "../generated/BerallyPasses/BerallyPasses"
import {
  Initialized,
  ManagerFeePercentageChanged,
  ReferralFeePercentageChanged,
  TransferFeeChanged,
  OwnershipTransferred,
  ProtocolFeePercentageChanged,
  Trade,
  Approval,
  Transfer,
  UpdateWhitelist
} from "../generated/schema"

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

export function handleManagerFeePercentageChanged(
  event: ManagerFeePercentageChangedEvent
): void {
  let entity = new ManagerFeePercentageChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feePercentage = event.params.feePercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReferralFeePercentageChanged(
  event: ReferralFeePercentageChangedEvent
): void {
  let entity = new ReferralFeePercentageChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feePercentage = event.params.feePercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferFeeChanged(
  event: TransferFeeChangedEvent
): void {
  let entity = new TransferFeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transferFee = event.params.transferFee

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

export function handleProtocolFeePercentageChanged(
  event: ProtocolFeePercentageChangedEvent
): void {
  let entity = new ProtocolFeePercentageChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.feePercentage = event.params.feePercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrade(event: TradeEvent): void {
  let entity = new Trade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.trader = event.params.trader
  entity.manager = event.params.manager
  entity.isBuy = event.params.isBuy
  entity.passAmount = event.params.passAmount
  entity.beraAmount = event.params.beraAmount
  entity.protocolBeraAmount = event.params.protocolBeraAmount
  entity.managerBeraAmount = event.params.managerBeraAmount
  entity.referral = event.params.referral
  entity.referralBeraAmount = event.params.referralBeraAmount
  entity.supply = event.params.supply
  entity.factor = event.params.factor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.manager = event.params.manager
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(

    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.manager = event.params.manager
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateWhitelist(event: UpdateWhitelistEvent): void {
  let entity = new UpdateWhitelist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.whitelisted = event.params.whitelisted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}