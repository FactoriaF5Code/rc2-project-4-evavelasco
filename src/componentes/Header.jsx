import "./Header.css";
export const Header = () => {
  return (
    <header>
      <img
        className="logotipo"
        src="../public/logotipofilmin.png"
        alt="logotipo"
      />
      <nav>
        <div>
          <a href="#">Inicio</a>
          <a href="#">Peliculas</a>
          <a href="#">Series</a>
          <a href="#">Colecciones</a>
          <a href="#">Festivales</a>
          <a href="#">Mas</a>
        </div>

        <button className="suscripcion">Suscribete</button>
        <button className="inicio">Iniciar Sesión</button>
        <a className="buscar">🔍</a>
      </nav>
    </header>
  );
};
