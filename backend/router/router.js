const express = require("express");
const {
  add_product,
  get_product,
  get_allProduct,
  delete_product,
  update_product,
  add_toCart,
  add_toWishList,
} = require("../controller/product_controller");
const { sign_in, sign_up, sign_out } = require("../controller/user_controller");
const Auth = require("../middleware/Auth");
const router = express.Router();

// login routes
router.route("/sign/in").post(sign_in);
router.route("/sign/up").post(sign_up);
router.route("/sign/out").get(Auth, sign_out);

//product routes
router.route("/add/product").post(Auth, add_product);
router.route("/get/all/product").get(Auth, get_allProduct);
router.route("/get/product/cart/:id").get(Auth, add_toCart);
router.route("/get/product/wishlist/:id").get(Auth, add_toWishList);
router
  .route("/product/:id")
  .get(Auth, get_product)
  .delete(Auth, delete_product)
  .patch(Auth, update_product);

module.exports = router;
