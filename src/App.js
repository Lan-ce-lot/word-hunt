import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Container from '@mui/material/Container';
import Header from './components/Header/Header'
import {createTheme, Switch} from "@mui/material";
import {withStyles} from "@mui/styles"
import {ThemeProvider} from "@emotion/react";
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";


function App() {

  // var LightTheme = false;
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  const [LightTheme, setLightTheme] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: LightTheme ? "light" : "dark",
    },
    type: LightTheme ? "light" : "dark",
  });

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )
      console.log(data.data)
      setMeanings(data.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    dictionaryApi();
  }, [word, category])
  const PurpleSwitch = withStyles({
    switchBase: {
      color: '#fafafa',
      "&$checked": {
        color: '#212121',
      },
      "&$checked + $track": {
        backgroundColor: '#9e9e9e',
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: LightTheme ? "#fff" : "#0a1929",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear",
      }}>
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="md"
                   style={{
                     display: "flex",
                     flexDirection: "column",
                     height: "100vh",
                     justifyContent: "space-evenly",
                   }}>
          <div
            style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
          >
            <span>{LightTheme ? "Dark" : "Light"} Mode</span>
            <PurpleSwitch
              checked={LightTheme}
              onChange={() => setLightTheme(!LightTheme)}
            />
          </div>
          <Header
            setWord={setWord}
            category={category}
            setCategory={setCategory}
            word={word}
            setMeanings={setMeanings}
            LightTheme={LightTheme}/>
          <Definitions
            meanings={meanings}
            word={word}
            LightTheme={LightTheme}
            category={category}
          />
        </Container>
        <Footer LightTheme={LightTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
