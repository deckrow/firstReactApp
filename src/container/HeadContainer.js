import { connect } from 'react-redux'
import { toggleCategory } from '../actions'
import Head from '../components/desktop/Head'

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
)(Head)