import { useParams, Link } from "react-router-dom"
import { blogPosts } from "../constants"
import Navbar from "../components/NavBar"
import Footer from "../sections/Footer"

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="flex-center min-h-screen flex-col gap-4">
          <h1 className="text-3xl font-bold">Post not found</h1>
          <Link to="/" className="text-white-50 underline underline-offset-4 hover:opacity-70">
            Back to home
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  // Render markdown-style headings and paragraphs from the content string
  const renderContent = (content) => {
    return content
      .trim()
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
              {line.replace("## ", "")}
            </h2>
          )
        }
        if (line.trim() === "") return <div key={i} className="h-2" />
        return (
          <p key={i} className="text-white-50 leading-relaxed">
            {line}
          </p>
        )
      })
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-5 md:px-10 pt-40 pb-20">
        <Link
          to="/#blog"
          className="text-sm text-white-50 hover:text-white transition-colors underline underline-offset-4 mb-10 inline-block"
        >
          Back to writing
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium bg-white/10 text-white-50 px-3 py-1 rounded-full">
            {post.tag}
          </span>
          <span className="text-xs text-white-50">{post.date}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-white-50 text-lg mb-10">{post.subtitle}</p>

        <div className="h-72 w-full overflow-hidden rounded-xl mb-12">
          <img
            src={post.imgPath}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="flex flex-col gap-3">
          {renderContent(post.content)}
        </article>
      </main>
      <Footer />
    </>
  )
}

export default BlogPost