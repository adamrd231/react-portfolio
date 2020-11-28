export class API {

    static getProjects() {
        return fetch("https://website-portfolio-rdconcepts.herokuapp.com/projects/projects/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }

    static getBlogs() {
        return fetch("https://website-portfolio-rdconcepts.herokuapp.com/projects/blog/", {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Token f3bdc9d522e0b1ccbb860c6866d17ec7fdc31dad',
            }
          })
          .then(response => response.json())
    }
    

}
