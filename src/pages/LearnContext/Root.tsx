import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ComponentA } from "./Components";

export interface RootState {
  x: number;
  y: number;
};

export interface RootContext {
  rootState: RootState;
  setRootState: Dispatch<SetStateAction<RootState>>;
}

export const RootContext = createContext({} as RootContext);

export function Root() {
  const [rootState, setRootState] = useState({x: 0, y: 1});
  return (
    <RootContext.Provider value={{rootState, setRootState}}>
      <div>
        <h1>Learn useContext</h1>
        <ComponentA />
      </div>
    </RootContext.Provider>
  );
}
