import styled from 'styled-components'
import {Separator as TempSeparator} from '../styles'

export const Separator = () => {
  return <SeparatorStyle />
}
const SeparatorStyle = styled(TempSeparator)`
  margin-top: 36px;
  margin-bottom: 24px;
  background-color: ${({theme}) => theme.colors.gray200};
`
