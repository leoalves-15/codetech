import axios from "axios";

export const getProduct = async (id: number) => {
    var config = {
        method: 'get',
        url: `http://127.0.0.1:4000/api/product/${id}`,
        headers: { }
    };
    
    try {
        const response = await axios(config);
        
        return (response.data);
    } catch(error) {
        return console.log('error', error)
    }
}
