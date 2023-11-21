<template>
    <section>
        <h2 ref="title">Mounted Component</h2>
    </section>
</template>

<script>
export default {
    mounted() {
        console.log("mounted: this happenned juste when mounted");
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