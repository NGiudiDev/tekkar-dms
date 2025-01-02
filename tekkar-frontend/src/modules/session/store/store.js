import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "main",
	initialState: {
		isLogged: false,
		user: null,
	},
	reducers: {
		login(state, action) {
			state.user = action.payload.user;
			state.isLogged = true;
		},
		logout(state) {
			state.user = null;
			state.isLogged = false;
		},
	}
});

//? actions
export const {
	login,
	logout,
} = userSlice.actions;

export const store = configureStore({
	reducer: userSlice.reducer
});