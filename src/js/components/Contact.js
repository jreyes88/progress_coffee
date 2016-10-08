var React = require('react');

var Contact = React.createClass({
	render: function(){
		return(
			<div className='container' id='contactSection'>
		        <form id='contact' action=''>

					<label htmlFor='name' id='name_label'>Name *</label>
					<label className='error' htmlFor='name' id='name_error'>this field is required</label>
					<br /> <input type='text' name='name' id='name' defaultValue='' className='text-input' placeholder='How should I call you?' />


					<br />
					<label htmlFor='email' id='email_label'>E-Mail *</label>
					<label className='error' htmlFor='email' id='email_error'>this field is required</label>
					<label className='error' htmlFor='email' id='email_invalid_error'>please insert a valid email</label>
					<br /> <input type='email' name='email' id='email' defaultValue='' className='text-input' placeholder='How can I reach you?' />


					<br />
					<label htmlFor='message'>Message *</label>
					<label className='error' htmlFor='message' id='message_error'>this field is required</label>
					<br /> <textarea name='message' id='message' rows='8' className='text-input' placeholder='What would you like to tell me?'></textarea>


					<br />
					<input name='submit' id='submit' defaultValue='Send me Mail!' type='submit' className='subbutton' />

				</form>
		    </div>
		)
	}
});

module.exports = Contact;