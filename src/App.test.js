import { render,screen } from "../src/test-utils/testing-library-utils"
import '@testing-library/jest-dom'
import App from "./App"

describe("everything is ok", ()=>{
    test("App should be rendered", ()=>{
        render(<App/>)
        screen.getByText("powdery feeling.")
        expect(screen.getByText("Explore Products")).toBeInTheDocument()
        let error;
        try {
            screen.getByText("nothing")
        } catch (err) {
            error = err
        }
        expect(error).toBeDefined()
    })

})