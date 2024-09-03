import LatestBlog from "@/components/latestBlog/LatestBlog";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <div className="min-h-screen my-8 ">
      <LatestBlog blogs={blogs} />
    </div>
  );
};

export default HomePage;
