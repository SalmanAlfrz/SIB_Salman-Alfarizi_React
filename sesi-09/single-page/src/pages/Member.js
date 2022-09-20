import { useParams } from "react-router-dom";

export default function Member() {
  let params = useParams();
  return (
    <div>
      <h1>{params.memberName}</h1>
      <p>Ini adalah halaman Member {params.memberName}</p>
    </div>
  );
}