# Practicing SvelteKit Endpoints and Lucia Auth with Prisma ORM

Basic structure inspired by this [Joy of Code tutorial](https://www.youtube.com/watch?v=rsmLu5nmh4g&t=4423s) about SvelteKit endpoints.

Then expanded to include authentication using the [Lucia Auth documentation](https://lucia-auth.com/getting-started/sveltekit/). I first added `username & password` auth, then tried adding `email & password`. This repo is for local storage, so there's no email client configured.

My objective was to learn how Prisma ORM works, how Lucia Auth works and how it compares to configuring client-side authentication using Supabase's SSR package. I understand the latter calls the Supabase Postgres database when making any db calls and can check the authentication status and permissions using Row Level Security ("RLS"), but am unfamiliar with the nuances with using a local database for authentication. I've never used an ORM before, and have heard good things about Prisma and Drizzle. I want to try both.

## Learnings

### SvelteKit Endpoints

Got a much more granular understanding of when to use `+page/layout.server.ts` for server-side loading, `page/layout.ts` for universal load functions and how to propagate these safely throughout an application using `$page` and `export let data`.

I also learned not to write to writable stores which are globally defined in the client, since that can create leakage and shared state between users. If I want to use writable stores for each user of an application, I should define it client-side and route it to components using the Context API, which effectively is the same thing as the `$page.data` prop.

### Prisma ORM

It's impractical to have to `prisma db push` and `prisma generate` whenever you change the database schema. I also haven't studied migrations but can imagine that it's easy to destroy critical data when changing the database structure. If I were to work on a production grade application, I'd benefit from something which is more beginner friendly.

The query language of Prisma is straightforward. However it only works when you have your types carefully defined, which I struggled with at the start but are defined in `app.d.ts`. It's great to be able to interact with your database having type safety, but only works when you configure it well. I need to practice this and only figured this out after reviewing multiple repos and the documentation for how Lucia was implemented with Prisma.

### Lucia Auth

The documentation was reasonably clear, however not too beginner friendly. Particular difficulties included:

-   Adding both username & pw AND email & pw authentication
-   How do make Lucia work in a production env, inc. routing for the email verification token and sending of emails
