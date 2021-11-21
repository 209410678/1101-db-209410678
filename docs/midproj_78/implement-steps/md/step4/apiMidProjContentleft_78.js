const servicemidprojContentleft_78 = require('./servicemidprojContentleft_78');

exports.getContentleft = async (req, res) => {
  try {
    const data = await servicemidprojContentleft_78.getContentleft();
    return res.json(data);
  } catch (err) {
    console.log('midprojContentleft getContentleft', err);
  }
};
