const serviceCrown2Controller_xx = require('./serviceCrown2Controller_xx');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_xx.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_xx/crown2_xx', {
      data: results,
      title: 'Crown2_xx',
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req,res) => {
  try {
    const data = await serviceCrown2Controller_xx.getShop();
    res.render('crown_xx/products_xx', {
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
    const data = await serviceCrown2Controller_xx.getProductsByCategory(req.params.category);
    //console.log('getProductsByCategory',JSON.stringify(data));
    res.render('crown_xx/products_xx', {
      data,
      title: req.params.category,
      name: 'Hsingtai Chung',
      id: `123456789`,
    });
  }catch(err){
    res.status(404).json(err);
  }
}