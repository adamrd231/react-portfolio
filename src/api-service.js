export class API {

    static getProjects() {
        return fetch("http://127.0.0.1:8000/projects/projects/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

    static getBlogs() {
        return fetch("http://127.0.0.1:8000/projects/blog/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

    static getProjectQuotes() {
        return fetch("http://127.0.0.1:8000/projects/quotes/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            },
        })
        .then( response => response.json())
    }
    

}
