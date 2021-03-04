<template>
    <div class="container nt-5">
        <h1>Appel à une API</h1>
        <!-- <h1>{{title}}</h1> -->
 <!--    <p>
        {{txt}}
    </p> -->
    
    <!-- <List :prenom="prenom.taille"/> -->
    <!-- <List :prenom="prenom"/> -->
    <!-- v-on:changeTitle="changementTitle($event) -->
    <!-- <List :myArr="myArr" :txt="txt">
        <p>Envoyez</p>
        <template v-slot:info>
            <h1>Le contenu du slot nommé</h1>
        </template>
    </List> -->
    <!-- <List :myArr="myArr" :txt="txt"/> -->

    
            <!-- <div class="btn btn-outline-primary mr-2" @click='toggleOng1'>Onglet 1</div>
            <div class="btn btn-outline-primary" @click='toggleOng2'>Onglet 2</div> -->
            <!-- div class="btn btn-outline-primary mr-2" @click="component='Texte1'">Onglet 1</div>
            <div class="btn btn-outline-primary" @click="component='Texte2'">Onglet 2</div>

            <div class="card mb-5"> -->
                <!-- <Texte1 class="p-5" v-if="toggle1"/>
                <Texte2 class="p-5" v-if="toggle2"/> -->
                <!-- <component class="p-5" :is="component"></component>
            </div>

            <div class="btn btn-success mr-2" @click='toggleReveal'>Modale</div>
            
                <Modale :reveal="reveal" :toggleReveal="toggleReveal"/> -->
            <img :src="urlImg" alt="cat" type="object">
    </div>
</template>


<script>


/* import Texte1 from './Text/Texte1'
import Texte2 from './Text/Texte2'
import Modale from './Modale/Modale.vue' */
/* import List from './List/List.vue' */
import axios from 'axios'


export default {
    name:'Content',  
    data(){
        return {
            /* myArr: [
                {titre: 'Inception', date: 2010},
                {titre: 'Ace Ventura', date: 1994},
                {titre: 'Kamoulox', date: 2005},
            ],
            txt:'Hello World',
            title: 'Je suis le titre',
            toggle1: true,
            toggle2: false,
            component:'Texte1',
            reveal: false, */
             
           /*  txt: 'je suis le contenu', */
            /* prenom: {
                taille: 188 
            } */
            /* prenom: ['Fraise', 'banane'] */
            /* prenom: function(){
                console.log('Hello depuis le parents')
            } */
            urlImg: null
        }
    },
    /* components: {
        List,
        Texte2,
        Texte1,
        Modale 
        
    }, */
    methods: {
        /* toggleOng1: function(){
            this.toggle1 = true
            this.toggle2= false
        },
        toggleOng2: function(){
            this.toggle1 = false
            this.toggle2= true
        },
        toggleReveal: function(){
            this.reveal = !this.reveal
        },  */    
     /* changementTitle: function(nwTitle){
            this.title = nwTitle;
        }  */
        
    },
    mounted(){
        axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            console.log(res);
            this.urlImg = res.data[0].url
        })
    }
} 

</script>



<style scoped >
    h1{
        margin-top: 100px!important;
    }
</style>