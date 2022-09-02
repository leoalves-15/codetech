import axios from "axios";
  
export const sendNewsletter = async (email: string) => {
    var data = JSON.stringify({
        email
    });
      
    var config = {
        method: 'post',
        url: 'endpoint/newsletter',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
    };
    
    try {
        const response = await axios(config);
        
        return (response.data);
    } catch(error) {
        return console.log('error', error)
    }
}
