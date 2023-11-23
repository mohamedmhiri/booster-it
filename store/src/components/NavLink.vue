<template>
    <li class="nav-item" @click="emitLinkClick">
        <router-link :to="link.to" class="nav-link" :class="link.color">
            {{ link.label }}
        </router-link>
    </li>
</template>
<script>
export default {
    name: "NavLink",
    props: {
        link: {
            type: Object
        },
        index: {
            type: Number
        }
    },
    methods: {
        emitLinkClick() {
            this.$emit("linkClick", this.index);
        }
    }
}
</script>
<style>
.nav-link-green {
    color: green !important;
}
</style>