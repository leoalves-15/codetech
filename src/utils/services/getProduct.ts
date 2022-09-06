import axios from "axios";

export const getProduct = async (id: number) => {
    var config = {
        method: 'get',
        url: `https://codetechback.herokuapp.com/api/product/${id}`,
        headers: { }
    };
    
    try {
        const response = await axios(config);
        
        return (response.data);
    } catch(error) {
        return console.log('error', error)
    }
}
