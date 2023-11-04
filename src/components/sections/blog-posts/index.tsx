import Link from "next/link"

export default function BlogPostsSection() {

  return (
    <div>
      <div className="p-4">
        <div className="text-center">
          <span className="py-2 px-4 bg-blue-50 rounded-full text-sm font-medium">THIS IS FEATURED</span>
          <h2 className="text-5xl font-semibold tracking-tight mt-4">Discover New Blog Posts</h2>
          <p className="mt-4">Explore our collection of valuable resources</p>
        </div>
        <div className="grid grid-flow-col gap-8 mt-12">
          {[0, 1, 2].map((item: any, index: number) => (
            <BlogPost key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BlogPost() {

  return (
    <div>
      <div>
        <img
          className="rounded-lg"
          src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
          alt="post-thumbnail"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-1 px-2 text-sm font-medium tracking-wider rounded-sm">
            REACT
          </div>
          <div>
            <span className="text-sm">3 min read</span>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-semibold">Discover How Our Product Works</h4>
          <p className="mt-1">Our product simplifies the process of showcasing your projects and blog posts</p>
        </div>
      </div>
      <div className="mt-4">
        <Link className="text-blue-500 font-medium text-sm" href={'/'}>
          Read More
        </Link>
      </div>
    </div>
  )
}