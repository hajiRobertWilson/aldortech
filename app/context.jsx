"use client"
const { createContext, useState, useContext } = require("react");

const DataContext = createContext();
export function Provider({ children }) {
    const [data, setData] = useState('Inital Data')
    const [position, setPosition] = useState(0)
    const [theme, setTheme] = useState('light')
    return (
        <DataContext.Provider value={{ data, setData, position, setPosition, theme, setTheme }}>
            {children}
        </DataContext.Provider>
    )
}
export const useDataContext = () => useContext(DataContext);