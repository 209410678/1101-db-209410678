const serviceCrown2Controller_78 = require('../controllers/serviceCrown2Controller_78');

exports.getCategories = async (req,res) => {
    try{
        let results = await serviceCrown2Controller_78.getCategories();
        console.log('results',JSON.stringify(results));
        res.render('crown2_78', { 
            data: results,
            title: 'Crown2_78', 
            name: '鄭芷琳', 
            id: '209410678' 
        });
    }catch(err){
        console.log('crown2Controller getCategories',err);
    }
}