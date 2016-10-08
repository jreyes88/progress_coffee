var React = require('react');

var Nav = React.createClass({
	render: function(){
		return(
			<div className='navbar'>
				<nav className='black' role='navigation'>
				    <div className='nav-wrapper container'>
				        <a id='logo-container' href='#' className='brand-logo'>
				            Progress Coffee
				        </a>
				        <ul className='right hide-on-med-and-down'>
				            <li>
				                <a href='#featuredCoffee'>
				                    Featured Coffee
				                </a>
				            </li>
				            <li>
				                <a href='#customBlends'>
				                    Custom Blends
				                </a>
				            </li>
				            <li>
				                <a href='#contactSection'>
				                    Contact Us
				                </a>
				            </li>
				            <li>
				                <a href='#' className='snipcart-checkout'>
				                    <i className='material-icons'>shopping_cart</i>
				                </a>
				            </li>
				            <li className='snipcart-summary'>
			                    <span className='snipcart-total-price'></span>
				            </li>
				        </ul>

				        <ul id='nav-mobile' className='side-nav'>
				            <li>
				                <a href='#featuredCoffee'>
				                    Featured Coffee
				                </a>
				            </li>
				            <li>
				                <a href='#customBlends'>
				                    Custom Blends
				                </a>
				            </li>
				            <li>
				                <a href='#contactSection'>
				                    Contact Us
				                </a>
				            </li>
				            <li>
				                <a href='#'>
				                    <i className='material-icons'>shopping_cart</i>
				                </a>
				            </li>
				            <li className='snipcart-summary'>
			                    <span className='snipcart-total-price'></span>
				            </li>
				        </ul>
				        <a href='#' data-activates='nav-mobile' className='button-collapse'>
				            <i className='material-icons'>menu</i>
				        </a>
				    </div>
				</nav>
			</div>
		)
	}
});

module.exports = Nav;