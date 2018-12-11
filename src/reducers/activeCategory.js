const categorys = (state = { id: 1, name: 'Арт' }, action) => {
    switch(action.type) {
        case 'TOGGLE_CATEGORY': 
            return { id: action.id, name: action.name}
        default:
            return state
    }
}

export default categorys