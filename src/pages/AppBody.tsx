import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 436px;
  width: 100%;
  z-index: 5;
  overflow: initial;
  border-radius: 16px;
  overflow: hidden;
  > div {
    /* background-color: #FFFFFF; */
    background-color: #2e2d3c;
  }
`
const SwapImage = styled.img`
  position: absolute;
  top: 12px;
  left: -58%;
  z-index: -1;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <BodyWrapper>
      {/* <SwapImage src="/images/swap-bg.svg" alt="Swap" /> */}
      {children}
    </BodyWrapper>
  )
}
