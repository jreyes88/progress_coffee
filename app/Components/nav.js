var React = require('react');

var Nav = React.createClass({
	render: function(){
		return(
			<nav className="white" role="navigation">
			    <div className="nav-wrapper container">
			        <a id="logo-container" href="#" className="brand-logo">
			            Progress Coffee
			        </a>
			        <ul className="right hide-on-med-and-down">
			            <li>
			                <a href="#ourStory">
			                    Our Story
			                </a>
			            </li>
			            <li>
			                <a href="#singleOrigin">
			                    Single Origin
			                </a>
			            </li>
			            <li>
			                <a href="#blends">
			                    Blends
			                </a>
			            </li>
			            <li>
			                <a href="#">
			                    Contact Us
			                </a>
			            </li>
			        </ul>

			        <ul id="nav-mobile" className="side-nav">
			            <li>
			                <a href="#ourStory">
			                    Our Story
			                </a>
			            </li>
			            <li>
			                <a href="#singleOrigin">
			                    Single Origin
			                </a>
			            </li>
			            <li>
			                <a href="#blends">
			                    Blends
			                </a>
			            </li>
			            <li>
			                <a href="#">
			                    <i className="material-icons">shopping_cart</i>
			                </a>
			            </li>
			        </ul>
			        <a href="#" data-activates="nav-mobile" className="button-collapse">
			            <i className="material-icons">menu</i>
			        </a>
			    </div>
			</nav>
		)
	}
});

module.exports = Nav;