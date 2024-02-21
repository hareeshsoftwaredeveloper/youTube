import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./sideBarSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"

const appStore = configureStore({
    reducer: {
        sidebar:sidebarReducer,
        search: searchSlice,
        chat:chatSlice
    }
})

export default appStore