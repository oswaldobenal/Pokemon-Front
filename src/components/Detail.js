import React, { useEffect } from "react";
import { ContenedorLinkCentrado, Boton } from "../elements/Formulario";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDeail } from "../store/slices/pokemons";

import CardDetail from "./CardDetail";

export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  const { detail } = useSelector((state) => state.pokemons);

  function handleClick(e) {
    dispatch(clearDeail());
  }

  return (
    <div>
      {detail.length >= 1 ? (
        detail[0] ? (
          detail.map((el, index) => {
            return (
              <CardDetail
                key={index}
                id={el.id}
                image={el.image}
                name={el.name}
                life={el.life}
                attack={el.attack}
                defense={el.defence}
                height={el.height}
                weight={el.weight}
                speed={el.speed}
                types={
                  el.createdInDb
                    ? el.types.map((el) => el.name + ". ")
                    : el.types.map((el) => el + ". ")
                }
              />
            );
          })
        ) : (
          <h1>Error</h1>
        )
      ) : (
        <div>
          <h1>Loading...</h1>
          <img
            src="https://i.gifer.com/origin/f3/f367083443fba6e9344555f635e1ba4a_w200.webp"
            alt=""
          />
        </div>
      )}

      <ContenedorLinkCentrado>
        <Boton onClick={(e) => handleClick(e)}>
          <Link to="/home">Go Back!!</Link>
        </Boton>
      </ContenedorLinkCentrado>
    </div>
  );
}
