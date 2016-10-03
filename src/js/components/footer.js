var React = require('react');

var Footer = React.createClass({
	render: function(){
		return(
			<footer className="page-footer teal">
		        <div className="container">
		            <div className="row">
		                <div className="col l6 s12">
		                    <h5 className="white-text">
		                        Progress Coffee
		                    </h5>
		                <ul>
		                    <li>
		                        <p className="white-text">
		                            3421 North IH35 | Austin TX 78722
		                        </p>
		                    </li>
		                    <li>
		                        <p className="white-text">
		                            info@progresscoffeeroasting.com
		                        </p>
		                    </li>
		                    <li>
		                        <p className="white-text">
		                            512-334-9211
		                        </p>
		                    </li>
		                </ul>
		                </div>
		            </div>
		        </div>
		        <div className="footer-copyright">
		            <div className="container">
		            	<div className="row">
		            		<div className="col l6 s12">
				                <p>
				                    {String.fromCharCode(169) + ' 2016 Progress Coffee'}
				                </p>
				            </div>
				            <div className="col l6 s12">
				            	<a href="https://twitter.com/progresscoffee/">
			                		<img src="img/SocialMedia/TwitterIcon.png" className="socialMediaIcons" alt="Twitter Icon"/>
			                	</a>
			                	<a href="https://www.instagram.com/progresscoffee/">
			                		<img src="img/SocialMedia/InstagramIcon.png" className="socialMediaIcons" alt="Instagram Icon"/>
			                	</a>
			                	<a href="https://www.facebook.com/progresscoffee/">
				                	<img src="img/SocialMedia/FacebookIcon.png" className="socialMediaIcons" alt="Facebook Icon"/>
				                </a>
			                </div>
		                </div>
		            </div>
		        </div>
		    </footer>
		)
	}
});

module.exports = Footer;