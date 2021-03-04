<template>
    <div class="container nt-5">
        
            <!-- <img :src="urlImg" alt="cat" type="object"> -->
    </div>
</template>


<script>


/* import axios from 'axios' */


export default {
    name:'Content',  
    data(){
        return {
            
            /* urlImg: null */
        }
    },
    components: {
        
    }, 
    methods: {
        
    },
    mounted(){
        /* axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            console.log(res);
            this.urlImg = res.data[0].url
        }) */
    }
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
</style>