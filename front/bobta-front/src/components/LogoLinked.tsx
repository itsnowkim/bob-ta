import styled from "styled-components"
import { Link } from "react-router-dom"
import { LogoStatic } from "../styles"

export const LogoLinked = () => {
  return (
    <A to="/index">
      <LogoStatic />
    </A>
  )
}

const A = styled(Link)`
  text-decoration: none;
`
