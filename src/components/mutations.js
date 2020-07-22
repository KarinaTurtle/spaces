import store from "../store";
import axios from "axios";

store.mutations.configure({
    mutations: {
        createAcc() {
            axios
                .post("https://jsonplaceholder.typicode.com/users", {
                    firstName: this.createAccForm.fName,
                    lastName: this.createAccForm.lName,
                    email: this.createAccForm.email,
                    password: this.createAccForm.password,
                })
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
});