import * as actionTypes from './action'

const initialState = {
    ingredients : {
        meat : 0,
        salad : 0,
        bacon : 0,
        cheese : 0
    },
    total : 4
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT :
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] :  state.ingredients[action.ingredientName] + 1
                },
                total : state.total + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT :
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredientName] :  state.ingredients[action.ingredientName] - 1
                },
                total : state.total - INGREDIENT_PRICES[action.ingredientName]
            }
        default :
            return state
    }
}

export default reducer