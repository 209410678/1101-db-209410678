const servicemidprojContentleft_78 = require('./servicemidprojContentleft_78');

exports.getContentleft = async (req, res) => {
  try {
    let results = await servicemidprojContentleft_78.getContentleft();
    console.log('results', JSON.stringify(results));
    res.render('midproj_78/theme_78', {
      data: results,
      title: 'Express',
      name: 'Hsingtai Chung',
      id: '123456789',
    });
  } catch (err) {
    console.log('midprojContentleft getContentleft', err);
  }
};
