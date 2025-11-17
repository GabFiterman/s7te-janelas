import './loader-circle.scss';

function LoaderCircle() {
  return (
    <div className="loader-circle">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
  );
}

export default LoaderCircle;
