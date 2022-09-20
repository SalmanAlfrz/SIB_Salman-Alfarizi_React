import { useNavigate } from "react-router-dom";

export default function ItemRow({ item }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`${item.id}`)}
        >
          Show Detail
        </button>
      </td>
    </tr>
  )
}
