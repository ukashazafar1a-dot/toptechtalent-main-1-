import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="index-section">
      <div className="page-width">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Side - Logo, Social, Legal Links */}
          <div className="flex flex-col space-y-6">
            {/* Logo and Social Icons */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Image src="/assets/logo-multi.png" alt="Toptech Talent Logo" width={190} height={50} /> 
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center  transition-colors"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center  transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href="#"
                className="text-black transition-colors"
              >
                Fraud Alert
              </Link>
              <span className="text-black">|</span>
              <Link
                href="#"
                className="text-black transition-colors"
              >
                Government Notice
              </Link>
              <span className="text-black">|</span>
              <Link
                href="#"
                className="text-black transition-colors"
              >
                Privacy Notice
              </Link>
              <span className="text-black">|</span>
              <Link
                href="#"
                className="text-black transition-colors"
              >
                Terms of Use
              </Link>
            </div>

            {/* Copyright and Additional Info */}
            <div className="space-y-2 text-sm text-black">
              <p>© 2025 Toptech Talent</p>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <span>
                  An Equal Opportunity Employer M/F/Disability/Veterans
                </span>
              </div>
              <Link
                href="#"
                className="text-black transition-colors"
              >
                Cookies Settings
              </Link>
            </div>
          </div>

          {/* Right Side - Region Selector */}
          <div className="flex flex-col items-start lg:items-center space-y-4">
            <div className="text-base text-black font-bold">United States (English)</div>
            <button className="px-6 py-3 btn btn--secondary text-black">
              Select a region and language
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
