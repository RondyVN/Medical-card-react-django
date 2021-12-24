import {render, screen} from "@testing-library/react";
import CommentsPanel from "../components/RightPanel/Comments/CommentsPanel";
import {Patients} from "../context";

const comments = [
    {
        "id": 45,
        "comment": "Hello",
        "date_create": "2021-12-21",
        "comment_id": 92
    },
    {
        "id": 46,
        "comment": "Nazar privet",
        "date_create": "2021-12-21",
        "comment_id": 92
    },
    {
        "id": 47,
        "comment": "How are you",
        "date_create": "2021-12-21",
        "comment_id": 92
    }
]

describe('Comment', () => {
    test('List comments', () => {
        render(<CommentsPanel comments={comments}/>)

        expect(screen.getByText(/Hello/i))
    })

    test('List comments empty', () => {
        render(<CommentsPanel/>)
        expect(screen.getByText(/There are no comments yet/i))
        expect(screen.queryByRole('list')).toBeNull()
    })

})