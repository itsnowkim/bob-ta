import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import * as colors from '../styles/colors'

type TdProps = {
  selected?: boolean
}

export const TimeTable = () => {
  const TdRef = useRef<HTMLTableDataCellElement>(null)
  useEffect(() => {
    console.log(TdRef.current?.className)
    TdRef.current!.className += ' selected'
  }, [])
  return (
    <Table>
      <Thead>
        <Tr>
          <ThStart />
          <Th>월</Th>
          <Th>화</Th>
          <Th>수</Th>
          <Th>목</Th>
          <Th>금</Th>
        </Tr>
      </Thead>
      {/* 1교시 */}
      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>1교시</TdStart>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
      </Tbody>
      {/* 2교시 */}

      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>2교시</TdStart>
          <Td ref={TdRef} />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />

          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
      </Tbody>

      {/* 3교시 */}
      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>3교시</TdStart>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
      </Tbody>
      {/* 4교시 */}
      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>4교시</TdStart>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
      </Tbody>
      {/* 5교시 */}
      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>5교시</TdStart>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
      </Tbody>
      {/* 6교시 */}
      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>6교시</TdStart>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
      </Tbody>
      {/* 7교시 */}
      <Tbody>
        <Tr>
          <TdStart rowSpan={5}>7교시</TdStart>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
        </Tr>
        <Tr>
          <Td />
          <Td />
          <Td />
          <Td />
          <Td />
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
  height: 10px;
  background: 'transparent';
  border-right: ${props => (props.selected ? 'none' : 'solid')};
  border-color: ${({theme}) => theme.colors.gray300};
  border-width: 0.5px;

  &.selected {
    background-color: ${({theme}) => theme.colors.secondary};
  }
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

const Tbody = styled.tbody`
  border: solid;
  border-color: ${({theme}) => theme.colors.gray300};
  border-width: 0.5px;
`
