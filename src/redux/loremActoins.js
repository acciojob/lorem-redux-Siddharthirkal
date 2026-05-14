export const fetchLorem = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_LOREM_REQUEST",
    });

    fetch("https://api.lorem.com/ipsum")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "FETCH_LOREM_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_LOREM_FAILURE",
          payload: error.message,
        });
      });
  };
};