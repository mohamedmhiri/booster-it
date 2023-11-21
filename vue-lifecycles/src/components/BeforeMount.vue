<template>
    <section>
        <h2 ref="title">Before Mount Component</h2>
    </section>
</template>

<script>
export default {
    beforeMount() {
        this.$refs["title"].addEventListener("mouseenter", () => {
            this.$refs["title"].classList = "green";
        });
    },
}
</script>
<style>
.green {
    background-color: green;
}
</style>