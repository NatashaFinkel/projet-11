import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
    "authentication/login",
    async ({ token, email, password, rememberMe }, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, email, password, rememberMe }),
            });
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.message);
            }
            return { token: data.body.token, rememberMe };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        token: localStorage.getItem('Token') || sessionStorage.getItem('Token') || null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem("Token");
            sessionStorage.removeItem("Token");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;

                if (action.payload.rememberMe) {
                    localStorage.setItem("Token", action.payload.token);
                } else {
                    sessionStorage.setItem("Token", action.payload.token);
                }
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "An error happened";
            });
    },
});

export const { logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;