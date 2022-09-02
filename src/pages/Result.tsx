import {useState, useCallback} from 'react'
import styled from 'styled-components'
import {Link, useLocation, useParams, useNavigate} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'

import {LogoLinked, KakaoShareButton, TimeTableImage, TimeTableText, Footer, ButtonSolid, SelectResultView} from '../components'
import {RootContainer} from '../styles'
import {timeCalculator, useScrollToTop} from '../utils'
import {ResultType} from '../utils'
import {queryKeys, getMeet} from '../api'

type TitleProps = {
  isBest: boolean
}

type RankingButtonProps = {
  isSelected: boolean
}

type TitleWrapperProps = {
  marginBottom: string
}

const days = ['월', '화', '수', '목', '금']

export const Result = () => {
  // ********************* utils *********************
  const {meetId} = useParams()
  const navigate = useNavigate()

  // ********************* states *********************
  const [isError, setIsError] = useState<boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<number>(1) // 차선책일때 선택된 순위
  const [isImageView, setIsImageView] = useState<boolean>(true)
  const [result, setResult] = useState<ResultType>({
    meets: {},
    participants: [],
    absent: 0,
  })

  // ********************* react queries *********************
  useQuery([queryKeys.meet], () => getMeet(meetId!), {
    onSuccess(data) {
      // 존재하지 않는 meetId
      if (data.error && data.error == '해당하는 url이 존재하지 않습니다.') {
        alert('유효하지 않은 url입니다')
        navigate('/')
        return
      }

      for (var i = 0; i < 5; i++) {
        const times = data.meets[days[i]] // 해당 요일에서 가능한 시간을 꺼냄
        // 해당 요일에서 가능한 시간이 없으면 continue
        if (times == undefined) {
          continue
        }

        // 시간 포맷팅
        for (var j = 0; j < times.length; j++) {
          let time = times[j]
          let time1, time2
          const [t1, t2] = time.split('-') // 시작 시간과 끝 시간을 꺼냄
          let [t1Hour, t1Minute] = t1.split('.') // 소수점 파싱

          t1Hour = parseInt(t1Hour) < 10 ? '0' + t1Hour : t1Hour // HH 단위로 맞춰줌
          if (t1Minute == undefined) {
            // 소수점 아래가 없으면 00 추가
            time1 = t1Hour + ':00'
          } else {
            // 소수점 아래가 있으면 분 단위로 변환한 후 시간 포맷팅
            t1Minute = (60 * parseFloat('0.' + t1Minute)).toString()
            time1 = t1Hour + ':' + t1Minute
          }

          let [t2Hour, t2Minute] = t2.split('.')
          t2Hour = parseInt(t2Hour) < 10 ? '0' + t2Hour : t2Hour

          if (t2Minute == undefined) {
            time2 = t2Hour + ':00'
          } else {
            t2Minute = (60 * parseFloat('0.' + t2Minute)).toString()
            time2 = t2Hour + ':' + t2Minute
          }

          times[j] = time1 + '-' + time2 // 포맷팅한 시간으로 연결
        }

        // // 연속된 시간 찾기
        // var res: string[] = []

        // for (var j = 0; j < times.length - 1; j++) {
        //   const [front1, front2] = times[j].split('-')
        //   const [back1, back2] = times[j + 1].split('-')
        //   const diff = timeCalculator(front2, back1) // 시간 차이를 분 단위로 구함
        //   const resLength = res.length

        //   // 다음 시간과 연속되면
        //   if (diff == 15) {
        //     // 이전 시간과도 연속됐는지를 판단하기 위해 res 배열의 끝 요소를 가져옴
        //     if (resLength > 0) {
        //       const [last1, last2] = res[resLength - 1].split('-') // res 배열의 끝 요소의 시간

        //       //if (last2 == back2) continue
        //       // 이전 시간과도 연속되면
        //       const timeDiff = timeCalculator(last2, back1)
        //       if (timeDiff == 15) {
        //         res[resLength - 1] = last1 + '-' + back2 //이전 시간과 연결
        //       }
        //       // 이전 시간과 연속되지 않으면
        //       else {
        //         res.push(front1 + '-' + back2) // 그냥 현재 시간과 다음 시간만 연결
        //       }
        //     }
        //     // 이전 시간과는 연속되지 않고 다음 시간과만 연속되면
        //     else {
        //       res.push(front1 + '-' + back2)
        //     }
        //   }
        //   //  다음 시간과 연속되지 않으면
        //   else {
        //     // 다음 시간과는 연속되지 않지만 이전 시간과는 연속되면
        //     if (resLength > 0) {
        //       const [last1, last2] = res[resLength - 1].split('-') // res 배열의 끝 요소의 시간
        //       if (last2 == front2) {
        //         continue
        //       } else {
        //         res.push(times[j])
        //       }
        //     } else {
        //       res.push(times[j])
        //     }

        //     if (j == times.length - 2) {
        //       res.push(times[times.length - 1])
        //     }
        //   }
        // }
        // data.meets[days[i]] = res
      }
      if (data.meets['월'] && data.meets['화'] && data.meets['수'] && data.meets['목'] && data.meets['금']) {
        if (
          data.meets['월'][0] == '09:00-20:45' &&
          data.meets['화'][0] == '09:00-20:45' &&
          data.meets['수'][0] == '09:00-20:45' &&
          data.meets['목'][0] == '09:00-20:45' &&
          data.meets['금'][0] == '09:00-20:45'
        ) {
          navigate('/error')
          return
        }
      }
      setResult({absent: data.absent, participants: data.participants, meets: data.meets})
    },
    onError(err) {},
  })

  // ********************* callbacks *********************
  // const onClickRankingButton = useCallback((rankingNumber: number) => {
  //   setSelectedNumber(rankingNumber)
  // }, [])

  useScrollToTop()
  return (
    <>
      <RootContainer>
        <LogoLinked />
        <Container>
          <TitleWrapper marginBottom={result.absent == 0 ? '8px' : '16px'}>
            <Title isBest={result.absent == 0}>
              {result.participants.length == 0
                ? ''
                : result.participants.map((username, idx) => (idx == result.participants.length - 1 ? username : username + ','))}
              님의 밥약
            </Title>
            {result.absent != 0 && (
              <GuideText>
                모두가 가능한 시간이 없습니다.
                <br />
                {result.participants.length}명 중 {result.participants.length - result.absent}명만 가능한 시간을 보여줍니다.
              </GuideText>
            )}
          </TitleWrapper>
          {/* {!isBest && (
            <RankingButtonContainer>
              {[...Array(5)].map((item, idx) => (
                <RankingButton key={idx} isSelected={selectedNumber == idx + 1} onClick={() => onClickRankingButton(idx + 1)}>
                  {idx + 1}순위
                </RankingButton>
              ))}
            </RankingButtonContainer>
          )} */}
          <SelectResultViewContainer>
            <SelectResultView setIsImageView={setIsImageView} />
          </SelectResultViewContainer>
          {isImageView ? <TimeTableImage result={result.meets} /> : <TimeTableText result={result.meets} />}

          <ButtonContainer>
            <KakaoShareButton label="친구에게 추가 요청" meetId={meetId} participants={result.participants} />
            <AddSelfButtonLink to={`/create?meetId=${meetId}`}>
              <ButtonSolid label="내 시간표 추가하기" />
            </AddSelfButtonLink>
          </ButtonContainer>
        </Container>
      </RootContainer>
      <Footer />
    </>
  )
}

const SelectResultViewContainer = styled.div`
  margin-bottom: 12px;
`

const RankingButton = styled.button<RankingButtonProps>`
  background-color: ${props => (props.isSelected ? props.theme.rankingButton.enabled.bgColor : props.theme.rankingButton.disabled.bgColor)};

  color: ${props => (props.isSelected ? props.theme.rankingButton.enabled.fontColor : props.theme.rankingButton.disabled.fontColor)};

  border-radius: 16px;
  padding: 4px 14px;
  margin-right: 8px;
  border: none;
  font-family: 'Pretendard-Medium';
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  flex: 0 0 auto;
`

const RankingButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 16px;
  overflow-x: auto;
`

const TitleWrapper = styled.div<TitleWrapperProps>`
  margin-bottom: ${({marginBottom}) => marginBottom};
  color: ${({theme}) => theme.colors.gray800};
`

const GuideText = styled.p`
  font-family: 'Pretendard-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray700};
  margin-block-start: 0;
  margin-block-end: 0;
`

const AddSelfButtonLink = styled(Link)`
  text-decoration: none;
`

const Title = styled.h2<TitleProps>`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: ${props => (props.isBest ? '0px' : '8px')};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
`
