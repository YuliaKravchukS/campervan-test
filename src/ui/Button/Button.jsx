import css from "./Button.module.css";

const Button = ({ onClick, buttonText, type }) => {
  const buttonClass = `${css.button} ${css[type]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {buttonText}
    </button>
  );
};
export default Button;
