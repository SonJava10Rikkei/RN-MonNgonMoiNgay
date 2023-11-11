// @ts-ignore
export const increment = (value) => (dispatch) => {
    dispatch({ type: 'ADD', payload: value });
}

// @ts-ignore
export const decrement = (value) => (dispatch) => {
    dispatch({ type: 'SUBTRACT', payload: value });
}
