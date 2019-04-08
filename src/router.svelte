<script>
export let routeList
export let component
import { onMount } from 'svelte'
import pages from './pages'

const pathByName = n => n==='home'? '' : '/' + n,
	pageByPath = p => {
		if(p === '/' || p === '') return pages.home
		if(p && p[0]==='/') {
			p = p.slice(1, p.length)
			if( p[p.length-1] === '/' ) p = p.slice(0, p.length-1)
		}
		return pages[p.toLowerCase()]
	}
export const navigateTo = n => {
		let p = pathByName(n.toLowerCase())
		window.history.pushState( {}, p, window.location.origin + p )
		component = pageByPath(p)
	}

onMount(() => {
	window.onpopstate = 
		() => component = pageByPath(window.location.pathname)
	})
routeList = Array.from(Object.values(pages))
component = pageByPath(window.location.pathname)
</script>
<nav>
 <ul>
	{#each routeList as page}
		{#if component && (component.name !== page.name) }
			<li>
				<a 
					on:click|preventDefault={()=>navigateTo(page.name)} 
					href={pathByName(page.name.toLowerCase())}>{page.name}</a>
			</li>
		{/if}
	{/each}
 </ul>
</nav>
<svelte:component this={component} />