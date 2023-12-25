<script lang="ts">
	import { enhance } from "$app/forms"
</script>

<h1>Email verification</h1>
<p>Check your inbox for a verification link (i.e. console)</p>

<h2>Resend verification link</h2>
<form method="POST" use:enhance>
	<input type="submit" value="Resend" />
</form>
