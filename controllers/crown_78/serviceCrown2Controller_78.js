const Category_78 = require('../../models/crown_78/Category_78');
const Shop_78 = require('../../models/crown_78/Shop_78')


exports.create = async (body) => {
  try {
    return await Shop_78.create(body);
  } catch(err){
    console.log('create',err);
  }
};


exports.getCategories = async (req, res) => {
  try {
    return await Category_78.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req,res) => {
  try {
    return await Shop_78.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
  console.log('service',category);
  
  try{
    const cid = await Category_78.fetchCatIdByName(category);
    const results= await Shop_78.fetchByCatId(cid);
    return results;
    // console.log('sevv getProductsByCategory',JSON.stringify(results))
  }catch(err){
    console.log(err);
  }
}

exports.update = async (body) => {
  try {
    return await Shop_78.updateById(body);
  } catch(err){
    console.log('update',err);
  }
};