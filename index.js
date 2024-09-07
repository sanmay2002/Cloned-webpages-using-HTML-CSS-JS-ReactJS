import axios from "axios";

export const singlegetoperation=()=>{
    axios
    .get("http://localhost:7000/name/5")
    .then(function(response)
    {
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
};