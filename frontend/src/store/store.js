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
		updatePerson(state, action) {
			state.user.person = action.payload; 
		},
		updateUser(state, action) {
			state.user = action.payload;
		},
	}
});

//? actions
export const {
	login,
	logout,
	updatePerson,
	updateUser,
} = userSlice.actions;

export const store = configureStore({
	reducer: userSlice.reducer
});