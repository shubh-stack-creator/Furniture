export const ADD = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}
export const REMOVE = (item) => {
    return {
        type: 'REMOVE_CART',
        payload: item
    }
}
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}


export const REMOVEONE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}

export const USER = (item) => {
    return {
        type: 'ADD_USER',
        payload: item
    }
}