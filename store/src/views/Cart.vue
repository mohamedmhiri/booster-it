<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8">
                <h2>Your Shopping Cart</h2>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- Sample Product 1 -->
                    <tr>
                        <td>Product 1</td>
                        <td>$19.99</td>
                        <td>2</td>
                        <td>$39.98</td>
                        <td><button class="btn btn-sm btn-danger">Remove</button></td>
                    </tr>

                    <!-- Sample Product 2 -->
                    <tr>
                        <td>Product 2</td>
                        <td>$29.99</td>
                        <td>1</td>
                        <td>$29.99</td>
                        <td><button class="btn btn-sm btn-danger">Remove</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Cart Summary</h4>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Subtotal
                                <span>$69.97</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Shipping
                                <span>$5.00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Total
                                <span>$74.97</span>
                            </li>
                        </ul>
                        <button class="btn btn-primary btn-block mt-3">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Cart"
}
</script>