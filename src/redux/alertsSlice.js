import { createSlice } from '@reduxjs/toolkit';


// Define the initial state for the alerts slice
const initialState = {
  loading: false,
  reloadUser: false,
};

// Create the alerts slice
export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    // Reducer to set loading to true
    setLoading: (state) => {
      state.loading = true;
    },
    // Reducer to hide loading (set loading to false)
    hideLoading: (state) => {
      state.loading = false;
    },
    // Reducer to show loading (set loading to true)
    showLoading: (state) => {
      state.loading = true;
    },
    // Reducer to reload user data (this should be handled properly)
    reloadUserData: (state) => {
      state.reloadUser = true;
    },
  },
});

// Export actions correctly
export const { setLoading, hideLoading, showLoading, reloadUserData } = alertsSlice.actions;

// Export the reducer as default
export default alertsSlice.reducer;
