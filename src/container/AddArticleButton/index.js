import { connect } from 'react-redux'

import Button from '../../components/Button/'
import { toggleModal, selectArticle } from '../../actions/'

const mapDispatchToProps = dispatch => ({
  onClick: () => {
    dispatch(selectArticle(-1))
    dispatch(toggleModal())
  }
})

export default connect(null, mapDispatchToProps)(Button)
