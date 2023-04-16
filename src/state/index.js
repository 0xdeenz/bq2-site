import { configureStore } from '@reduxjs/toolkit'

import chain from './chain/reducer';
import error from './error/reducer';
import modal from './modal/reducer';

const store = configureStore({
    reducer: {
        chain,
        error,
        modal,
    }
})

export default store
