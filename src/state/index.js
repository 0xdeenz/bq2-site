import { configureStore } from '@reduxjs/toolkit'

import chain from './chain/reducer';
import error from './error/reducer';
import identitySecret from './identitySecret/reducer';
import modal from './modal/reducer';

const store = configureStore({
    reducer: {
        chain,
        error,
        identitySecret,
        modal,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export default store
