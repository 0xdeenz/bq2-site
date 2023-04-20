import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    identitySecret: undefined,
}

const identitySecretSlice = createSlice({
    name: 'identitySecret',
    initialState,
    reducers: {
        setIdentitySecret: (state, action) => {
            state.identitySecret = action.payload
        },
    }
})

export const { setIdentitySecret } = identitySecretSlice.actions
export default identitySecretSlice.reducer
