import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Why Hiring Construction Equipment Saves You Money",
    category: "Equipment",
    image: "/public/blog/equipment.jpg",
    content: `
Buying heavy machinery comes with high maintenance, storage,
and repair costs. Hiring equipment allows you to pay only
when you need it and focus on project delivery.

Njohmu Suppliers provides well-maintained excavators, loaders,
and construction machinery for projects of all sizes.
    `,
    date: "Jan 10, 2026",
  },
  {
    id: 2,
    title: "Safety Tips When Using Heavy Machinery",
    category: "Safety",
    image: "/public/blog/safety.jpg",
    content: `
Construction sites can be dangerous without proper safety measures.

Always inspect machines before use, ensure operators are trained,
wear protective gear, and follow site safety guidelines to prevent accidents.
    `,
    date: "Jan 15, 2026",
  },
  {
    id: 3,
    title: "Quality Building Materials for Modern Construction",
    category: "Materials",
    image: "/public/blog/materials.jpg",
    content: `
Using quality building materials improves durability, safety,
and reduces long-term maintenance costs.

Njohmu Suppliers provides reliable materials suitable for modern
construction standards.
    `,
    date: "Jan 20, 2026",
  },
  {
    id: 4, 
    title: "Choosing The Right Excavator For Your Project",
    category: "Machine",
    image: "/public/blog/machine.jpg",
    content:  `
Selecting the right excavator can significantly affect the efficiency and cost of your construction project.
Different projects require different machine sizes, reach, and digging power.

Small excavators are ideal for residential works and confined spaces, while larger excavators are better suited
for commercial and infrastructure projects. Understanding your terrain, project scope, and timelines helps you
choose the most suitable machine.

At Njohmu Suppliers, we guide our clients in selecting the right excavator to ensure productivity, safety,
and cost-effectiveness on site.
    `,
    date: "Jan 25, 2026",
  },
  {
    id: 5,
    title: "The Importance Of Skilled Machinery Operations",
    category: "Operators",
    image: "/public/blog/operator.jpg",
    content:   `
Even the best machinery can't guarantee a smooth construction project if its not operated correctly.
Skilled operators ensure equipments is used efficiently, safely, and without unnecessarywear  or downtime.

Proper training experience, and attention to safety standards make a huge difference in productivity.
Skilled operators also helpavoid accidents, reduce repair costs, and ensure projects are completed on
time. 

At Njohmu Suppliers, we not only provide well-maintained machinery but also connect our clients with 
trained operators who know how to get the job done right the first time.
    `,
    date: "Jan 30, 2026"
 },
];

export default function Blog() {
  const { id } = useParams();

  /* ================= SINGLE BLOG VIEW ================= */
  if (id) {
    const blog = blogs.find(b => b.id === Number(id));
    if (!blog) return <p className="p-6">Blog not found</p>;

    return (
      <div className="min-h-screen bg-white">
        <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-green-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg mb-6 bg-gray-200">
  <img
    src={blog.image}
    alt={blog.title}
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
</div>

            <span className="bg-green-100 text-green-800 text-xs font-medium inline-block px-2.5 py-0.5 rounded-md mb-3">
              {blog.category}
            </span>

            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold mb-4">
              {blog.title}
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {blog.date}
            </p>

            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line">
              {blog.content}
            </p>

            <Link
              to="/blog"
              className="inline-block bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  /* ================= BLOG LIST VIEW ================= */
  return (
    <div className="min-h-screen bg-white">
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-green-900 dark:text-green text-4xl md:text-5xl font-extrabold mb-2">
            Latest News and Updates
          </h1>
          <p className="text-lg font-normal text-blue-500 dark:text-gray-400">
            View our latest news and updates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-gray-50 dark:bg-green-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium inline-block px-2.5 py-0.5 rounded-md mb-2">
                  {blog.category}
                </span>

                <h2 className="text-gray-900 dark:text-white text-xl font-extrabold mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {blog.content.substring(0, 100)}...
                </p>

                <Link
                  to={`/blog/post/${blog.id}`}
                  className="inline-block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
