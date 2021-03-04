<template>
    <div class="header-top">
        <p>
            {{titre}}
        </p>
    </div>
</template>

<script>

/* import {emitter} from '../../main' */
 
export default {
    name: 'Header',
    data(){
        return {
            titre: 'Mont titre de base'
        }
    },
    /* beforeCreate(){
        console.log('il va etre créé !');
    },
    created(){
        console.log('Le composant est créé !');
        emitter.on('changeTitle', (data) =>{
            this.titre = data
        } )
    },
    beforeMount(){
        console.log('il va etre monté dans le DOM ');
    },
    mounted(){
        console.log('il est integré dans le DOM ');
    }, beforeUpdate(){
        console.log('il va se mettre à jour');
    },
    updated(){
        console.log("Le composant s'est bien à jour!");
    } */
}
</script>


<style scoped src="./Header.css">

</style>