export class API {

    static getPortfolioWork(token) {

        return fetch("http://127.0.0.1:8000/projects/projects/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            }
        })
        .then( response => response.json())
        .then( resp => console.log(resp))
        
    }
    

}