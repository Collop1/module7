import { useEffect, useReducer } from "react";

function bitcoinRatesReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { loading: false, error: null, rate: action.payload };
    case 'FETCH_ERROR':
      return { loading: false, error: action.payload, rate: null };
    default:
      return state;
  }
}

export function useBitcoinRates(currency) {
  const initialState = {
    rate: null,
    error: null,
    loading: true
  };

  const [state, dispatch] = useReducer(bitcoinRatesReducer, initialState);

  useEffect(() => {
    let ignore = false;
    dispatch({ type: 'FETCH_START' });

    fetch(`/api/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => {
        // Check if rate limit is reached
        if (response.status === 429) {
          throw new Error("Rate limit reached");
        }
        return response.json();
      })
      .then(data => {
        if (!ignore) {
          dispatch({
            type: 'FETCH_SUCCESS',
            payload: data.bitcoin[currency.toLowerCase()]
          });
        }
      })
      .catch(error => {
        if (!ignore) {
          console.error("Error fetching Bitcoin data:", error);

          let errorMessage = "Error loading data. Please try again later.";
          if (error.message === "Rate limit reached") {
            errorMessage = "Please wait a few seconds between currency changes (rate limit reached)";
          }

          dispatch({ type: 'FETCH_ERROR', payload: errorMessage });
        }
      });

    // Cleanup function that runs when the component unmounts
    return () => {
      ignore = true; // Set flag to ignore any in-progress fetch results
    };
  }, [currency]);

  return state;
}