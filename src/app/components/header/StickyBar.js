import { useTranslations } from "next-intl";
import Image from "next/image";

export default function StickyBar() {
  const t = useTranslations("Nav");
  return (
    <div className="w-full py-6 px-12 bg-brand-gray absolute lg:-bottom-[93px] flex items-center justify-start rounded">
      
    </div>
  );
}
