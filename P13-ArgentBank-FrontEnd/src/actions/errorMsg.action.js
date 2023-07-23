export const SET_ERROR_MSG = "SET_ERROR_MSG";
export const DELETE_ERROR_MSG = "DELETE_ERROR_MSG";

export const setErrorMsg = (errorMsg) => {
    return (dispatch) => {
      dispatch({ type: SET_ERROR_MSG, payload: errorMsg });
    };
  };
  
  export const deleteErrorMsg = () => {
    return (dispatch) => {
      dispatch({ type: DELETE_ERROR_MSG });
    };
  };

  
  
  
  
  
  
  