import { useState } from 'react'
import BigNumber from 'bignumber.js'
import TradeMiningABI from 'constants/abis/trade-mining.json'
import muticall from 'utils/muticall'
import { TRADE_MINING_ADDRESS } from 'constants/index'


export default function useTradeMining (account) {
    const [reward, setReward] = useState('')
    const fetchReward = async () => {
        try {
            const callss = [
                {
                   address: TRADE_MINING_ADDRESS,
                   name: 'poolLength' 
                }
                // {
                //    address: TRADE_MINING_ADDRESS,
                //    name: 'startBlock' 
                // }
            ]
            const [poolLength] = await muticall(TradeMiningABI, callss)
            const pools = Number(poolLength.toString())
            let rewardCount = new BigNumber(0);
            if (pools > 0) {
                const calles = new Array(pools)
                for (let i = 0; i < pools; i++) {
                    calles[i] = {
                        address: TRADE_MINING_ADDRESS,
                        name: 'getUserReward',
                        params: [i, account]
                    }
                }
                const rewards = await muticall(TradeMiningABI, calles)
                rewards.forEach(d => {
                    rewardCount = rewardCount.plus(new BigNumber(d[0].toString()).div(new BigNumber(10).pow(18)))
                });
            }
            setReward(rewardCount.toFormat(4))
            return rewardCount
        } catch (error) {
            return undefined
        }
    }
    fetchReward()
    return { reward, fetchReward }
}
