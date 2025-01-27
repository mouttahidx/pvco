import Link from "next/link";

export default function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4">
        <Link href={"/"} className="flex-1">
          <img src="/logo.svg" alt="Logo" className="w-[200px]" />
        </Link>
        <div className="flex-2 text-center">
          <nav>
            <Link href="/" className="mx-2">Home</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/services" className="mx-2">Services</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
          </nav>
        </div>
        <div className="flex-1 text-right">
          <button className="px-4 py-2 bg-primary text-white rounded">Soumission</button>
        </div>
      </div>
    </div>
  );
}