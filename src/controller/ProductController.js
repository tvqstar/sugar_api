const ProductService = require('../services/ProductService');
const Product = require('../model/ProductModel');

const createProduct = async (req, res) => {
    try {
        const { name, image, countInStock, price, favourite, rating, description } = req.body;

        if (!name || !image || !countInStock || !price || !rating || !description || !favourite) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required',
            });
        }
        const response = await ProductService.createProduct(req.body);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const allProduct = await Product.find();
        return res.status(200).json(allProduct);
    } catch (error) {
        return res.status(404).json({
            message: e,
        });
    }
};

module.exports = {
    createProduct,
    getAllProduct,
};
