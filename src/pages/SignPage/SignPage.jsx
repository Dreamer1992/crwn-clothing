import SignIn from '../../components/Sign/SignIn/SignIn';
import SignUp from '../../components/Sign/SignUp/SignUp';
import './SignPage.styles.scss';

const SignPage = () => {
  return (
    <div className="sign-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignPage;
