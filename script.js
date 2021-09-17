let list = [];

let AddRow = () => {
    let inputs = document.querySelectorAll("input[type=text]");
    // Adding new values to the list
    list.push({
        fname : inputs[0].value,
        lname : inputs[1].value,
        email : inputs[2].value,
        age : inputs[3].value,
    });
    // Adding the values in the list to the table
    let table = document.getElementById("show");
    for(let i = list.length-1; i < list.length; i++){
        let row = table.insertRow(-1);
        let fname = row.insertCell(0).innerHTML = list[i].fname;
        let lname = row.insertCell(1).innerHTML = list[i].lname;
        let email = row.insertCell(2).innerHTML = list[i].email;
        let age = row.insertCell(3).innerHTML = list[i].age;;
        // fname.innerHTML = list[i].fname;
        // lname.innerHTML = list[i].lname;
        // email.innerHTML = list[i].email;
        // age.innerHTML = list[i].age;
    }

}
