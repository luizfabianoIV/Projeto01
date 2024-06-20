import { useState, useEffect } from "react";
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {
  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
            <Card
              title={"Luiz Fabiano"}
              value={"Cursando Analise Desenvolvimento de Sistema"}
              info={"Solteiro, tenho 19 anos, sou do signo Escorpião, Gosto de animes e Jogos, Minha infancia foi marcada por um jogo chamado Resident Evil 4"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
