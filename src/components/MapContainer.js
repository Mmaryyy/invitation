import React, { useEffect } from 'react'
import styled from 'styled-components'
import './../styles/s-map.css'

const { kakao } = window

const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  margin: 20px 0;
`

const MapContainer = () => {
  const Lat = 35.11256707412654
  const Lng = 126.84855151562665

  useEffect(() => {
    const container = document.getElementById('map')

    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 5,
    }
    const map = new kakao.maps.Map(container, options)
    const position = new kakao.maps.LatLng(Lat, Lng)

    const imageSrc = '/assets/marker.png'
    const imageSize = new kakao.maps.Size(21, 28)
    const imageOption = { offset: new kakao.maps.Point(11, 14) }

    const markerImg = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    )

    const marker = new kakao.maps.Marker({
      position,
      image: markerImg,
    })

    const overlayPosition = new kakao.maps.LatLng(Lat, Lng + 0.0045)
    const content =
      '<div class="wrapper"><div class="text_container"><p class="title">카페 아리아</p><div class="address"><p class="main">광주 서구 회재유통길 24</p><p class="sub">매월동 475-6</p></div></div><div class="img_container"><img class="cat" src="/assets/cat.png"/><img class="wedding" src="/assets/wedding.png"/></div></div>'

    const customOverlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content,
    })
    marker.setMap(map)
    customOverlay.setMap(map)
    map.setDraggable(false)
    map.setZoomable(false)
  }, [])
  return <Wrapper id="map"></Wrapper>
}

export default MapContainer
