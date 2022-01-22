import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="section page-content">
      <div className="error-container">
        <h2> 404</h2>
        <p>
          sorry, that page you trying to navigate doesn't exist <br /> please go
          back to home page
        </p>
        <Link to="/">
          <button type="button " className="btn">
            back home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
