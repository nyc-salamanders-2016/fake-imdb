class MovieView extends React.Component {
	constructor(){
		super()
		this.state = {
			movie: []
		}
	}

	render() {
		let movie = this.props.movie
		return(
			<div>
				<h3>{movie.Title}</h3>
					<img src={movie.Poster}/><br/>
					{movie.Genre}<br/>
					{movie.Year}<br/>
					{movie.Plot}
			</div>
			)}
}
