import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
//import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const { setToken, setIsAuthenticated } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/login`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const fetchResponse = await fetch(url, requestOptions);
    if (fetchResponse.status === 200) {
      let data = await fetchResponse.json();
      //   setToken(data.token);
      //   setIsAuthenticated(true);
      navigate("/");
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>

      <div className="wrap-div">
        <div className="xs-pd-20-10 pd-ltr-20">
          <div class="title pb-20">
            <h2 class="h3 mb-0">Login</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="card card-box" id="bastaCard">
              <div className="card-body">
                <div className="form-group">
                  <label class="col-form-label" style={{marginLeft: 20}}>Email</label>
                  <div class="col">
                    <input class="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label class="col-form-label" style={{marginLeft: 20}}>Password</label>
                  <div class="col">
                    <input class="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
