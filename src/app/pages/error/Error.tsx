import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h3>Desculpe, aconteceu alguma coisa 🙀</h3>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
