import  Link  from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 ">
          <Link href="/" className="text-xl font-bold tracking-wider mb-6 md:mb-0">
            audiophile
          </Link>

          <nav>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm font-medium tracking-widest">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/headphones" className="hover:text-accent transition-colors">
                  HEADPHONES
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-accent transition-colors">
                  SPEAKERS
                </Link>
              </li>
              <li>
                <Link href="/earphones" className="hover:text-accent transition-colors">
                  EARPHONES
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Middle Section: Description and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="max-w-xl mb-8 md:mb-0">
            <p className="text-muted-foreground leading-relaxed">
              Audiophile is an all in one stop to fulfill your audio needs. We are a small team 
              of music lovers and sound specialists who are devoted to helping you get the 
              most out of personal audio. Come and visit our demo facility - we are open 7 
              days a week.
            </p>
          </div>

          <div className="flex gap-4 md:ml-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8">
          <p className="text-muted-foreground text-sm">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
