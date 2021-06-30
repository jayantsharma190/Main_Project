import {React,useContext,createContext,useReducer} from 'react';

export const StateContext = createContext();//used to create data layer

//use to set up the data layer
export const StateProvider = ({reducer,initialState,children})=>
{
    return(
<StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>
    );
}


//allows to pull the data from the data layer
export const useStateValue = () => useContext(StateContext);