import axios from "axios";


// creamos un arreglo de objetos product
const initProducts = [
    {
        id: 1,
        name: 'Monitor',
        price: '2000',
        description: 'Pantalla Samsung 19`'
    },
    {
        id: 2,
        name: 'iPhone 14',
        price: '1000',
        description: 'Celular iPhone de ultima generación'
    }
]

const url = 'http://localhost:8080/products';

export const listProduct = () =>{
    return initProducts;
}

// funcion para listar todo los productos
export const findAll = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }

    return null;
}

// función para la creación de un nuevo preducto
export const create = async ({name, description, price}) => {

    try {
        const response = await axios.post(url, {
            name: name,
            description: description,
            price: price
        });

        return response;
    } catch (error) {
        console.log(error);
    }

    return undefined;
}

export const update = async ({id, name, description, price}) => {

    try {
        const response = await axios.put(`${url}/${id}`, {
            name: name,
            description: description,
            price: price
        });

        return response;
    } catch (error) {
        console.log(error);
    }

    return undefined;
}

export const remove = async (id) => {

    try {
        await axios.delete(`${url}/${id}`);
    } catch (error) {
        console.log(error);
    }
}