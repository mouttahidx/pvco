"use client";
import { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import PostCard from "./PostCard";
import axios from "axios";
import { getLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export default function PostsClient({
  headers,
  posts,
  translations,
}) {
  const page = useRef(1);
  const [pageTotal, setPageTotal] = useState(headers.last_page);
  const [total, setTotal] = useState(posts.total);
  const [loading, setLoading] = useState(false);
  const [_posts, setPosts] = useState(posts);
  function handlePageClick({ selected }) {
    page.current = selected + 1;
    paginate();
  }

  // fetch products methode
  const paginate = async () => {
    setLoading(true);
    try {
      const res =
        (await axios.get("https://old.pvcogranby.com/wp-json/wp/v2/posts"+"?page="+page.current)) || {};
      const data =  res.data;
      setPosts(data);
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  };

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full xl:gap-8 mt-10 justify-start">
      {!loading &&
        _posts.map((post) => (
          <PostCard
            lang={2}
            id={post.id}
            title={post.title.rendered}
            excerpt={post.excerpt.rendered}
            date={post.date}
            key={post.id}
            slug={post.slug}
            image={post?._embedded["wp:featuredmedia"]?.[0]?.source_url}
          />
        ))}
    </div>
  );
}
