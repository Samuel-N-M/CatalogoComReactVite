import { useEffect, useState } from "react";
import "../css/carrosel.css";
import {myImages} from "../assets/imagens";
import { Link } from "react-router-dom";

function Carrosel() {
  // array que contem os dados de cada slide
  const slides = [
    {
      id: 1,
      title: "Nome do item",
      description:
        "Lorem ipsum dolor sit amet. Id iste saepe qui repellendus dolorem et deleniti explicabo ut ipsam dolores. Et saepe veritatis id porro eveniet et illum nemo ut excepturi sint eos voluptatum.",
      image: myImages.pc1
    },
    {
      id: 2,
      title: "Outro Produto",
      description:
        "Este é um exemplo adicional de slide para demonstrar o carrossel manual em React.",
      image: myImages.pc2
    },
    {
      id: 3,
      title: "Nootebook Acer",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempore porro labore, debitis dignissimos obcaecati necessitatibus quis? Quas fuga veniam quam voluptate iste deleniti deserunt soluta saepe, facilis beatae optio.",
      image: myImages.pc3
    },
  ];

  // Estado do slide atual onde:
  // 'currentSlide -> armazena indixe do slie autalmente visível'
  // 'setCurrentSlide -> funçao usada para atualizar o slide atual'

  const [currentSlide, setCurrentSlide] = useState(0);

  // Logica de troca de slide automática
  useEffect(() => {
    // 'setInterval -> altera o slide atual incrementando 'currentSlide' a cada 10 segundos'
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    // O retorno da função no 'useEffect' impede múltiplos intervalos ao desmontar o componente.
    return () => clearInterval(interval);
  }, [slides.length]); // O operador '% slides.length' garante que, ao cehgar no ultimo slide, o indice volte ao início.

  return (
    <div className="carrosel-container">
      <h2 className="tituloCenterL poppins-bold">Produtos Em Destaque</h2>
      <div className="titulo-barraCenter"></div>
      <div className="carrosel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            // adiciona a classe 'ativo' ao slide atual (visível):
            className={`slide ${index === currentSlide ? "ativo" : ""}`}>

            <div className="slide-content">
              <div className="texto">
                <h3 className="poppins-semibold">{slide.title}</h3>
                <p className="poppins-regular">{slide.description}</p>
                <button className="botao poppins-semibold"><Link to="/detalhesProduto" className="linkButton">Ver mais →</Link></button>
              </div>
              <div className="imagem">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="indicadores">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicador ${index === currentSlide ? "ativo" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carrosel;
