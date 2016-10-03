var React = require('react');

var CustomBlends = React.createClass({
	render: function(){
		return(
			<div className="container">
		        <h5 className="center" id="blends">
		            Custom blends:
		        </h5>
		        <div className="row">
		            <div className="col s12 m4">
	                    <div className="card">
	                        <div className="card-image">
	                            <img src="img/CustomBlends/Capitol.png"/>
	                        </div>
	                        <div className="card-content">
	                            <span className="card-title activator grey-text text-darken-4">
	                                Capitol Premium Blend
	                                <i className="material-icons right">more_vert</i>
	                            </span>
	                            <button
								    className="snipcart-add-item waves-light btn"
								    data-item-id="2"
								    data-item-name="Cowboy"
								    data-item-price="12.99"
								    data-item-weight="16"
								    data-item-url="/"
								    data-item-custom2-options="Whole Bean|French Press|Drip Machine|Espresso Machine|Cone Filter">
								        Add to Cart
								</button>
	                        </div>
	                        <div className="card-reveal">
	                            <span className="card-title grey-text text-darken-4">
	                                Cowboy Blend
	                                <i className="material-icons right">close</i>
	                            </span>
	                            <p>
	                                Medium body, a slight hint of cream mixes with under tones of peanut butter to create a smooth and pleasant cup with a sweet finish.
	                            </p>
	                            <p>
	                                A simple and strong coffee for the Cowboy in all of us...
	                            </p>
	                            <p>
	                                Both strong and brave, rustic and wild, bold and brooding- this special blend is meant for a cup long before sunrise or just as the day breaks on the prairie.
	                            </p>
	                        </div>
	                    </div>
		            </div>

		            <div className="col s12 m4">
	                    <div className="card">
	                        <div className="card-image">
	                            <img src="img/CustomBlends/RetailMeNot.png"/>
	                        </div>
	                        <div className="card-content">
	                            <span className="card-title activator grey-text text-darken-4">
	                                Mohawk Blend
	                                <i className="material-icons right">more_vert</i>
	                            </span>
	                            <button
								    className="snipcart-add-item waves-light btn"
								    data-item-id="2"
								    data-item-name="Mohawk"
								    data-item-price="12.99"
								    data-item-weight="16"
								    data-item-url="/"
								    data-item-custom2-options="Whole Bean|French Press|Drip Machine|Espresso Machine|Cone Filter">
								        Add to Cart
								</button>
	                        </div>
	                        <div className="card-reveal">
	                            <span className="card-title grey-text text-darken-4">
	                                Mohawk Blend
	                                <i className="material-icons right">close</i>
	                            </span>
	                            <p>
	                                An exclusive blend done for and with the greatest rock and roll bar on the planet -- <a href="http://www.mohawkaustin.com">The Mohawk</a>
	                            </p>
	                        </div>
	                    </div>
		            </div>
		            <div className="col s12 m4">
	                    <div className="card">
	                        <div className="card-image">
	                            <img src="img/CustomBlends/RoosterTeeth.png"/>
	                        </div>
	                        <div className="card-content">
	                            <span className="card-title activator grey-text text-darken-4">
	                                House Blend
	                                <i className="material-icons right">more_vert</i>
	                            </span>
	                            <button
								    className="snipcart-add-item waves-light btn"
								    data-item-id="11"
								    data-item-name="House"
								    data-item-price="12.99"
								    data-item-weight="16"
								    data-item-url="/"
								    data-item-custom2-options="Whole Bean|French Press|Drip Machine|Espresso Machine|Cone Filter">
								        Add to Cart
								</button>
	                        </div>
	                        <div className="card-reveal">
	                            <span className="card-title grey-text text-darken-4">
	                                House Blend
	                                <i className="material-icons right">close</i>
	                            </span>
	                            <p>
	                                Medium body and well rounded. Vanilla and chocolate malt with a blackberry like acidity in the finish to cleanse the palate.
	                            </p>
	                        </div>
	                    </div>
		            </div>
		        </div>
		    </div>
		)
	}
});

module.exports = CustomBlends;