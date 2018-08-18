import React, { Component, Fragment } from 'react'
import TodoItem from '../components/todoItem/TodoItem'
import PopWindow from '../components/popWindow/PopWindow'
import { Provider } from 'react-redux'
import store from '../store'
import {
  Container,
  Title,
  InputContainer,
  Input,
  SubmitBtn
} from './style'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.inputChange = this.inputChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.deleteDoneItem = this.deleteDoneItem.bind(this)
    this.doneItem = this.doneItem.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.showPopWindow = this.showPopWindow.bind(this)
    this.state = {
      inputValue: '',
      list: [],
      doneList: [],
      creatTime: '',
      active: false
    }
  }

  render () {
    return (
      <Fragment>
        <Provider store={store}>
          <Container>
            <Title>TODO LIST</Title>
            <InputContainer>
              <Input
                placeholder="请输入TODO"
                value={this.state.inputValue}
                onChange={this.inputChange}
                onKeyUp={this.onKeyUp} />
              <SubmitBtn
                className={`${this.state.active ? 'active' : ''}`}
                onClick={this.addItem}>
                增加事项
              </SubmitBtn>
              <SubmitBtn onClick={this.showPopWindow}>测试弹窗</SubmitBtn>
            </InputContainer>
            {this.getTodoList()}
            {this.getDoneList()}
            <PopWindow />
          </Container>
        </Provider>
      </Fragment>
    )
  }

  showPopWindow () {
    const action = {
      type: 'show_pop_window',
      value: 'testValue'
    }
    store.dispatch(action)
  }

  getTodoList () {
    return this.state.list.map((item, index) => (
      <TodoItem
        key={index}
        item={item}
        index={index}
        done={false}
        deleteItem={this.deleteItem}
        doneItem={this.doneItem}
        creatTime={this.state.creatTime} />
    ))
  }

  getDoneList () {
    return this.state.doneList.map((item, index) => (
      <TodoItem
        key={index}
        item={item}
        index={index}
        done={true}
        deleteDoneItem={this.deleteDoneItem}
        creatTime={this.state.creatTime} />
    ))
  }

  inputChange (e) {
    const inputValue = e.target.value
    if (inputValue) {
      this.setState(() => ({ active: true }))
    } else {
      this.setState(() => ({ active: false }))
    }
    this.setState(() => ({ inputValue }))
  }

  onKeyUp (e) {
    e.keyCode === 13 && this.addItem()
  }

  addItem () {
    this.setState(prevState => {
      if (prevState.inputValue) {
        const list = [prevState.inputValue, ...prevState.list]
        const inputValue = ''
        const creatTime = this.getDate()
        const active = false
        return { list, inputValue, creatTime, active }
      }
    })
  }

  deleteItem (index) {
    this.setState(prevState => {
      let list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  deleteDoneItem (index) {
    this.setState(prevState => {
      let doneList = [...prevState.doneList]
      doneList.splice(index, 1)
      return { doneList }
    })
  }

  doneItem (index) {
    this.setState(prevState => {
      let list = [...prevState.list]
      const doneList = [prevState.list[index], ...prevState.doneList]
      list.splice(index, 1)
      return { doneList, list }
    })
  }

  getDate () {
    const t = new Date(),
          Y = t.getFullYear(),
          M = t.getMonth() + 1,
          D = t.getDate(),
          H = t.getHours() < 10 ? `0${t.getHours()}` : `${t.getHours()}`,
          S = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`
    return `${Y}年${M}月${D}日${H}:${S}`
  }

}

export default TodoList
