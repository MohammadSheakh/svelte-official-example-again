<script>
  import "../app.css";
	import NestedComponents from "./Introduction/NestedComponents.svelte";
	import ReactiveAssignment from "./Reactivity/ReactiveAssignment.svelte";
  let name = 'world';
</script>


<div class="w-[100%]">
  <div class="container mx-auto">
    <h1 class="text-yellow-500 font-bold">Introduction</h1>
    <div class="ml-[20%]">
      <h1>Hello {name}!</h1>
      <NestedComponents/>
    </div>
    
    <h1 class="text-yellow-500 font-bold">Reactive Assignment</h1>
    <div class="ml-[20%]">
      <ReactiveAssignment/>
    </div>
    
  </div>
  
</div>

<div class="ml-[20%]">
      
</div>
