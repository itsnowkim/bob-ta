import styled from 'styled-components'
import {Separator as TempSeparator} from '../styles'

type SeparatorProps = {
  marginTop?: string
  marginBottom?: string
}

export const Separator = ({marginTop = '0', marginBottom = '0'}: SeparatorProps) => {
  return (
    <div style={{marginTop: marginTop, marginBottom: marginBottom}}>
      <SeparatorStyle />
    </div>
  )
}
const SeparatorStyle = styled(TempSeparator)`
  background-color: ${({theme}) => theme.colors.gray200};
`
