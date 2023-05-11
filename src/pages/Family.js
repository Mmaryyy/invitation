import React from 'react'
import styled from 'styled-components'
import { Text, Strong, Icon } from '../styles/s-components'

const FamilyWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  background: var(--green_200);
  outline: 3px dashed var(--green_200);
  line-height: 2;
`
const Family = () => {
  return (
    <FamilyWrapper>
      <Text>
        사돈어른의 첫째 아들 <Strong>재성</Strong>
      </Text>
      <Text>
        춘홍 & 순덕의 둘째 딸 <Strong>혜인</Strong>
      </Text>
      <Text>
        그리고 못말리는 겁쟁이 고양이 <Strong>마고 </Strong>
        <Icon src="assets/cat.png" alt="고양이" />
      </Text>
    </FamilyWrapper>
  )
}

export default Family
