<template>
    <!-- <the-main></the-main> -->
    <section class="bg-light">
        <div class="container">
            <h2 class="text-center mt-4">Pricing Plans</h2>
            <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">Basic</h5>
                            <h6 class="card-price text-center">$19.99<span class="period">/month</span></h6>
                            <hr>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Feature 1</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Feature 2</li>
                                <li><span class="fa-li"><i class="fas fa-check"></i></span>Feature 3</li>
                                <!-- Add more features as needed -->
                            </ul>
                            <a href="#" class="btn btn-block btn-primary text-uppercase">Buy it now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4"></div>
                <!-- Repeat the above card structure for additional pricing plans -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Pricing",
}
</script>