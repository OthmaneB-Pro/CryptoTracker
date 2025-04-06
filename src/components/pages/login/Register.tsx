import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      <RegisterStyled onSubmit={handleSubmit((data) => console.log(data))}>
        <h2>{isRegister ? "Connexion" : "Inscription"}</h2>
        <input type="text" placeholder="Nom" {...register("name")} />
        {!isRegister && (
          <input type="email" placeholder="Email" {...register("email")} />
        )}

        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
        />
        <button type="submit">S'inscrire</button>
        {!isRegister && (
          <p>
            Vous avez déjà un compte ?{" "}
            <span
              onClick={() => {
                setIsRegister(true);
              }}
            >
              Se connecter
            </span>
          </p>
        )}
      </RegisterStyled>
    </div>
  );
}

const RegisterStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 15px;
  width: 500px;
  height: 400px;
  padding: 10px;
  background-color: #494949;

  input {
    width: 400px;
    height: 40px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    background-color: #b6b6b6;
    color: white;
    padding: 10px;
    font-size: 14px;
  }
  input::placeholder{
      color: white;
    }
  button {
    width: 400px;
    height: 40px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    background-color: #b6b6b6;
    color: white;
    padding: 10px;
    font-size: 14px;
    &:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      background-color: #7e7e7e;
    }
  }
`;
