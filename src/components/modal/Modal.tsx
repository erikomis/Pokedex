import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Pokedex } from "../../interfaces/pokedex";
import { closeIsmodal } from "../../store/modules/modal";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ContainerModal } from "./style";

interface ModalProps {
  isOpen: boolean;
  pokemon: Pokedex;
}

export function ModalPokemon({ isOpen, pokemon }: ModalProps) {
  const dispatch = useAppDispatch();
  const { modal } = useAppSelector();

  function close() {
    dispatch(closeIsmodal());
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => close()}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => close()}
        className="react-modal-close"
      >
        X
      </button>
      <ContainerModal>
        {modal.pokemon && (
          <div className="">
            <img src={modal.pokemon.front_shiny} alt={modal.pokemon.name} />
            <h2>{modal.pokemon.name}</h2>
            <p>{modal.pokemon.type}</p>
            <div>
              <h1>{modal.pokemon.abilities.name1}</h1>
            </div>
          </div>
        )}
      </ContainerModal>
    </Modal>
  );
}
