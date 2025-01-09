import ContainerDetalhe from "../components/DetalhesProduto/containerDetalhe";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "../css/ProductDetails.css";

function ProductDetail() {
  return (
    <div>
      <Menu />
      <ContainerDetalhe />
      <Footer />
    </div>
  );
}

export default ProductDetail;
