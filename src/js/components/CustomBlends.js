var React = require('react');

var CustomBlends = React.createClass({
	render: function(){
		return(
			<div className='container'>
		        <p className='center'>
		        	From custom blend creations catering to your taste profile to specialized labels on the coffee bags, we'll work tirelessly to build a truly memorable coffee experience that highlights your business or occasion.
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
		        	<div className='col s12 m3'>
		        		<img src='img/CustomBlendCompanies/Dropbox.png' className='customBlendCompaniesFirstRowImages'/>
		        	</div>
		        	<div className='col s12 m3'>
		        		<img src='img/CustomBlendCompanies/RoosterTeeth.png' id='roosterTeethImage' className='customBlendCompaniesFirstRowImages'/>
		        	</div>
		        	<div className='col s12 m3'>
		        		<img src='img/CustomBlendCompanies/SFC.png' className='customBlendCompaniesFirstRowImages'/>
		        	</div>
		        	<div className='col s12 m3'>
		        		<img src='img/CustomBlendCompanies/HelmBoots.png' className='customBlendCompaniesFirstRowImages' id='helmBootsImage'/>
		        	</div>
		        	<div className='col s12 m4'>
		        		<img src='img/CustomBlendCompanies/RetailMeNot.png' className='customBlendCompaniesSecondRowImages' id='retailMeNotImage'/>
		        	</div>
		        	<div className='col s12 m4'>
		        		<img src='img/CustomBlendCompanies/UrbanSpace.png' className='customBlendCompaniesSecondRowImages'/>
		        	</div>
		        	<div className='col s12 m4'>
		        		<img src='img/CustomBlendCompanies/BirdsBarberShoppppp.png' className='customBlendCompaniesSecondRowImages' id='birdsBarbershopImage'/>
		        	</div>
		        </div>
		    </div>
		)
	}
});

module.exports = CustomBlends;