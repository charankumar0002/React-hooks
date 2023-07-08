import React from 'react'
import './Table1.css'
export default function Table1() {
  return (
    <>
      <h1> Example </h1>  
<h2> How to add Space between two rows in a table using CSS?  </h2>  
<center>
<table>  
    <caption> Student Details  </caption>         
    <tr>  
                <th> Roll </th>  
                <th> Name </th>  
                <th> Class </th>  
                <th> Gender </th>  
                <th> Phone Number </th>  
                <th> Age </th>  
            </tr>  
        </table>  
        <table class = "gg">  
            <tr>  
                <td class = "gs"> 1 </td>  
                <td> Thomas </td>  
                <td> BA </td>  
                <td> M </td>  
                <td> 45589800878 </td>  
                <td> 32 </td>  
            </tr>  
            <tr>  
                <td class = "gs"> 2 </td>  
                <td> Thomes </td>  
                <td> BA </td>  
                <td> M </td>  
                <td> 45589800878 </td>  
                <td> 32 </td>  
            </tr>  
            <tr>  
                <td class = "gs"> 3 </td>  
                <td> Thom </td>  
                <td> BA </td>  
                <td> M </td>  
                <td> 45589800878 </td>  
                <td> 32 </td>  
            </tr>  
            <tr>  
            <td class = "gs"> 4 </td>  
                <td> Arjun </td>  
                <td> BA </td>  
                <td> M </td>  
                <td> 45589800878 </td>  
                <td> 32 </td>  
            </tr>  
            <tr>  
            <td class = "gs"> 5 </td>  
                <td> Arjun </td>  
                <td> BA </td>  
                <td> M </td>  
                <td> 45589800878 </td>  
                <td> 32 </td>  
            </tr>  
        </table>  
  </center>
    </>
  )
}
