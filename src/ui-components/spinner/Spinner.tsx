import './Spinner.css';

const Spinner = (): JSX.Element => (
  <div
    aria-atomic="true"
    aria-live="polite"
    className="spinner-container"
    role="status"
  >
    <div className="spinner" />
  </div>
);

export default Spinner;
