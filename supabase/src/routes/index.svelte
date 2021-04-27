<script>
	import supabase from '$lib/db';
	import Modal from '$lib/components/modal.svelte';
	let email;
	let password;
	let postname;
	const user = supabase.auth.user();
	let listpost=[]

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: 'worakrit.soo@pea.co.th',
			password: 'hnmdpjqrfNboRkcEcdLz'
		});
	}
	async function logIn() {
		const { user, session, error } = await supabase.auth
			.signIn({
				email: 'worakrit.soo@pea.co.th',
				password: 'example-password'
			})
			.then((res) => {
				console.log(res);
			});
	}

	async function addpost() {
		if(data){

			const newPost = await supabase.from('posts').insert();
		}
	}

	async function getAll() {
		const posts = await supabase.from('posts').select('*');
		console.log(posts.body)
		listpost = posts.body
	}
	
</script>

<ion-header>
	<ion-toolbar>
		<ion-title>Home</ion-title>
	</ion-toolbar>
</ion-header>

<ion-button on:click={getAll}>getAll</ion-button>
	<!-- promise is pending -->
{#each listpost as post}
	 <!-- content here -->
	       <ion-item-sliding id={post.id}>
                        <ion-item href="#">
                        <ion-label>
                            <h2>{post.Name}</h2>
                            <p>{post.url}</p>
                            <p>{post.details}</p>
                        </ion-label>
                        <ion-note slot="end">
                           🚀
                        </ion-note>
                        </ion-item>

                        <ion-item-options side="start">
                        <ion-item-option>
                            <ion-icon slot="icon-only" name="heart"></ion-icon>
                        </ion-item-option>
                        </ion-item-options>

                        <ion-item-options side="end">
                        <ion-item-option color="danger">
                            <ion-icon slot="icon-only" name="trash"></ion-icon>
                        </ion-item-option>
                        <ion-item-option>
                            <ion-icon slot="icon-only" name="star"></ion-icon>
                        </ion-item-option>
                        </ion-item-options>
                    </ion-item-sliding>
{/each}
	<!-- promise was fulfilled -->




<style>
	/* your styles go here */
</style>
