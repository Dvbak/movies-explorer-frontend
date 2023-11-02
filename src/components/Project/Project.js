import React from "react";
import './Project.css';

function Project() {
  return (
    <section className="project" id={"projectAbout"}>
      <h2 className="project__title">О проекте</h2>
      <div className="project__inner-table">
        <h3 className="project__subtitle">
          Дипломный проект включал 5&nbsp;этапов
        </h3>
        <p className="project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 className="project__subtitle">
          На выполнение диплома ушло 5&nbsp;недель
        </h3>
        <p className="project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="project__inner-graph">
        <div className="project__cell project__cell_color_green">
          <p className="project__text-graph project__text-graph_regular project__text-graph_black">
            1&nbsp;неделя
          </p>
        </div>
        <p className="project__text-graph project__text-graph_medium project__text-graph_gray">
          Back-end
        </p>
        <div className="project__cell project__cell_color_gray">
          <p className="project__text-graph project__text-graph_regular">
            4&nbsp;недели
          </p>
        </div>
        <p className="project__text-graph project__text-graph_medium project__text-graph_gray">
          Front-end
        </p>
      </div>
    </section>
  )
}

export default Project;
