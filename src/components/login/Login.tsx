import { signInWithPopup }                                       from "firebase/auth";
import { setUser }                                               from "../../store/reducers/user";
import { provider, auth }                                        from "../../firebase";
import { useNavigate }                                           from "react-router-dom";
import { useDispatch }                                           from "react-redux";
import Background                                                from "../../images/background.png";
import LogonIcon from '../../images/loginIcon.png'
import { LoginWrapper,
  MenuContainer,
  LoginImage,
  LoginButton,
  MenuTop,
  MenuButton,
} from "./Login.styled";


const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // Google auth docs
  // https://firebase.google.com/docs/auth/web/google-signin#web-version-9_6
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
        navigate("/rooms", { replace: true });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <LoginWrapper style={{ backgroundImage: `url(${Background})` }}>
        <MenuContainer>
          <MenuTop>
            <span>Sign On</span>
            <div>
            <MenuButton>_</MenuButton>
            <MenuButton>X</MenuButton>
            </div>
          </MenuTop>
          <LoginImage src={LogonIcon}/>
          <LoginButton type={'submit'} onClick={signIn}>Sign On</LoginButton>
        </MenuContainer>
      </LoginWrapper>
    </>
  );
};

export default Login;