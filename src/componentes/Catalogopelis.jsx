import "./Catalogopelis.css";
import { Pelicula } from "./pelicula";
import p from "../data/data.json";

const listItems = p.results.map((pelicula) => (
  <Pelicula
    key={pelicula.title}
    title={pelicula.title}
    cartel={pelicula.poster_path}
  />
));
export const Catalogopelis = () => {
  return <main className="Catalogopelis">{listItems}</main>;
};
