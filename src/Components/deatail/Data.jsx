import React, { useState, useEffect } from "react";

import axios from "axios";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  console.log(myData,"check my data")



  return (
    <>
      <h1>My Data</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData?.products?.map((post) => {
          const {id,description,price } = post;
          return (
            <React.Fragment key={id}>
            <div  className="card">
              <h2>{description}</h2>
              <p>{price}</p>
            </div>
            </React.Fragment>
            
          );
        })}
      </div>
    </>
  );
};

export default App;