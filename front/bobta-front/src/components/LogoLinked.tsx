import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {LogoStatic} from './LogoStatic'

export const LogoLinked = () => {
  return (
    <A to="/index">
      <LogoStatic />
    </A>
  )
}

const A = styled(Link)`
  text-decoration: none;
  margin-bottom: 24px;
  margin-top: 20px;
  width: fit-content;
`
