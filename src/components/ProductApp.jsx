import { useEffect, useState } from "react";
import { listProduct } from "../services/productService";
import { ProductTable } from "./ProductTable";
import { PropTypes } from "prop-types"



// esto es un componente de React, usamos una función flecha 
export const ProductApp = ({title = ''}) => {

    const[products, setProducts] = useState([]);

    /*
        Este hook de react se usa para inicializar 
        products con initProduct cuando el componente
        se renderiza por primera vez
    */
    useEffect(() => {
        const result = listProduct(); 
        setProducts(result);
    }, []);

    // retorna el fragmento de jsx
    return(
        <>
            {/* esto forma parte de los props que se le pasan al hijo */}
            {/* en este caso al hijo ProductTable */}
            <h1>{ title }</h1>
            <ProductTable products={products}/>
        </>
    )
}

ProductApp.propsTypes = {
    title: PropTypes.string.isRequired
}