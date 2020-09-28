const express = require('express');
const cors = require('cors');
const axios = require ('axios')
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());



app.get("/api",async (req,res)=>{
  
    try{
      
      const {data} =  await axios(urlApi,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      return res.json(data)

    }
    catch(error){
      console.error(error)
    }
})

//******************/ API GRAFANA
const token =
      "eyJrIjoiNmtoYkpqTUFWRVhHdzVpZ0h3YXFLTE9vYkFIMGxORlYiLCJuIjoidGVzdGUiLCJpZCI6MX0="; 
    const urlApi = "http://localhost:3000/api/dashboards/uid/9Tp3Y9OGz";

    const api = axios.create({
      baseURL: urlApi,
    });

   
    api.get("/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        
        return(JSON.stringify(response.data));
        //return response.JSON(data)
       
       
      })
      .catch((error) => {
        console.log(error);
      });





app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));