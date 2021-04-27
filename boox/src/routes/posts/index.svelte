<script>

	// your script goes here
	let title='';
	let name='';
	let detail='';
	let files;
	$: src = files;
    let isShowing=true
</script>

<!-- markup (zero or more items) goes here -->


<ion-card>
	<ion-card-header>
		<ion-card-subtitle>{title}</ion-card-subtitle>
		<ion-card-title>{name}</ion-card-title>
	</ion-card-header>
	<img {src} alt="{name} dances." />{files}
	<ion-card-content>
		{detail}
	</ion-card-content>
</ion-card>

<ion-card>
  
    <legend>
        <h1>
            โพส
        </h1> 
        <button  on:click={() => isShowing = !isShowing}>
            {isShowing 
    ? ' + ' 
    : ' - '}
    </button>
</legend>

<form>
        {#if isShowing}
              <input type="text" bind:value={title} placeholder="Title/หัวเรื่อง" />
             <input type="text" bind:value={name} placeholder="Name/ชื่อ" />
             <input type="text" bind:value={detail} placeholder="Detail/รายละเอียด" />
             <input type="file"  bind:value={files}/>
        {/if}
            
       
	</form>
</ion-card>

<style>
	/* your styles go here */
	form {
		display: grid;
		margin: 2%;
		gap: 2ch;
	}

    button{
        display: block;
    }

    summary{
        list-style-position: inside;
        list-style-type: circle ;
    }


	legend {
        display: flex;
		font-size: large;
		position: sticky;
        justify-content: space-between;
        align-items: center;
        margin-inline: 10px;
    }
</style>
