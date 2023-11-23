<template>
    <section>
        <h2 ref="title">Before Mount Component</h2>
    </section>
</template>

<script>
export default {
    beforeMount() {
        setTimeout(() => {
            this.$refs["title"].addEventListener("mouseenter", () => {
                this.$refs["title"].classList = "green";
            });
        }, 1000);
    },
}
</script>
<style>
.green {
    background-color: green;
}
</style>