import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const Main = styled.div`
  position: relative;
  background: linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84));
  border-bottom: 2px solid white;
  lineheight: 100px;
  font-family: arial black;
  padding: 100px;
`
export const About = styled.div`
  text-align: center;
  border-bottom: 2px solid white;
  font-family: arial black;
  padding: 150px;
`
export const Portfolio = styled.div`
  background: linear-gradient(-45deg, rgb(255, 49, 2), rgb(255, 234, 84));
  text-align: center;
  font-family: arial black;
  padding: 150px;
`
export const Contact = styled.div`
  text-align: center;
  border-bottom: 2px solid white;
  font-family: arial black;
  padding: 150px;
`
export const Title = styled.div`
  font-size: 20px;
  border-bottom: 5px solid;
  display: inline-block;
  padding: 10px;
`
export const Info = styled.p`
  font-size: 15px;
  padding: 10px;

`
export const InfoButton = styled(Button)`
  &&{
    padding: 10px;
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor: pointer;
  }
  &&:hover{
    opacity: 0.8
  }

`