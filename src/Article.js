import React from "react";
import './index.css';

export default function Article() {
  return (
    <div>
      <main>
        <article>
          <time datetime="2020-11-12">11/12/20</time>
          <h2 className="articleTitle">On the Street in Brooklyn</h2>
          <img src="blog-image-1.jpg" alt="image-1" />
          <p className="articleBody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ducimus impedit perspiciatis optio quia inventore earum doloribus,
            dignissimos eveniet culpa error ipsa quaerat veniam molestiae
            voluptas reprehenderit ipsam officia vitae libero laboriosam aliquid
            animi. Earum odio velit id incidunt repellendus ipsa illo, neque
            necessitatibus quaerat quis ea voluptatem qui cupiditate!
          </p>
          <a href="...">Continues...</a>
        </article>
        <article>
          <time datetime="2020-11-11">11/11/20</time>
          <h2 className="articleTitle">Vintage in Vogue</h2>
          <img src="blog-image-2.jpg" alt="image-2" />
          <p className="articleBody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            ducimus impedit perspiciatis optio quia inventore earum doloribus,
            dignissimos eveniet culpa error ipsa quaerat veniam molestiae
            voluptas reprehenderit ipsam officia vitae libero laboriosam aliquid
            animi. Earum odio velit id incidunt repellendus ipsa illo, neque
            necessitatibus quaerat quis ea voluptatem qui cupiditate!
          </p>
          <a href="...">Continues...</a>
        </article>
      </main>
    </div>
  );
}
