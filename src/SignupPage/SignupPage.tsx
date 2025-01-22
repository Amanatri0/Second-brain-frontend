import { LockKeyhole, Mail, User } from "lucide-react";
import { Inputstyle } from "./InputsStyle";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../env";
import { useNavigate } from "react-router-dom";

export function SignupPage() {
  const emailRef = useRef<HTMLInputElement>();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signup() {
    const email = emailRef.current?.value;
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    await axios.post(`${BACKEND_URL}/user/signup`, {
      email,
      username,
      password,
    });
    navigate("/login");
    alert("User Signup successfull");
  }

  return (
    <>
      <div className=" flex items-center justify-center fixed size-full bg-gray-700">
        <div className=" flex flex-col scroll-hidden overflow-auto flex-shrinkrink items-center space-y-10 rounded-3xl bg-red-200 w-96 h-4/6 ">
          <div className=" mt-10 text-xl">
            <b>Signup Page</b>
          </div>
          <div className="space-y-5">
            <Inputstyle
              reference={emailRef}
              type="email"
              placeholder="Email"
              icon={<Mail />}
            />
            <Inputstyle
              reference={usernameRef}
              type="text"
              placeholder="Username"
              icon={<User />}
            />
            <Inputstyle
              reference={passwordRef}
              type="password"
              placeholder="Password"
              icon={<LockKeyhole />}
            />
          </div>
          <div>
            <button
              onClick={signup}
              className=" bg-indigo-500 py-2 px-9 rounded-md  border-2 focus:ring-2  hover:shadow-xl text-xl "
            >
              Submit
            </button>
          </div>
          <div>
            <p>
              Already Signed up{" "}
              <a href="/">
                <u>Login</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
