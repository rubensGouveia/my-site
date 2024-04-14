export interface IBlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishedDate: string;
}

const BlogPostItem: React.FC<{ post: IBlogPost }> = ({ post }) => {
  return (
    <div className="p-4 ">
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={post.imageUrl}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest font-heading text-xs title-font font-medium text-green-400 mb-1">
            {post.publishedDate}
          </h2>
          <h1 className="title-font font-heading text-lg font-medium text-white mb-3">
            {post.title}
          </h1>
          <p className="leading-relaxed mb-3">{post.summary}</p>
          <div className="flex items-center flex-wrap ">
            <a
              href={`/blog/${post.id}`}
              className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Leia Mais
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostItem;
