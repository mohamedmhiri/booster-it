<template>
    <section>
        <h2>Before Create Component</h2>
        <p>{{ text }}</p>
    </section>
</template>

<script>
export default {
	data() {
		return {
			text: 'will not change'
		}
	},
    beforeCreate() {
        this.text = 'changed'; // This line has no effect
        console.log("beforeCreate: The component is not created yet.");
    }
}
</script>