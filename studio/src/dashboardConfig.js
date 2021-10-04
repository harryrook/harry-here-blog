export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615b223b2627b200cdee455a",
                  title: "Sanity Studio",
                  name: "harry-here-blog-studio",
                  apiId: "1298524f-5456-484e-a265-2c38ac059b0c",
                },
                {
                  buildHookId: "615b223b6272d700b9e5a6e0",
                  title: "Blog Website",
                  name: "harry-here-blog",
                  apiId: "1a5ed589-781b-4d44-a42a-879422223fd6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/harryrook/harry-here-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://harry-here-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
