import { serve } from "bun";

const PORT = 1414;

interface Post {
  id: string;
  title: string;
  content: string;
}

let blogPosts: Post[] = [];

function handleGetAllPosts(): Response {
  return new Response(JSON.stringify(blogPosts), {
    headers: { "Content-Type": "application/json" },
  });
}

function handleGetPostById(id: string): Response {
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return new Response("Post Not Found", { status: 404 });
  }

  return new Response(JSON.stringify(post), {
    headers: { "Content-Type": "application/json" },
  });
}

function handleCreatePost(title: string, content: string): Response {
  if (!title || !content) {
    return new Response("Invalid input", { status: 400 });
  }

  const newPost: Post = {
    id: `${blogPosts.length + 1}`,
    title,
    content,
  };

  blogPosts.push(newPost);

  return new Response(JSON.stringify(newPost), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

function handleUpdatePost(id: string, title: string, content: string): Response {
  const postIndex = blogPosts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return new Response("Post Not Found", { status: 404 });
  }

  if (!title || !content) {
    return new Response("Invalid input", { status: 400 });
  }

  blogPosts[postIndex] = {
    ...blogPosts[postIndex],
    title,
    content,
  };

  return new Response("Post Updated", { status: 200 });
}

function handleDeletePost(id: string): Response {
  const postIndex = blogPosts.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    return new Response("Post Not Found", { status: 404 });
  }

  blogPosts.splice(postIndex, 1);

  return new Response("Post Deleted", { status: 200 });
}

serve({
  port: PORT,
  async fetch(request: Request) {
    try {
      const { method } = request;
      const { pathname } = new URL(request.url);
      const pathRegexForID = /^\/api\/posts\/(\d+)$/;

      if (method === "GET" && pathname === "/api/posts") {
        return handleGetAllPosts();
      }

      if (method === "GET") {
        const match = pathname.match(pathRegexForID);
        const id = match && match[1];

        if (id) {
          return handleGetPostById(id);
        }
      }

      if (method === "POST" && pathname === "/api/posts") {
        const newPost = await request.json();
        return handleCreatePost(newPost.title, newPost.content);
      }

      if (method === "PATCH") {
        const match = pathname.match(pathRegexForID);
        const id = match && match[1];

        if (id) {
          const updatedPost = await request.json();
          return handleUpdatePost(id, updatedPost.title, updatedPost.content);
        }
      }

      if (method === "DELETE") {
        const match = pathname.match(pathRegexForID);
        const id = match && match[1];

        if (id) {
          return handleDeletePost(id);
        }
      }

      return new Response("Not Found", { status: 404 });
    } catch (error) {
      return new Response("Server Error", { status: 500 });
    }
  },
});

console.log(`Server running at http://localhost:${PORT}/api/posts`);
