import { configureStore } from "@reduxjs/toolkit"

const initialState = {
  selectedSong: null,
}

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED_SONG":
      return {
        ...state,
        selectedSong: action.payload,
      }

    default:
      return state
  }
}

const store = configureStore({
  reducer: reducer,
})

export default store