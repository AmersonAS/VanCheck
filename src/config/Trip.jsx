// Em algum lugar do seu código, provavelmente em um arquivo separado
import React, { createContext, useContext, useReducer } from 'react';

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const initialState = {
    selectedOptions: {
      tripType: null,
      college: null,
      boardingPoint: null,
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_OPTION':
        return {
          ...state,
          selectedOptions: {
            ...state.selectedOptions,
            [action.payload.field]: action.payload.value,
          },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setOption = (field, value) => {
    dispatch({ type: 'SET_SELECTED_OPTION', payload: { field, value } });
  };

  return (
    <TripContext.Provider value={{ state, setOption }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};
