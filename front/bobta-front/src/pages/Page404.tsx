import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {RootContainer} from '../styles'
import {ButtonSolid} from '../components'
export const Page404 = () => {
  return (
    <Container>
      <H2>앗, 이 페이지는 없어요</H2>
      <A to="/index">
        <ButtonSolid label="메인으로 이동" width="80%" />
      </A>
    </Container>
  )
}

const Container = styled(RootContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: 'center';
`
const Wrapper = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: 'center';
`
const H2 = styled.h2`
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: 'Pretendard-Bold', sans-serif;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 36px;
  color: ${({theme}) => theme.colors.gray800};
`
const A = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`
