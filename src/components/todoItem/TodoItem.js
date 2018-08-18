import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
    this.doneItem = this.doneItem.bind(this)
    this.deleteDoneItem = this.deleteDoneItem.bind(this)
  }

  render () {
    console.log('render')
    return (
      <Fragment>
        <div className="item">
        <span className="info">{this.props.item}</span>
        <div className="btns">
          <span className="creat-time">创建时间：{this.props.creatTime}</span>
          <p className="btn" onClick={this.props.done ? this.deleteDoneItem : this.deleteItem}>删除</p>
          <p className={`btn ${this.props.done ? 'hide' : ''}`} onClick={this.doneItem}>完成{this.props.done}</p>
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

  // ---- react生命周期函数（包括render函数） -------

  // 在组件即将被挂载到页面的时刻执行
  componentWillMount () {
    console.log('componentWillMount')
  }

  // 在组件被挂载到页面之后 执行
  componentDidMount () {
    console.log('componentDidMount')
  }

  // state变化 组件被更新之前执行
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    if (nextProps.item !== this.props.item) {
      return true // true需要更新
    } else {
      return false // 不会重新出发render函数 性能优化
    }
  }

  // 接受父组件传的值，此组件之前存在与dom中，它会执行
  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }

  // 在组件即将剔除时执行
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

}

// props类型校验
TodoItem.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  creatTime: PropTypes.string,
  deleteItem: PropTypes.func,
  doneItem: PropTypes.func,
  deleteDoneItem: PropTypes.func,
  done: PropTypes.bool.isRequired
}

// 默认值
TodoItem.defaultProps = {
  done: true
}

export default TodoItem
