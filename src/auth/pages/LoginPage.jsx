import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogIn = () => navigate("/",{ replace: true });

  return (
    <div className="container d-flex justify-content-center flex-column mt-5">
      <h1>Heroes App</h1>

      <button className="btn btn-primary text-uppercase " onClick={ onLogIn }>Log In</button>
    </div>
  )
}
