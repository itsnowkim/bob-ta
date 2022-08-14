import React, { useState, useCallback, useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { RootContainer, RoundButtonDisabled } from "../styles"
import * as colors from "../styles/colors"
import { LogoStatic } from "../components"

import AddIcon from "../static/images/Button/Add.png"
import RemoveIcon from "../static/images/Button/Remove.png"

export const Create = () => {
  // ******************** states ********************
  const [name, setName] = useState<string>("") // 이름
  const [image, setImage] = useState<any>(null) // 시간표
  const [imageUri, setImageUri] = useState<string>("")

  // ******************** utils ********************
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ******************** callbacks ********************
  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const onClickAddButton = useCallback(() => {
    fileInputRef.current?.click()
  }, [fileInputRef])

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return
      }
      setImage(e.target.files[0])
      setImageUri(URL.createObjectURL(e.target.files[0]))
    },
    []
  )

  const onClickRemoveButton = useCallback(() => {
    setImage(null)
    setImageUri("")
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
        {imageUri == "" ? (
          <TimeTableInputWrapper>
            <FileInput
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={onUploadImage}
            />
            <AddButtonWrapper onClick={onClickAddButton}>
              <AddButton src={AddIcon} />
              <AddButtonText>시간표 업로드</AddButtonText>
            </AddButtonWrapper>
          </TimeTableInputWrapper>
        ) : (
          <TimeTableImageWrapper>
            <RemoveButton type="button" onClick={onClickRemoveButton}>
              <RemoveButtonImage src={RemoveIcon} />
            </RemoveButton>

            <TimeTableImage src={imageUri} />
          </TimeTableImageWrapper>
        )}
      </TimeTableWrapper>
      <SubmitButton>결과 보기</SubmitButton>
    </RootContainer>
  )
}

const TimeTableImageWrapper = styled.div`
  position: relative;
`

const RemoveButtonImage = styled.img`
  width: 36px;
  height: 36px;
`

const RemoveButton = styled.button`
  position: absolute;
  right: -24px;
  top: -15px;
  background: none;
  border: none;
  cursor: pointer;
`

const TimeTableImage = styled.img`
  width: 100%;
  border-radius: 8px;
`

const AddButtonText = styled.span`
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray500};
`

const FileInput = styled.input`
  display: none;
`

const SubmitButton = styled(RoundButtonDisabled)`
  margin-top: auto;
  cursor: pointer;
`

const AddButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const AddButton = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
  cursor: pointer;
`
const TimeTableInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: center;
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${colors.gray300};
`

const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 24px;
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
