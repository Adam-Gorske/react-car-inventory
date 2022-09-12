import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        condition: 'Condition',
        make: 'Make',
        model: 'Model',
        year: 'Year',
    },
    reducers: {
        chooseCondition: (state, action) => { state.condition = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseCondition, chooseMake, chooseModel, chooseYear } = rootSlice.actions;