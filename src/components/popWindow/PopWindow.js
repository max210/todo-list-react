import React, { Fragment } from 'react'
import { connect } from 'react-redux' // 在组件内使用store需连接
import './PopWindow.css'

// 当一个组件只有render函数时，可以抽离成无状态组件
const PopWindw = props => {
  return (
    <Fragment>
      <div className={`pop-window  ${props.popWindwShow ? '' : 'hide'}`}>
        <p>这是一个通过redux控制的测试弹窗，传的值为：{props.popWindwContent}</p>
        <p className="window-btn" onClick={props.hidePopWindow}>点击隐藏弹窗</p>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    popWindwShow: state.popWindwShow,
    popWindwContent: state.popWindwContent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hidePopWindow () {
      const action = {
        type: 'hide_pop_window'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopWindw)
