import {
  ERC20Approval as ERC20ApprovalEvent
} from "../generated/templates/IAssetGuard/IAssetGuard"
import { ERC20Approval } from "../generated/schema"

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
