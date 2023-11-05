import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Error404.css';

function Error404() {
  const navigate = useNavigate();
  function comeBack() {
    navigate(-1);
  }

  return (
    <section className="error404">
      <div className="error404__inner">
        <h2 className="error404__title">404</h2>
        <p className="error404__subtitle">Страница не найдена</p>
      </div>
      <Link onClick={comeBack} className="error404__link">
        Назад
      </Link>
    </section>
  )
}

export default Error404;
