const serviceCrown2Controller_78 = require('../controllers/serviceCrown2Controller_78');

exports.getCategories = async (req,res) => {
    try{
        const data = await serviceCrown2Controller_78.getCategories();
        return res.json(data);
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}