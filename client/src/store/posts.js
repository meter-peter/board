import axios from 'axios';
const apiaddress = "http://localhost:5000/api/posts/"


const posts = {
    namespaced :true ,
    state:{
        posts:[],
        error:null,
        currentpost:null,
        filteredposts:null

    },
    mutations: {
        SET_POSTS(state,data){
            state.posts = data;
        }, CREATE_POST(state, post) {
            state.posts.unshift(post)
        },
        SET_CURRENT_POST(state,data){
            state.currentpost=data;
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
        },
       addArticle({commit}, post) {
           console.log(post);
            axios.post(apiaddress, post)
                .then(res => {
                    commit('CREATE_POST', res.data)
                }).catch(err => {
                console.log(err)
            })

        },
        getArticleById({commit},articleid){
            axios.get(apiaddress+articleid)
            .then(res=>{
                console.log(res)
                commit('SET_CURRENT_POST',res.data)
            }).catch(err=>{
                console.log(err)
            })
        

        }
}  ,getters:{
    currentpost: state => state.currentpost,
    posts:state =>state.posts


} 
}

export default posts