import { Container } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"
import Home from "../../components/Home/Home"


const HomePage = () => {

    return (
        <Container className="homePage">
            <Navigation />
            <Home />
        </Container>
    )
}

export default HomePage