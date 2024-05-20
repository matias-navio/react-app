import { ProductDetail } from "./ProductDetail"
import { PropTypes } from "prop-types"
import './style/Table.css'

// de esta manera pasamos los props que veinen del padre, un arreglo de productos
export const ProductTable = ({handlerProductSelected, handlerRemove, products = []}) => {

    return(
        <table className="table-products">
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>description</th>
                    <th>remove</th>
                    <th>edit</th>
                </tr>
            </thead>
            <tbody>
                { products.map( prod => {
                    return <ProductDetail handlerProductSelected={handlerProductSelected} handlerRemove={handlerRemove} prod={prod} key={prod.name}/>
                })}
            </tbody>
        </table>
    )
}

// validación de props
ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func. isRequired
}