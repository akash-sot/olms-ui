import { LoginForm } from "../../Components";
import * as Styles from "./LoginStyles";

function Login() {
  return (
    <Styles.Container>
      <LoginForm userType="cro" />
    </Styles.Container>
  );
}

export default Login;
