import axios from 'axios';

const serverAdress ="http://localhost:5000/admin/";


const admin = {
    namespaced:true,
    state:{
        users:[]
    },
    mutations:{
        SET_USERS(state,data){
            state.users = data;
        }
    },
    actions:{
        loadusers({commit}){
            axios.get(serverAdress).then(res=>{
                commit('SET_USERS',res.data)
            }).catch(err=> console.log(err));
        }

    },
    getters:{
        users : state => state.users
    }
}

export default admin