import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-10"
    >
      <div className="container">
        <SectionTitle
          title="Download our app"
          paragraph="To explore more features"
          center
        />
        <div className="text-center ">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
