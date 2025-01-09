import "../../css/Marcas/CategoryList.css";
import { myImages } from "../../assets/imagens";

const categoria = [
  {
    name: "Notebooks",
    products: [
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "Acer Aspire 3",
        priceRange: "R$ 2.500 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "name name name",
        priceRange: "R$ 2.000 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "name name name",
        priceRange: "R$ 1.800 - 3.000",
        imageUrl: myImages.pc1,
      },
      {
        title: "name name name",
        priceRange: "R$ 2.200 - 3.000",
        imageUrl: myImages.pc1,
      },
    ],
  },
  {
    name: "Smartphones",
    products: [
      {
        title: "Smartphone 1",
        priceRange: "R$ 1.000 - 3.000",
        imageUrl: myImages.pc2,
      },
      {
        title: "Smartphone 2",
        priceRange: "R$ 1.200 - 3.000",
        imageUrl: myImages.pc2,
      },
      {
        title: "name name name",
        priceRange: "R$ 1.300 - 3.000",
        imageUrl: myImages.pc2,
      },
      {
        title: "name name name",
        priceRange: "R$ 1.400 - 3.000",
        imageUrl: myImages.pc2,
      },
    ],
  },
  {
    name: "Smartwatch",
    products: [
      {
        title: "Watch Pad",
        priceRange: "R$ 800 - 1.000",
        imageUrl: myImages.pc3,
      },
      {
        title: "name name name",
        priceRange: "R$ 700 - 1.000",
        imageUrl: myImages.pc3,
      },
      {
        title: "name name name",
        priceRange: "R$ 850 - 1.000",
        imageUrl: myImages.pc3,
      },
      {
        title: "name name name",
        priceRange: "R$ 900 - 1.000",
        imageUrl: myImages.pc3,
      },
    ],
  },
];

function ListCategoriaProduct() {
  return (
    <div className="category-list">
      {categoria.map((category, index) => (
        <div key={index} className="category">
          <h2 className="category-title">{category.name}</h2>
          <div className="product-list">
            {category.products.map((product, idx) => (
              <div key={idx} className="product-card">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="product-image"
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">{product.priceRange}</p>
                <div className="boxbtnDetalheProduto">
                  <button className="btnVerDestalheProduto">Conferir</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListCategoriaProduct;
