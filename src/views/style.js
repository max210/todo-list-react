// 局部css
import styled from 'styled-components'
import imgUrl from '../static/images/bg.jpg'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Title = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 100px;
`
export const InputContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px 0;
`
export const Input = styled.input`
  width: 70%;
  height: 50px;
  outline: none;
  border: none;
  border: 1px solid #999999;
`
export const SubmitBtn = styled.p`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-left: 10px;
  border-radius: 5px;
  background-color: #999999;;
  cursor: pointer;
  color: #FFFFFF;
  &.active {
    background-color: #1ecd97;
  }
`
