import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        showSidebar: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        },
        closeMenu: (state) => {
            state.showSidebar=false
        }
    }
});

export const { toggleSidebar, closeMenu } = SidebarSlice.actions;

export default SidebarSlice.reducer;
