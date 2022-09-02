import styled from 'styled-components'
import {Link} from 'react-router-dom'

import * as palette from './colors'

export const light = {
  colors: {
    gray50: palette.gray50,
    gray100: palette.gray100,
    gray200: palette.gray200,
    gray300: palette.gray300,
    gray400: palette.gray400,
    gray500: palette.gray500,
    gray600: palette.gray600,
    gray700: palette.gray700,
    gray800: palette.gray800,
    primary: palette.primary,
    secondary: palette.secondary,
    primary50: palette.primary50,
  },
  buttons: {
    default: {
      bgColor: 'transparent',
      borderColor: palette.primary,
      fontColor: palette.primary,
    },
    hovered: {
      bgColor: palette.primary,
      borderColor: palette.primary,
      fontColor: palette.white,
    },
  },
  buttonsDisabled: {
    default: {
      bgColor: palette.gray300,
      borderColor: palette.gray300,
      // fontColor: palette.gray300,
      fontColor: palette.white,
    },
    hovered: {
      bgColor: palette.gray300,
      borderColor: palette.gray300,
      fontColor: palette.white,
    },
  },
  rankingButton: {
    enabled: {
      bgColor: palette.primary50,
      fontColor: palette.primary,
    },
    disabled: {
      bgColor: '#EEEEEF',
      fontColor: palette.gray400,
    },
  },
  buttonBgColor: 'transparent',
  buttonFontColor: palette.primary,
  disabledButtonBgColor: 'transparent',
  disabledButtonFontColor: palette.gray300,
  inputBgColor: 'transparent',
}

export const dark = {
  colors: {
    gray50: palette.darkgray50,
    gray100: palette.darkgray100,
    gray200: palette.darkgray200,
    gray300: palette.darkgray300,
    gray400: palette.darkgray400,
    gray500: palette.darkgray500,
    gray600: palette.darkgray600,
    gray700: palette.darkgray700,
    gray800: palette.darkgray800,
    primary: palette.darkprimary,
    secondary: palette.darksecondary,
    primary50: palette.darkprimary50,
  },
  buttons: {
    default: {
      bgColor: palette.darkprimary,
      borderColor: palette.darkprimary,
      fontColor: palette.white,
      // bgColor: 'transparent', p
      // borderColor: palette.darkprimary,
      // fontColor: palette.darkprimary,
    },
    hovered: {
      bgColor: palette.darkprimary,
      borderColor: palette.darkprimary,
      fontColor: palette.white,
    },
  },
  buttonsDisabled: {
    default: {
      // bgColor: 'transparent',
      bgColor: palette.darkgray100,
      //bgColor: '#2D2D2E',
      borderColor: palette.darkgray300,
      // fontColor: palette.darkgray300,
      fontColor: palette.darkgray500,
    },
    hovered: {
      bgColor: palette.darkgray300,
      borderColor: palette.darkgray300,
      fontColor: palette.white,
    },
  },
  rankingButton: {
    enabled: {
      bgColor: palette.darkprimary,
      fontColor: palette.darkprimary50,
    },
    disabled: {
      bgColor: palette.darkgray300,
      fontColor: palette.darkgray700,
    },
  },
  buttonBgColor: palette.primary,
  buttonFontColor: palette.white,
  disabledButtonBgcolor: 'transparent',
  disabledButtonFontColor: palette.darkgray800,
  inputBgColor: palette.darkgray100,
}

export const RootContainer = styled.div`
  @media only screen and (max-width: 500px) {
    width: calc(100vw-40px);
  }
  max-width: 500px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 20px 0 20px;
  margin: auto;
`

export const RoundButtonSolid = styled.button`
  background-color: ${palette.primary};
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
  //background-color: ${palette.white};
  background-color: transparent;

  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 24px;
  border-color: ${palette.primary};
  border-width: 1px;
  border-style: solid;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${palette.primary};
  text-align: center;
  cursor: pointer;

  transition: all 0.2s linear;

  /* &:hover {
    background-color: ${palette.primary};
    color: white;
  } */
`
export const RoundButtonDisabled = styled.button`
  /* background-color: ${palette.white}; */
  background-color: transparent;

  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 24px;
  border-color: ${palette.gray300};
  border-width: 1px;
  border-style: solid;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${palette.gray300};
  text-align: center;
  cursor: pointer;

  transition: all 0.2s linear;
  /* 
  &:hover {
    background-color: ${palette.gray300};
    color: white;
  } */
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
  background-color: ${palette.gray200};
`
