import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import ButtonClient from "@/app/components/ButtonClient";
import axios from "axios";
import EndOfPageCTA from "@/app/components/EndOfPageCTA";

export const dynamic = "force-dynamic";

export const generateMetadata = async ({ params }) => {
  const t = await getTranslations("BlogPage");
  let post;
  const { locale,slug } = await params;
  if (slug) {
    try {
      // Call an external API endpoint to get posts
      const res = await axios.get(
        "https://old.pvcogranby.com/wp-json/wp/v2/posts/?slug=" + slug
      );

      post = res.data[0];
    } catch (error) {
      console.log(error.response);
      notFound();
    }
  }

  let title = t("title") + " | " + post?.title?.rendered;
  return {
    title,
    description: t("title") + " | " + post?.title?.rendered,
  };
};

export default async function Page({ params }) {
  const { id, slug,locale } = await params;

  setRequestLocale(locale);
  const t = await getTranslations();

  let post;
  if (slug) {
    post = await getPost(slug);
    if (!post) {
      notFound();
    }
  } else {
    notFound();
  }

  let featured_image = null;
  try {
     const mediaRes = post.id && post.featured_media
       ? await axios.get(
           "https://old.pvcogranby.com/wp-json/wp/v2/media/" +
             post.featured_media,
           {
             headers: {
               Authorization: `Basic ${btoa(
                 "Viacomm:LRZMii8JsxEOYYWMXTOAOEWE"
               )}`,
             },
           }
         )
       : null;

     if (mediaRes) {
       featured_image = "https://old.pvcogranby.com" + mediaRes.data.source_url;
     }
  } catch (error) {
    console.warn(error)
  }
 

  return (
    <div>
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('${featured_image || '/img/1-new.webp'}')` }}
      >
        <div className="text-white px-2 pb-44 pt-64 bg-black bg-opacity-55">
          <h1
            className="text-3xl lg:text-5xl text-center leading-loose text-white rounded w-fit px-2 max-w-6xl mx-auto font-bold"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto pt-16 pb-16 ">
        {/* main div */}
        <div className="px-4">
          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="text-gray-500 my-4 no-tailwindcss-base"
          />
        </div>
      </section>
      
      
      <EndOfPageCTA />
    </div>
  );
}

// This function gets called at build time
async function getPost(slug) {
  let post;

  try {
    // Call an external API endpoint to get posts
    const res = await axios.get(
      "https://old.pvcogranby.com/wp-json/wp/v2/posts/?slug=" + slug
    );
    post = res.data[0];
  } catch (error) {
    console.log(error);
    notFound();
  }

  if (post) {


    post.content.rendered = post.content.rendered.replace(
      /src="\/wp-content\//g,
      'src="https://old.pvcogranby.com/wp-content/'
    );
    post.content.rendered = post.content.rendered.replace(
      /\/wp-content\//g,
      'https://old.pvcogranby.com/wp-content/'
    );
    post.content.rendered = post.content.rendered.replace(
      /href="\/wp-content\//g,
      'href="https://old.pvcogranby.com/wp-content/'
    );


  }
  return post;
}

// This function gets called at build time
export async function generateStaticParams() {
  // Call an external API endpoint to get posts

  let params = [];

  try {
    const res = await fetch("https://old.pvcogranby.com/wp-json/wp/v2/posts/");
    const data = await res.json();
    data.forEach((post) => {
      post.slug && params.push({ slug: post.slug });
    });
  } catch (error) {}

  // Get the paths we want to pre-render based on posts
  const paths = params;

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return paths;
}
