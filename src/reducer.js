export const initialState = {
  user: null
}

export const actionTypes = {
  SET_USER: 'SET_USER'
}

const reducer = (state, {type, payload}) => {
  console.log(type, payload)
  switch (type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: payload
      }
    default:
      return state
  }
}

export default reducer