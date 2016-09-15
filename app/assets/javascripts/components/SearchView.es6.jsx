class SearchView extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		var title = this.refs.title.value,
			searchContent = this.refs.title;
			$.ajax({
				method: 'GET',
				url: `http://www.omdbapi.com/?t=${title}&y=&plot=full&r=json`
			}).done((response) => {this.props.searchedMovie(response);
				searchContent.value = ""})
	}

	render() {
		return (
			<div>
				<p>search the database!</p>
				<form onSubmit={this.handleSubmit}>
					<input ref="title" type='text' name='query'/>
					<input type="submit" value="search"/>
				</form>
			</div>
			)
	}
}

