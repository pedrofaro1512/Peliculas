import React from "react";
import { Row, Col } from "antd";
import useFetch from "../../hooks/useFetch";
import { URL_API, API } from "../../utils/constans";
import SliderMovies from "../SliderMovies/SliderMovies";
import MovieList from "../MovieList/MovieList";

const Home = () => {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );
  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-ES&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Películas populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList
            title="Películas mejor puntuadas"
            movies={topRatedMovies}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
