import { auth } from "$lib/server/lucia"
import type { Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"

export const auth_handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event)
	event.locals.session = await event.locals.auth.validate()

	return await resolve(event)
}

// This ensures that the handle actions in auth_handle are handled in sequence
export const handle = sequence(auth_handle)
