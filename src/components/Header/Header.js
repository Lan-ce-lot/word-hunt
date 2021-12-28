/**
 * @FileName: Header.js
 * @Description: Every Saint has a past, every sinner has a future..
 * @Author: Lance
 * @Date: 2021/12/26 15:13
 */
import "./Header.css"
import React from "react"
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import countries from "../../data/category";
import {debounce} from "lodash";

const Header = ({
                  category, setCategory, word, setWord, setMeanings, LightTheme,
                }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
    setMeanings([]);
    setWord(word);
  };
  const handleText = debounce((text) => {
    setWord(text);
  }, 500);
  return (<div className="header">
    <span className="title">{word ? word : "Word Hunt"}</span>
    <div className="inputs">
      <TextField
        className="search"
        sx={{minWidth: "200px"}}
        label="Word"
        // value={word}
        onChange={(e) => handleText(e.target.value)}
      />
      <FormControl
        className="select"
        sx={{minWidth: "200px"}}
      >
        <InputLabel>Language
        </InputLabel>
        <Select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e)}
        >
          {countries.map((option) => (<MenuItem key={option.label} value={option.label}>
            {option.value}
          </MenuItem>))}
        </Select>
      </FormControl>
    </div>

  </div>)
}

export default Header
