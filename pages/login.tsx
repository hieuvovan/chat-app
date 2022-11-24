import Login from 'containers/login/index';

const LoginPage = () => <Login />;

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
  return page;
};

export default LoginPage;
