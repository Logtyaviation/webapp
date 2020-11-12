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



