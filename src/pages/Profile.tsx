import { signOut } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const context = useAuth();

  return (
    <>
      <h1>Profile</h1>

      <p>Email: {context?.user?.email}</p>
      <p>UID: {context?.user?.uid}</p>

      <button onClick={() => signOut(authService)}>
        Cerrar sesión
      </button>
    </>
  );
};