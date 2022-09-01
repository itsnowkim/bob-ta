import {useCallback} from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '20px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

type InformationModalProps = {
  informationModalOpen: boolean
  setInformationModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const InformationModal = ({informationModalOpen, setInformationModalOpen}: InformationModalProps) => {
  const closeModal = useCallback(() => {
    setInformationModalOpen(false)
  }, [])
  return <ContentContainer onMouseOut={closeModal}>기본 테마로 설정해주세요</ContentContainer>
}

const ContentContainer = styled.div`
  border: 1px solid black;
  padding: 12px;
`
