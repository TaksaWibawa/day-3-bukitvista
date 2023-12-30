import { APIAuth } from "../../services/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	status: "idle",
	message: "",
	data: {},
};

export const login = createAsyncThunk("auth/login", APIAuth.login);

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		resetLoginState: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = "loading";
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = "success";
				state.message = action.payload.message;
				state.data = action.payload.data;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = "error";
				state.message = action.error.message;
			});
	},
});

export const { resetLoginState } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
export const selectLoginState = (state) => state.login;
