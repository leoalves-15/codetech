import axios from "axios";

export const getProductsByID = async (ids: number[]) => {
    const idsFormated = ids.toString().replace(/,/g, '_');
    var config = {
        method: 'get',
        url: `https://codetechback.herokuapp.com/api/products/ids/${idsFormated}`,
        headers: { }
    };
    
    try {
        const response = await axios(config);
        
        return (response.data);
    } catch(error) {
        return console.log('error', error)
    }
}
