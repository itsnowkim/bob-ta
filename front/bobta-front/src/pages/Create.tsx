import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { RootContainer } from "../styles"
import * as colors from "../styles/colors"
import { LogoLinked, LogoStatic } from "../components"

export const Create = () => {
  const [name, setName] = useState<string>("")

  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])
  return (
    <RootContainer>
      <A to="/index">
        <LogoStatic />
      </A>
      <NameWrapper>
        <Label>내 이름</Label>
        <NameInput
          placeholder="이름을 입력해 주세요"
          value={name}
          onChange={onNameChange}
        />
      </NameWrapper>
      <TimeTableWrapper>
        <Label>내 시간표</Label>
      </TimeTableWrapper>
    </RootContainer>
  )
}

const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const A = styled(Link)`
  text-decoration: none;
  margin-bottom: 24px;
`
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`
const Label = styled.label`
  font-family: "Pretendard-Bold", sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
`
const NameInput = styled.input`
  height: 24px;
  padding: 14px;
  outline: none;
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray300};
  font-family: "Pretendard-Medium", sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.gray800};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.gray300};
  }

  :focus {
    border-color: ${colors.primary};
    border-width: 1px;
  }
`
