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
`

const Calendar = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`

const WeddingInfo = () => {
  return (
    <InfoWrapper className="info">
      <Title>W e d d i n g</Title>
      <Calendar src="/assets/date.png" alt="date" className="date" />
      <p>2023년 10월 14일 오후 12시</p>
      <p>광주광역시 광산구 산월동 OO 웨딩홀</p>
      <MapContainer />
      <BaseButton className="map">지도 바로가기</BaseButton>
      <p>식장 정보</p>
      <p>주차 안내</p>
      <p>오시는 길</p>
    </InfoWrapper>
  )
}

export default WeddingInfo
