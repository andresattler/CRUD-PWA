import { connect } from 'react-redux'

import Button from '../../components/Button/'
import { toggleModal } from '../../actions/'

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggleModal())
})

export default connect(null, mapDispatchToProps)(Button)
