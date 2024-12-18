import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsTwitch } from 'react-icons/bs'
import { BiLogoGmail } from "react-icons/bi";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mb-3 sm:mt-4">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 border border-transparent bg-gradient-to-r from-black to-gray-600 text-white">
                The Bent
              </span>
              Bindings
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://playvalorant.com/en-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Links
                </Footer.Link>
                <Footer.Link
                  href="https://overwatch.blizzard.com/en-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Links 2
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.instagram.com/tchalamet/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Insta
                </Footer.Link>
                <Footer.Link
                  href="https://x.com/TheRock?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal stuff" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div>
          <Footer.Copyright
            href="#"
            by="The Bent Bindings"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-3 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsTwitter}/>
            <Footer.Icon href="#" icon={BsTwitch}/>
            <Footer.Icon href="mailto:TheBentBindings@gmail.com" icon={BiLogoGmail}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
