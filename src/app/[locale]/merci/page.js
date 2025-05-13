import { useLocale } from "next-intl";
import Link from "next/link";

export default function Page() {
  const locale = useLocale();
  return (
    <div className="flex items-center justify-center h-[600px] -mb-14 m-2">
      <div className="p-4 rounded shadow-lg ring ring-black">
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold">
            {locale === "en" ? "Thank You !" : "Merci !"}
          </h1>
          <p className="max-w-lg mx-auto text-center !mb-6">
            {locale === "en"
              ? "Thank you for your interest! Our sales representatives will contact you very soon"
              : "Merci de votre intérêt ! Nos représentants commerciaux vous contacteront très prochainement"}
          </p>
          <Link
            className="inline-flex items-center px-4 py-2 text-black bg-primary border border-primary rounded-full focus:outline-none focus:ring"
            href={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-semibold text-black bg-primary">
              { locale === "en" ? "Back to Home" : "Retour à l'accueil"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
