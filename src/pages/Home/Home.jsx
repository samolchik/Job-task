import React, { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { MOCK } from "../../mock";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await fetch(
          "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
          {
            method: "GET",
            headers: new Headers({
              Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
              "Content-Type": "application/json",
            }),
          }
        );

        setPosts(await posts.json());
      } catch (err) {
        console.log("err = ", err);
      }
    };

    fetchPosts();
  }, []);

  return <Pagination itemsPerPage={10} items={MOCK} />;
};
