import styled from 'styled-components'
import Button from '@material-ui/core/Button';


export const RouteButton = styled(Button)`
  &&{
    margin: 0 5px;
    display: inline-block;
    border: 1px solid white;
    mergin: 0 20px;
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor: pointer;
  }
  &&:hover{
    opacity: 0.8
  }

`