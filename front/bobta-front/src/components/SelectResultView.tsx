import React, {useContext, useCallback} from 'react'
import styled from 'styled-components'
import * as colors from '../styles/colors'
import {ThemeContext} from '../contexts'
import ShevronDownLight from '../static/icons/arrow-chevron-down_light.png'
import ShevronDownDark from '../static/icons/arrow-chevron-down_dark.png'

type SelectProps = {
  chevronUrl: string
  fontColor: string
}

type SelectResultViewProps = {
  setIsImageView: React.Dispatch<React.SetStateAction<boolean>>
}

export const SelectResultView = ({setIsImageView}: SelectResultViewProps) => {
  const {isDarkMode} = useContext(ThemeContext)

  const onChangeSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    value == 'image' ? setIsImageView(true) : setIsImageView(false)
  }, [])

  return (
    <Select
      chevronUrl={isDarkMode ? ShevronDownDark : ShevronDownLight}
      fontColor={isDarkMode ? colors.darkgray800 : colors.gray700}
      onChange={onChangeSelect}
      defaultValue="image">
      <option value="image">이미지로 보기</option>
      <option value="text">텍스트로 보기</option>
    </Select>
  )
}

const Select = styled.select<SelectProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: fit-content;
  float: right;
  border: none;
  padding: 4px 24px 4px 4px;
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  color: ${colors.gray700};
  //background-color: white;
  // background: #fff url('') no-repeat 98% center;
  background: ${props => `url(${props.chevronUrl}) no-repeat right/25%  transparent`};
  color: ${({fontColor}) => fontColor};
  &:focus {
    border: none;
    outline: none;
  }
`
