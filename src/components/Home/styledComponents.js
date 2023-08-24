import styled from 'styled-components'

export const UserTextArea = styled.textarea`
  background-color: #1b1c22;
  border-radius: '10px';
  font-weight: ${props => props.bold};
  font-style: ${props => props.italic};
  text-decoration: ${props => props.dec};
  color: #ffffff;
  font-size: 15px;
`
export const CustomButton = styled.button`
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`
