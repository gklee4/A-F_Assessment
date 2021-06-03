const getData = () => {
    fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')
        .then(response => response.json())
        .then(data => {
            renderItems(data)
        });
};


function renderItems(dataRows) {
    const userListDiv = document.getElementById("usersList");
    const listUnorderedData = `<ul> 
                {{#each dataRows}} 
                <li>
                 <div> 
                 <p> Name : {{this.name}} </p> 
                 <img src={{this.avatar}} alt= 'No Avatar'> 
                 <button type=button onclick='onClick({{this.id}})'>More Details</button>
                 <p id={{this.id}} style = 'display: none'> ID : {{this.id}} Created At :{{this.createdAt}}</p>
                 </div>
                 </li>
                 {{/each}} 
                 </ul>`;
    const template = Handlebars.compile(listUnorderedData);
    userListDiv.innerHTML = template({ dataRows: dataRows });
}



function onClick(idVal) {
    var x = document.getElementById(idVal);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

module.exports = {
    onClick,
    renderItems
}