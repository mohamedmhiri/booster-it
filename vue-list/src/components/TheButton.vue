<template>
    <button v-on:click="handleClick">Cliquez-moi</button>
</template>

<script>
export default {
methods: {
    handleClick() {
        try {
            // Code qui pourrait générer une erreur
        } catch (error) {
            console.error("Une erreur s'est produite lors du clic :", error);
            // Autres actions à effectuer en cas d'erreur
        }
    }
}
};
</script>
  