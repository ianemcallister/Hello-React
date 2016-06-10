var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'This is a form component'
		};
	},
	render: function() {
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1>Hello {name}!</h1>
				<p>{message}</p>
			</div>
		);
	}
});

var firstName = 'Edward';

ReactDOM.render(
	<Greeter name={firstName} />,
	document.getElementById('app')
);