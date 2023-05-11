import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Strong } from '../styles/s-components'
const Wrapper = styled.div`
  position: absolute;
`
const ImgWrapper = styled.img`
  width: 100%;
  height: 100vh;
  position: relative;
`
const InfoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LandingImg = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Wrapper className="landing_container">
      <ImgWrapper src="assets/example.png" alt="landing_page" />
      <InfoWrapper>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <Strong>배재성 그리고 이혜인</Strong>
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          2023년 10월 14일
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="1000"
          data-aos-easing="ease-in-out"
        >
          오후 12시
        </p>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="2000"
          data-aos-easing="ease-in-out"
        >
          광주 서구 회재유통길 24, <Strong>Cafe Aria</Strong>
        </p>
      </InfoWrapper>
    </Wrapper>
  )
}

export default LandingImg
