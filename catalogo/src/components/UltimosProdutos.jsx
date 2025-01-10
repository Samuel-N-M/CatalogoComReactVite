import { Link } from "react-router-dom";
import { myImages } from "../assets/imagens";
import "../css/UltimosProdutos.css";
function UltimosProdutos() {
  const produtosInfo = [
    { id: 1, titulo: "Nome Produto", image: myImages.pc1, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 2, titulo: "Nome Produto", image: myImages.pc2, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 3, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 4, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 5, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 6, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 7, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 8, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 9, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 10, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 11, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 12, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 13, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 14, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 15, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
    { id: 16, titulo: "Nome Produto", image: myImages.pc3, dedalhes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi nihil harum quos quod beatae explicabo vero, voluptatibus dolorem, obcaecati sapiente voluptas, quidem unde tempora dolores minima perspiciatis est possimus!"},
  ];

  return (
    <div className="boxProduto">
      <h2 className="tituloCenter poppins-bold">Ultimos Produtos</h2>
      <div className="titulo-barraCenter"></div>
      <div className="listProdutos">
        {produtosInfo.map((p) => (
          <div className="containerP" key={p.id}>
            <div className="containerImageP">
              <img src={p.image} alt={p.titulo} />
            </div>
            <h2 className="tituloProduto poppins-semibold">{p.titulo}</h2>
            <p className="ProductDescription">{p.dedalhes}</p>
            <div className="boxbtnProduto">
              <button className="btnVerProduto">
                <Link to="/detalhesProduto" className="linkButton">Ver Detalhes</Link>
              </button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UltimosProdutos;
