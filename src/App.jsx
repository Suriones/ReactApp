import React, { useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import News from "./Components/News/News.jsx"
import Anime from "./Components/Anime/Anime.jsx"
import AnimeFullPageContainer from "./Components/Anime/AnimeBlock/AnimeFullPage/AnimeFullPageContainer.jsx";
import { Routes, Route } from "react-router-dom";

const App = (props) => {

    useEffect(() => {
        props.dispatch(props.animeBLL.getAll());
    }, [props.state.animeData.checkerUpdate]);

    useEffect(() => {
        props.dispatch(props.newsBLL.getAll());
    }, [props.state.newsData.checkerUpdate]);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<News news={props.state.newsData.news} dispatch={props.dispatch} newsBLL={props.newsBLL}/>} />
                <Route path="/anime" element={<Anime anime={props.state.animeData.anime} />} />
                <Route path="/anime/:animeId" element={<AnimeFullPageContainer animeData={props.state.animeData} dispatch={props.dispatch} commentsData={props.state.commentsData} animeBLL={props.animeBLL} commentsBLL={props.commentsBLL} />} />
            </Routes>
        </div>
    );
}

export default App;