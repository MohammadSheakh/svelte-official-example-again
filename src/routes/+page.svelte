<script>
  import "../app.css";
	import NestedComponents from "./Introduction/NestedComponents.svelte";
	import DeclaringProps from "./Props/DeclaringProps/DeclaringProps.svelte";
	import ReactiveAssignment from "./Reactivity/ReactiveAssignment.svelte";
  import ReactiveDeclarations from "./Reactivity/ReactiveDeclarations.svelte";
	import ReactiveStatements from "./Reactivity/ReactiveStatements.svelte";
  import SpreadingProps from "./Props/SpreadProps/SpreadProps.svelte";
	import IfBlock from "./Logic/IfBlock.svelte";
  let name = 'world';
</script>


<div class="w-[100%] mb-[40%]">
  <div class="container mx-auto">
    <h1 class="text-yellow-500 font-bold">Introduction</h1>
    <div class="ml-[10%]">
      <h1>Hello {name}!</h1>
      <NestedComponents/>
    </div>
    
    <h1 class="text-yellow-500 font-bold">Reactivity</h1>
    <div class="ml-[10%]">
      <ReactiveAssignment/>
      <ReactiveDeclarations/>
      <ReactiveStatements/>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Props</h1>
      <div class="ml-[10%]">
          <DeclaringProps/>
          <SpreadingProps/>
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold">Logic</h1>
      <div class="ml-[20%]">
          <IfBlock/>
          
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold"></h1>
      <div class="ml-[20%]">
          
      </div>
    </div>

    <div>
      <h1 class="text-yellow-500 font-bold"></h1>
      <div class="ml-[20%]">
          
      </div>
    </div>
    
  </div>
  
</div>
<!--
 <div>
  <h1 class="text-yellow-500 font-bold"></h1>
  <div class="ml-[20%]">
      
  </div>
</div>
 -->

