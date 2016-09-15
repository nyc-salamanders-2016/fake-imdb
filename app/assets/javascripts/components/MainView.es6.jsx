class MainView extends React.Component {
	constructor(){
		super()
		this.state = {
			movie: []
		}
		this.newSearchResults = this.newSearchResults.bind(this);
	}

	newSearchResults(results) {
		this.setState({
			movie: results
		})
	}	

	render() {
		return (
			<div id="show-movie">
				<header id="header">fake imdb</header>
				<section id="search-field">
					<SearchView searchedMovie={this.newSearchResults}/>
				</section>
					<MovieView movie={this.state.movie}/>
			</div>
			)
	}
}
