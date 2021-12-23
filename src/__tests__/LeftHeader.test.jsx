import {render, screen} from "@testing-library/react";
import LeftHeader from "../components/Headers/LeftHeader";


describe('Left Header', () => {
    test('Input and button', () => {
        render(<LeftHeader filter={{query: 'hello'}}/>)

        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()
    })
})