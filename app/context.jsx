"use client"
const { createContext, useState, useContext } = require("react");

const DataContext = createContext();
export function Provider({ children }) {
    const [data, setData] = useState('Inital Data')
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}
export const useDataContext = () => useContext(DataContext);