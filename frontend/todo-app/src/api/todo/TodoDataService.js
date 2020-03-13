import axios from "axios";

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`) //using the tick character here on purpose so we can access var
    }


}

export default new TodoDataService();