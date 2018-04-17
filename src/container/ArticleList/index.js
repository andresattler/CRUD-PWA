import { connect } from 'react-redux'

import ArticleList from '../../components/ArticleList'
import { toggleModal, selectArticle } from '../../actions/'

const mapStateToProps = state => ({
  articles: state.articles
})

const mapDispatchToProps = dispatch => ({
  toggleModal: i => {
    dispatch(toggleModal())
    dispatch(selectArticle(i))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
