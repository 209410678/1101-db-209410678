const Category_78 = require('../models/Category_78');

exports.getCategories = async (req,res) => {
    try {
        return await Category_78.fetchAll();
    } catch (err){
        console.log('getCategories',err);
    }
}