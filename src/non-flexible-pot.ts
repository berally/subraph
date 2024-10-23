import {
  Approval as ApprovalEvent,
  AssetAdded as AssetAddedEvent,
  AssetRemoved as AssetRemovedEvent,
  Claimed as ClaimedEvent,
  Canceled as CanceledEvent,
  Deposited as DepositedEvent,
  Executed as ExecutedEvent,
  FundraisingClosed as FundraisingClosedEvent,
  Transfer as TransferEvent,
  Withdrawn as WithdrawnEvent,
} from "../generated/templates/NonFlexiblePot/NonFlexiblePot"
import {
  Approval,
  AssetAdded,
  AssetRemoved,
  Claimed,
  Canceled,
  Deposited,
  Executed,
  ExecutedLog,
  FundraisingClosed,
  Transfer,
  Withdrawn,
  WithdrawnAsset
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssetAdded(event: AssetAddedEvent): void {
  let entity = new AssetAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssetRemoved(event: AssetRemovedEvent): void {
  let entity = new AssetRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.investor = event.params.investor
  entity.shareAmount = event.params.shareAmount
  entity.usdToken = event.params.usdToken
  entity.usdAmount = event.params.usdAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCanceled(event: CanceledEvent): void {
  let entity = new Canceled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )

  entity.pot = event.params.pot
  entity.totalSupply = event.params.totalSupply
  entity.totalRaisedInUsd = event.params.totalRaisedInUsd

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new Deposited(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.investor = event.params.investor
  entity.usdToken = event.params.usdToken
  entity.usdAmount = event.params.usdAmount
  entity.shares = event.params.shares

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecuted(event: ExecutedEvent): void {
  let executedId = event.transaction.hash.concatI32(event.logIndex.toI32())
  let entity = new Executed(executedId)
  entity.pot = event.params.pot
  entity.sender = event.params.sender
  entity.transactionType = event.params.transactionType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  if(event.receipt) {
    for(let i = 0; i < event.receipt!.logs.length; i++) {
      const receiptLog = event.receipt!.logs[i];
      let log = new ExecutedLog(
        event.transaction.hash.toHexString() + "-" + i.toString(),
      )

      log.address = receiptLog.address
      log.data = receiptLog.data
      log.topics = receiptLog.topics
      log.logIndex = receiptLog.logIndex

      log.blockNumber = event.block.number
      log.blockTimestamp = event.block.timestamp
      log.transactionHash = event.transaction.hash

      log.save()
    }
  }
}

export function handleFundraisingClosed(event: FundraisingClosedEvent): void {
  let entity = new FundraisingClosed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.totalSupply = event.params.totalSupply
  entity.totalRaisedInUsd = event.params.totalRaisedInUsd
  entity.fundraisingDeadline = event.params.fundraisingDeadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  const withdrawnId = event.transaction.hash.concatI32(event.logIndex.toI32())

  let entity = new Withdrawn(withdrawnId)
  entity.pot = event.params.pot
  entity.sharePrice = event.params.sharePrice
  entity.investor = event.params.investor
  entity.shareAmount = event.params.shareAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  for(let i = 0; i < event.params.withdrawnAssets.length; i++) {
    let withdrawnAssetEvent = event.params.withdrawnAssets[i];

    let withdrawnAsset = new WithdrawnAsset(event.transaction.hash.toHexString() + "-" + i.toString());
    withdrawnAsset.withdrawn = withdrawnId;
    withdrawnAsset.asset = withdrawnAssetEvent.asset;
    withdrawnAsset.amountOut = withdrawnAssetEvent.amountOut;
    withdrawnAsset.protocolExitFee = withdrawnAssetEvent.protocolExitFee;
    withdrawnAsset.managerExitFee = withdrawnAssetEvent.managerExitFee;
    withdrawnAsset.performanceFee = withdrawnAssetEvent.performanceFee;

    withdrawnAsset.blockNumber = event.block.number
    withdrawnAsset.blockTimestamp = event.block.timestamp
    withdrawnAsset.transactionHash = event.transaction.hash

    withdrawnAsset.save();
  }
}
