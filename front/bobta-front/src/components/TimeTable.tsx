import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {timeCalculator} from '../utils'
import * as colors from '../styles/colors'

type TdProps = {
  selected?: boolean
}

type TimeTableProps = {
  result: any
}
const days = ['월', '화', '수', '목', '금']

const CELL_PER_BLOCK = 6

export const TimeTable = ({result}: TimeTableProps) => {
  // 각 시간 cell의 ref
  const TdRefs = useRef<HTMLTableDataCellElement[][]>(Array.from(Array(6), () => new Array(6)))

  useEffect(() => {
    // 각 요일을 돎.
    for (var i = 0; i < 5; i++) {
      const times = result[days[i]] // 해당 요일에서 가능한 시간을 꺼냄

      if (times[0] == '') {
        continue
      }

      // 가능한 시간들을 돌면서
      for (var time of times) {
        const [time1, time2] = time.split('-') // 시작 시간과 끝 시간을 꺼냄

        const timeIdx1 = timeCalculator(time1) // 시작 시간의 index와
        const timeIdx2 = timeCalculator(time2) // 끝 시간의 index를 구함

        for (var j = timeIdx1; j < timeIdx2; j++) {
          TdRefs.current[i][j].className += ' selected'
        }
      }
    }
  }, [TdRefs])

  return (
    <Table rules="groups">
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
      {[...Array(6)].map((_, i) => {
        return (
          <Tbody key={'tbody' + i}>
            {[...Array(6)].map((_, j) => (
              <Tr key={'tr' + i + j}>
                {j == 0 ? (
                  <>
                    <TdStart rowSpan={6}>{i + 1}교시</TdStart>
                    <Td
                      ref={ref => {
                        if (TdRefs.current) {
                          TdRefs.current[0][i * CELL_PER_BLOCK + j] = ref!
                        }
                      }}
                    />
                  </>
                ) : (
                  <Td
                    ref={ref => {
                      if (TdRefs.current) {
                        TdRefs.current[0][i * CELL_PER_BLOCK + j] = ref!
                      }
                    }}
                  />
                )}
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[1][i * CELL_PER_BLOCK + j] = ref!
                    }
                  }}
                />
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[2][i * CELL_PER_BLOCK + j] = ref!
                    }
                  }}
                />
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[3][i * CELL_PER_BLOCK + j] = ref!
                    }
                  }}
                />
                <Td
                  ref={ref => {
                    if (TdRefs.current) {
                      TdRefs.current[4][i * CELL_PER_BLOCK + j] = ref!
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
  font-family: 'Pretendard-Regular', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  border-spacing: 0;
  padding: 0;
  color: ${({theme}) => theme.colors.gray700};

  //border-collapse: separate !important;
  border: solid;
  border-color: ${({theme}) => theme.colors.gray100};
  border-width: 1px;
  /* border-collapse: collapse; */
  border-spacing: 0;
  border-radius: 8px;
`

const Thead = styled.thead``

const TdStart = styled.td`
  text-align: center;
  font-size: 12px;
  line-height: 16px;
  vertical-align: baseline;
  padding-top: 4px;

  border-right: solid;
  border-bottom: solid;
  border-color: ${({theme}) => theme.colors.gray100};
  border-width: 1px;
`
const Td = styled.td<TdProps>`
  height: 10px;
  background: 'transparent';

  border-right: solid;
  border-color: ${({theme}) => theme.colors.gray100};
  border-width: 1px;

  &.selected {
    background-color: ${({theme}) => theme.colors.secondary};
    border-right: none;
  }

  &:last-child {
    border: none;
  }
`

const Tr = styled.tr``

const ThStart = styled.th`
  width: 32px;
  border-bottom: solid;
  border-right: solid;
  border-color: ${({theme}) => theme.colors.gray100};
  border-width: 1px;
`

const Th = styled.th`
  font-weight: normal;
  height: 32px;
  border-right: solid;
  border-bottom: solid;
  border-color: ${({theme}) => theme.colors.gray100};
  border-width: 1px;
  &:last-child {
    border-right: none;
  }
`

const Tbody = styled.tbody`
  tr {
    &:last-child {
      td {
        border-bottom: solid;
        border-color: ${({theme}) => theme.colors.gray100};
        border-width: 1px;
        &.selected {
          border-bottom: none;
        }
      }
    }
  }

  &:last-child {
    tr {
      td {
        border-bottom: none;
      }
    }
  }
`
