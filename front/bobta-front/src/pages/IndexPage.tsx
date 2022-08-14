import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { RootContainer, RoundButtonOutlined } from "../styles"
import { LogoStatic } from "../components"

export const IndexPage = () => {
  return (
    <Container>
      <TitleContainer>
        <H3>우리들의 밥약 타임</H3>
        <LogoStatic />
      </TitleContainer>
      <RoundButtonLink to="/create">
        <RoundButtonOutlined>밥타 시작하기</RoundButtonOutlined>
      </RoundButtonLink>
    </Container>
  )
}

const Container = styled(RootContainer)`
  justify-content: center;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`
const RoundButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
const H3 = styled.h3`
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 20px;
  line-height: 32px;
  margin-block-start: 0;

  margin-block-end: 0;
`
