import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
`
const InfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LandingImg = () => {
  return (
    <div className="landing_container">
      <ImgWrapper src="assets/example.png" alt="landing_page" />
      <InfoWrapper>
        <p>배재성 그리고 이혜인</p>
        <p>2023년 10월 14일</p>
        <p>12시</p>
        <p>결혼식 장소</p>
      </InfoWrapper>
    </div>
  )
}

export default LandingImg
