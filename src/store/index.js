import Vuex from "vuex";
import vue from 'vue';

vue.use(Vuex);


const state = {
  userId:"1fa69e1dba8b4640a121551333491381",
  token:"eyJhbGciOiJIUzUxMiJ9.eyJ1aWQiOjEwMjEsInN1YiI6IkJVWUVSIiwicm9sZXMiOlsiQlVZRVIiXSwidXNlclVVSUQiOiJjMzViZTI2MDk3YzY0MDFhODE3MTU0NzYyMjI2MTc1NCIsImV4cCI6MTU2MzMzMjI3OSwidXVpZCI6bnVsbCwidXNlcm5hbWUiOiLlk4jlk4jlk4jlpb3lpb3lpb0ifQ.Go3PfBGisTPKWGtdFNMbQAEna7HJn7HSRd4lUkM9aBl4uo0QjhdU5EpJyNkkKhdqWkheL0t79D53CV2GgtL39w",
  giveForm:{
    cmNum:0,
    phone:"",
    sendPeopleId:"",
    payPassword: ""
  }
}

const mutations = {
  changeUserId(state,userId){
    state.userId = userId
  },
  changeToken(state,token){
    state.token = token;
  },
  changeGiveForm(state,form){
    state.giveForm = form;
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store;
