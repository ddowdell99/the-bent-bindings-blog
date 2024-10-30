import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left and upper side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 border border-transparent bg-gradient-to-r from-black to-gray-600 text-white">
              The Bent
            </span>
            Bindings
          </Link>
          <p className="text-sm mt-5">
            WHAT DO WE WANT HERE? If you would like to stay up to date and make
            comments please sign up with and email and password OR google.
          </p>
        </div>
        {/* right and lower side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Give us a unique username..."
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="Example: BentBindings123@gmail.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Some super secret password..."
                id="password"
              />
            </div>
            <Button color="dark" outline type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account already?</span>
            <Link to="/sign-in" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
