<ion-header>
  <ion-toolbar>
    <ion-title>Posts</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
    <ion-button on:click={add}>Click me</ion-button>
</ion-content>  
<script>
    import  supabase  from "$lib/db";

    async function post(){
        let { data: posts, error } = await supabase
        .from('posts')
        .select('inserted_at')
    }
    
    async function add(){
        const { data, error } = await supabase
    .from('posts')
    .insert([
    { name: 'The Shire', country_id: 554 },
    { name: 'Rohan', country_id: 555 },
  ])
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->