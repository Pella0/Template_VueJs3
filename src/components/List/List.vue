<template>
    <div>
        <ul class="liste mt-2">
            <!-- <li v-for="(fruit, index) in fruits" :key="index">{{fruit}}</li> -->
            <li v-for="(movie, index) in myArr" :key="index">
                <div class="card">
                    <div class="card-body">
                        Titre : {{movie.titre}}
                        <br/>
                        Date : {{movie.date}}
                    </div>
                </div>
            </li>
        </ul>
        <p>{{txt}}</p>
        <!-- <p>{{prenom()}}</p> -->
        <!-- <p>{{reversing()}}</p> -->
        <!-- <div v-on:click="supprFilm" class="btn btn-danger mt-2" >Supprime le film</div>
        <div @click="supprTxt" class="btn btn-danger mt-2 ml-2" >Supprime le txt</div>
    -->
        <div @click="changeTitle" class="btn btn-danger mt-2" >Modifier le titre</div>
        <slot>
            Patientez
        </slot>
        <slot name="info"></slot>
    </div> 
</template>

<script>
import {emitter} from '../../main'

export default {
    name: 'List',
    data(){
        return{
             fruits: ['fraise', 'banane', 'peche'] 
        }
    },

    ///PROPS///

    /* props:['prenom'], */
   /*  props:{
        prenom: {
            type: Function,
            required: true
        }
    }, */
    props:['myArr', 'txt'],

    ///METHODS///

   /*  methods: {
        reversing : function(){
            return this.prenom.split('').reverse().join('')
        }
    } */
    methods: {
        /* supprFilm: function(){
            this.myArr.pop()
        },
        supprTxt: function(){
            this.txt ="";
        } */
        changeTitle: function(){
            /* this.$emit('changeTitle', 'Mon nouveau titre') */
            emitter.emit('changeTitle', 'Titre changer avec emitter')
        }
    }
}
</script>

<style scoped src="./List.css">

</style>