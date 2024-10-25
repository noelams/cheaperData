import "./Button.css";

const Button = ({
  children,
  onClick,
  color = "blue",
  variant = "solid",
  size = "medium",
  type = "button",
  ...props
}) => {
  const buttonClass = `btn ${variant} ${size} ${color}`;

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
