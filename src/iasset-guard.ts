import {
  ERC20Approval as ERC20ApprovalEvent,
  WrapNativeToken as WrapNativeTokenEvent,
  UnwrapNativeToken as UnwrapNativeTokenEvent
} from "../generated/templates/IAssetGuard/IAssetGuard"
import { ERC20Approval, WrapNativeToken, UnwrapNativeToken } from "../generated/schema"

export function handleERC20Approval(event: ERC20ApprovalEvent): void {
  let entity = new ERC20Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.token = event.params.token
  entity.spender = event.params.spender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWrapNativeToken(event: WrapNativeTokenEvent): void {
  let entity = new WrapNativeToken(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnwrapNativeToken(event: UnwrapNativeTokenEvent): void {
  let entity = new UnwrapNativeToken(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.pot = event.params.pot
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
