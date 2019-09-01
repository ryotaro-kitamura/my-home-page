import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const PortFolioInfo = styled.div`
  border: 2px solid lightgrey;
  border-radius: 2px;
  padding: 20px;
  margin: 20px;
`
export const SelectButton = styled(Button)`
  &&{
    margin: 20px;
    border: 2px solid black;
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor: pointer;
  }
  &&:hover{
    opacity: 0.8
  }

`