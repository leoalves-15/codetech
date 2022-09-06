import axios from "axios";

var config = {
    method: 'get',
    url: 'http://codetechback.herokuapp.com/api/products',
    headers: { }
};

export const getProducts = async () => {
    try {
        const response = await axios(config);
        
        return (response.data);
    } catch(error) {
        return console.log('error', error)
    }
}
