import {
  AssetGuardSet as AssetGuardSetEvent,
  ContractGuardSet as ContractGuardSetEvent
} from "../generated/Governance/Governance"
import {
  AssetGuardSet,
  ContractGuardSet
} from "../generated/schema"

export function handleAssetGuardSet(event: AssetGuardSetEvent): void {
  let entity = new AssetGuardSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assetType = event.params.assetType
  entity.guardAddress = event.params.guardAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractGuardSet(event: ContractGuardSetEvent): void {
  let entity = new ContractGuardSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.externalContract = event.params.externalContract
  entity.guardAddress = event.params.guardAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}