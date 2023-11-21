<template>
    <div>
        <p v-if="error">Une erreur s'est produite : {{ error.message }}</p>
        <!-- Autres éléments du composant -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: null
        };
    },
    methods: {
        fetchData() {
            try {
                // Code qui pourrait générer une erreur
            } catch (error) {
                this.error = error;
            }
        }
    }
};
</script>
  