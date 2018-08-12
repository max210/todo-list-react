import React, { Component, Fragment } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
    this.doneItem = this.doneItem.bind(this)
    this.deleteDoneItem = this.deleteDoneItem.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div className="item">
        <span className="info">{this.props.item}</span>
        <div className="btns">
          <span className="creat-time">创建时间：{this.props.creatTime}</span>
          <p className="btn" onClick={this.props.done ? this.deleteDoneItem : this.deleteItem}>删除</p>
          <p className={`btn ${this.props.done ? 'hide' : ''}`} onClick={this.doneItem}>完成</p>
          <p className={`btn done ${this.props.done ? '' : 'hide'}`}>已完成</p>
        </div>
        </div>
      </Fragment>
    )
  }

  deleteItem () {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  doneItem () {
    const { doneItem, index } = this.props
    doneItem(index)
  }

  deleteDoneItem () {
    const { deleteDoneItem, index } = this.props
    deleteDoneItem(index)
  }
}

export default TodoItem
