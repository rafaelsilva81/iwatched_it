import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <div className="grid min-h-screen items-center justify-center gap-6 bg-cover md:grid-cols-2">
      <div className="col-span-2 flex h-full flex-col justify-center gap-3 p-10 md:col-span-1">
        <h1 className="text-5xl font-bold text-white">
          iWatched<span className="text-indigo-600">it</span>
        </h1>
        <span className="text-xl text-white md:text-2xl">
          A plataforma para acompanhar o que vem acontecendo no mundo do Cinema.
        </span>

        <button
          className="mt-3 flex w-40 items-center justify-center gap-2 rounded-lg bg-indigo-600 p-2 font-bold text-white hover:bg-indigo-500"
          onClick={() => signIn()}
        >
          <ArrowRight weight="bold" />
          Entrar
        </button>
      </div>

      <motion.div
        animate={{
          backgroundPositionY: ["0%", "255%"],
          transition: {
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="hidden h-full w-full bg-hero-pattern bg-scroll bg-center bg-repeat-y md:flex"
      ></motion.div>
    </div>
  );
};

export default LoginForm;
