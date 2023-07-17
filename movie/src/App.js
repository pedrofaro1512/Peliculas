import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Importación de componentes
import MenuTop from "./components/MenuTop";

//Importación de views
import Error404 from "./components/views/error404";
import Home from "./components/views/home";
import Movie from "./components/views/movie";
import NewMovies from "./components/views/newMovies";
import Popular from "./components/views/popular";
import Search from "antd/es/input/Search";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newMovies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
