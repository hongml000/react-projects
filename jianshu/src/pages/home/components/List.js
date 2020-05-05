import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
class List extends Component {
  render() {
    const { articleList, readMoreArticle } = this.props 
    return (
      <div className="articles">
        { articleList.map((item, index) => {
          return (
            <div className="article-item" key={index}>
              <Link to={"/detail?id=" + item.get('id')}>
              <div>
                <p className="article-title">{item.get('title')}</p>
                <div className="article-content">{item.get('content')}</div>
              </div>
              </Link>
              <img className="article-img" src={item.get('imgUrl')} alt=""/>
            </div>
          )
        })}
        <div className="read-more" onClick={readMoreArticle}>阅读更多</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    readMoreArticle() {
      dispatch(actionCreators.getMoreArticles())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);