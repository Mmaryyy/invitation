import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 113px;
`

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`

const Photo = ({ src, alt }) => {
  return (
    <Wrapper>
      <Img src={src} alt={alt} />
    </Wrapper>
  )
}

export default Photo
