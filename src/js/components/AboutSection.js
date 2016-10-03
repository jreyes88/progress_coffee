var React = require('react');

var AboutSection = React.createClass({
	render: function(){
		return(
			<div className="container">
		        <div className="section">
		        <h5 className="center" id="aboutProgress">
		            Our Story:
		        </h5>
		            <div className="row">
		                <div className="col s12 m12">
		                    <div className="icon-block">
		                        <p className="light center">
		                            Progress Coffee Roasting was birthed from a sweet little café on East 5th Street in Austin, Texas. Such a beautiful community grew and grew into a paragon of Progress that launched wonderful coffee roasted by wonderful people. Now you can be part of the Progress by ordering here at the online store and the life and vitality of our community will be delivered straight to your door.
		                        </p>
		                        <p className="light center">
		                            We emphasize environmental friendliness, make decisions and actions that positively impact our local communities and those not so local. We are blessed that we can do all this by roasting small batches of select beans at our boutique roasting facility in Austin, Texas!
		                        </p>
		                        <h6 className="center">
		                            Better <strong>coffee</strong>. Better <strong>life</strong>. Better <strong>world</strong>.
		                        </h6>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		)
	}
});

module.exports = AboutSection;