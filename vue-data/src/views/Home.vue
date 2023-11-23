<template>
    <div>
        <h1>Liste d'étudiants</h1>
        <label for="name">Nom de l'étudiant</label>
        <input type="text" id="name" v-model="name">
        <button @click="addStudent">Ajouter un étudiant</button>
        <ul>
            <li
                v-for="item in users"
            >
                <input type="text" v-model="item.name">
                <button 
                    type="button" 
                    @click="editStudent(item)">
                    Modifier l'étudiant
                </button>
                <button 
                    type="button" 
                    @click="deleteStudent(item)">
                    Supprimer l'étudiant
                </button>
            </li>
        </ul>
    </div>

</template>
<script>
import axios from "axios";

export default {
    name: "Home",
    data() {
        return {
            users: [],
            name: ""
        }
    },
    beforeMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                this.users = result.data;
            });
            
    },
    methods: {
        addStudent() {
            //this.users.push({name: this.name});
            axios
                .post("https://jsonplaceholder.typicode.com/users", {name: this.name})
                .then((result) => {
                    this.users.push(result.data);
                });
            this.name = "";
        },
        editStudent(user) {
            axios
                .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, {name: user.name})
                .then((result) => {
                    console.log(result.data)
                });
        },
        deleteStudent(user) {
            axios
                .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                .then(() => {
                    this.users = this.users.filter((item) => item.id != user.id);
                });
        }
    }
}
</script>