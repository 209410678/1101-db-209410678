const serviceCrown2Controller_78 = require('./serviceCrown2Controller_78');

exports.createProducts = async(req,res) =>{
  console.log('body',req.body);
  //res.json('create body received')
  try {
    let results = await serviceCrown2Controller_78.create(req.body);
    console.log('results',JSON.stringify(results));
    res.json('data: {msg: creating success}');
  } catch(err){
  }
}

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_78.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_78/crown2_78', {
      data: results,
      title: 'Crown2_78',
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req,res) => {
  try {
    const data = await serviceCrown2Controller_78.getShop();
    res.render('crown_78/products_78', {
      data,
      title: 'ALL Products',
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  }catch(err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req,res) => {
  console.log('category',req.params.category)
  try {
    const data = await serviceCrown2Controller_78.getProductsByCategory(req.params.category);
    //console.log('getProductsByCategory',JSON.stringify(data));
    res.render('crown_78/products_78', {
      data,
      title: req.params.category,
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  }catch(err){
    res.status(404).json(err);
  }
}

exports.updateProducts = async(req,res) =>{
  console.log('body',req.body);
  //res.json('create body received')

  try {
    let results = await serviceCrown2Controller_78.update(req.body);
    console.log('results',JSON.stringify(results));
    res.json('data: {msg: updating successful}');
  } catch(err){

  }
}

exports.deleteProduct = async (req,rse) => {
  console.log('deleteProduct',req.params.id);
  try {
    await serviceCrown2Controller_78.deleteById(req.params.id)
    res.redirect('/crown2_78');
  }catch(err){
    console.log(err);
  }
}