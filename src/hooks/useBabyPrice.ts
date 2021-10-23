import { useState } from 'react'
import BigNumber from 'bignumber.js'
import { BABY_USDT_ADDRESS } from '../constants'
import { useUsdtContract, useBabyContract } from './useContract'

export default function useBabyPrice () {
    const [price, setPrice] = useState(0)
    const babyContract = useBabyContract()
    const usdtContract = useUsdtContract()
    const lpAddress = BABY_USDT_ADDRESS
    const lp = async () => {
        const tokenBalanceLP = await babyContract?.balanceOf(lpAddress)
        const quoteTokenBalanceLP = await usdtContract?.balanceOf(lpAddress)
        
        const tokenAmountLp = new BigNumber(tokenBalanceLP?.toString())
        const quoteTokenAmountLp = new BigNumber(quoteTokenBalanceLP?.toString())
        const tokenPriceVsQuote = quoteTokenAmountLp.div(tokenAmountLp)
        setPrice(tokenPriceVsQuote.toNumber())
    }
    lp()
    return price
}
