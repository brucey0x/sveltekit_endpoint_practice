# Roadmap

## Features

-   [] Get username & email authentication to work
-   [] Add oAuth
-   [] Integrate Zod form validation
-   [] Allow creation of custom posts
-   [] Allow editing of custom posts
-   [] Allow deletion of custom posts

## Challenges

-   [ ] Add Lucia authentication using the `load` function with my new understanding. Learn what `locals` do and how I can use these to access the user and session throughout the application.

# APIs

By creating a `/routes/api/[name]/+server.ts` file I'm able to set up a GET and POST HTTP method.

When visiting those api routes, the GET response will be visible and can be interpreted. I'm using this in the `/routes/+page.svelte` to load the posts, where the `/api/posts/+server.ts` GET is pulling information from the database, filtering out a random number of posts and returning them as json.

The database has been seeded with the dummy JSON data in the `prisma/seed.ts` file.

GET is used to receive data from a server, POST when you want to send data to a server.

Server-side rendered pages are better for SEO since the code will be available for crawlers. But it's typically slower than CSR, if I understand correctly. I need to research this.

## 2023-12-25

I tried to integrate both username & email with password, however couldn't get it to work. One workaround could be to simply use email authentication. I'd still need to try the email verification and password recovery.

Tried setting up only email & pw authentication and unfortunately couldn't get it to work. Keeps asking for `username` as password despite changing the database schema, types and migrating, pushing and resetting database. Nothing seems to work.

## 2023-12-16

Going to integrate Lucia auth for practice. Simple library that's originally built to be a less bloated auth option for SvelteKit.

## 2023-12-15

`+page/layout.server.ts` and `page/layout.ts` run concurrently, which is why load functions are difficult to use for authentication, unless each child component's load function is using `await parent()` in their load function.

Instead, it's better to use `hooks.server.ts` to intercept any requests and modify them prior to any load functions are called. Hunter explains that well [here](https://www.youtube.com/watch?v=K1Tya6ovVOI).

I also learned that while `+layout.server.ts` can return a Supabase client, any server responses can only return JSON and stringifying the Supabase client destroys the methods on the object, so even when it's parsed it loses its functionality. Therefore it's better to put it in a store.

## 2023-12-13

While I can fetch data from a local API in a `+page.svelte` or `+layout.svelte`, this won't be great for SEO and incurs a HTTP request for every page load.

Instead, I should use universal load functions where possible, which can be defined as `+page/layout.ts` or server-side load functions (for sensitive information and DB calls) in `page/layout.server.ts`. These can be made available to the sibling page/layout using `data: PageData` and destructured for ease of use.

If you use in `+layout.server.ts`

Left off [here](https://youtu.be/rsmLu5nmh4g?si=LuMiPLwLFVGpkBAH&t=4055) in the tutorial
