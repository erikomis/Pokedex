import React, { useEffect, useLayoutEffect } from "react";
import pokedex, { cache, getPokedex } from "../../store/modules/pokedex";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Containar } from "./styles";
import { Header } from "../header/Header";
import { Pagination } from "../pagination/Pagiantion";
import Modal from "react-modal";
import { Card } from "../card/Card";
import { invertTheme } from "../../store/modules/theme";

function PokemonList() {
  const dispatch = useAppDispatch();
  const { pokeapi } = useAppSelector();
  useLayoutEffect(() => {
    const page = Number(window.localStorage.getItem("page"));
    const pokemons = window.localStorage.getItem("pokemons");
    console.log(pokemons?.length && page >= 1);
    if (pokemons && page > 1) {
      dispatch(cache());
      return;
    } else {
      console.log("tes");
      dispatch(getPokedex(isNaN(page) || !page ? 1 : page));
    }
  }, [dispatch]);

  Modal.setAppElement("#root");
  return (
    <>
      <Header />
      <Containar>
        <div className="grid">
          {pokeapi.pokedex.length > 1 ? (
            pokeapi.pokedex.map((poke) => <Card pokemon={poke} key={poke.id} />)
          ) : (
            <div>sem pokemons</div>
          )}
        </div>
        <Pagination
          currentPage={pokeapi.page - 1}
          totalCount={151}
          registerPorPage={10}
          onChangePage={getPokedex}
        />
      </Containar>
    </>
  );
}

export default PokemonList;
