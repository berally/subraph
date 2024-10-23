import {
  ExchangeFrom as ExchangeFromEvent,
  ExchangeTo as ExchangeToEvent
} from "../generated/MemeSwapGuard/MemeSwapGuard"
import { ExchangeFrom, ExchangeTo } from "../generated/schema"

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
