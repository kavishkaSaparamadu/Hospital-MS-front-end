import { configureStore } from '@reduxjs/toolkit';
import alertsReducer from '../redux/alertsSlice'; // Change the import statement to import the reducer

// Configure your Redux store
const store = configureStore({
    reducer: {
        alerts: alertsReducer // Provide the reducer directly, not via combineReducers
    }
});

export default store;
