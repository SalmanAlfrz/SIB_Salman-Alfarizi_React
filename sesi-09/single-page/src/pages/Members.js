import { Link, Outlet } from "react-router-dom";

export default function Members() {
    return (
        <div>
            <h1>Members</h1>
            <p>Select a Member to be shown</p>
            <Link to="member-1">Member 1</Link> | {" "}
            <Link to="member-2">Member 2</Link>
            <Outlet />
        </div>
    );
}