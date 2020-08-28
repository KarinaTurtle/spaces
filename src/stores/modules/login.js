import axios from "axios";

export default {
    //store variables
    state: {},
    //mutations update the username SET_USERNAME()=>{ state.username = "user.username"}
    mutations: {},
    //USERNAME: state => {return state.username}
    getters: {},
    //GET_USER: ()=> {axios.get('user').then(response => { })}
    actions: {
        LOGIN: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post("http://localhost:7876/createUser", payload)
                    .then(({ data, status }) => {
                        if (status === 200) {
                            resolve(true);
                        }
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
    },
};