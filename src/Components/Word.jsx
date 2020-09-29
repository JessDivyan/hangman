import React from "react";

function Word({ selectedWord, correctLetters }) {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <spam className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </spam>
        );
      })}
    </div>
  );
}

export default Word;
