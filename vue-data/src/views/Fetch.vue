<template>
    <main>
        <h1>Patients</h1>
        <ul>
            <li
                v-for="patient in patientsComputed"    
            >
                {{ patient.fullName }}
            </li>
        </ul>
    </main>
</template>
<script>
export default {
    name: "Fetch",
    data() {
        return {
            patients: []
        }
    },
    methods: {
        fullName(patient) {
            return `${patient.firstName} ${patient.lastName}`;
        }
    },
    computed: {
        patientsComputed() {
            return this.patients.map((patient) => {
               patient.fullName = `${patient.firstName} ${patient.lastName}`;
               return patient;
            });
        }
    },
    created() {
        fetch("https://dummyjson.com/users")
            .then((result) => {
                // check api result?
                return result.json();
            })
            .then((result) => {
                console.log(result);
                this.patients = result.users;
            });
    }
}
</script>