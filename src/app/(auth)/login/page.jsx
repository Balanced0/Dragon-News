"use client"
import Link from "next/link";
import { useForm } from "react-hook-form"


const LoginPage = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()


    const handleLoginFunc = (data) =>{
        console.log(data);
    }
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200">
      <div className="p-4 rounded-xl bg-white">
        <h3 className="mb-6 font-bold">Login your account</h3>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input" placeholder="Type your email" {...register("email", { required: "Email is required" })}/>
            <p className="label">Optional</p>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password"className="input" placeholder="Type your password" {...register("password", { required: "Password is required" })}/>
            <p className="label">Optional</p>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </fieldset>

          <button className="btn w-full">Login</button>
        </form>

        <p>Dont have an account? <Link href="/register" className="text-red-600">Register</Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;
