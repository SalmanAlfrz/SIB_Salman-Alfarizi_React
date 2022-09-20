import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Ini adalah halaman About</p>
      <Link to="about-company">About The Company</Link> | {" "}
      <Link to="about-me">About Me</Link>
      <Outlet />
    </div>
  );
}