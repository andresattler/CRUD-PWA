import { connect } from 'react-redux'

import { toggleModal, addArticle } from '../../actions/'
import Modal from '../../components/Modal/'

const mapDispatchToProps = dispatch => ({
  onSubmit: article => {
    dispatch(toggleModal())
    dispatch(addArticle(article))
  }
})

export default connect(null, mapDispatchToProps)(Modal)
