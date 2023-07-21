import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../../components/MovieCatalog";
import Footer from "../../Footer/Footer";
import { URL_API, API } from "../../../utils/constans";
import axios from "axios";

// Importación de estilos
import "./Search.scss";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;

      try {
        if (s) {
          const response = await axios.get(
            `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
          );
          const movies = response.data;

          setMovieList(movies);
        } else {
          setMovieList([]);
        }
        setSearchValue(s);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [location.search]);

  const onChangeSearch = (event) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = event.target.value;
    navigate(`?${queryString.stringify(urlParams)}`);
    setSearchValue(event.target.value);
  };

  return (
    <Row>
      <Col span={24} offset={6} className="search">
        <h1>Busca tu película</h1>
        <Input
          value={searchValue}
          onChange={onChangeSearch}
          placeholder="Escribe el nombre de la película"
        />
      </Col>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList} />
          </Col>
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
};

export default Search;
