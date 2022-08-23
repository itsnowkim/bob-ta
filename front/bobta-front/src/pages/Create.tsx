import React, {useState, useCallback, useRef, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import styled from 'styled-components'

import {RootContainer, RoundButtonDisabled, RoundButtonOutlined} from '../styles'
import * as colors from '../styles/colors'
import {LogoLinked, Footer, ButtonDisabled, ButtonSolid} from '../components'

import AddIcon from '../static/images/Button/Add.png'
import RemoveIcon from '../static/images/Button/Remove.png'

type LabelType = {
  name: string
  image: string
}

export const Create = () => {
  // ******************** utils ********************
  const navigate = useNavigate()
  const location = useLocation()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ******************** states ********************
  const [labels, setLabels] = useState<LabelType>({
    name: '',
    image: '',
  })
  const [name, setName] = useState<string>('') // 이름
  const [image, setImage] = useState<any>(null) // 시간표
  const [imageUri, setImageUri] = useState<string>('')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const target = params.get('target')

    if (target == 'me') {
      setLabels({
        name: '내 이름',
        image: '내 시간표',
      })
    } else {
      setLabels({
        name: '친구 이름',
        image: '친구 시간표',
      })
    }
  }, [])

  // ******************** callbacks ********************
  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const onClickAddButton = useCallback(() => {
    fileInputRef.current?.click()
  }, [fileInputRef])

  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }
    setImage(e.target.files[0])
    setImageUri(URL.createObjectURL(e.target.files[0]))
  }, [])

  const onClickRemoveButton = useCallback(() => {
    setImage(null)
    setImageUri('')
  }, [])

  const onClickSubmit = useCallback(() => {
    // 백에서 200 응답을 날릴 때 groupId도 같이 넣어줌
    const groupId = '11'
    navigate(`/result/${groupId}`)
  }, [name, image])

  // ******************** renderer ********************
  return (
    <RootContainer>
      <LogoLinked />
      <NameWrapper>
        <Label>{labels.name}</Label>
        <NameInput placeholder="이름을 입력해 주세요" value={name} onChange={onNameChange} />
      </NameWrapper>
      <TimeTableWrapper>
        <Label>{labels.image}</Label>
        {imageUri == '' ? (
          <TimeTableInputWrapper>
            <FileInput type="file" accept="image/*" ref={fileInputRef} onChange={onUploadImage} />
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

      {name != '' && imageUri != '' ? (
        <ButtonSolid onClick={onClickSubmit} label="결과 보기"></ButtonSolid>
      ) : (
        // <ButtonDisabled  lable="결과 보기" />
        // <SubmitButtonDisabled>결과 보기</SubmitButtonDisabled>
        <ButtonDisabled label="결과 보기" />
      )}
      <Footer />
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
  border: solid;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray300};
`

const AddButtonText = styled.span`
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 16px;
  line-height: 24px;

  color: ${({theme}) => theme.colors.gray500};
`

const FileInput = styled.input`
  display: none;
`

const SubmitButtonEnabled = styled(RoundButtonOutlined)`
  margin-top: auto;
  background-color: ${({theme}) => theme.buttonBgColor};
  color: ${({theme}) => theme.buttonFontColor};
`

const SubmitButtonDisabled = styled(RoundButtonDisabled)`
  margin-top: auto;
  background-color: ${({theme}) => theme.disabledButtonBgColor};
  color: ${({theme}) => theme.colors.gray300};
  border-color: ${({theme}) => theme.colors.gray300};
  &:hover {
    background-color: ${({theme}) => theme.colors.gray300};
    color: ${({theme}) => theme.colors.gray800};
  }
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
  /* border-color: ${colors.gray300}; */
  border-color: ${({theme}) => theme.colors.gray300};
  //background-color: 'transparent';
  background-color: ${({theme}) => theme.inputBgColor};
`

const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 24px;
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`
const Label = styled.label`
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${({theme}) => theme.colors.gray800};
`
const NameInput = styled.input`
  height: 24px;
  padding: 14px;
  outline: none;
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  /* border-color: ${colors.gray300}; */
  border-color: ${({theme}) => theme.colors.gray300};

  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray800};
  background-color: ${({theme}) => theme.inputBgColor};
  //background-color: transparent;

  ::placeholder,
  ::-webkit-input-placeholder {
    ${({theme}) => theme.colors.gray300};
  }

  :focus {
    border-color: ${colors.primary};
    border-width: 1px;
  }
`
