import {
    ExchangeFrom as ExchangeFromEvent,
    ExchangeTo as ExchangeToEvent,
    AddLiquidity as AddLiquidityEvent,
    RemoveLiquidity as RemoveLiquidityEvent,
    UnwrapWBERA as UnwrapWBERAEvent,
    BerpCancelOpenLimitOrder as BerpCancelOpenLimitOrderEvent,
    BerpCloseTradeMarket as BerpCloseTradeMarketEvent,
    BerpExecuteLimitOrder as BerpExecuteLimitOrderEvent,
    BerpOpenTrade as BerpOpenTradeEvent,
    BerpUpdateOpenLimitOrder as BerpUpdateOpenLimitOrderEvent,
    BerpUpdateStopLoss as BerpUpdateStopLossEvent,
    BerpUpdateTakeProfit as BerpUpdateTakeProfitEvent,
    BeradromeBorrow as BeradromeBorrowEvent,
    BeradromeEarnDeposit as BeradromeEarnDepositEvent,
    BeradromeEarnWithdraw as BeradromeEarnWithdrawEvent,
    BeradromeExercise as BeradromeExerciseEvent,
    BeradromeGetReward as BeradromeGetRewardEvent,
    BeradromeRedeem as BeradromeRedeemEvent,
    BeradromeRepay as BeradromeRepayEvent,
} from "../generated/templates/IPlatformGuard/IPlatformGuard"
  import {
    ExchangeFrom, ExchangeTo, AddLiquidity, RemoveLiquidity, UnwrapWBERA,
    BerpCancelOpenLimitOrder,
    BerpCloseTradeMarket,
    BerpExecuteLimitOrder,
    BerpOpenTrade,
    BerpUpdateOpenLimitOrder,
    BerpUpdateStopLoss,
    BerpUpdateTakeProfit,
    BeradromeBorrow,
    BeradromeEarnDeposit,
    BeradromeEarnWithdraw,
    BeradromeExercise,
    BeradromeGetReward,
    BeradromeRedeem,
    BeradromeRepay
  } from "../generated/schema"

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

  export function handleBerpCancelOpenLimitOrder(
    event: BerpCancelOpenLimitOrderEvent
  ): void {
    let entity = new BerpCancelOpenLimitOrder(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.index = event.params.index

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBerpCloseTradeMarket(
    event: BerpCloseTradeMarketEvent
  ): void {
    let entity = new BerpCloseTradeMarket(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.index = event.params.index

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBerpExecuteLimitOrder(
    event: BerpExecuteLimitOrderEvent
  ): void {
    let entity = new BerpExecuteLimitOrder(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.index = event.params.index

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBerpOpenTrade(event: BerpOpenTradeEvent): void {
    let entity = new BerpOpenTrade(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.pairIndex = event.params.pairIndex
    entity.orderType = event.params.orderType
    entity.index = event.params.index
    entity.buy = event.params.buy
    entity.leverage = event.params.leverage
    entity.initialPosToken = event.params.initialPosToken
    entity.positionSizeHoney = event.params.positionSizeHoney
    entity.openPrice = event.params.openPrice

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBerpUpdateOpenLimitOrder(
    event: BerpUpdateOpenLimitOrderEvent
  ): void {
    let entity = new BerpUpdateOpenLimitOrder(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.index = event.params.index
    entity.newPrice = event.params.newPrice
    entity.takeProfit = event.params.takeProfit
    entity.stopLoss = event.params.stopLoss

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBerpUpdateStopLoss(event: BerpUpdateStopLossEvent): void {
    let entity = new BerpUpdateStopLoss(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.index = event.params.index
    entity.stopLoss = event.params.stopLoss

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBerpUpdateTakeProfit(
    event: BerpUpdateTakeProfitEvent
  ): void {
    let entity = new BerpUpdateTakeProfit(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.index = event.params.index
    entity.takeProfit = event.params.takeProfit

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeBorrow(event: BeradromeBorrowEvent): void {
    let entity = new BeradromeBorrow(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.amount = event.params.amount

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeEarnDeposit(
    event: BeradromeEarnDepositEvent
  ): void {
    let entity = new BeradromeEarnDeposit(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.amount = event.params.amount

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeEarnWithdraw(
    event: BeradromeEarnWithdrawEvent
  ): void {
    let entity = new BeradromeEarnWithdraw(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.amount = event.params.amount

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeExercise(event: BeradromeExerciseEvent): void {
    let entity = new BeradromeExercise(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.amount = event.params.amount

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeGetReward(event: BeradromeGetRewardEvent): void {
    let entity = new BeradromeGetReward(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeRedeem(event: BeradromeRedeemEvent): void {
    let entity = new BeradromeRedeem(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.amount = event.params.amount

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }

  export function handleBeradromeRepay(event: BeradromeRepayEvent): void {
    let entity = new BeradromeRepay(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    )
    entity.pot = event.params.pot
    entity.dex = event.params.dex
    entity.loanId = event.params.loanId

    entity.blockNumber = event.block.number
    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash

    entity.save()
  }