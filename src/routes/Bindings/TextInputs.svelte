<script>
  let name = ''
</script>


<div>
  <h1 class="text-yellow-800 font-semibold ">Text Inputs</h1>
  <div class="ml-[10%] flex ">
  <input bind:value={name} class="border border-2 w-[200px] rounded-lg p-1" placeholder="please enter text"/>
  <p class="ml-5">Hello {name || 'stranger'}!</p>
</div>
</div>