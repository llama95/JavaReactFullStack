package com.example;

public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message){
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    @Override
    public String toString() { //without this toString it would just print out the objects address.
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }

}
