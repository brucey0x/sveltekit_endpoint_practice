import db from "$lib/database"
import { generateRandomString, isWithinExpiration } from "lucia/utils"

const EXPIRES_IN = 1000 * 60 * 60 * 2 // 2 hours

export const generateEmailVerificationToken = async (userId: string) => {
	const storedUserTokens = await db.email_Verification_Token.findMany({
		where: {
			user_id: userId
		}
	})
	if (storedUserTokens.length > 0) {
		const reusableStoredToken = storedUserTokens.find((token) => {
			return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2)
		})
		if (reusableStoredToken) return reusableStoredToken.id
	}
	const token = generateRandomString(63)
	await db.email_Verification_Token.create({
		data: {
			id: token,
			expires: new Date().getTime() + EXPIRES_IN,
			user_id: userId
		}
	})

	console.log("Email verification token created successfully.")

	return token
}

// Need to create validation token
export const validateEmailVerificationToken = async (token: string) => {
	const storedToken = await db.$transaction(async (prisma) => {
		const storedToken = await prisma.email_Verification_Token.findFirst({
			where: {
				id: token
			}
		})
		if (!storedToken) throw new Error("Token invalid") // not sure if this is the best way to create an error message in SvelteKit
		// Delete token. Doesn't return anything.
		await prisma.email_Verification_Token.deleteMany({
			where: {
				user_id: storedToken.user_id
			}
		})
		// Return originally found token.
		return storedToken
	})
	const tokenExpires = Number(storedToken.expires)
	if (!isWithinExpiration(tokenExpires)) {
		throw new Error("Token expired")
	}
	return storedToken.user_id
}
