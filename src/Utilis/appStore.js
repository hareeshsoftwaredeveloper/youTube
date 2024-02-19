import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./sideBarSlice"
import searchSlice from "./searchSlice"

const appStore = configureStore({
    reducer: {
        sidebar:sidebarReducer,
        search:searchSlice
    }
})

export default appStore