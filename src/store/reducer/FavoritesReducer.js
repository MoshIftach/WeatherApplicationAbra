let initialState = {
    favorites:[]
}
export function FavoritesReducer(state =initialState , action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                favorites: [...state.favorites,action.favorites]
            }
        case 'REMOVE_FAVORITE':
            return {
                favorites: []
            }
        default:
            return state
    }
}