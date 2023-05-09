/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Title, BaseButton } from '../styles/s-components'
import MapContainer from '../components/MapContainer'

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 3px dotted var(--green_200);
`

const Calendar = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`

const WeddingInfo = () => {
  const Lat = 35.11256707412654
  const Lng = 126.84855151562665

  const onClickMapBtn = () => {}
  return (
    <InfoWrapper className="info">
      <Title>W e d d i n g</Title>
      <Calendar src="/assets/date.png" alt="date" className="date" />
      <p>2023년 10월 14일 오후 12시</p>
      <p>광주 서구 회재유통길 24 (매월동 475-6)</p>
      <MapContainer />
      <BaseButton
        to={`https://map.kakao.com/link/to/카페아리아,${Lat},${Lng}`}
        className="map"
      >
        지도 바로가기
      </BaseButton>
      <p>식장 정보</p>
      <p>주차 안내</p>
      <p>오시는 길</p>
    </InfoWrapper>
  )
}

export default WeddingInfo
