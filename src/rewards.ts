import {
  Created as CreatedEvent,
  Updated as UpdatedEvent,
  Claimed as ClaimedEvent,
  RewardsDistributed as RewardsDistributedEvent
} from "../generated/Rewards/Rewards"
import {
  Created,
  Updated,
  Claimed,
  RewardsDistributed
} from "../generated/schema"

export function handleCreated(event: CreatedEvent): void {
  let entity = new Created(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.year = event.params.year
  entity.month = event.params.month
  entity.releaseAt = event.params.releaseAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdated(event: UpdatedEvent): void {
  let entity = new Updated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.year = event.params.year
  entity.month = event.params.month
  entity.releaseAt = event.params.releaseAt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsDistributed(event: RewardsDistributedEvent): void {
  let entity = new RewardsDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.year = event.params.year
  entity.month = event.params.month
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClaimed(event: ClaimedEvent): void {
  let entity = new Claimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.year = event.params.year
  entity.month = event.params.month
  entity.user = event.params.user
  entity.percent = event.params.percent
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
