<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Login</h3>

                        <!-- Login Form -->
                        <form>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input
                                    v-model="user.username"
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    name="username"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    v-model="user.password"
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    name="password"
                                    required
                                >
                            </div>

                            <div class="d-grid">
                                <button
                                    @click="login"
                                    type="button"
                                    class="btn btn-primary btn-block"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <!-- End Login Form -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            localStorage.setItem("user", JSON.stringify(this.user));
            
        }
    }
}
</script>