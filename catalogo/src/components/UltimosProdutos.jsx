import { myImages } from "../utils/img/imagens";
import "../css/UltimosProdutos.css";

function UltimosProdutos() {
  const produtosInfo = [
    { id: 1, titulo: "Nome Produto", image: myImages.pc1 },
    { id: 2, titulo: "Nome Produto", image: myImages.pc2 },
    { id: 3, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 4, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 5, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 6, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 7, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 8, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 9, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 10, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 11, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 12, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 13, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 14, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 15, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 16, titulo: "Nome Produto", image: myImages.pc3 },
    { id: 17, titulo: "Nome Produto", image: myImages.pc3 },
  ];

  return (
    <div className="boxProduto">
      <h2 className="tituloC poppins-bold">Ultimos Produtos</h2>
      <div className="titulo-barra"></div>
      <div className="listProdutos">
        {produtosInfo.map((p) => (
          <div className="container" key={p.id}>
            <div className="containerImage">
              <img src={produtosInfo.image} alt={produtosInfo.titulo} />
            </div>
            <h2 className="titleProduto poppins-semibold">{produtosInfo.titulo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UltimosProdutos;
