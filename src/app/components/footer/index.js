import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer py-8">
      <div className="container text-gray-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="flex items-center">
          <Link href={"/"}>
            <img src="/logo.svg" alt="Logo" className="w-[200px]" />
          </Link>
        </div>
        <div className="col-span-2">
          <h3 className="font-semibold mb-4 text-primary">Nous joindre</h3>
          <ul>
            <li className="mb-2 hover:text-primary">
              <a
                target="_blank"
                rel="nofollow"
                href="https://goo.gl/maps/Eq7F92HHKp9ibHwW6"
              >
                104A Rue Germain, Saint-Alphonse-De-Granby Qc, Canada, J0E 2A0
              </a>
            </li>
            <li className="hover:text-primary">
              <a href="tel:450 994-1275">450 994-1275</a>
            </li>
            <li className="hover:text-primary">RBQ # 5704-3705-01</li>
          </ul>
          <h3 className="mt-4 font-semibold mb-4 text-primary">Nous suivre</h3>
          <div className="flex gap-2 text-black items-center">
            <a
              href="https://www.facebook.com/PVCO-Granby-507939555922825/?fref=ts"
              target="_blank"
              rel="nofollow"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/pvco-granby-34276510a/?originalSubdomain=ca"
              target="_blank"
              rel="nofollow"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="border-l pl-4 border-gray-200">
          <h3 className="font-semibold mb-4 text-primary">Produits</h3>
          <ul className="flex flex-col gap-1">
            <li className="mb-1 text-xs">
              <a href="#">Portes</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Portes de garage</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Fenêtres</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Balcons et rampes</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Solariums</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Revêtements extérieurs</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Accessoires</a>
            </li>
            <li className="mb-1 text-xs">
              <a href="#">Pergola</a>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/" className="font-semibold mb-4 text-primary block ">
            À propos
          </Link>
          <Link href="/" className="font-semibold mb-4 text-primary block ">
            Services
          </Link>
          <Link href="/" className="font-semibold mb-4 text-primary block ">
            Réalisations
          </Link>
          <Link href="/" className="font-semibold mb-4 text-primary block ">
            Carrières
          </Link>
          <Link href="/" className="font-semibold mb-4 text-primary block ">
            Contact
          </Link>

          <p className="text-xs text-gray-300 mt-6">
            © PVCO Grandby 2025 | Création par VIA Communication
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Politique de confidentialité
          </p>
          <p className="text-xs text-gray-300 mt-1">Termes et Conditions</p>
        </div>
      </div>
    </div>
  );
}
