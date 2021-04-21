import { useEffect, useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import api from "../helpers/api";
const baseUrl = process.env.REACT_APP_BASE_URL;
const params = new URLSearchParams(window.location.search);
const m = params.get("m");

function Verify() {
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [msg, setMsg] = useState('');
  const [disabled, setDisabled] = useState(false);

  const sendVerification = useCallback(async () => {
    setDisabled(true);
    await api(
      "post",
      "/users/verification",
      {
        redirect: `${baseUrl}${location.pathname}`,
        redirect2: `${baseUrl}/verify`,
      },
      true
    );
    setDisabled(false);
    setMsg(
      (prevMsg) => `${prevMsg} New verification email sent to ${user.email}.`
    );
  }, [user.email, location.pathname]);

  useEffect(() => {
    if (user.isEmailVerified) history.push("/dashboard");
  }, [user.isEmailVerified]);

  useEffect(() => {
    (async function () {
      if (m === "expired") {
        setMsg("Verification link has been expired.");
        await sendVerification();
      }
      if (m === "verified") {
        history.push("/dashboard");
      }
    })();
  }, [history, sendVerification]);

  return (
    <div>
      <h1>Verify your email account to proceed</h1>
      <p>{msg}</p>
      <button onClick={sendVerification} disabled={disabled}>
        Resend
      </button>
      <button>change Email</button>
    </div>
  );
}

export default Verify;
