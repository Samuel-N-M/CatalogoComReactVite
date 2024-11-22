/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { myImages } from "../utils/img/imagens.js";
import "../css/HomeCategory.css";

function HomeCategory() {
  const scrollInfo = [
    { id: 1, titulo: "Notebooks", image: myImages.pc1 },
    { id: 2, titulo: "Smortphones", image: myImages.pc2 },
    { id: 3, titulo: "HeadSet", image: myImages.pc3 },
    { id: 4, titulo: "Categoria", image: myImages.pc3 },
    { id: 5, titulo: "Categoria", image: myImages.pc3 },
    { id: 6, titulo: "Categoria", image: myImages.pc3 },
    { id: 7, titulo: "Categoria", image: myImages.pc3 },
    { id: 8, titulo: "Categoria", image: myImages.pc3 },
    { id: 9, titulo: "Categoria", image: myImages.pc3 },
    { id: 10, titulo: "Categoria", image: myImages.pc3 },
    { id: 11, titulo: "Categoria", image: myImages.pc3 },
    { id: 12, titulo: "Categoria", image: myImages.pc3 },
    { id: 13, titulo: "Categoria", image: myImages.pc3 },
    { id: 14, titulo: "Categoria", image: myImages.pc3 },
    { id: 15, titulo: "Categoria", image: myImages.pc3 },
    { id: 16, titulo: "Categoria", image: myImages.pc3 },
    { id: 17, titulo: "Categoria", image: myImages.pc3 },
  ];

  return (
    <div className="boxScroll">
      <div className="boxTitulo">
        <div className="containerTitulo">
          <h2 className="titulo poppins-bold">Categorias</h2>
          <div className="titulo-barra"></div>
        </div>
        <div className="linkTodasCategoria">
          <a href="#" className="txtLin">
            Mais Categorias →
          </a>
        </div>
      </div>

      <div className="scrollCategoria">
        {scrollInfo.map((c) => (
          <div className="container" key={c.id}>
            <div className="containerImage">
              <img src={c.image} alt={c.titulo} />
            </div>
            <div className="containerTitulo poppins-semibold">{c.titulo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategory;
