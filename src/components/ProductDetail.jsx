import { PropTypes } from "prop-types"

// en este caso especificamos un prop product que es un objeto
export const ProductDetail = ({prod = {}}) => {

    return(
        <tr>
            <td> {prod.name} </td>
            <td> {prod.price} </td>
            <td> {prod.description} </td>
        </tr>
    )
}

// valideción de props
ProductDetail.propTypes = {
    // si queremos validar mas props se separan por coma
    prod: PropTypes.object.isRequired
}