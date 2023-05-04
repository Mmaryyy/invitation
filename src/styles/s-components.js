import styled from 'styled-components'
import './variable.css'

//Layout
export const OuterWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const LadingImg = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
`

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const InvitationWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
`

export const FamilyWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
  border-top: 3px dotted var(--green_200);
  border-bottom: 3px dotted var(--green_200);
`

export const LogoWrapper = styled.img`
  width: 70%;
  margin-bottom: 50px;
`

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`

export const PhotoContainer = styled.div`
  width: 100%;
  /* margin-bottom: 30px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  /* grid-auto-rows: 100%; */
  padding-bottom: 30px;
  border-bottom: 3px dotted var(--green_200);
`

export const GiftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
