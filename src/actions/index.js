export const increment = (num = 1) => {
    return ({
        type: "INCREMENT",
        payload: num,
    })
}

export const decrement = () => {
    return ({
        type: "DECREMENT"
    })
}