import styled from "styled-components"
import * as colors from "../styles/colors"

export const LogoStatic = () => {
  return (
    <H1>
      <Gray800>밥</Gray800>
      <Primary>-</Primary>
      <Gray800>타</Gray800>
    </H1>
  )
}

const Gray800 = styled.span`
  color: ${colors.gray800};
`
const Primary = styled.span`
  color: ${colors.primary};
`

const H1 = styled.h1`
  font-family: "GmarketSans", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  margin-block-start: 0;
  margin-block-end: 0;
`
