<template>
    
    <div class="models-page">
        <ModelsBar />
        <div class="models-body">
        </div>
    </div>
    
</template>

<script>

    import ModelsBar from "@/components/modelverse-page/ModelsBar.vue" 
    export default{
        components : {
            ModelsBar : ModelsBar
        }
    }

</script>

<style>
    .models-page {
 
        background-image: url("@/assets/modelverse-backgorund.jpg");
        background-size: 100%;

    }

</style>