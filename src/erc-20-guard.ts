import {
  Approve as ApproveEvent
} from "../generated/ERC20Guard/ERC20Guard"
import { Approve } from "../generated/schema"

export function handleApprove(event: ApproveEvent): void {
  let entity = new Approve(
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
