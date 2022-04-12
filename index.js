// Add your code here

//subimt data function taking username and email as param
function submitData(username, email){
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            'name': username, 
            'email': email
        })
    }
    console.log(configurationObject)
    debugger
    return fetch('http://localhost:3000/users',configurationObject)
        .then(resp => resp.json())
        .then(data => appendID(data))
        .catch(error => {
            //alert('Bad things happening')
            appendError(error.message)
        })
}

submitData('joe','spam')

//append value to the DOM
function appendID(data){
    //console.log(data.id)
    //create variable for lines in body
    const bodyLine = document.querySelector('body')
    //create h1 element for printing out ID
    const h1 = document.createElement('h1')
    h1.textContent = data.id
    bodyLine.append(h1)

}

function appendError(error){
    const bodyLine = document.querySelector('body')
    const h1 = document.createElement('h1')
    h1.textContent = error
    bodyLine.append(h1)
}