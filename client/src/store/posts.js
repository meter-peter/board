import axios from 'axios';
const apiaddress = "http://localhost:5000/api/posts"


const posts = {
    namespaced :true ,
    state:{
        posts:[]

    },
    mutations: {
        SET_POSTS(state,data){
            state.posts = data;
        }

    },
    actions:{
        loadposts({commit}){
            axios
            .get(apiaddress)
            .then(res =>{
                commit('SET_POSTS' , res.data)
            })
            .catch(err => console.log(err))
        }
    }
}

export default posts