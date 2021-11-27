import Input from "../../UI/myinput/Input";
import MyButton from "../../UI/button/MyButton";
import {AddComment} from "../../utils/AddComment";

const SendComment = ({create, comment, setComment}) => {

    const addComment = async (e) => {
        e.preventDefault()
        AddComment(comment, setComment, create)
    }


    return (
        <div className="send-comment">
            <div className="input-sendMessage">
                <Input type="textarea" value={comment.comment}
                       onChange={e => setComment({...comment, "comment": e.target.value})}/>
            </div>
            {comment.comment
                ? <MyButton disabled={false} onClick={addComment}>Send comment</MyButton>
                : <MyButton disabled={true} onClick={addComment}>Send comment</MyButton>
            }
        </div>
    );
};

export default SendComment;