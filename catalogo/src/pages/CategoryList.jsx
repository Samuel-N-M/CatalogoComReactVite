import "../css/categoryList.css";
import Menu from "../components/Menu";
import ListCategoriaProduct from "../components/ListCategoriaProduct";
import Footer from "../components/Footer";

function CategoryList() {
  return (
    <div>
      <Menu />
      <ListCategoriaProduct />
      <Footer />
    </div>
  );
}

export default CategoryList;
