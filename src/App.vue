<template>
  <div id="app">
      <h1><center>Welcome to tasks</center></h1>
      <br>
      <div id="creatediv">
        <label class="lab">Create Task :</label>
        <input id="input1" type="text" v-model="name" @keyup.enter="addName">
        <button id="createbtn" @click="addName">Finish</button>  
      </div>
      <br>
      <div>
        <ul class="ulmain">
          <li id="displayer" v-for="(personName,key) in names" :key="key">
            <div>
              <h4>{{personName.name}}</h4>
              <button class="editbtn" @click="editName(key)">Edit</button>
              <input class="editinput" type="text" v-model="editForm[key]" @keyup.enter=editName(key)>
              <button class="delbtn" @click="delName(key)">Delete</button>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {namesRef} from './firebase'
import {db} from './firebase'
export default {
  name: 'app',
  data () {
    return {
      name:null,
      names:{},
      editForm:[]
    }
  },
  created(){
      namesRef.on('value',(snapshot)=>{
          console.log(snapshot.val());
          this.names=snapshot.val();
      });

  },
  methods:{
    addName(){
      namesRef.push({name:this.name});
    },
    editName(key){
      db.ref('names/'+key).set({
        name:this.editForm[key]
      });
    },  
    delName(key){
      namesRef.child(key).remove();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2em;
}
.lab{
  right:4em;
}

h1, h2 {
  font-weight: normal;
}

.ulmain {
  
  display: grid;
  
  padding: 0;
}

#displayer{
  
  margin-right: 1em;
}

a {
  color: #42b983;
}
</style>
