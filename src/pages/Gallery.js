import React from 'react'
import styled from 'styled-components'
import { Title } from '../styles/s-components'
import Photo from '../components/Photo'

const PhotoContainer = styled.div`
  width: 100%;
`
const PhotoWrapper = styled.div`
  width: 100%;
  /* margin-bottom: 30px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  /* grid-auto-rows: 100%; */
  padding-bottom: 30px;
  border-bottom: 3px dotted var(--green_200);
`

const Gallery = () => {
  return (
    <PhotoContainer className="photo_container">
      <Title>G a l l e r y</Title>
      <PhotoWrapper className="gallery">
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
      </PhotoWrapper>
    </PhotoContainer>
  )
}

export default Gallery
