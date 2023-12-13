# APIs

By creating a `/routes/api/[name]/+server.ts` file I'm able to set up a GET and POST HTTP method.

When visiting those api routes, the GET response will be visible and can be interpreted. I'm using this in the `/routes/+page.svelte` to load the posts, where the `/api/posts/+server.ts` GET is pulling information from the database, filtering out a random number of posts and returning them as json.

The database has been seeded with the dummy JSON data in the `prisma/seed.ts` file.

GET is used to receive data from a server, POST when you want to send data to a server.

Server-side rendered pages are better for SEO since the code will be available for crawlers. But it's typically slower than CSR, if I understand correctly. I need to research this.

## 2023-12-13

While I can fetch data from a local API in a `+page.svelte` or `+layout.svelte`, this won't be great for SEO and incurs a HTTP request for every page load.

Instead, I should use universal load functions where possible, which can be defined as `+page/layout.ts` or server-side load functions (for sensitive information and DB calls) in `page/layout.server.ts`. These can be made available to the sibling page/layout using `data: PageData` and destructured for ease of use.

If you use in `+layout.server.ts`