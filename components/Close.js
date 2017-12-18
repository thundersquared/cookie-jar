import styled from 'styled-elements'

const Close = styled.button`
  width: 18px;
  height: 18px;
  display: block;
  color: #fff;
  background: #111 url('../assets/close.svg') center center no-repeat;
  background-size: 12px;
  border-radius: 0;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 2px;
  left: 2px;
  outline: 2px solid transparent;

  &:hover {
    background-color: red;
    outline: 2px solid #F01;
  }

  &:focus {
    outline: 2px solid #F01;
  }
`

export default Close({
  onclick: () => console.log('Close!')
})
