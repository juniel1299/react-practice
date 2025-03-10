import { useState } from "react";

const Comment = () => {
    const [comments, setComments] = useState([]); // 댓글 목록을 저장할 상태
    const [name, setName] = useState(""); // 작성자명
    const [description, setDescription] = useState(""); // 댓글 내용

    // 댓글 추가 함수
    const addComment = () => {
        if (name.trim() === "" || description.trim() === "") {
            alert("이름과 내용을 모두 입력해주세요.");
            return;
        }

        // 새로운 댓글 추가
        const newComment = { id: Date.now(), name, description };
        setComments([...comments, newComment]);

        // 입력 필드 초기화
        setName("");
        setDescription("");
    };

    return (
        <div className="CommentSection">
            <h2>댓글</h2>
            
            {/* 입력 필드 */}
            <div className="comment-input">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="작성자명" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="댓글 내용" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={addComment}>등록</button>
            </div>

            {/* 댓글 리스트 출력 */}
            <div className="comment-list">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="comment">
                            <p><strong>{comment.name}</strong></p>
                            <p>{comment.description}</p>
                        </div>
                    ))
                ) : (
                    <p>아직 댓글이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default Comment;