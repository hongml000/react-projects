import React, { Component } from 'react'
import './index.css'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Detail extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="detail-container">
        <div className="detail-page">
          <h1 className="detail-title">{this.props.title}</h1>
          <div className="detail-content" dangerouslySetInnerHTML={{__html: this.props.content }}>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    const id = this.props.location.search.replace(/[^\d]/g,'')
    this.props.getDetailData(id)
  }
}

const mapState = (state) =>({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => {
  return {
    getDetailData(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}
export default connect(mapState, mapDispatch)(Detail)