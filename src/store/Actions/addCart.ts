import {Product} from './type'
const addCart = (product:Product) =>{
    return{
        type: 'ADD_PRODUCT',
        product
    }
}
export default addCart;