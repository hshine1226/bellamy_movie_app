import React from "react";

function MovieDetail(props) {
    console.log(props)
    return (
    <div className="movieDetail__container">
        <div className="movieDetail">
            <span>이 앱은 리액트로 만든 무비앱입니다.</span>
        </div>
    </div>
    )
}

export default MovieDetail;