import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.scss";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=20"
    );

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  componentWillUnmount(){
    this.setState({movies: [], isLoading: true})
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            <h1 className="header">Bellamy Movie App</h1>
            <div className="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    url={movie.url}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
