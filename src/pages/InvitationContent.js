import React from 'react'
import styled from 'styled-components'
import { Text } from '../styles/s-components'

const InvitationWrapper = styled.div`
  width: 100%;
  line-height: 2;
`

const InvitationContent = () => {
  return (
    <InvitationWrapper>
      <Text>저희 이케저케 해가지고</Text>
      <Text>결혼하게 됐습니다.</Text>
      <Text>저희가 조촐하게 준비한 파티를</Text>
      <Text>끝장나게 즐겨주세요.</Text>
    </InvitationWrapper>
  )
}

export default InvitationContent
