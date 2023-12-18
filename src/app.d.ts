// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { AuthRequest, Session, User } from "lucia"

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: AuthRequest
			session: Session | null
		}
		interface PageData {
			user?: User
		}
		// interface Platform {}
	}
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth
		type DatabaseUserAttributes = {
			username: string
		}
		type DatabaseSessionAttributes = Record<string, never>
	}
}

export {}
