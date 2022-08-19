import styled from 'styled-components'
import {Link} from 'react-router-dom'

import * as colors from './colors'
export const RootContainer = styled.div`
  max-width: 500px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  margin: auto;
`

export const RoundButtonSolid = styled.button`
  background-color: ${colors.primary};
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 24px;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: white;
  text-align: center;
  cursor: pointer;
`
export const RoundButtonOutlined = styled.button`
  background-color: ${colors.white};
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 24px;
  border-color: ${colors.primary};
  border-width: 1px;
  border-style: solid;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.primary};
  text-align: center;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`
export const RoundButtonDisabled = styled.button`
  background-color: ${colors.white};
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 24px;
  border-color: ${colors.gray300};
  border-width: 1px;
  border-style: solid;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray300};
  text-align: center;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${colors.gray300};
    color: white;
  }
`

export const LogoStatic = styled.span`
  font-family: 'GmarketSans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Title = styled.h1`
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  line-height: 28px;
  margin-block-start: 0;
  margin-block-end: 0;
`
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray100};
`
