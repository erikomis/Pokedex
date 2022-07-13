import React from "react";
import { Pokedex, PokemonProps } from "../../interfaces/pokedex";
import { closeIsmodal, openIsModal } from "../../store/modules/modal";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ModalPokemon } from "../modal/Modal";
import { CardStyle } from "./style";

const typesConfigs: Record<string, string> = {
  Stile: "#a1a1a1",
  dark: "#a1a1a1",
  rock: "#a1a1a1",
  grass: "#70a83b",
  bug: "#70a83b",
  ice: "#a2cff0",
  water: "#a2cff0",
  fire: "#f76545",
  dragon: "#f76545",
  fighting: "#f76545",
  poison: "#a974bc",
  psychic: "#a974bc",
  fairy: "#a974bc",
  ghost: "#a974bc",
  normal: "#76aadb",
  gosth: "#76aadb",
  ground: "#9b897b",
  electric: "#f7c545",
};

export function Card({ pokemon }: PokemonProps) {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector();
  return (
    <>
      <CardStyle
        background={typesConfigs[pokemon.type]}
        onClick={() => dispatch(openIsModal(pokemon))}
      >
        <div>
          <p>#{pokemon.id}</p>
          <img src={pokemon.front_default} alt={pokemon.name} />
        </div>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.type}</p>
      </CardStyle>
      <ModalPokemon
        pokemon={pokemon}
        isOpen={modal.isModal}
        onRequestClose={() => closeIsmodal()}
      />
    </>
  );
}
