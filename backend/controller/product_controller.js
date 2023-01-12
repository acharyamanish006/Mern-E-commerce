const Product = require("../models/Product.js");
const User = require("../models/User.js");

const add_product = async (req, res) => {
  const { name, price } = req.body;
  try {
    let new_product = await Product.create({
      name: name,
      price: price,
    });

    res.json({
      success: true,
      new_product,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
const get_product = async (req, res) => {
  const product_id = req.params.id;
  console.log(id);
  try {
    let product = await Product.findById(product_id);

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
const get_allProduct = async (req, res) => {
  try {
    await Product.find().then((product) => {
      res.json({
        success: true,
        product,
      });
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
const delete_product = async (req, res) => {
  const product_id = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(product_id);

    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
const update_product = async (req, res) => {
  const product_id = req.params.id;
  const { name, price } = req.body;
  try {
    let product = await Product.findById(product_id);
    if (name != null) {
      product.name = name;
    }
    if (price != null) {
      product.price = price;
    }
    await product.save();
    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const add_toCart = async (req, res) => {
  const product_id = req.params.id;
  try {
    const user_id = req.user._id;
    const user = await User.findById(user_id).populate("myCart");
    const { myCart } = user;

    for (let data of myCart) {
      if (data._id == product_id) {
        return res.json({
          success: false,
          message: "product is already in cart",
        });
      }
    }
    myCart.push(product_id);
    await user.save();

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

const add_toWishList = async (req, res) => {
  const product_id = req.params.id;
  try {
    const user_id = req.user._id;
    const user = await User.findById(user_id).populate("myWishList");
    const { myWishList } = user;

    for (let data of myWishList) {
      if (data._id == product_id) {
        return res.json({
          success: false,
          message: "product is already in wishlist",
        });
      }
    }

    myWishList.push(product_id);
    await user.save();

    res.json({
      success: true,
      user,
    });

    // myWishList.map(async (data) => {
    //   // console.log(data._id);
    //   if (data._id == product_id) {
    //     return res.json({
    //       success: false,
    //       message: "product is already in wishlist",
    //     });
    //   } else {
    //     myWishList.push(product_id);
    //     await user.save();

    //     res.json({
    //       success: true,
    //       user,
    //     });
    //   }
    // });

    // console.log(myWishList);
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  add_product,
  get_allProduct,
  get_product,
  delete_product,
  update_product,
  add_toCart,
  add_toWishList,
};
