import React, {useState, useCallback, useRef, useEffect, useContext} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {useMutation} from '@tanstack/react-query'

import {RootContainer} from '../styles'
import * as colors from '../styles/colors'
import {LogoLinked, Footer, ButtonDisabled, ButtonSolid} from '../components'
import {ThemeContext} from '../contexts'
import {useScrollToTop} from '../utils'

import AddIcon from '../static/images/Button/Add.png'
import RemoveIcon from '../static/images/Button/Remove.png'
import AddIconDark from '../static/icons/Button/AddDark.png'
import RemoveIconDark from '../static/icons/Button/RemoveDark.png'

import {queryKeys, addToMeet, createNewMeet} from '../api'

type LabelType = {
  name: string
  image: string
}

const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/

export const Create = () => {
  // ******************** utils ********************
  const navigate = useNavigate()
  const location = useLocation()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {isDarkMode} = useContext(ThemeContext)
  useScrollToTop()

  // ******************** react queries ********************
  const createNewMeetQuery = useMutation([queryKeys.image], createNewMeet, {
    onSuccess(data, variables, context) {
      const {output, unique_url, user_name} = data
      navigate(`/result/${unique_url}`)
    },
    onError(error, variables, context) {
      navigate('/error')
    },
  })

  const addToMeetQuery = useMutation([queryKeys.image], addToMeet, {
    onSuccess(data, variables, context) {
      navigate(`/result/${meetId}`)
    },
    onError(error, variables, context) {
      navigate('/error')
    },
  })

  // ******************** states ********************

  const [meetId, setMeetId] = useState<string>('') // 모임 Id
  const [name, setName] = useState<string>('') // 이름
  const [image, setImage] = useState<any>(null) // 시간표
  const [imageUri, setImageUri] = useState<string>('')

  useEffect(() => {
    // 모임 id가 있는지 없는지 판단
    const params = new URLSearchParams(location.search)
    const tempMeetId = params.get('meetId')
    tempMeetId != undefined && setMeetId(tempMeetId)
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
    // return if post api is ongoing
    if (createNewMeetQuery.isLoading) {
      return
    }

    // name validation
    if (regex.test(name) == false || name.length > 10) {
      alert('이름은 1자-10자 사이의 한글, 영어, 숫자만 가능합니다.')
      return
    }

    // create form data
    let formData = new FormData()
    formData.append('file', image)

    // if new meet
    if (meetId == '') {
      // trigger api
      createNewMeetQuery.mutate({
        username: name,
        formData,
      })
    } else {
      addToMeetQuery.mutate({
        username: name,
        formData,
        id: meetId,
      })
    }
  }, [name, image, createNewMeetQuery, meetId])

  // ******************** renderer ********************
  return (
    <>
      <RootContainer>
        <LogoLinked />
        <NameWrapper>
          <Label>이름</Label>
          <NameInput placeholder="이름을 입력해 주세요" value={name} onChange={onNameChange} />
        </NameWrapper>
        <TimeTableWrapper>
          <Label>시간표</Label>
          {imageUri == '' ? (
            <TimeTableInputWrapper>
              <FileInput type="file" accept="image/*" ref={fileInputRef} onChange={onUploadImage} />
              <AddButtonWrapper onClick={onClickAddButton}>
                <AddButton src={isDarkMode ? AddIconDark : AddIcon} />
                <AddButtonText>시간표 업로드</AddButtonText>
              </AddButtonWrapper>
            </TimeTableInputWrapper>
          ) : (
            <TimeTableImageWrapper>
              <RemoveButton type="button" onClick={onClickRemoveButton}>
                <RemoveButtonImage src={isDarkMode ? RemoveIconDark : RemoveIcon} />
              </RemoveButton>

              <TimeTableImage src={imageUri} />
            </TimeTableImageWrapper>
          )}
        </TimeTableWrapper>

        {name != '' && imageUri != '' ? (
          <ButtonSolid onClick={onClickSubmit} label="결과 보기" isLoading={createNewMeetQuery.isLoading}></ButtonSolid>
        ) : (
          <ButtonDisabled label="결과 보기" />
        )}
      </RootContainer>
      <Footer />
    </>
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
  border-color: ${({theme}) => theme.colors.gray300};

  font-family: 'Pretendard-Medium', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray800};
  background-color: ${({theme}) => theme.inputBgColor};

  ::placeholder,
  ::-webkit-input-placeholder {
    ${({theme}) => theme.colors.gray300};
  }

  :focus {
    border-color: ${colors.primary};
    border-width: 1px;
  }
`
