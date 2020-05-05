import React, { Component } from 'react'
import { connect } from 'react-redux'
class Topics extends Component{
  render() {
    const { topicList } = this.props
    return (
      <div className="topics">
        { console.log(topicList) }
        {
          topicList.map(item =>{
            return (
              <div className="topic-item" key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="" className="topic-img"/>
                <span className="topic-title">{item.get('title')}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}
const mapDispatchToProps = (dipatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topics);