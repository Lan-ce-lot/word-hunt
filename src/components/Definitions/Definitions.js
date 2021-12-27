/**
 * @FileName: Definitions
 * @Description: Every Saint has a past, every sinner has a future..
 * @Author: Lance
 * @Date: 2021/12/26 17:23
 */

import React from "react"
import "./Definitions.css"

const Definitions = ({ meanings, word, LightTheme, category }) => {
  return (
    <div className="meanings" style={{backgroundColor: LightTheme? "#e8f4ff":"#001E3C"}}>
      {/* audio---------------------------- */}
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#f1f3f4",  borderRadius: 10 , minHeight: "8vh", width: "100%"}}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="subTitle">Start by typing a word.</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
