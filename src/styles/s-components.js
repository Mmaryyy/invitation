import styled from 'styled-components'
import './variable.css'

// Layout
export const OuterWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const InnerWrapper = styled.main`
  position: absolute;
  width: 100%;
  top: calc(100% + 100vh);
  padding: 50px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentContainer = styled.div`
  width: 100%;
`
export const Text = styled.p`
  text-align: center;
`
export const Title = styled.p`
  text-align: center;
  font-size: var(--fz-big);
  font-weight: var(--fw-bold);
  margin: 30px 0;
  color: var(--green_300);
`

export const Strong = styled.span`
  font-size: var(--fz-lg);
`

export const LogoWrapper = styled.img`
  width: 70%;
  margin-bottom: 50px;
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

export const BaseButton = styled.div`
  width: 100%;
  height: 40px;
  background: var(--brown_100);
  color: white;
  font-weight: var(--fw-bold);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
`
