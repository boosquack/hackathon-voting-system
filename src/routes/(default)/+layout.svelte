<script lang="ts">
	import Navbar from '@components/layout/Navbar.svelte';
</script>

<div>
	<slot />
</div>

<style>
	div {
		min-height: calc(100vh - 64px);
	}
</style>
