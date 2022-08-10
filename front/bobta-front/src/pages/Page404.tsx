import styled from "styled-components"
import { Link } from "react-router-dom"
import { RootContainer, RoundButtonOutlined } from "../styles"
export const Page404 = () => {
  return (
    <Container>
      <H2>앗, 이 페이지는 없어요</H2>
      <A to="/index">
        <GoMainButton>메인으로 이동</GoMainButton>
      </A>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: "center";
  height: 100%;
`

const H2 = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: "Pretendard-Bold", sans-serif;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 36px;
`
const A = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`
const GoMainButton = styled(RoundButtonOutlined)`
  width: 80%;
`
