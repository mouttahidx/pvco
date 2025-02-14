import { setRequestLocale } from "next-intl/server";
import React from "react";
import { FaCalculator, FaFileSignature, FaHandshake } from "react-icons/fa";
import Image from "next/image";
import ButtonClient from "@/app/components/ButtonClient";
import Gallery from "@/app/components/Gallery";
import Testimonials from "@/app/components/Testimonials";
import { useTranslations } from "next-intl";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME + " | À propos",
};
export default function Page({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  const n = useTranslations("Nav");
  const btn = useTranslations("Btn");
  return (
    <>
      {/* Slider */}
      <section className="bg-black bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold max-w-6xl mx-auto leading-snug mb-8">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section
        className="pt-8 xl:pt-16 px-4 max-w-6xl mx-auto "
        data-aos="fade-in"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <div className="no-tailwindcss-base">
          &nbsp; &nbsp;
          <h2>But de cette politique de confidentialité</h2>
          PVCO Granby (ci-après “nous” ou “notre”) utilise
          https://pvcogranby.com (ci-après “site”). Cette page a pour but de
          vous informer sur nos politiques concernant la collecte,
          l&apos;utilisation et la divulgation des renseignements personnels
          fournis par les utilisateurs du site. Cette politique de
          confidentialité s&apos;applique à la totalité du site ainsi qu&apos;à
          tous les produits et services que nous proposons. L&apos;objectif de
          cette politique de confidentialité est d&apos;informer les
          utilisateurs de notre site des informations personnelles que nous
          pouvons recueillir, ainsi que sur la façon dont ces dernières sont
          utilisées et gérées.
          <h2>Lois applicables</h2>
          Cette politique est conforme aux lois énoncées dans la Loi modernisant
          des dispositions législatives en matière de protection des
          renseignements personnels (ci-après Loi 25). Pour les résidents
          canadiens, la Loi 25 régit les politiques de protection des données,
          peu importe où se trouve le site. La présente politique a pour but de
          se conformer à la Loi 25.
          <h2>Consentement</h2>
          En utilisant le site, vous consentez aux conditions énoncées dans la
          présente politique de confidentialité. Vous consentez aussi à la
          collecte, l&apos;utilisation et la conservation des informations
          conformément à cette politique. Si vous n&apos;acceptez pas cette
          politique, veuillez s&apos;il vous plaît ne pas utiliser notre site.
          En maintenant votre utilisation du site à la suite de l&apos;affichage
          des changements à cette politique, vous serez considéré comme ayant
          accepté ces modifications. Les informations que nous collectons auprès
          de vous peuvent être utilisées afin de personnaliser votre expérience,
          améliorer le service client, traiter les transactions et fournir et
          améliorer le site. Nous ne recueillerons pas de données
          supplémentaires sans préalablement vous en informer.
          <h2>Collecte et utilisation d&apos;informations</h2>
          En utilisant notre site, vous pourriez être invité à nous fournir
          certaines informations personnelles identifiables, telles que votre
          nom, votre adresse courriel, votre adresse postale et votre numéro de
          téléphone (désignées collectivement ci-après par &quot;informations
          personnelles&quot;). Ces informations personnelles pourraient être
          utilisées pour vous contacter ou vous identifier. Sachez toutefois que
          vous avez la possibilité de visiter notre site de manière anonyme.
          <h3>Journal de données</h3>
          Comme la plupart des opérateurs de sites web, nous sommes susceptibles
          de recueillir des informations, aussi connues sous le nom de “log
          data” ou “données de journal”, que votre navigateur envoie à chaque
          visite sur notre site. Ces données de journal peuvent contenir des
          informations telles que votre adresse IP, le type de navigateur, la
          version du navigateur, les pages visitées sur notre site, ainsi que
          l&apos;heure et la date de votre visite, la durée passée sur ces pages
          et d&apos;autres statistiques.
          <h3>Communication</h3>
          Vos informations personnelles peuvent être utilisées afin de vous
          partager des bulletins, des documents marketing ou promotionnels,
          ainsi que d&apos;autres informations susceptibles de vous intéresser.
          Vous avez la possibilité de refuser de recevoir l’ensemble de ces
          communications de notre part en suivant les instructions de
          désabonnement incluses dans chaque courriel que nous envoyons.
          <h2>Divulgation d&apos;information à des tiers</h2>
          Nous nous engageons à ne pas vendre, échanger ou transférer vos
          informations personnelles à des tiers sans votre consentement, sauf
          dans le but explicite de vous livrer le produit ou le service que vous
          avez demandé. Cependant sont exclus les tiers de confiance qui nous
          aident à exploiter notre site web, à mener nos activités commerciales
          ou à vous servir, à condition qu&apos;ils s&apos;engagent à garder ces
          informations confidentielles.
          <h3>Transactions d&apos;affaires</h3>
          En cas de fusion, acquisition ou vente d&apos;actifs impliquant PVCO
          Granby, vos informations personnelles peuvent être transférées. Nous
          vous informerons à l&apos;avance de tout transfert de vos informations
          personnelles et celles-ci seront soumises à une politique de
          confidentialité différente le cas échéant.
          <h3>Divulgation lorsque la loi l&apos;exige</h3>
          PVCO Granby peut être amené à divulguer vos renseignements personnels
          lorsque la loi l&apos;exige ou en cas de citation à comparaître. Nous
          pourrions également procéder à une telle divulgation si nous
          considérons qu&apos;une telle action est nécessaire pour nous
          conformer à la loi et répondre aux demandes légitimes des autorités
          chargées de l&apos;application de la loi, ou encore pour préserver la
          sécurité et l&apos;intégrité de notre site.
          <h2>Temps de stockage des données personnelles</h2>
          Les informations personnelles ne sont pas stockées ou conservées
          au-delà de ce qui est nécessaire pour atteindre les objectifs pour
          lesquelles elles ont été collectées.
          <h2>Mesure de sécurité</h2>
          Nous avons mis en place diverses mesures de sécurité pour préserver la
          sécurité de vos informations personnelles lorsque vous effectuez une
          commande ou lorsque vous saisissez, vous soumettez, ou vous accédez à
          ces informations. Nous utilisons un serveur sécurisé afin de garantir
          la confidentialité de vos informations. Les informations de crédit que
          vous fournissez sont transmises via une technologie SSL (Secure Socket
          Layer) et sont ensuite cryptées dans la base de données des
          fournisseurs de passerelles de paiement. Seules les personnes
          autorisées disposant de droits d&apos;accès spéciaux à ces systèmes
          sont en mesure d&apos;y accéder et sont tenues de maintenir la
          confidentialité des informations. Nous ne conservons pas vos
          informations personnelles, telles que les cartes de crédit, les
          informations financières, etc., sur nos serveurs une fois la
          transaction terminée. Nous accordons une grande importance à la
          sécurité de vos renseignements personnels. Cela dit, il est important
          de noter qu&apos;aucune méthode de transmission sur Internet ni de
          stockage électronique n’est jamais entièrement sécurisée à 100 % .
          Nous mettons en place des mesures de sécurité appropriées et acceptées
          sur le plan commercial pour protéger vos renseignements personnels.
          Cependant, nous ne pouvons pas garantir une sécurité absolue.
          <h3>Liens vers d&apos;autres sites</h3>
          Il est possible que notre site contienne des liens vers d&apos;autres
          sites qui ne sont pas sous notre contrôle. Si vous décidez de cliquer
          sur un de ces liens, vous serez redirigé vers le site d&apos;un tiers.
          Nous vous recommandons fortement de lire la politique de
          confidentialité de chaque site que vous visitez. PVCO Granby ne peut
          garantir ni contrôler le contenu, les politiques de confidentialité ou
          les pratiques des sites ou services tiers et n’est donc pas
          responsable de ces aspects pour les sites ou services tiers.
          <h2>Protection des mineurs</h2>
          Tout individu âgé de moins de moins de 14 ans est considéré comme
          étant mineur au Canada au sens de la Loi modernisant des dispositions
          législatives en matière de protection des renseignements personnels.
          Notre site ne vise pas les mineurs. Nous ne collectons pas
          intentionnellement d&apos;informations personnelles auprès
          d&apos;enfants de moins de 14 ans. Veuillez nous contacter si vous
          êtes parent ou tuteur et que vous découvrez que vos enfants nous ont
          fourni des informations personnelles. À la suite de leur découverte,
          les informations personnelles fournies par une personne âgée de moins
          de 14 ans seront immédiatement supprimées de nos serveurs.
          <h2>Vos droits en tant qu&apos;utilisateur</h2>
          Vous avez le droit d&apos;accéder aux informations personnelles que
          nous avons collectées sur vous en tout temps. Vous avez le droit de
          mettre à jour ou de corriger toute information personnelle que nous
          possédons et qui vous concerne, dans la mesure où cela est autorisé
          par la loi. Vous pouvez révoquer ou modifier votre consentement à la
          collecte de vos données à tout moment, dans la mesure où cela est
          considéré comme acceptable et à condition de nous en aviser dans un
          délai raisonnable.
          <h2>Modifier, supprimer ou contester les données recueillies</h2>
          Si vous désirez que vos informations personnelles soient supprimées ou
          modifiées d’une quelconque façon, veuillez communiquer avec notre
          agent responsable de la protection des renseignements personnels.
          <h2>Politique de confidentialité en ligne seulement</h2>
          Cette politique de confidentialité en ligne concerne uniquement les
          informations collectées sur notre site, et ne s&apos;étend pas aux
          informations collectées en dehors de notre plateforme en ligne.
          <h2>Modifications de cette politique de confidentialité</h2>
          PVCO Granby se réserve le droit de mettre à jour cette politique de
          confidentialité au besoin. Toute modification sera annoncée en
          publiant la nouvelle politique de confidentialité sur notre site. Nous
          vous conseillons de vérifier périodiquement cette politique de
          confidentialité afin de prendre connaissance d&apos;éventuels
          changements.
          <h2>Politique sur les témoins (cookies)</h2>
          Les témoins, aussi connus sous le nom de cookies, sont de petits
          fichiers contenant des quantités limitées de données. Ils peuvent
          inclure un identifiant unique et anonyme. Les sites Web envoient des
          témoins à votre navigateur, qui les conserve sur le disque dur de
          votre ordinateur. Comme de nombreux sites, nous pouvons recourir à
          l&apos;utilisation de témoins pour recueillir des informations. Il
          vous est possible de configurer votre navigateur afin de refuser tous
          les témoins ou d&apos;être averti lorsque ceux-ci sont envoyés.
          Cependant, veuillez noter que si vous choisissez de ne pas accepter
          les témoins, certaines parties de notre site pourraient ne pas être
          accessibles. Pour en savoir plus sur la gestion des témoins, veuillez
          consulter notre Politique de témoins.
          <h3>Ne pas suivre</h3>
          La fonctionnalité &quot;Ne pas suivre&quot; (ou DNT) est une
          préférence que vous pouvez activer sur votre navigateur. En activant
          “Ne pas suivre”, vous indiquez aux sites que vous visitez que vous ne
          souhaitez pas que certaines informations vous concernant soient
          collectées. PVCO Granby utilise Remarketing avec Google Analytics pour
          diffuser des publicités sur des sites tiers après votre visite sur
          notre site. Nous et nos fournisseurs tiers, tel que Google, utilisons
          des témoins internes (comme les témoins Google Analytics) et des
          témoins tiers (comme les témoins DoubleClick). Nous utilisons des
          témoins dans le but d&apos;informer, d&apos;optimiser et de diffuser
          des annonces selon vos visites précédentes sur notre site. Vous pouvez
          choisir de ne pas utiliser Google Analytics pour l&apos;affichage
          publicitaire et personnaliser les annonces sur le réseau Display de
          Google en vous rendant sur la page Paramètres Google Ads. Pour les
          visiteurs désirant prévenir la collecte et l&apos;utilisation de leurs
          données par Google Analytics, Google suggère également
          d&apos;installer l&apos;extension complémentaire Google Analytics
          Opt-out Browser Add-on sur leur navigateur.
          <h2>Termes et conditions</h2>
          Nous vous encourageons également à consulter notre section Termes et
          Conditions, où vous trouverez des informations sur l&apos;utilisation
          du site, les avertissements et les limitations de responsabilité qui
          s&apos;appliquent.
          <h2>Contactez-nous</h2>
          N’hésitez pas à nous contacter si vous avez des questions concernant
          cette politique de confidentialité. 104 A, rue Germain,
          St-Alphonse-de-Granby, PVCO Granby a nommé Michel Choinière comme
          agent responsable de la protection des renseignements personnels. Si
          vous avez des questions ou préoccupations majeures vous pouvez lui en
          faire part en utilisant les coordonnées qui suivent :
          <b>Michel Choinière</b>
          450-994-1275 pvcogranby@gmail.com &nbsp; &nbsp;
        </div>
      </section>

      {/* Detaillants + CTA */}
      <EndOfPageCTA />
    </>
  );
}
