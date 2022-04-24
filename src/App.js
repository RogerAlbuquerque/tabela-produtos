import React from 'react'
import Lista from "./components/lista"




export default function App() {

   return (
    
    <section>

        <Lista/> 

        <table border="1">
            <thead>
              <tr>
                <th>Captação</th>
                <th>Marca da Guitarra</th>
                <th>Preço</th>
              </tr>
              
            </thead>

            <tbody id='btable'>
            
              

            </tbody>

        </table>
     </section>
  );
}

 
