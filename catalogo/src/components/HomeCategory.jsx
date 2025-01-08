/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { myImages } from "../utils/img/imagens.js";
import "../css/HomeCategory.css";

function HomeCategory() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollInfo = [
    { id: 1, titulo: "Notebooks", image: myImages.pc1 },
    { id: 2, titulo: "Smartphones", image: myImages.pc2 },
    { id: 3, titulo: "HeadSet", image: myImages.pc3 },
    { id: 4, titulo: "Categoria 4", image: myImages.pc3 },
    { id: 5, titulo: "Categoria 5", image: myImages.pc3 },
    { id: 6, titulo: "Categoria 6", image: myImages.pc3 },
    { id: 7, titulo: "Categoria 7", image: myImages.pc3 },
    { id: 8, titulo: "Categoria 8", image: myImages.pc3 },
    { id: 9, titulo: "Mais Categorias", image: myImages.pc3 },
  ];

  const displayedCategories = isMobile
    ? scrollInfo.slice(0, 8)
    : scrollInfo.slice(0, 4);

  return (
    <div className="boxScroll">
      <div className="boxTitulo">
        <div className="containerTitulo">
          <h2 className="titulo poppins-bold">Categorias</h2>
          <div className="titulo-barra"></div>
        </div>
        {!isMobile && (
          <div className="linkTodasCategoria">
            <a href="#" className="txtLin">
              Mais Categorias →
            </a>
          </div>
        )}
      </div>

      <div className={`scrollCategoria ${isMobile ? "mobile" : ""}`}>
        {displayedCategories.map((c) => (
          <div className="container" key={c.id}>
            <div className="containerImage">
              <img src={c.image} alt={c.titulo} />
            </div>
            <div className="containerTitulo poppins-semibold">{c.titulo}</div>
          </div>
        ))}
        {isMobile && (
          <div className="container">
            <div className="containerImage">
              <img src={myImages.pc3} alt="Mais Categorias" />
            </div>
            <div className="containerTitulo poppins-semibold">
              <a href="#">Mais Categorias</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeCategory;
