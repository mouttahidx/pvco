import PostsClient from "@/app/components/blogComponents/PostsClient";
import ButtonClient from "@/app/components/ButtonClient";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";
import axios from "axios";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata() {
  const t = await getTranslations("BlogPage");

  return {
    title: `${t("title")} | ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `${t("title")} | ${t("meta_description")}`,
  };
}

export default async function Page({ params }) {
  const t = await getTranslations("BlogPage");
  const translations = {
    previous: t("previous"),
    next: t("next"),
  };

  const { posts, headers } = await getData();
  const { locale } = await params;
  return (
    <>
      {/* Slider */}
      <section className="bg-black bg-cover bg-center">
        <div className="bg-black bg-opacity-55 px-4 pt-32 md:pt-56 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold max-w-6xl mx-auto leading-snug mb-8">
            Blogue
          </h1>
        </div>
      </section>

      {/* Products section */}
      <section className="py-16 px-4 max-w-7xl mx-auto flex justify-between flex-col items-center">
        <PostsClient
          headers={headers}
          posts={posts}
          translations={translations}
        />
      </section>

      <EndOfPageCTA />
    </>
  );
}

async function getData() {
  let posts = [];
  let headers = { total: 0, last_page: 0 };
  try {
    const res = await axios.get(
      "https://old.pvcogranby.com/wp-json/wp/v2/posts?_embed",
      {
        headers: {
          Authorization: `Basic ${btoa("Viacomm:LRZMii8JsxEOYYWMXTOAOEWE")}`,
        },
      }
    );
    posts = res.data;
    headers.total = res?.headers["x-wp-total"];
    headers.last_page = res?.headers["x-wp-totalpages"];
  } catch (error) {
    console.log(error);
  }

  // Pass data to the page via props
  return { posts, headers };
}
