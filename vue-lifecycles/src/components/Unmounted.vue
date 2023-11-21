<template>
    <section>
        <h2>Unmounted Component</h2>
    </section>
</template>

<script>
export default {
    unmounted() {
        // The component is removed (unmounted)!
        // This hook can for example be used to remove event listeners or cancelling timers or intervals.
    }
}
</script>