'use client'
import React, {ReactNode, createContext} from "react";
import usePage from "../hooks/usePage";
import { PageContextType } from "../types/page";

export const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
    children: ReactNode;
  }
export const PageProvider: React.FC<PageProviderProps>  = ({children}: any) => {
    const [page, updatePage] = usePage();

    return (
        <PageContext.Provider value={{page, updatePage}}>
          {children}
        </PageContext.Provider>
    )
}