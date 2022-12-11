import React, { createContext, useState } from 'react';

export const callContext = createContext()
const Context = ({ children }) => {
    const [change, setChange] = useState(false)
    const user = {change,setChange}
    return (
        <callContext.Provider value={user}>
            {children}
        </callContext.Provider>
    );
};

export default Context;