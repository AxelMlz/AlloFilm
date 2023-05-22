import { Outlet, Link, useParams } from "react-router-dom";

export default function Root() {
  let { movieId } = useParams();
  return (
    <>
      <div id="sidebar">
        <h1>AlloFilm</h1>
        <nav>
          <ul>

            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/populaire`}>Les Films les plus populaires</Link>
            </li>
            <li>
              <Link to={`categories`}>categories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}