import "./Screen.css";

const Screen = ({ input, output }) => {
  // Check if input or output is empty
  input === ""  ? input = 0 : input = input;
  output === ""  ? output = 0 : output = output;

  return (
    <div className="screen-wrapper">
      <div className="output">
        <h1>{output}</h1>
      </div>

      <div className="input">
        <h2>{input}</h2>
      </div>
    </div>
  )
}

export default Screen;