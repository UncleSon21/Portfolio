import { blogPosts } from "../constants";
import TitleHeader from "../components/TitleHeader";

const Blog = () => {
  return (
    <section id="blog" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Building in Public"
          sub="My Journey and Lessons"
        />

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
          {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-border rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.imgPath}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold bg-white/10 text-white-50 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-white-50">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-white-50 text-sm">{post.subtitle}</p>
              <p className="text-white-50 text-sm leading-relaxed">{post.excerpt}</p>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;