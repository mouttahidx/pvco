import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer py-8">
      <div className="max-w-7xl text-gray-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <Link href={"/"}>
            <img src="/logo.svg" alt="Logo" className="w-[200px]" />
          </Link>
        </div>
        <div className="col-span-2">
          <h4 className="font-semibold mb-4 text-primary">Nous joindre</h4>
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
            <li className="hover:text-primary">
              RBQ # 5704-3705-01
            </li>
          </ul>
          <h4 className="mt-4 font-semibold mb-4 text-primary">Nous suivre</h4>


        </div>
        <div className="border-l pl-4 border-gray-200">
          <h4 className="font-semibold mb-4 text-primary">Produits</h4>
          <ul>
            <li className="mb-2">
              <a href="#">Link 1</a>
            </li>
            <li className="mb-2">
              <a href="#">Link 2</a>
            </li>
            <li className="mb-2">
              <a href="#">Link 3</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-primary">À propos</h4>
          <ul>
            <li className="mb-2">
              <a href="#">Link 1</a>
            </li>
            <li className="mb-2">
              <a href="#">Link 2</a>
            </li>
            <li className="mb-2">
              <a href="#">Link 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
