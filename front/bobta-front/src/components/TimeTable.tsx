import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import * as colors from '../styles/colors'

type TdProps = {
  selected?: boolean
}

export const TimeTable = () => {
  const TdRefs = useRef<HTMLTableDataCellElement[][]>(Array.from(Array(7), () => new Array(5)))
  useEffect(() => {
    if (TdRefs.current) {
      TdRefs.current[1][20].className += ' selected'
    }
  }, [TdRefs])

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
      {[...Array(7)].map((_, i) => {
        return (
          <Tbody key={'tbody' + i}>
            {[...Array(5)].map((_, j) => (
              <Tr key={'tr' + i + j}>
                {j == 0 ? (
                  <>
                    <TdStart rowSpan={5}>{i + 1}교시</TdStart>
                    <Td
                      ref={ref => {
                        if (TdRefs.current) {
                          TdRefs.current[0][i * 5 + j] = ref!
                        }
                      }}
                    />
                  </>
                ) : (
                  <Td
                    ref={ref => {
                      if (TdRefs.current) {
                        TdRefs.current[0][i * 5 + j] = ref!
                      }
                    }}
                  />
                )}
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[1][i * 5 + j] = ref!
                    }
                  }}
                />
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[2][i * 5 + j] = ref!
                    }
                  }}
                />
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[3][i * 5 + j] = ref!
                    }
                  }}
                />
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[4][i * 5 + j] = ref!
                    }
                  }}
                />
              </Tr>
            ))}
          </Tbody>
        )
      })}
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
