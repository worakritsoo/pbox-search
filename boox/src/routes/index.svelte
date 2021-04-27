<script>
  import ImgEncoder from 'svelte-image-encoder';
  let src='some-image.jpg';
  let url;
</script>

<ImgEncoder {src} bind:url />
<p>{url}</p>