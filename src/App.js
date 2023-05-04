/* eslint-disable */
import React from 'react'
import './styles/variable.css'
import { GlobalStyle } from './styles/GlobalStyles'
import {
  OuterWrapper,
  InnerWrapper,
  ContentContainer,
  InfoWrapper,
  FamilyWrapper,
  PhotoContainer,
  LadingImg,
  Text,
  Title,
  Icon,
  Strong,
  InvitationWrapper,
  LogoWrapper,
  GiftContainer,
} from './styles/s-components'
import Photo from './components/Photo'
import { MapContainer } from './components/MapContainer'

function App() {
  return (
    <OuterWrapper className="App">
      <GlobalStyle />
      <LadingImg src="assets/example.png" alt="landing_page" />
      <InfoWrapper className="wedding_info">
        <p>배재성 그리고 이혜인</p>
        <p>23년 10월 14일</p>
        <p>12시</p>
        <p>결혼식 장소</p>
      </InfoWrapper>
      <InnerWrapper className="inner">
        <LogoWrapper src="assets/logo.png" alt="결혼합니다" />
        <ContentContainer className="invitation">
          <InvitationWrapper>
            <Text>저희 이케저케 해가지고</Text>
            <Text>결혼하게 됐습니다.</Text>
            <Text>저희가 조촐하게 준비한 파티를</Text>
            <Text>끝장나게 즐겨주세요.</Text>
          </InvitationWrapper>
          <FamilyWrapper>
            <Text>
              사돈어른의 첫째 아들 <Strong>재성</Strong>
            </Text>
            <Text>
              춘홍 & 순덕의 둘째 딸 <Strong>혜인</Strong>
            </Text>
            <Text>
              그리고 못말리는 겁쟁이 고양이 <Strong>마고 </Strong>
              <Icon src="assets/cat.png" alt="고양이" />
            </Text>
          </FamilyWrapper>
        </ContentContainer>
        <Title>G a l l e r y</Title>
        <PhotoContainer className="gallery">
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/photobooth.png'} />
          <Photo src={'assets/example.png'} />
        </PhotoContainer>
        <div className="info">
          <Title>W e d d i n g H a l l</Title>
          <div className="calendar">달력</div>
          <p>결혼식 일시</p>
          <MapContainer />
          <div className="map">카카오맵</div>
          <button className="map">지도 바로가기</button>
          <p>식장 정보</p>
          <p>주차 안내</p>
          <p>오시는 길</p>
        </div>
        <div className="contact">
          <div className="groom">
            <p>재성에게 연락하기</p>
          </div>
          <div className="bride">
            <p>혜인에게 연락하기</p>
          </div>
        </div>
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
