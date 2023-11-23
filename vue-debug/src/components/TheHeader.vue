<template>
    <header>
        <h1>{{$route.meta.title}}</h1>
        <nav>
            <ul>
                <li><router-link :to="'/'">Home</router-link></li>
                <li><router-link :to="'/about'">About</router-link></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: "TheHeader",
}
</script>