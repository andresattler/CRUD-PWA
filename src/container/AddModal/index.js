import { connect } from 'react-redux'

import { toggleModal, addArticle, updateArticle } from '../../actions/'
import Modal from '../../components/Modal/'

const mapStateToProps = state => ({
  visible: state.showModal,
  article: state.articles[state.selectedI]
})

const mapDispatchToProps = dispatch => ({
  addArticle: article => {
    dispatch(toggleModal())
    dispatch(addArticle(article))
  },
  updateArticle: article => {
    dispatch(toggleModal())
    dispatch(updateArticle(article))
  },
  toggleModal: () => dispatch(toggleModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
