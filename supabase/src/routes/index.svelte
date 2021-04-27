<script>
	import supabase from '$lib/db';
	import Modal from '$lib/components/modal.svelte';
	let email;
	let password;
    let postname;
	const user = supabase.auth.user();

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email: 'worakrit.soo@pea.co.th',
			password: 'hnmdpjqrfNboRkcEcdLz'
		});
	}
	async function logIn() {
		const { user, session, error } = await supabase.auth.signIn({
			email: 'worakrit.soo@pea.co.th',
			password: 'example-password'
		}).then(
            res=>{
                console.log(res);
            }
        )
	}

    async function addpost(){
    const newPost = await supabase
        .from('posts')
         .insert(
         { name: postname,details:{}})
    }

async function getAll(){
    const posts = await supabase
    .from('posts')
    .select()

}
getAll()
</script>

<ion-header collapse>
	<ion-toolbar>
		<ion-buttons slot="secondary">
			<ion-button>
				<ion-icon slot="icon-only" name="person-circle" />
			</ion-button>
			<ion-button>
				<ion-icon slot="icon-only" name="search" />
			</ion-button>
		</ion-buttons>
		<ion-title>
			<h1>Pea</h1>
		</ion-title>
		<ion-buttons slot="primary">
			<ion-button color="secondary">
				<ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical" />
			</ion-button>
		</ion-buttons>
	</ion-toolbar>
</ion-header>
   
    <input type="text" bind:value={postname} />
    <ion-button on:click={addpost}>Add Posts</ion-button>
    <ion-button on:click={signUp}>Login</ion-button>




<style>
	/* your styles go here */
</style>
