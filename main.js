function info(){


fetch("https://youssefelhamawi.github.io/week5/college.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let tabledata=document.querySelector("#tabledata");
   let tableinfo = `
    <tr>
        <th>Image</th>
        <th>University</th>
        <th>Major</th>
        <th>Degree</th>
        <th>Year Graduated</th>
    </tr>`
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td> <img src='${item.image}'> </td>
            <td>${item.name}</td>
            <td>${item.program}</td>
            <td>${item.type}</td>
            <td>${item.year}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
   tabledata.innerHTML = tableinfo;
});}