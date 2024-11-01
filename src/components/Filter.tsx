import React from 'react';
import { useAppDispatch } from '../redux/store';
import { setFilteredData } from '../redux/covidSlice';

const Filter: React.FC<{ states: string[] }> = ({ states }) => {
    const dispatch = useAppDispatch();

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilteredData(event.target.value));
    };

    return (
        <select onChange={handleStateChange}>
            {states.map((state) => (
                <option key={state} value={state}>
                    {state}
                </option>
            ))}
        </select>
    );
};

export default Filter;
