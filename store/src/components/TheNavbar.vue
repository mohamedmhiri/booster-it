<template>
    <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand d-md-none" href="#">
            <svg class="bi" width="24" height="24"><use xlink:href="#aperture"/></svg>
            Aperture
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="#offcanvas" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="#offcanvasLabel">Aperture</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav flex-grow-1 justify-content-between">
                    <li class="nav-item">
                        <router-link :to="'/'" class="nav-link"><svg class="bi" width="24" height="24"><use xlink:href="#aperture"/></svg></router-link>
                    </li>
                    <nav-link
                        :key="index"
                        v-for="(link, index) in links"
                        :link="link"
                        :index="index"
                        @linkClick="onClickNavLink"
                    >
                    </nav-link>
                    <li class="nav-item">
                        <router-link :to="'/cart'" class="nav-link">
                            <svg class="bi" width="24" height="24"><use xlink:href="#cart"/></svg>
                        </router-link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
import NavLink from "./NavLink.vue";

export default {
    name: "TheNavbar",
    components: {
        NavLink
    },
    data() {
        return {
            links: [
                {color: "", label: "Tour", to: "/"},
                {color: "", label: "Product", to: "/product"},
                {color: "", label: "Pricing", to: "/pricing"},
            ]
        }
    },
    methods: {
        onClickNavLink(index) {
            for (let index = 0; index < this.links.length; index++) {
                this.links[index].color = "";
            }
            this.links[index].color = "nav-link-green";
        },
    }
}
</script>
<style>
.nav-link-green {
    color: green !important;
}
</style>