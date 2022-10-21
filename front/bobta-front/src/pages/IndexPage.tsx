import {useState, useCallback} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'

import {RootContainer} from '../styles'
import {LogoStatic, ButtonSolid, ButtonOutlined, HelpModal, VisitorBubble} from '../components'
import LogoSrc from '../static/images/logo.png'
import {getVisitors, queryKeys} from '../api'

export const IndexPage = () => {
  const [helpModalOpen, setHelpModalOpen] = useState<boolean>(false)
  const [visitors, setVisitors] = useState<number>(0)
  const onClickHelper = useCallback(() => {
    setHelpModalOpen(helpModalOpen => !helpModalOpen)
  }, [])

  useQuery([queryKeys.visitors], getVisitors, {
    onSuccess(data) {
      setVisitors(data.totalsForAllResults['ga:users'])
    },
  })

  return (
    <Container>
      <VisitorBubble userNum={visitors} />
      <LogoImage src={LogoSrc} />
      <HelpModal helpModalOpen={helpModalOpen} setHelpModalOpen={setHelpModalOpen} />
      <TitleContainer>
        <H3>우리들의 밥약 타임</H3>
        <LogoStatic />
      </TitleContainer>
      <ButtonsContainer>
        <RoundButtonLink to="/create">
          <ButtonSolid label="밥타 시작하기" width="90%" />
        </RoundButtonLink>
        <ButtonOutlined label="도움말" width="90%" onClick={onClickHelper} />
      </ButtonsContainer>
    </Container>
  )
}

const ButtonsContainer = styled.div`
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const Container = styled(RootContainer)`
  justify-content: center;
  align-items: center;
`

const LogoImage = styled.img`
  height: 30vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
  width: 100%;
`
const RoundButtonLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  text-align: center;
`
const H3 = styled.h3`
  font-family: 'Pretendard-SemiBold', sans-serif;
  font-size: 20px;
  line-height: 32px;
  margin-block-start: 0;
  color: ${({theme}) => theme.colors.gray800};
  margin-block-end: 0;
  width: 100%;
  text-align: center;
`
