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

export const listProduct = () =>{
    return initProducts;
}