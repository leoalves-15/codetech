import axios from "axios";

export const getProductsByID = async (ids: number[]) => {
    const idsFormated = ids.toString().replace(/,/g, '_');
    var config = {
        method: 'get',
        url: `http://127.0.0.1:4000/api/products/ids/${idsFormated}`,
        headers: { }
    };
    
    try {
        const response = await axios(config);
        
        return (response.data);
    } catch(error) {
        return console.log('error', error)
    }
}
