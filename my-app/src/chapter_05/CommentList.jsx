import React from "react";
import Comment from "./Comment";

const comments = [
    {
        "name": "윤수지",
        "comment": "안녕하세요, 윤수지입니다."
    },
    {
        "name": "이민재",
        "comment": "이민재입니다."
    },
    {
        "name": "윤예서",
        "comment": "저는 예서에요"
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })};
        </div>
    );
}

export default CommentList;
