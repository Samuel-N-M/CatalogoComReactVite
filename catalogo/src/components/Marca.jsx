import { myImages } from "../assets/imagens";
import { useState, useRef } from "react";
import "../css/Marca.css";
import "../css/MarcaCategoria.css"; // Estilo para a lista de categorias
import { Link } from "react-router-dom";

function Marca() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const containerRef = useRef(null);

  const brands = [
    { name: "Apple", logo: myImages.apple },
    { name: "Sony", logo: myImages.toshiba },
    { name: "LG", logo: myImages.motorola },
    { name: "Dell", logo: myImages.dell },
    { name: "Samsung", logo: myImages.samsung },
    { name: "Motorola", logo: myImages.motorola },
    { name: "1", logo: myImages.motorola },
    { name: "2", logo: myImages.motorola },
    { name: "3", logo: myImages.motorola },
    { name: "4", logo: myImages.motorola },
    { name: "5", logo: myImages.motorola },
    { name: "6", logo: myImages.motorola },
    
  ];

  const categories = {
    Samsung: [
      {
        title: "Smartphones",
        products: [
          {
            title: "Galaxy S23",
            imageUrl: myImages.pc3,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "Galaxy Z Fold 5",
            imageUrl: myImages.pc2,
            priceRange: "R$ 10.000 - R$ 12.000",
          },
          {
            title: "Galaxy S23",
            imageUrl: myImages.pc3,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "Galaxy Z Fold 5",
            imageUrl: myImages.pc2,
            priceRange: "R$ 10.000 - R$ 12.000",
          },
        ],
      },
      {
        title: "TVs",
        products: [
          {
            title: "QLED 8K",
            imageUrl: myImages.pc2,
            priceRange: "R$ 6.000 - R$ 8.000",
          },
          {
            title: "Crystal UHD",
            imageUrl: myImages.pc2,
            priceRange: "R$ 3.000 - R$ 4.000",
          },
          {
            title: "QLED 8K",
            imageUrl: myImages.pc2,
            priceRange: "R$ 6.000 - R$ 8.000",
          },
          {
            title: "Crystal UHD",
            imageUrl: myImages.pc2,
            priceRange: "R$ 3.000 - R$ 4.000",
          },
        ],
      },
    ],

    Sony: [
      {
        title: "Smartphones",
        products: [
          {
            title: "Galaxy S23",
            imageUrl: myImages.pc3,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "Galaxy Z Fold 5",
            imageUrl: myImages.pc2,
            priceRange: "R$ 10.000 - R$ 12.000",
          },
          {
            title: "Galaxy S23",
            imageUrl: myImages.pc3,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "Galaxy Z Fold 5",
            imageUrl: myImages.pc2,
            priceRange: "R$ 10.000 - R$ 12.000",
          },
        ],
      },
      {
        title: "TVs",
        products: [
          {
            title: "QLED 8K",
            imageUrl: myImages.pc2,
            priceRange: "R$ 6.000 - R$ 8.000",
          },
          {
            title: "Crystal UHD",
            imageUrl: myImages.pc2,
            priceRange: "R$ 3.000 - R$ 4.000",
          },
          {
            title: "QLED 8K",
            imageUrl: myImages.pc2,
            priceRange: "R$ 6.000 - R$ 8.000",
          },
          {
            title: "Crystal UHD",
            imageUrl: myImages.pc2,
            priceRange: "R$ 3.000 - R$ 4.000",
          },
        ],
      },
    ],

    LG: [
      {
        title: "Smartphones",
        products: [
          {
            title: "Galaxy S23",
            imageUrl: myImages.pc1,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "Galaxy Z Fold 5",
            imageUrl: myImages.pc2,
            priceRange: "R$ 10.000 - R$ 12.000",
          },
          {
            title: "Galaxy S23",
            imageUrl: myImages.pc1,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "Galaxy Z Fold 5",
            imageUrl: myImages.pc2,
            priceRange: "R$ 10.000 - R$ 12.000",
          },
        ],
      },
      {
        title: "TVs",
        products: [
          {
            title: "QLED 8K",
            imageUrl: myImages.pc2,
            priceRange: "R$ 6.000 - R$ 8.000",
          },
          {
            title: "Crystal UHD",
            imageUrl: myImages.pc2,
            priceRange: "R$ 3.000 - R$ 4.000",
          },
          {
            title: "QLED 8K",
            imageUrl: myImages.pc2,
            priceRange: "R$ 6.000 - R$ 8.000",
          },
          {
            title: "Crystal UHD",
            imageUrl: myImages.pc2,
            priceRange: "R$ 3.000 - R$ 4.000",
          },
        ],
      },
    ],

    Apple: [
      {
        title: "Smartphones",
        products: [
          {
            title: "iPhone 15",
            imageUrl: myImages.pc1,
            priceRange: "R$ 8.000 - R$ 10.000",
          },
          {
            title: "iPhone SE",
            imageUrl: myImages.pc1,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "iPhone 15",
            imageUrl: myImages.pc1,
            priceRange: "R$ 8.000 - R$ 10.000",
          },
          {
            title: "iPhone SE",
            imageUrl: myImages.pc1,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
        ],
      },
      {
        title: "Laptops",
        products: [
          {
            title: "MacBook Air",
            imageUrl: myImages.pc2,
            priceRange: "R$ 9.000 - R$ 11.000",
          },
          {
            title: "MacBook Pro",
            imageUrl: myImages.pc2,
            priceRange: "R$ 12.000 - R$ 14.000",
          },
        ],
      },
    ],

    Dell: [
      {
        title: "Smartphones",
        products: [
          {
            title: "iPhone 15",
            imageUrl: myImages.pc1,
            priceRange: "R$ 8.000 - R$ 10.000",
          },
          {
            title: "iPhone SE",
            imageUrl: myImages.pc1,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
          {
            title: "iPhone 15",
            imageUrl: myImages.pc1,
            priceRange: "R$ 8.000 - R$ 10.000",
          },
          {
            title: "iPhone SE",
            imageUrl: myImages.pc1,
            priceRange: "R$ 3.500 - R$ 4.500",
          },
        ],
      },
      {
        title: "Laptops",
        products: [
          {
            title: "MacBook Air",
            imageUrl: myImages.pc2,
            priceRange: "R$ 9.000 - R$ 11.000",
          },
          {
            title: "MacBook Pro",
            imageUrl: myImages.pc2,
            priceRange: "R$ 12.000 - R$ 14.000",
          },
        ],
      },
    ],
    // Outras categorias...
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className={`boxListMarcas ${selectedBrand ? "cardView" : ""}`}>
      <h2 className="tituloMarca">Marcas</h2>
      <div className="titulo-barra_marca"></div>

      <div className="boxListMarcas">
      {selectedBrand ? (
        <div className="scrollButtons">
          <button className="scrollButton left" onClick={scrollLeft}>
            &#8592;
          </button>
          <div className="containerMarca horizontal" ref={containerRef}>
            {brands.map((brand) => (
              <div
                key={brand.name}
                className={`brandItem ${
                  selectedBrand === brand.name ? "selected" : ""
                }`}
                onClick={() => setSelectedBrand(brand.name)}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brandLogo"
                />
              </div>
            ))}
          </div>
          <button className="scrollButton right" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      ) : (
        <div className="containerMarca grid">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="brandItem"
              onClick={() => setSelectedBrand(brand.name)}
            >
              <img src={brand.logo} alt={brand.name} className="brandLogo" />
              <div className="brandName">{brand.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>

      {selectedBrand && (
        <div className="categoryList">
          {categories[selectedBrand]?.map((category, index) => (
            <div key={index} className="categoryBox">
              <h3 className="categoryTitle">{category.title}</h3>
              <div className="productList">
                {category.products.map((product, idx) => (
                  <div key={idx} className="productCard">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="productImage"
                    />
                    <h3 className="productTitle">{product.title}</h3>
                    <p className="productPrice">{product.priceRange}</p>
                    <div className="boxbtnDetalheProduto">
                      <button className="btnVerDestalheProduto">
                        <Link to="/detalhesProduto" className="linkButton">Ver Detalhes</Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Marca;
