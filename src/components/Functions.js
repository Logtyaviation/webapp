export function postInDB(body, route) {
    const options = {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
    }
    fetch(route, options)
    .then((response) => console.log(response.body))
    .catch((response) => console.log(response))
}

// export function fetchFromDB(route, setAuthenticated, newState) {
//     fetch(route, {
//         headers:{
//             'Accept':'application/json',
//             'Content-Type':'application/json'
//         },
//         credentials:'include'
//     })
//     .then(async (response) => {
//         const text = await response.text();
//         const body = JSON.parse(text);
//         const isAuthenticated = response.status === 200;
//         setAuthenticated(isAuthenticated)
//         if(isAuthenticated) {
//             this.setState(newState)
//         }
//     })
//     .catch(error => console.log(error))
// }



