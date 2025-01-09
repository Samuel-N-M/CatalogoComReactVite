import "../../css/ProductDetails.css";
import { myImages } from "../../assets/imagens.js";

function ContainerDetalhe() {
  return (
    <div className="product-detail">
      <div className="boxProdutoDetail">
        <div className="boxImg">
          <img src={myImages.pc2} alt="Imagem do produto" />
        </div>
        <div className="product-info">
          <h1 className="product-name">Nome do item</h1>
          <p className="product-price">R$ 5.498,00 - 6.000,00</p>
          <p className="product-description">
            Lorem ipsum dolor sit amet. Id iste saepe qui repellendus dolorem et
            deleniti explicabo ut ipsam dolores. Et saepe veritatis id porro
            eveniet et illum nemo ut excepturi sint eos voluptatum. Lorem ipsum
            dolor sit amet. Id iste saepe qui repellendus dolorem et deleniti
            explicabo ut ipsam dolores. Et saepe veritatis id porro eveniet et
            illum nemo ut excepturi sint eos voluptatum. Lorem ipsum dolor sit
            amet. Id iste saepe qui repellendus dolorem et deleniti explicabo ut
            ipsam dolores. Et saepe veritatis id porro eveniet et illum nemo ut
            excepturi sint eos voluptatum. Lorem ipsum dolor sit amet. Id iste
            saepe qui repellendus dolorem et deleniti explicabo ut ipsam
            dolores. Et saepe veritatis id porro eveniet et illum nemo ut
            excepturi sint eos voluptatum.
          </p>
        </div>
      </div>

      <div className="specifications">
        <h2 className="titleSpecify">Especificação</h2>
        <div className="spec-category">
          <h2>Processador</h2>
          <p>13ª geração Intel® Core™ i7-13650HX (14-core, até 4.9GHz)</p>
        </div>

        <div className="spec-category">
          <h2>Sistema Operacional</h2>
          <p>Windows 11 Home, Português</p>
          <p>Windows 11 Pro, Português</p>
          <p>Ubuntu® Linux® 22.04 LTS</p>
        </div>

        <div className="spec-category">
          <h2>Placa de Vídeo</h2>
          <p>NVIDIA® GeForce® RTX™ 4050, 6GB GDDR6</p>
          <p>NVIDIA® GeForce® RTX™ 3050, 6GB GDDR6</p>
        </div>

        <div className="spec-category">
          <h2>Memória</h2>
          <p>8GB DDR5 (1x8GB) 4800MT/s; Expansível até 32GB</p>
          <p>16GB DDR5 (2x8GB) 4800MT/s; Expansível até 32GB</p>
        </div>

        <div className="spec-category">
          <h2>Armazenamento</h2>
          <p>SSD de 256GB PCIe NVMe M.2</p>
          <p>SSD de 512GB PCIe NVMe M.2</p>
        </div>

        <div className="spec-category">
          <h2>Tela</h2>
          <p>Full HD de 15.6” (1920 x 1080), 120Hz, 250 nits</p>
          <p>Full HD de 15.6” (1920 x 1080), 165Hz, 300 nits, sRGB-100%</p>
        </div>

        <div className="spec-category">
          <h2>Cor</h2>
          <p>Dark Shadow Gray - Grafite</p>
        </div>

        <div className="spec-category">
          <h2>Teclado</h2>
          <p>Teclado retroiluminado na cor laranja, numérico e em português</p>
          <p>
            Teclado retroiluminado RGB 4-zones (compatível apenas com Windows),
            numérico e em português
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContainerDetalhe;
