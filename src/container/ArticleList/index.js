import { connect } from 'react-redux'

import ArticleList from '../../components/ArticleList'

const mapStateToProps = state => ({
  articles: state.articles  
})

export default connect(mapStateToProps)(ArticleList)
