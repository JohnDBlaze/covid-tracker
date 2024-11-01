import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface CovidData {
    state: string;
    totalCases: number;
    activeCases: number;
    recovered: number;
    deaths: number;
}

interface CovidState {
    data: CovidData[];
    filteredData: CovidData | null | undefined;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CovidState = {
    data: [],
    filteredData: undefined,
    status: 'idle',
};

export const fetchCovidData = createAsyncThunk(
    'covid/fetchData',
    async () => {
        const response = await fetch('https://api.example.com/covid-data');
        return response.json();
    }
);

const covidSlice = createSlice({
    name: 'covid',
    initialState,
    reducers: {
        setFilteredData: (state, action) => {
            state.filteredData = state.data.find(
                (item) => item.state === action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCovidData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCovidData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            })
            .addCase(fetchCovidData.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setFilteredData } = covidSlice.actions;
export default covidSlice.reducer;
