

var herokuURL = "https://website-portfolio-rdconcepts.herokuapp.com/"
var localURL = "http://127.0.0.1:8000/"

export class API {

    static getProjects() {
        return fetch(herokuURL + "projects/projects/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

    static getBlogs() {
        return fetch(herokuURL + "projects/blog/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }
    
    static getCategories() {
        return fetch(herokuURL + "projects/categories/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

    static getProjectsByCategory(category) {
        return fetch(herokuURL + `projects/projects/${category}`, {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

}
