import { connect } from 'react-redux'
import { toggleCategory } from '../actions'
import Btn from '../components/mobile/SortingButton'

const mapStateToProps = state => ({
    data: state.data,
    activeCategory: state.activeCategory
})

const mapDispatchToProps = dispatch => ({
    toggleCategory: (id, name) => dispatch(toggleCategory(id, name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Btn)