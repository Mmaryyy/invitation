import React from 'react'
import styled from 'styled-components'
import { PageWrapper, Title } from '../styles/s-components'
import Photo from '../components/Photo'

const PhotoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  grid-column-gap: 10px;
`

const Gallery = () => {
  return (
    <PageWrapper className="photo_container">
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
    </PageWrapper>
  )
}

export default Gallery
