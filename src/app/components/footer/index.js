import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer py-8">
      <div className="container text-gray-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center w-full">
          <Link href={"/"}>
            <img src="/logo.svg" alt="Logo" className="w-[200px]" />
          </Link>
        </div>
        <div className="md:col-span-2">
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
          <div className="flex gap-2 text-black items-center justify-center md:justify-start">
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
        <div className="md:border-l md:pl-4 border-gray-200">
          <h3 className="font-semibold mb-4 text-primary">Produits</h3>
          <ul className="flex flex-col gap-1">
            <li className="mb-2 text-xs">
              <Link href={"/produits/portes"}>Portes</Link>
            </li>
            <li className="mb-2 text-xs">
              <Link href={"/produits/portes-de-garage"}>Portes de garage</Link>
            </li>
            <li className="mb-2 text-xs">
              <Link href={"/produits/fenetres"}>Fenêtres</Link>
            </li>
            <li className="mb-2 text-xs">
              <Link href={"/produits/balcons-et-rampes"}>
                Balcons et rampes
              </Link>
            </li>
            <li className="mb-2 text-xs">
              <Link href={"/produits/solariums"}>Solariums</Link>
            </li>
            <li className="mb-2 text-xs">
              <Link href={"/produits/revetements-exterieurs"}>
                Revêtements extérieurs
              </Link>
            </li>
            <li className="mb-2 text-xs">
              <Link href={"/produits/accessoires"}>Accessoires</Link>
            </li>
            {/* <li className="mb-1 text-xs">
              <Link href={"/produits/pergolas"}>Pergola</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <Link
            href="/a-propos"
            className="font-semibold mb-4 text-primary block "
          >
            À propos
          </Link>
          <Link
            href="/services"
            className="font-semibold mb-4 text-primary block "
          >
            Services
          </Link>
          <Link
            href="/realisations"
            className="font-semibold mb-4 text-primary block "
          >
            Réalisations
          </Link>
          <Link
            href="/carrieres"
            className="font-semibold mb-4 text-primary block "
          >
            Carrières
          </Link>
          <Link
            href="/contact"
            className="font-semibold mb-4 text-primary block "
          >
            Contact
          </Link>
          <span className="text-xs text-gray-300 mt-6 block">
            © PVCO Grandby 2025 |{" "}
            <a
              href="https://viacommunication.com/"
              target="_blank"
              className="text-primary"
            >
              Création par VIA Communication
            </a>
          </span>
          <Link
            href={"/politique-de-confidentialite"}
            className="text-xs text-gray-300 mt-1 block"
          >
            Politique de confidentialité
          </Link>
          <Link
            href={"/termes-et-conditions"}
            className="text-xs text-gray-300 mt-1"
          >
            Termes et conditions
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
