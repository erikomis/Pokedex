import React, { useState } from "react";
import { searchPokedex, typePokedex } from "../../store/modules/pokedex";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Input } from "../input/Input";
import { HeaderStyle } from "./styles";
import Logo from "../../assets/Logo.png";
import { Button } from "../button/Button";
import pokedex, { orderByName } from "../../store/modules/pokedex";
import { invertTheme } from "../../store/modules/theme";

const types = [
  { value: "Style" },
  { value: "dark" },
  { value: "rock" },
  { value: "grass" },
  { value: "bug" },
  { value: "ice" },
  { value: "water" },
  { value: "Style" },
  { value: "fire" },
  { value: "dragon" },
  { value: "fighting" },
  { value: "Style" },
  { value: "poison" },
  { value: "psychic" },
  { value: "fairy" },
  { value: "ghost" },
  { value: "normal" },
  { value: "gosth" },
  { value: "ground" },
  { value: "electric" },
];

export function Header() {
  const dispatch = useAppDispatch();
  const { pokeapi } = useAppSelector();
  const [search, setSearch] = useState("");
  const [typePokemon, setTypePokemon] = useState("");

  function handleChange(e: any) {
    setTypePokemon(e.target.value);
    dispatch(typePokedex(e.target.value));
  }
  return (
    <HeaderStyle>
      <div className="container-logo-theme">
        <div className="container-img">
          <img src={Logo} alt="pokedex" />
        </div>
        <div className="theme">
          <Button onClick={() => dispatch(orderByName(pokeapi.pokedex))}>
           order por nome
          </Button>
        </div>
      </div>
      <div>
        <Input
          placeholder="pesquisar pokemon por nome"
          type="text"
          onChange={(e) => dispatch(searchPokedex(e.target.value))}
        />
        <select
          className="select-types"
          value={typePokemon}
          onChange={handleChange}
        >
          <option value="">todos</option>
          {types.map((type, index) => (
            <React.Fragment key={index}>
              <option value={type.value}>{type.value}</option>
            </React.Fragment>
          ))}
        </select>
        <Button onClick={()=>dispatch(invertTheme())}>Theme</Button>
      </div>
    </HeaderStyle>
  );
}
