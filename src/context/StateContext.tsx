"use client";
import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction} from "react";

interface ChildrenProps {
    children : ReactNode
}

interface ContextProps {
    sidebarOpen : boolean
    setSidebarState: Dispatch<SetStateAction<boolean>>
}

const StateContext = createContext<ContextProps>({ sidebarOpen : false, setSidebarState : () => { }});

const StateProvider : React.FC<ChildrenProps> = ({ children }) => {
    const [sidebarOpen, setSidebarState] = useState<boolean>(false);

    return (
        <StateContext.Provider value={ {sidebarOpen, setSidebarState} }>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

export const useStateContext = () => {
    return useContext(StateContext);
}