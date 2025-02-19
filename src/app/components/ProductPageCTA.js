import React from 'react'
import ButtonClient from './ButtonClient'
import { useTranslations } from 'next-intl';

export default function ProductPageCTA() {
      const t = useTranslations("PatioModelSolid");
      const btn = useTranslations("Btn");

  return (
 <div className="flex flex-col">
            <div className="rounded-t-3xl bg-primary text-center p-8 font-semibold text-white">
              <h2 className="text-lg">{t("cta_title")}</h2>
            </div>
            <div className="flex flex-col items-center gap-y-5 px-8 py-12 bg-brand-gray rounded-b-3xl">
              <h3 className="text-center font-semib text-primary capitalize">
                {t("cta_text")}
              </h3>
             <div className="text-center text-black font-semibold text-xl">
                <a className="block lg:hidden" href={"tel:"+process.env.NEXT_PUBLIC_PHONE}>
                {process.env.NEXT_PUBLIC_PHONE}
                </a>
                <span className="hidden lg:block" href={"tel:"+process.env.NEXT_PUBLIC_PHONE}>
                {process.env.NEXT_PUBLIC_PHONE}
                </span>
              </div>
              <p className="text-black text-xs text-center">{t("cta_desc")}</p>
              <ButtonClient text={btn("contactUs")} href={"/contact"} />
            </div>
</div>  )
}
