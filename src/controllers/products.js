class ProductsController {
  constructor(Product) {
    this.Product = Product;
  };

  get(req, res) {
    return this.Product.find({})
      .then(products => res.send(products));
  }
}

export default ProductsController;