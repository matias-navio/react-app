import { useEffect, useState } from "react"
import './style/Form.css'
import { PropTypes } from "prop-types"

// creamos un objeto para poder inicializar los datos de los productos
const initialDataForm = {
    id: 0,
    name : '',
    description: '',
    price: ''
}

export const ProductForm = ({handlerAdd, productSelected={}}) =>{

    // con useState le asignamos lo de initialDataForm a form
    const [form, setForm] = useState(initialDataForm);

    const { name, description, price} = form;

    // que se carguen los datos en los inputs al hacer clic en edit
    // y cambia el estado del productSelected
    useEffect(() => {
        setForm(productSelected); 
    }, [productSelected])

    /* 
        creamos las constantes que van a ser igual a lo que tenga el form
        des esta manera trabajamos con los datos en forma de variable 
        y no como un objeto
    */
    return(
        // incluimos una funcion cuando el form detente un submit
        <form className="form" 
            onSubmit={(event) => {
                event.preventDefault();
                
                // validamos que los campos no esten vacios
                if(!name || !description || !price){
                    alert('Campos obligatorios');
                    return;
                }
                // le pasamos como paramatro el form, que tiene los datos del product
                handlerAdd(form);
                // una vez que se envian, limpiamos los campos con sus valores iniciales
                setForm(initialDataForm);
        }}>
            <input type="text" 
                placeholder="name"
                name="name"
                value={name}
                /*
                    de esta manera actualizamos el valor de name,
                    le pasamos los valores de todo el form pero solo
                    cambiamos el de name, que lo obtenemos con el event.taget
                */ 
                onChange={(event) => setForm({
                    ...form, name: event.target.value
                })}
            />
            <input type="text" 
                placeholder="description"
                name="description"
                value={description}
                onChange={(event) => setForm({
                    ...form, description: event.target.value
                })}
            />
            <input type="text" 
                placeholder="price"
                name="price"
                value={price}
                onChange={(event) => setForm({
                    ...form, price: event.target.value
                })}
            />

            <button type="submit" className="btn-form">
                Save
            </button>
        </form>
    )
}

ProductForm.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    productSelected: PropTypes.object.isRequired
}