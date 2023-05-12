import React from 'react'
import styled from 'styled-components'
import { Title, BaseButton, Strong } from '../styles/s-components'
import MapContainer from '../components/MapContainer'

const WeddingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
`
const Calendar = styled.img`
  width: 60%;
  height: auto;
  margin-bottom: 50px;
`

const WeddingInfo = () => {
  const Lat = 35.11256707412654
  const Lng = 126.84855151562665

  return (
    <WeddingWrapper className="wedding_info">
      <Title>W e d d i n g</Title>
      <Calendar src="/assets/date.png" alt="date" className="date" />
      <p>2023년 10월 14일 오후 12시</p>
      <p>광주 서구 회재유통길 24 (매월동 475-6)</p>
      <Strong>카페 아리아</Strong>
      <p>주차 안내</p>
      <p>오시는 길</p>
      <MapContainer />
      <BaseButton
        to={`https://map.kakao.com/link/to/카페아리아,${Lat},${Lng}`}
        className="map"
      >
        지도 바로가기
      </BaseButton>
    </WeddingWrapper>
  )
}

export default WeddingInfo
