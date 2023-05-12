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
    </GalleryWrapper>
  )
}

export default Gallery
