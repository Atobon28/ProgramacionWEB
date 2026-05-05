import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../firebase/firebaseConfig";

export const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(authService, email, password)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        alert("Error al registrar usuario");
      });
  };

  return (
    <>
      <h1>Signup</h1>

      <form>
        <input
          type="email"
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <button onClick={(e: any) => handleSubmit(e)}>
          Registrarse
        </button>
      </form>
    </>
  );
};