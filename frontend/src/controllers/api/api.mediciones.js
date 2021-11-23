import urlWebServices from '../webServices';

export const sumarInteres = async function(interes)  {
 // url
 let url = urlWebServices.agregarInteres;

 let formData = new URLSearchParams();
    formData.append('email', interes.email ? interes.email : null);

 try {
     // Hago llamada al endpoint
     let response =  await fetch(url, {
       method: 'POST',
       mode: 'cors',
       headers: {
         'Accept': 'application/x-www-form-urlencoded',
         'Origin': 'http://localhost:3000/',
         'Content-type': 'application/x-www-form-urlencoded',
       },
       body: formData
     });

     let data = await response.json();

     let result = {
         success: (response.status === 200 ? true : false),
         response: data
     }

     return result;
     
   } catch(e) {
     let result = {
         success: false,
         response: e
     };
     console.log(result);
     return result;
   }
}