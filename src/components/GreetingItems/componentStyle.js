import styled from 'styled-components'

export const ThumbItem = styled.li`
  width: 100px;
  height: 30px;
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border: ${props => (props.isActive ? 'none' : '1px solid #db1c48')};
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  border-radius: 10px;
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  font-weight: 500;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`
