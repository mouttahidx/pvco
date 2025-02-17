import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Product({ link, img, title, desc }) {
  return (
    <Link
      href={link}
      className="flex shadow-lg flex-col items-stretch text-wrap w-full  box-content  rounded-b-3xl"
    >
      <Image
        width={500}
        height={800}
        src={img}
        className="min-h-[250px] max-h-[350px] w-full object-cover rounded-t-3xl"
        alt={title}
        unoptimized
      />
      <div className="flex flex-col justify-start gap-y-2 p-5 lg:p-10 border-t-4 rounded border-primary bg-white h-full rounded-b-3xl">
        <h3 className="text-lg text-secondary-dark text-wrap">
          {title}
        </h3>
        <p
          className="text-dark-gray"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </Link>
  );
}
