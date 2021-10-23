import React, { useContext } from 'react'
import { Menu as UikitMenu } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
// import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
// import useGetPriceData from 'hooks/useGetPriceData'
// import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useBabyPrice from 'hooks/useBabyPrice'
import useAuth from 'hooks/useAuth'
import config from './config'

import { languageList } from '../../config/localization/languages'
import { useTranslation } from '../../contexts/Localization'



const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  // const priceData = useGetPriceData()
  // const cakePriceUsd = priceData ? Number(priceData.prices.Cake) : undefined
  const babyPrice = useBabyPrice()
  // console.log("babyPrice", babyPrice)
  // const babyPrice = 0.10
  // const profile = useGetLocalProfile()

  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <UikitMenu
      links={config(t)}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      // currentLang={selectedLanguage?.code || ''}
      // langs={[]}
      // setLang={setSelectedLanguage}

      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}

      cakePriceUsd={babyPrice}
      // profile={profile}
      {...props}
    />
  )
}

export default Menu
