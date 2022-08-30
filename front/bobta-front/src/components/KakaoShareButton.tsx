import React, {useCallback} from 'react'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import KakaoLogoIcon from '../static/images/KakaoLogo.png'

const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_KEY

type KakaoButtonProps = {
  label: string
  user_names: string[]
  meetId?: string
}

const MOBILE_WEB_URL = process.env.REACT_APP_KAKAO_MOBILE_WEB_URL
const WEB_URL = process.env.REACT_APP_KAKAO_WEB_URL

export const KakaoShareButton = ({label, meetId = '', user_names}: KakaoButtonProps) => {
  const onClickKakaoButton = useCallback(() => {
    //@ts-ignore
    if (!window.Kakao) {
      // 카카오 sdk가 로드되지 않은 경우
      return
    }
    //@ts-ignore

    const kakaoSdk = window.Kakao

    if (!kakaoSdk.isInitialized()) {
      kakaoSdk.init(KAKAO_APP_KEY)
    }

    kakaoSdk.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: user_names.map((username, idx) => username) + '님과 밥약해요!',
        description: '시간표를 추가해서 밥약 시간을 맞춰 보세요',
        imageUrl: '',
        link: {
          mobileWebUrl: `${MOBILE_WEB_URL}/${meetId}`,
          webUrl: `${WEB_URL}/${meetId}`,
        },
      },
    })
  }, [window])
  return (
    <KakaoButtonContainer onClick={onClickKakaoButton}>
      <KakaoLogo src={KakaoLogoIcon} />
      {label}
    </KakaoButtonContainer>
  )
}

const KakaoButtonContainer = styled.button`
  position: relative;
  background-color: ${colors.kakaoYellow};
  border: none;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray800};
  cursor: pointer;
  border-radius: 24px;
  font-family: 'Pretendard-Bold', sans-serif;
`
const KakaoLogo = styled.img`
  position: absolute;
  left: 24px;
  width: 24px;
  height: 24px;
`
