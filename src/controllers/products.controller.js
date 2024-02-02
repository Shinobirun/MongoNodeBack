import Product from '../models/Products'


export const createProducts= async (req,res) => {
    
    const {name, category, price, imgURL}=req.body

    const newProduct = new Product({name,category,price,imgURL});

    const productSaved = await newProduct.save();
    res.status(201).json(productSaved)

}


export const getProducts= async (req,res) => {
    const products = await Product.find();
    res.json(products)
}

export const getProductById= (req,res) => {
    const product = Product.findById(req.params.productId);
    req.status(200).json(product)

}

export const updateProductById= async (req,res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    });
    res.status(200).json(updatedProduct)


}

export const deleteProductById= async (req,res) => {
    const{productId} = req.params;
    await Product.findByIdAndDelete(productId);
    request.status(204).json()

}