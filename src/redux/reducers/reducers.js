const INIT_STATE = {
    carts: []
};
const INIT_USER = {
    data: {}
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case 'REMOVE_CART':
            const data = state.carts.filter(c => c.id !== action.payload.id)
            return {
                ...state,
                carts: data
            }
        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                    
                }
                
            }
            else{
                break
            }
        default:
            return state

    }
}

export const userreducer = (state = INIT_USER , action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
