import BlogPostItem, { IBlogPost } from "./BlogPostItem";

// Exemplo de dados, substituir pela sua fonte de dados
const posts: IBlogPost[] = [
  {
    id: 1,
    title: "Título do Artigo 1",
    summary: "Resumo do artigo 1...",
    imageUrl:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    publishedDate: "01/01/2023",
  },
  // Adicione mais posts conforme necessário
];

const BlogSection: React.FC = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
