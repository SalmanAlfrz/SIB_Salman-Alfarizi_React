import { useParams } from "react-router-dom";
import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Item() {
  const params = useParams();
  const id = params.itemId
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!item) return null;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.email}</p>
    </div>
  );
}