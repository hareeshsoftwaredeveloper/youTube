import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./sideBarSlice"

const appStore = configureStore({
    reducer: {
        sidebar:sidebarReducer,
        
    }
})

export default appStore