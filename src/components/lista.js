import React from 'react'




export default function Lista() {

  const guitarras = [
    {id:1, captacao:"Humbucker",   preco:30000, marca:"Les Paul"},
    {id:2, captacao:"Humbucker",   preco:42500, marca:"Flyng-V"},
    {id:3, captacao:"Single-Coil", preco:20000, marca:"Fender"},
    {id:4, captacao:"Single-Coil", preco:2400,  marca:"Telecaster"},
    {id:5, captacao:"Misto",       preco:5000,  marca:"Ibanez"},
    {id:6, captacao:"Misto",       preco:3200,  marca:"XCort"}

  ]
 
 

  function createElement (){
    let table = document.getElementById("btable")
       table.innerText = ""
    let formValue = document.getElementById("form").value

        
    
         
  

     guitarras.filter (function (f){
      if( (f.captacao === formValue)  ){

   
    
    let NewTabLine = document.createElement('tr')    

        NewTabLine.innerHTML = `<td> ${f.captacao}</td> 
                                <td> ${f.marca}   </td>
                                <td> ${f.preco}   </td> `
      
        table.appendChild(NewTabLine)	
        // ESCREVER O CÓDIGO PARA CRIAR UMA NOVA LINHA NA TABELA COM OS DADOS QUE SAIRAM COMO TRUE

     }
    
    else if (formValue === "todos") {
      
      let NewTabLine = document.createElement('tr')    

      NewTabLine.innerHTML = `<td> ${f.captacao}</td> 
                              <td> ${f.marca}   </td>
                              <td> ${f.preco}   </td> `
    
      table.appendChild(NewTabLine)	

    }})
  }

 








  return (
    
    <>

    <label> <strong>Filtrar lista de  Guitarras: </strong></label> <br/>
    
    
    <select id="form">
      
    <option value="Humbucker">   Humbucker           </option>
    <option value="Single-Coil"> Single-Coil         </option>
    <option value="Misto">       Misto               </option>
    <option value="todos">       Todos os produtos   </option>

    </select> 
    
    <button onClick={createElement}> Buscar </button> 
    <hr/>

    

     
      
   
     
    
    </>
  );
}


