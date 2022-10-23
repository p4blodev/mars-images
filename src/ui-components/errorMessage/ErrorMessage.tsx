import './ErrorMessage.css';

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <div role="alert">
      <p className="error-message">{text}</p>
    </div>
  );
};

export default ErrorMessage;
