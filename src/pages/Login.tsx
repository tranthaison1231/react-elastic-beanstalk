import Logo from "../components/Logo";
import Facebook from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Frame from "../assets/frame.png";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z
    .string({
      message: "Invalid email address",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z
    .string({
      message: "Password must be at least 10 characters",
    })
    .min(10),
});

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<Inputs> = (data) => {
    if (data.email === "admin@gmail.com" && data.password === "admin12345") {
      navigate("/");
    }
  };

  return (
    <section
      className="md:py-16 bg-no-repeat bg-left-top"
      style={{ backgroundImage: `url(${Frame})` }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 rounded-lg shadow-none md:w-1/2 2xl:w-1/3">
        <a
          href="#/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Logo />
          <span className="self-center text-3xl font-base whitespace-nowrap text-[#232D42]">
            Hope Ui
          </span>
        </a>
        <div className="text-center w-full  p-6 space-y-4 sm:p-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000]">
            Sign In
          </h2>
          <p className="text-[#8A92A6]">Sign in to stay connected.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-[#8A92A6]"
            >
              Email
            </label>
            <Input
              type="email"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-[#8A92A6]"
            >
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div className="flex flex-row ">
            <div className="flex items-center ">
              {/* <input */}
              {/*   id="remember" */}
              {/*   aria-describedby="remember" */}
              {/*   name="remember" */}
              {/*   type="checkbox" */}
              {/*   className="w-5 h-5 border-gray-300 rounded bg-gray-50 accent-[#3A57E8] " */}
              {/*   required */}
              {/* /> */}
            </div>
            <div className="ms-3 text-sm">
              <label
                htmlFor="remember"
                className="font-base text-base text-[#8A92A6]"
              >
                Remember me?
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-base font-base text-[#3A57E8] hover:underline "
            >
              Forgot Password
            </a>
          </div>
          <div className="flex justify-center">
            <Button type="submit"> Sign in</Button>
          </div>
        </form>
        <div className="space-y-4 py-4">
          <a
            href="#"
            className="hover:underline hover:font-semibold text-base font-base text-[#232D42] flex justify-center"
          >
            or sign in with other accounts?
          </a>

          <div className="flex justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#">
              <img src={Gmail} alt="Gmail" />
              <span className="sr-only">Gmail</span>
            </a>
            <a href="#">
              <img src={Facebook} alt="Facebook" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#">
              <img src={Instagram} alt="Instagram" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#">
              <img src={Linkedin} alt="Linkedin" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
          <div className="text-base font-base text-[#232D42] flex justify-between ">
            Dont have an account?
            <Link
              to="/sign-up"
              className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
            >
              Click here to sign up.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
