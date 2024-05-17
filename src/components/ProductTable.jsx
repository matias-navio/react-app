import { ProductDetail } from "./ProductDetail"

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