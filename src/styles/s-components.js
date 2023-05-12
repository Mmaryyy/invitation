import styled from 'styled-components'
import './variable.css'
import { Link } from 'react-router-dom'

// Layout
export const OuterWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`

export const InnerWrapper = styled.main`
  position: absolute;
  width: 100%;
  max-width: 768px;
  top: calc(100% + 100vh);
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`
export const Text = styled.p`
  text-align: center;
`
export const Title = styled.p`
  text-align: center;
  font-size: var(--fz-big);
  font-weight: var(--fw-bold);
  margin: 100px 0;
  color: var(--green_300);
`

export const Strong = styled.span`
  font-size: var(--fz-lg);
`

export const LogoWrapper = styled.img`
  width: 70%;
`

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`

export const GiftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BaseButton = styled(Link)`
  width: 100%;
  height: 40px;
  background: var(--brown_100);
  color: white;
  font-weight: var(--fw-bold);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.25em rgba(67, 71, 85, 0.27),
    2px 0.25em 24px 0 rgba(90, 125, 188, 0.05);
  &:visited {
    color: white;
  }
`
