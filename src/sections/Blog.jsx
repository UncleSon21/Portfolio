import { Link } from "react-router-dom"
import { blogPosts } from "../constants"
import TitleHeader from "../components/TitleHeader"

const Blog = () => (
  <section id="blog" className="flex-center section-padding">
    <div className="w-full h-full md:px-10 px-5">
      <TitleHeader
        title="Building in Public"
        sub="Writing"
      />

      <div className="mt-16 flex flex-col gap-0 divide-y divide-black-50">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            to={`/blog/${post.slug}`}
            className="flex md:flex-row flex-col gap-6 py-8 group hover:opacity-80 transition-opacity"
          >
            <div className="md:w-48 md:h-32 h-48 w-full shrink-0 overflow-hidden rounded-lg">
              <img
                src={post.imgPath}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium bg-white/10 text-white-50 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-white-50">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                {post.title}
              </h3>
              <p className="text-white-50 text-sm">{post.subtitle}</p>
              <p className="text-white-50 text-sm leading-relaxed">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default Blog