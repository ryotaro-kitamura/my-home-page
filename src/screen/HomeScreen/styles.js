import styled from 'styled-components'
import Button from '@material-ui/core/Button';


export const Title = styled.div`
  font-size: 20px;
  border-bottom: 5px solid;
  display: inline-block;
`
export const Info = styled.p`
  font-size: 15px;
`
export const InfoButton = styled(Button)`
  &&{
    mergin: 20px;
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor: pointer;
  }
  &&:hover{
    opacity: 0.8
  }

`