import { useEffect, useState } from "react";
import { listProduct } from "../services/productService";
import { ProductTable } from "./ProductTable";
import { PropTypes } from "prop-types"
import { ProductForm } from "./ProductForm";
import './style/App.css';



// esto es un componente de React, usamos una función flecha 
export const ProductApp = ({title = ''}) => {

    const[products, setProducts] = useState([]);

    const[prodcutSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })

    /*
        Este hook de react se usa para inicializar 
        products con initProduct cuando el componente
        se renderiza por primera vez
    */
    useEffect(() => {
        const result = listProduct(); 
        setProducts(result);
    }, []);

    // funcion para poblar el objeto product que viene del form
    const handlerAddProdcut = (prodcut) => {

        /**
         * Si el producto está incluido en el arreglo 
         * quiere decir que lo que queremos es editarlo
         * y no crear uno nuevo, por lo tanto lo buscamos por su nombre
         * y se modifica
         */
        if (prodcut.id > 0){ 
            setProducts(products.map(prod => {
                if(prod.id == prodcut.id){
                    return {...prodcut}
                }
                return prod;
            }))
        }else{
            // si no está en el arreglo lo creamos nuevo
            setProducts([...products, {...prodcut, id: new Date().getTime()}])
        }
    }
 
    /*
        Esta funcion recibe el id de un prodcuto y luego con
        un filter sobre el arreglo de productos verificamos si
        el id que recibimos es igual al del producto, si no es igual
        la función devulve un arreglo con los otros prods y ese lo deja fuera
    */
    const handlerRemoveProduct = (id) =>{
        setProducts(products.filter(prod => prod.id != id));
    }

    /*
        Función para que cuando apretemos en editar, salgan los datos
        del producto seleccionado en los inputs
        para despues poder editarlos 
    */ 
    const handlerProductSelected = (prodcut) => {
        setProductSelected({...prodcut});
    }

    // retorna el fragmento de jsx
    return(
        <div className="body">
            {/* esto forma parte de los props que se le pasan al hijo */}
            {/* en este caso al hijo ProductTable */}
            <h1 className="title">{ title }</h1>
            <section className="container">
                <div className="form-products">
                    <ProductForm handlerAdd={handlerAddProdcut} productSelected={prodcutSelected}/>  
                </div>
                <div className="table-products">
                    {
                        products.length == 0 ? <div className="mssg-no-products">No hay productos en la base de datos</div>
                            : <ProductTable products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected}/>
                    }
                </div>
            </section>
        </div>
    )
}

ProductApp.propsTypes = {
    title: PropTypes.string.isRequired
}