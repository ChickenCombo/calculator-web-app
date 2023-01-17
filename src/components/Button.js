import './Button.css';

const Button = ({ text, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(text)}
      className="button-wrapper"
      style={{ backgroundColor: color }}
    >
      {text}
    </div>
  )
}

export default Button;