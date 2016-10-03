var React = require('react');

var CustomBlends = React.createClass({
	render: function(){
		return(
			<div className='container'>
		        <p className='center'>
		        	From custom blend creations catering to your taste profile to specialized labels on the coffee bags, we'll work tirelessly to build a truly memorable coffee brand for your business or occasion.
		        </p>
		        <p className='center'>
		        	The following are custom labels used by some of our favorite business partners.
		        </p>
		        <div className='row'>
		            <div className='col s12 m4'>
	                    <div className='card'>
	                        <div className='card-image'>
	                            <img src='img/CustomBlends/Capitol.png'/>
	                        </div>
	                    </div>
		            </div>

		            <div className='col s12 m4'>
	                    <div className='card'>
	                        <div className='card-image'>
	                            <img src='img/CustomBlends/RetailMeNot.png'/>
	                        </div>
	                    </div>
		            </div>
		            <div className='col s12 m4'>
	                    <div className='card'>
	                        <div className='card-image'>
	                            <img src='img/CustomBlends/RoosterTeeth.png'/>
	                        </div>
	                    </div>
		            </div>
		        </div>
		        <div className='row'>
		        	<div className='customBlendCompanies'>
		        		<img src='img/CustomBlendCompanies/Dropbox.png' className='customBlendCompaniesFirstRowImages'/>
		        		<img src='img/CustomBlendCompanies/RoosterTeeth.png' className='customBlendCompaniesFirstRowImages' id='roosterTeethImage'/>
		        		<img src='img/CustomBlendCompanies/SFC.png' className='customBlendCompaniesFirstRowImages'/>
		            </div>
		        </div>
		    </div>
		)
	}
});

module.exports = CustomBlends;