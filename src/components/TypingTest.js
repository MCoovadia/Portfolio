import React, { useState, useEffect, useRef } from "react";

const TypingSpeedTest = () => {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [typingErrors, setTypingErrors] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    if (started && !finished) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [started, finished]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setText(value);
    if (!started) {
      setStarted(true);
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      finishGame();
    }
  };

  const finishGame = () => {
    if (text === "") {
      return;
    }

    setFinished(true);
    setStarted(false);

    const words = text.trim().split(" ");
    const totalWords = words.length;
    const totalChars = text.length;
    const timeInMinutes = timer / 60;
    const expectedWords = 25;
    const accuracy = Math.floor((totalWords / expectedWords) * 100);

    let errors = 0;
    for (let i = 0; i < expectedWords; i++) {
      if (words[i] !== "Lorem") {
        errors++;
      }
    }

    const typingSpeed = Math.floor(totalChars / 5 / timeInMinutes);

    setTypingErrors(errors);
    setTypingSpeed(typingSpeed);
    setAccuracy(accuracy);
  };

  const restartGame = () => {
    setText("");
    setTimer(0);
    setStarted(false);
    setFinished(false);
    setTypingErrors(0);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Typing Speed Test</h2>
      {!finished && <p>Type the following text:</p>}
      {!finished && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tempus erat nec odio consequat semper.
        </p>
      )}
      {finished && (
        <div>
          <p>Game Over!</p>
          <p>
            Your typing speed: {typingSpeed} WPM ({typingErrors} errors)
          </p>
          <p>Accuracy: {accuracy}%</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      {!finished && (
        <div>
          <textarea
            ref={inputRef}
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
          />
          <p>Timer: {timer}s</p>
          <button onClick={finishGame}>Finish</button>
        </div>
      )}
    </div>
  );
};

export default TypingSpeedTest;
