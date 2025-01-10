// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/Menu.jsx"
import Menu from "../components/Menu.jsx";
import Carrosel from "../components/Carrosel.jsx";
import HomeCategory from "../components/HomeCategory.jsx";
import UltimosProdutos from "../components/UltimosProdutos.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <div>
            <Menu />
            <Carrosel />
            <UltimosProdutos />
            <Footer />
        </div>
    );
}

export default Home