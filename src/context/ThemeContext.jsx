import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "CHANGE_PENDING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, { loading: false });

  const changeLoading = (isPending) => {
    dispatch({ type: "CHANGE_PENDING", payload: isPending });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeLoading }}>
      {children}
    </ThemeContext.Provider>
  );
}
