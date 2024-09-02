import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (token, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.message);
            }
            return data.body;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const saveNewUserName = createAsyncThunk(
    "profile/saveNewUserName",
    async ({ userName, userId, token }) => {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ userName, userId, token }),
            }
        );
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error('Failed to save user name');
        }
    }
);

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: { firstName: "", lastName: "", userName: "" },
        status: "idle",
        isBeingEdited: false,
        error: null,
    },
    reducers: {
        editNameMode: (state) => {
            state.isBeingEdited = true;
        },
        cancelEditNameMode: (state) => {
            state.isBeingEdited = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.status = "loading";
            })

            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = "success";
                state.name = action.payload;
            })

            .addCase(fetchProfile.rejected, (state, action) => {
                state.status = "fail";
                state.error = action.payload || "An error happened";
            })

            .addCase(saveNewUserName.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(saveNewUserName.fulfilled, (state, action) => {
                state.status = "success";
                state.userName = action.payload;
            })
            .addCase(saveNewUserName.rejected, (state, action) => {
                state.status = "fail";
                state.error = action.payload || "An error happened";
            });
    },
});

export const { editNameMode, cancelEditNameMode } = profileSlice.actions;
export default profileSlice.reducer;