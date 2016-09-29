var FluxCartActions = require('../actions/FluxCartActions');

var axios = require('axios');

module.exports = {

  // Load mock product data from localStorage into ProductStore via Action
  getProductData: function () {

  	return axios.get('/coffee')
  		.then(function(response){
  			console.log(response);
  			return(response);
  			FluxCartActions.receiveProduct(response);
  		})
  }

};