import React from 'react'
import styled from 'styled-components'
import { Title } from '../styles/s-components'
import Photo from '../components/Photo'

const GalleryWrapper = styled.div`
  width: 100%;
`
const PhotoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 10px;
`

const Gallery = () => {
  return (
    <GalleryWrapper className="gallery">
      <Title>G a l l e r y</Title>
      <PhotoContainer className="gallery">
        <Photo src={'assets/photobooth.png'} className="photo_1" />
        <Photo src={'assets/photobooth.png'} className="photo_2" />
        <Photo src={'assets/photobooth.png'} className="photo_3" />
        <Photo src={'assets/photobooth.png'} className="photo_4" />
        <Photo src={'assets/photobooth.png'} className="photo_5" />
        <Photo src={'assets/photobooth.png'} className="photo_6" />
        <Photo src={'assets/photobooth.png'} className="photo_7" />
        <Photo src={'assets/photobooth.png'} className="photo_8" />
        <Photo src={'assets/photobooth.png'} className="photo_9" />
        <Photo src={'assets/photobooth.png'} className="photo_10" />
        <Photo src={'assets/photobooth.png'} className="photo_11" />
        <Photo src={'assets/photobooth.png'} className="photo_12" />
        <Photo src={'assets/photobooth.png'} className="photo_13" />
        <Photo src={'assets/photobooth.png'} className="photo_14" />
        <Photo src={'assets/example.png'} className="photo_15" />
      </PhotoContainer>
    </GalleryWrapper>
  )
}

export default Gallery
