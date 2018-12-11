import { connect } from 'react-redux'
import { toggleCategory } from '../actions'
import Main from '../components/desktop/Main'

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
)(Main)