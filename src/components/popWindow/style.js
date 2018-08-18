// 局部css
import styled from 'styled-components'

export const PopWindow = styled.div`
  width: 300px;
  height: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -100px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  color: #999;
  line-height: 20px;
  &.hide {
    display: none;
  }
`
export const WindowBtn = styled.p`
  margin-top: 20px;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #20dba1;
  font-size: 14px;
`
