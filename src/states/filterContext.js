import { createContext, useContext, useReducer } from "react";
import { initialFilterState } from "./filterState";
import { filterReducer } from "./filterReducer";

const FilterContext = createContext("filterState");

const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducer, {...initialFilterState})

    return (
        <FilterContext.Provider value={[state, dispatch]}>
            {children}
        </FilterContext.Provider>
    );
};

const useFilterState = () => {
    const context = useContext(FilterContext)
    return context
}

export {useFilterState}

export default FilterProvider;
