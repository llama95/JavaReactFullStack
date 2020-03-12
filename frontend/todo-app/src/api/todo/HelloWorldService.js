import axios from 'axios'

class HelloWorldService{

    executeHelloWorldService(){
            // console.log("executed service")
        return axios.get("http://localhost:8080/hello")
        //returns a promise

    }
    executeHelloWorldBeanService(){
            // console.log("executed service")
        return axios.get("http://localhost:8080/hello-bean")
        //returns a promise

    }

}
export default new HelloWorldService();