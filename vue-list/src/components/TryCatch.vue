<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<script>
export default {
  created() {
    try {
      // Code qui pourrait générer une erreur
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message);
      // Autres actions à effectuer en cas d'erreur
    }
  }
};
</script>