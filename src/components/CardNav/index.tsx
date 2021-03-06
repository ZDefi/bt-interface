import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  // const TranslateString = useI18n()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {t('Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {t('Liquidity')}
        </ButtonMenuItem>
        {/* <ButtonMenuItem
          id="pool-nav-link"
          as="a"
          href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
          target="_blank"
          rel="noreferrer noopener"
        >
          Bridge
        </ButtonMenuItem> */}
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
