import React, { useState } from "react";
// import { GlobalStyle } from "./styles"
// import Container from "./components/Container"
import './App.css';
import { Container, Button, H1, H2, H3, Results} from "./styles";

const App = () => {
  
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    const convert = (e) => {
        e.preventDefault();
        const formValid = !isNaN(+celsius);
        if (!formValid) {
            return;
        }
        setFahrenheit(+celsius * (9 / 5) + 32);
    }

    function Copyright() {
  return (
    <p className="copyright">
      Copyrights 2023 Katrina Ariola. All rights reserved.
    </p>
  );
}

    
    return (
        <>
            
            <Container>
                <H1>Temperature Converter</H1>
                <form onSubmit={convert}>
                    <Results>
                        <label>Degrees in Celsius</label>
                        <input value={celsius} onChange={(e) => setCelsius(e.target.value)} />
                    </Results>
                    <Button type="submit">convert to fahrenheit</Button>
                </form>
                <Results>

                <Results>
                    <H2>{celsius}</H2>
                    <H3>Celsius</H3>
                </Results>
                <H2>is</H2>
                <Results>
                  
                    <H2>{fahrenheit} </H2>
                    <H3>Fahrenheit</H3>
                </Results>
                </Results>

            </Container>
            <Copyright />
        </>
    )
}



export default App