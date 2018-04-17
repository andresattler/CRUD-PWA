import { connect } from 'react-redux'

import { toggleModal, addArticle } from '../../actions/'
import Modal from '../../components/Modal/'

const mapStateToProps = state => ({
  visible: state.showModal
})

const mapDispatchToProps = dispatch => ({
  onSubmit: article => {
    dispatch(toggleModal())
    dispatch(addArticle(article))
  },
  toggleModal: () => dispatch(toggleModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
