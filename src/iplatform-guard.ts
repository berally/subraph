import {
    ExchangeFrom as ExchangeFromEvent,
    ExchangeTo as ExchangeToEvent,
    AddLiquidity as AddLiquidityEvent,
    RemoveLiquidity as RemoveLiquidityEvent,
    UnwrapWBERA as UnwrapWBERAEvent
} from "../generated/templates/IPlatformGuard/IPlatformGuard"
  import { ExchangeFrom, ExchangeTo, AddLiquidity, RemoveLiquidity, UnwrapWBERA } from "../generated/schema"

 export function handleExchangeFrom(event: ExchangeFromEvent): void {
    let entity = new ExchangeFrom(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.sourceAsset = event.params.sourceAsset
    entity.sourceAmount = event.params.sourceAmount
    entity.dstAsset = event.params.dstAsset

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleExchangeTo(event: ExchangeToEvent): void {
    let entity = new ExchangeTo(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.sourceAsset = event.params.sourceAsset
    entity.dstAsset = event.params.dstAsset
    entity.dstAmount = event.params.dstAmount

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleAddLiquidity(event: AddLiquidityEvent): void {
    let entity = new AddLiquidity(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.asset = event.params.pair

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleRemoveLiquidity(event: RemoveLiquidityEvent): void {
    let entity = new RemoveLiquidity(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.asset = event.params.pair

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleUnwrapWBERA(event: UnwrapWBERAEvent): void {
    let entity = new UnwrapWBERA(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.amountMinimum = event.params.amountMinimum

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }