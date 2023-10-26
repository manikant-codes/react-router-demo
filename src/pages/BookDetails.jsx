import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function BookDetails() {
  const objParams = useParams();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/books/${objParams.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch();
  // }, []);

  const objData = useOutletContext();
  console.log("objData", objData);

  return (
    <div>
      <h1>BookDetails {objParams.id}</h1>
    </div>
  );
}

export default BookDetails;
