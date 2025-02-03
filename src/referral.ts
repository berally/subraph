import {
  Registered as RegisteredEvent,
} from "../generated/Referral/Referral"
import {
  Registered
} from "../generated/schema"

export function handleRegistered(
  event: RegisteredEvent
): void {
  let entity = new Registered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.referrer = event.params.referrer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}