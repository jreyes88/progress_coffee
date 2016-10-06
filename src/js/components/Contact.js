var React = require('react');

var Contact = React.createClass({
	render: function(){
		return(
			<div className='container'>
		        <form id="contact" action="">

					<label for="name" id="name_label">Name *</label>
					<label className="error" for="name" id="name_error">this field is required</label>
					<br /> <input type="text" name="name" id="name" value="" className="text-input" placeholder="How should I call you?" />


					<br />
					<label for="email" id="email_label">E-Mail *</label>
					<label className="error" for="email" id="email_error">this field is required</label>
					<label className="error" for="email" id="email_invalid_error">please insert a valid email</label>
					<br /> <input type="email" name="email" id="email" value="" className="text-input" placeholder="How can I reach you?" />


					<br />
					<label for="message">Message *</label>
					<label className="error" for="message" id="message_error">this field is required</label>
					<br /> <textarea name="message" id="message" rows="8" className="text-input" placeholder="What would you like to tell me?"></textarea>


					<br />
					<input name="submit" id="submit" value="Send me Mail!" type="submit" className="subbutton" />

				</form>
		    </div>
		)
	}
});

module.exports = Contact;