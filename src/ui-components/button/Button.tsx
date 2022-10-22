import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button-container" {...props}>
      {children}
    </button>
  );
};

export default Button;
