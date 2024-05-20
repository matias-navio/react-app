import { ProductDetail } from "./ProductDetail"
import { PropTypes } from "prop-types"

// de esta manera pasamos los props que veinen del padre, un arreglo de productos
export const ProductTable = ({products = []}) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                { products.map( prod => {
                    return <ProductDetail prod={prod} key={prod.name}/>
                })}
            </tbody>
        </table>
    )
}

// validación de props
ProductTable.propTypes = {
    products: PropTypes.array.isRequired
}