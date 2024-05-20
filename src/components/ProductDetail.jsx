import { PropTypes } from "prop-types"
import './style/Table.css'

// en este caso especificamos un prop product que es un objeto
export const ProductDetail = ({handlerProductSelected, handlerRemove, prod = {}}) => {

    return(
        <tr>
            <td> {prod.name} </td>
            <td> {prod.price} </td>
            <td> {prod.description} </td>
            <td>
                <button className="btn-table rojo" onClick={() => handlerRemove(prod.id)}>
                    Remove
                </button>
            </td>
            <td>
                <button className="btn-table azul" onClick={() => handlerProductSelected(prod)}>
                    Edit
                </button>
            </td>
        </tr>
    )
}

// valideción de props
ProductDetail.propTypes = {
    // si queremos validar mas props se separan por coma
    prod: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func. isRequired
}