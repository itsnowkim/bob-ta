import styled from 'styled-components'
import * as colors from '../styles/colors'

type TdProps = {
  selected?: boolean
}

export const TimeTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <ThStart></ThStart>
          <Th>월</Th>
          <Th>화</Th>
          <Th>수</Th>
          <Th>목</Th>
          <Th>금</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <TdStart>1교시</TdStart>
          <Td />
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <TdStart>2교시</TdStart>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <TdStart>3교시</TdStart>
          <Td></Td>
          <Td selected></Td>
          <Td selected></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <TdStart>4교시</TdStart>
          <Td></Td>
          <Td></Td>
          <Td selected></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <TdStart>5교시</TdStart>
          <Td></Td>
          <Td></Td>
          <Td selected></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <TdStart>6교시</TdStart>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
        <Tr>
          <TdStart>7교시</TdStart>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

const Table = styled.table`
  /* table-layout: fixed; */
  font-family: 'Pretendard-Medium', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  border-spacing: 0;
  padding: 0;
  color: ${({theme}) => theme.colors.gray800};

  border: solid;
  border-color: ${({theme}) => theme.colors.gray300};
  border-radius: 8px;
  border-width: 0.5px;
  border-collapse: collapse;
`

const Thead = styled.thead``

const TdStart = styled.td`
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  vertical-align: baseline;
  border: solid;
  border-color: ${({theme}) => theme.colors.gray300};
  border-radius: 8px;
  border-width: 0.5px;
  padding-top: 4px;
`
const Td = styled.td<TdProps>`
  height: 60px;
  background: ${props => (props.selected ? props.theme.colors.secondary : 'transparent')};
  border: ${props => (props.selected ? 'none' : 'solid')};
  border-color: ${({theme}) => theme.colors.gray300};
  border-width: 0.5px;
`

const Tr = styled.tr``

const ThStart = styled.th`
  width: 32px;
  border: solid;
  border-color: ${({theme}) => theme.colors.gray300};
  border-radius: 8px;
  border-width: 0.5px;
`

const Th = styled.th`
  font-weight: normal;
  height: 32px;
  border: solid;
  border-color: ${({theme}) => theme.colors.gray300};
  border-radius: 8px;
  border-width: 0.5px;
`

const Tbody = styled.tbody``
