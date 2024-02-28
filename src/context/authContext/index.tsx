import { createContext, useContext, useReducer } from "react";


interface AuthStates {
    isAuthenticated: boolean
};


type Action = {
    type: "LOGGIN"
} | {
    type: "LOGOUT"
};


type Dispatch = (
    action: Action
) => void;


const AuthStateContext = createContext<AuthStates | undefined>(undefined);

const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);



const authReducer = (state:AuthStates, action:Action): AuthStates => {

    switch (action.type) {
        case "LOGGIN":
        return {isAuthenticated: true};
        default:
            return state;
    }

}

//Provider
const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, {isAuthenticated: false});
    return <AuthStateContext.Provider value={state}>
                <AuthDispatchContext.Provider value={dispatch}>
                    {children}
                </AuthDispatchContext.Provider>
            </AuthStateContext.Provider>  
}


//Use the useContext
const useAuthState = () => {
    const context = useContext (AuthStateContext);
    if (context === undefined) {
        throw new Error("UseAuthState must be used within an authProvider");
    } return context;
}

const useAuthDispatch = () => {
    const context = useContext (AuthDispatchContext);
    if (context === undefined) {
        throw new Error("AuthDispatchContext must be used within an authProvider");
    } return context;
}

export {AuthProvider, useAuthState, useAuthDispatch};