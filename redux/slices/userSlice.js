import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

export const navSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {state.origin = action.payload},
    }
})

export const { setUser } = navSlice.actions
export const selectUser = (state) => state.nav.origin

export default navSlice.reducer