import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../redux/loremActoins";

function Lorem() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.lorem
  );

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Lorem;