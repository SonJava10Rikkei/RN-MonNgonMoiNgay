// @ts-ignore
export const calculatorReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'SUBTRACT':
            return state - action.payload;
        default:
            return state;
    }
}
