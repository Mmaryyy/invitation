import React, { useEffect } from 'react'
import './styles/variable.css'
import { GlobalStyle } from './styles/GlobalStyles'
import {
  OuterWrapper,
  InnerWrapper,
  LogoWrapper,
  GiftContainer,
} from './styles/s-components'
import LandingImg from './pages/LandingImg'
import InvitationContent from './pages/InvitationContent'
import Family from './pages/Family'
import Gallery from './pages/Gallery'
import WeddingInfo from './pages/WeddingInfo'
import Contact from './pages/Contact'
function App() {
  const vh = window.innerHeight * 0.01
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])
  return (
    <OuterWrapper className="App">
      <GlobalStyle />
      <LandingImg />
      <InnerWrapper className="inner">
        <LogoWrapper src="assets/logo.png" alt="결혼합니다" />
        <InvitationContent />
        <Family />
        <Gallery />
        <WeddingInfo />
        <Contact />
        <GiftContainer className="gift">
          <button className="kakaopay">축의금 송금하기</button>
          <button className="groom_modal">신랑측 계좌번호</button>
          <button className="bride_modal">신부측 계좌번호</button>
        </GiftContainer>
        <div className="board">
          <p>축하 인사를 남겨주세요</p>
          <div>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" />
          </div>
          <div>
            <label htmlFor="message">편지</label>
            <input type="textarea" id="message" />
          </div>
          <button type="submit">편지 남기기</button>
          <div className="letter_box"></div>
          <button className="more">더보기</button>
          <button className="all">전체보기</button>
        </div>
        <div className="share_wrapper">
          <button>kakao</button>
          <button>link</button>
        </div>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default App
