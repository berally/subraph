import { BigInt } from "@graphprotocol/graph-ts"
import {
  Staked as StakedEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/Staking/IStaking"
import {
  Staked,
  Withdrawn,
  Staker
} from "../generated/schema"

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let staker = Staker.load(event.params.staker.toHexString())
  if (staker == null) {
    staker = new Staker(event.params.staker.toHexString())
    staker.amount = event.params.amount
    staker.address = event.params.staker
  }
  else {
    staker.amount = staker.amount.plus(event.params.amount)
  }

  staker.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.staker = event.params.staker
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let staker = Staker.load(event.params.staker.toHexString())
  if (staker == null) {
    staker = new Staker(event.params.staker.toHexString())
    staker.amount = new BigInt(0)
    staker.address = event.params.staker
  }
  else {
    if(staker.amount.lt(event.params.amount)){
      staker.amount = new BigInt(0)
    }
    else {
      staker.amount = staker.amount.minus(event.params.amount)
    }
  }

  staker.save()
}

