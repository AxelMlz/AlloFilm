import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <nav>
          <ul>
          
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  );
}