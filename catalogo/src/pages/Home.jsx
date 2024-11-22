// eslint-disable-next-line no-unused-vars
import React from "react";
import "../components/Menu.jsx"
import Menu from "../components/Menu.jsx";
import Carrosel from "../components/Carrosel.jsx";
import HomeCategory from "../components/HomeCategory.jsx";
import UltimosProdutos from "../components/UltimosProdutos.jsx";

function Home() {
    return (
        <div>
            <Menu />,
            <Carrosel />
            <HomeCategory />
            <UltimosProdutos />
        </div>
    );
}

export default Home