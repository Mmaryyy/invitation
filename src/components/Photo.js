import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  ::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`

const Img = styled.img`
  position: absolute;
  width: 100%;
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
