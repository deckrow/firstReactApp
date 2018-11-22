const categorys = (state = [], action) => {
    switch(action.type) {
        case 'TOGGLE_CATEGORY': 
            return action.id
        default:
            return state
    }
}