<template>
    <section>
        <h2>Created Component</h2>
        <p>{{ text }}</p>
    </section>
</template>

<script>
export default {
	data() {
		return {
			text: 'will be changed'
		}
	},
    created() {
        this.text = 'changed'; // This line has no effect
        console.log("created: The component just got created.");
    }
}
</script>