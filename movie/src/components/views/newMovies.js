import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../../utils/constans";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MovieCatalog from "../MovieCatalog/MovieCatalog";
import Pagination from "../../components/Pagination";
import axios from "axios";

const NewMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=${page}`
        );
        const movies = response.data;
        setMovieList(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 23 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>Últimos estrenos</h1>
      </Col>
      {movieList.results ? (
        <Row>
          <Col span="24">
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span="24">
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </Row>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}
      <Col span="24">
        <Footer />
      </Col>
    </Row>
  );
};

export default NewMovies;
