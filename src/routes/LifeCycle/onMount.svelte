<script lang="ts">
  import {onMount} from 'svelte';


type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };


  
 
  let photos : Photo[]  = [];
  // Variable 'photos' implicitly has type 'any[]' in some locations where its type cannot be determined.

  onMount(
    async() =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      photos = await res.json();
      photos = photos.filter((photo) =>  photo.id < 10); //photo.id > 0 &&
      console.log(photos);

    }
  )
</script>

<div>
  <h1 class="text-yellow-800 font-semibold">on Mount</h1>
  <div class="ml-[10%]">
<h1>Photo album</h1> <span class=" text-red-400 font-bold"> Problem </span>

<div class="photos">
	{#each photos as photo}
		<figure>
			<img  src={photo.url} alt={photo.title} />
			<!-- <figcaption>{photo.title}</figcaption> -->
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>
  </div>
</div>

