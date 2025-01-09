import "../../css/Marcas/CategoryList.css";
import Menu from "../Menu";
import ListCategoriaProduct from "./ListCategoriaProduct";
import Footer from "../Footer";

function CategoryList () {
  return (
    <div>
      <Menu />
      <ListCategoriaProduct />
      <Footer />
    </div>
  );
};

export default CategoryList;
