import { LockKeyhole, Mail } from "lucide-react";
import { Inputstyle } from "./InputsStyle";
import { BACKEND_URL } from "../env";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function login() {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const response = await axios.post(`${BACKEND_URL}/user/login`, {
      email,
      password,
    });

    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    alert(`User login successfull ${jwt}`);
    navigate("/dashboard");
  }

  return (
    <>
      <div className=" flex items-center justify-center fixed size-full bg-gray-700">
        <div className=" flex flex-col scroll-hidden overflow-auto flex-shrinkrink items-center space-y-10 rounded-3xl bg-red-200 w-96 h-3/6 ">
          <div className=" mt-10 text-xl">
            <b>Login Page</b>
          </div>
          <div className="space-y-5">
            <Inputstyle
              reference={emailRef}
              type="text"
              placeholder="Email"
              icon={<Mail />}
            />
            {/* <Inputstyle placeholder="Username" icon={<User />} /> */}
            <Inputstyle
              reference={passwordRef}
              type="password"
              placeholder="Password"
              icon={<LockKeyhole />}
            />
          </div>
          <div>
            <button
              onClick={login}
              className=" bg-indigo-500 py-2 px-9 rounded-md  border-2 focus:ring-2  hover:shadow-xl text-xl "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
