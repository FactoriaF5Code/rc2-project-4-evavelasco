import "./Pelicula.css";
export const Pelicula = (props) => {
  return (
    <article className="Pelicula">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.cartel}`}
        alt="Pelicula1"
      />
    </article>
  );
};
