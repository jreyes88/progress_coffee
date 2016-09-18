var React = require('react');
var ReactDOM = require('react-dom');

var Nav = require('./Components/nav.js');
var AboutSection = require('./Components/aboutProgress.js');
var SingleOriginsSection = require('./Components/singleOrigins.js');
var Blends = require('./Components/blends.js');
var Footer = require('./Components/footer.js');

ReactDOM.render(

	<div classNameName='main-container'>
			<Nav />

		    <div id="index-banner" className="parallax-container">
		        <div className="parallax">
		            <img src="images/parallax_backgrounds/01-raw_beans.jpg" alt="Raw Coffee Beans"/>
		        </div>
		    </div>

		    <AboutSection />

		    <div className="parallax-container valign-wrapper">
		        <div className="parallax">
		            <img src="images/parallax_backgrounds/02-roasted_beans.jpg" alt="Roasted Coffee Beans"/>
		        </div>
		    </div>

		    <SingleOriginsSection />

		    <div className="parallax-container valign-wrapper">
		        <div className="parallax">
		            <img src="images/parallax_backgrounds/03-finished_bags.jpg" alt="Finished Coffee Bags"/>
		        </div>
		    </div>

		    <Blends />

		    <div className="parallax-container valign-wrapper">
		        <div className="section no-pad-bot">
		            <div className="container">
		                <div className="row center">
		                    <h5 className="header col s12 light">
		                        A modern responsive front-end framework based on Material Design
		                    </h5>
		                </div>
		            </div>
		        </div>
		        <div className="parallax">
		            <img src="images/parallax_backgrounds/04-cup_of_coffee.jpg" alt="Steaming Cup of Coffee"/>
		        </div>
		    </div>

		    <Footer />

	</div>,
	document.getElementById('app')
)