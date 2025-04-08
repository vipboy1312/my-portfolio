import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { Cover } from "@/components/ui/cover";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl max-w-7xl mx-auto text-center mt-6 my-10 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Ready to take your ideas to the <br /> <Cover>Next Level?</Cover>
      </h1>
      <form
        action=""
        className="border border-gray-200 rounded-lg p-5 shadow-md w-full max-w-xl mx-auto flex flex-col gap-4 mb-5"
      >
        <p className="text-center text-2xl text-sky-500 font-bold">
          Contact me
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <label className="flex flex-col w-full">
            <p className="mb-1">Name</p>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="mb-1">Email</p>
            <input
              type="email"
              className="border border-gray-300 p-2 rounded-lg w-full"
            />
          </label>
        </div>

        <label className="flex flex-col">
          <p className="mb-1">Message</p>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="border border-gray-300 rounded-lg p-2 w-full resize-y min-h-[120px]"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-sky-500 w-full max-w-35 p-2 text-white rounded-lg shadow-lg hover:bg-sky-600 transition-all duration-300 cursor-pointer"
        >
          Send
        </button>
      </form>
      <p className="my-2 opacity-50">My Socials</p>
      <ul className="flex justify-center mb-10 opacity-50 gap-2">
        <li>
          <a
            href="https://www.facebook.com/quy.nguyentrong.3367/"
            target="_blank"
          >
            <FaFacebook size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/vipboy1312" target="_blank">
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
