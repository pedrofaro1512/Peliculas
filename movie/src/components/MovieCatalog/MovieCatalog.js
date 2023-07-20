import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

//Importación de estilo
import "./MovieCatalog.scss";

export default function MovieCatalog(props) {
  const {
    movies: { results },
  } = props;

  const moviesInRows = chunkArray(results, 6);

  return (
    <div>
      {moviesInRows.map((movieRow, index) => (
        <Row key={index} gutter={[16, 16]} style={{ marginBottom: "16px" }}>
          {movieRow.map((movie) => (
            <Col key={movie.id} xs={24} sm={12} md={8} lg={4}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

// Función para dividir el array en grupos de tamaño "size"
function chunkArray(arr, size) {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
}

function MovieCard(props) {
  const {
    movie: { id, title, poster_path },
  } = props;
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 200 }}
        cover={<img src={posterPath} alt={title} />}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
