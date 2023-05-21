import { Outlet, Link, useParams } from "react-router-dom";
import MovieInfo from "./movieInfo";

export default function Root() {
  let {movieId} = useParams();
  return (
    <>
      <div id="sidebar">
        <h1>React Router</h1>
        <nav>
          <ul>
          
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/populaire`}>Les Films les plus populaires</Link>
            </li>
            <li>
              <Link to={`movie_info/${movieId}`}>Pokemon List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet/>
    </>
  );
}