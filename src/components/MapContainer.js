import React, { useEffect } from 'react'
import styled from 'styled-components'

const { kakao } = window

const Wrapper = styled.div`
  width: calc(100vw - 30px);
  height: 250px;
  margin: 20px 0;
`
export const MapContainer = () => {
  const Lat = 33.450701
  const Lng = 126.570667
  useEffect(() => {
    const container = document.getElementById('map')

    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    const markerPosition = new kakao.maps.LatLng(Lat, Lng)

    const imageSrc = '/assets/wedding.png'
    const imageSize = new kakao.maps.Size(66, 66)
    const imageOption = { offset: new kakao.maps.Point(33, 70) }

    const markerImg = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    )

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImg,
    })
    marker.setMap(map)
  }, [])
  return <Wrapper id="map"></Wrapper>
}
