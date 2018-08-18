// 局部css
import styled from 'styled-components'

export const Item = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(209, 209, 209, .6);
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 20px;
`
export const Info = styled.span`
  font-size: 16px;
  white-space: wrap;
`
export const Btns = styled.div`
  display: flex;
  align-items: center;
`
export const CreatTime = styled.span`
  font-size: 14px;
  color: #777777;
`
export const Btn = styled.p`
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #1ecd97;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 14px;
  &:hover {
    background-color: #20dba1;
  }
  &.hide {
    display: none;
  }
  &.done {
    background-color: #999999;
    cursor: auto;
  }
`
