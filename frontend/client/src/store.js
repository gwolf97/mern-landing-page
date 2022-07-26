import { configureStore } from '@reduxjs/toolkit'
import membersReducer from './slices/membersSlice'

export default configureStore({
    reducer:{
        members: membersReducer,
    }
})