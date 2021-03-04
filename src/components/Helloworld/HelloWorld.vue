<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <!-- <h1>{{ txt }}</h1>
    <h1>{{ presentation() }}</h1>
    <a :href="URLVueJS">le lien vue js</a>
    <img :src="URLImg"> -->
    <!-- <h1 v-bind:title="txt" v-for="todo in todos">{{ todos }}</h1> -->
    
   <!--  <h3>{{compteur ? 'il est true' : 'il est false'}}</h3>
    <button @click="compteurA++">Augmente</button>
    <button @click="compteurA--">Decremente</button><br/>
    <h2> Compteur : {{ compteurA }}</h2><br/>
    <p>{{ checkValeur() }} ||||||  {{memo}}</p><br/>

    <button @click="compteurB++">Augmente</button> -->
    <!-- <button @click="compteurB--">Decremente</button><br/> -->
    <!-- <h2> Compteur : {{ compteurB }}</h2><br/> -->
<!--     <canvas @mousemove="coords"></canvas>
    <p>{{x }}/{{y}}</p><br/>
    <div @click='foo'>
      <p> LOREMMM
        <button @click.stop="foo">Clique moi</button>
      </p>
    </div>

    <form @submit.prevent="foo">
      <button>Valider</button>
    </form> -->
    <!-- <p>Ton nom</p> -->
    <!-- @keyup="inpFunc" -->
    <!-- <input type="text" v-model="valeur">
    <p>{{ valeur }}</p> -->

    <!-- <p v-html="htmlBrut"></p> -->
    <!-- <button @click="toggleBox= !toggleBox">Toggle la couleur</button> -->
    <!-- :class="{ box, red : toggleColor}" -->
    <!-- <div 
    :class="[objCSS, toggleColor ? 'bordure' : '']"
    ></div> -->
<!--     <p :style="{backgroundColor: 'blue'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam accusantium odio animi! Dolor doloremque omnis repellendus nobis voluptatibus, qui voluptate aut, a commodi voluptas sed, quasi cum adipisci unde!</p>
 -->
    <!-- <p :style="monStyle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam accusantium odio animi! Dolor doloremque omnis repellendus nobis voluptatibus, qui voluptate aut, a commodi voluptas sed, quasi cum adipisci unde!</p>
 -->
    <!-- <div v-if="toggleBox" class="box red"></div>
    <p v-else="toggleBox">Sinon</p> -->
    <!-- <p v-if="num === 1">la valeur est 1</p>
    <p v-else-if="num === 2">la valeur est 2</p>
    <p v-else-if="num === 3">la valeur est 3</p>
    <p v-else>ce n'est ni 1, 2 ou3</p> -->
    <!-- <template v-if="toggleBox">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident hic accusamus. Quas libero, adipisci earum eveniet modi accusamus perferendis dignissimos! Iure nulla dolor exercitationem molestias, tempora fuga magnam cumque!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident hic accusamus. Quas libero, adipisci earum eveniet modi accusamus perferendis dignissimos! Iure nulla dolor exercitationem molestias, tempora fuga magnam cumque!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident hic accusamus. Quas libero, adipisci earum eveniet modi accusamus perferendis dignissimos! Iure nulla dolor exercitationem molestias, tempora fuga magnam cumque!</p>
    </template> -->
    <!-- <ul> -->
      <!-- <li v-for="(number, index) in tableau" :key="index">{{number}}</li> -->
      <!-- <li v-for="(fruits, index) in tableauFruits" :key="index">{{index}}{{fruits}}</li> -->
      <!-- <li v-for="(chats,props, index) in objChat" :key="index">{{props}}:{{chats}}</li> -->
      <!-- <li v-for="(obj, index) in objChat" :key="index">
        <div v-for="(val, props, index) in obj" :key="index">{{props}}:{{val}}</div>
      </li>
    </ul> -->

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
     /*  txt: 'je suis le test',
      nb: 10,
      URLVueJS: 'https://cli.vuejs.org/guide/creating-a-project.html#vue-create',
      URLImg: 'https://media.istockphoto.com/photos/breakfast-table-picture-id938158500?k=6&m=938158500&s=612x612&w=0&h=jQesaJxMrVe5w1Tibgm724d8BD_HWVoCl70l-uqoADs=' */
      /* todos: ['Prendre le panier', 'Les cornichons'] */
      /* compteurA: 0,
      compteurB: 0 */
/*       x:0,
      y:0 */
      /* valeur:"",
      htmlBrut: '<p>Mon html Brut</p>' */
      /* toggleColor : false, */
      toggleBox : true,
      /* box: true */
      /* color: 'lightblue',
      width: 200 */
      /* num: 30 */
      /* tableau: [1,2,3,4,5] */
      /* tableauFruits: ["Fraise","Banane", "Poire"] */
      objChat: [
        {race: 'Persan',age: 3,poids: '3 kg'},
        {race: 'Persan',age: 3,poids: '3 kg'},
        {race: 'Persan',age: 3,poids: '3 kg'},
        {race: 'Persan',age: 3,poids: '3 kg'}
      ]
    }
  },
  methods : {
    /* presentation : function(){
      return this.txt + this.nb;
      
    } */
    /* augmente: function(){
      this.compteur++;
    },
    baisse: function(){
      this.compteur--;
    }, */
/*     coords: function(e){
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    foo: function(){
      console.log('Cliqué');

    } */
    /* inpFunc: function(e){ */
      /* console.log('Tu as appuyé sur une touche'); */
      /* this.valeur = e.target.value;
      console.log(this.valeur); */
      checkValeur: function(){
        console.log("la fonction s'est lancé");
        return this.compteurA >10 ? 'superieur a 10' : 'inferieur a 10';
      }
  },
  /* watch : {
    compteurA: function(){
      /* console.log('PROP UPDATE') */
      /* let ctx=this; */ /* pas obligé de mettre le this dans une varible si on fait une fonction fleché */
      /* setTimeout(()=>{ */
        /* ctx.compteurA=0; */
        /* this.compteurA=0;
      }, 1000)
    }
  }, */
  /* computed : {
    memo: function(){
      console.log("MEMO s'est lancé");
      return this.compteurA >10 ? 'superieur a 10' : 'inferieur a 10'
    }
  } */ 
  /* computed:{
    objCSS : function(){
      return {
        red: */ /* this.toggleColor *//* true,
        box: true
      }
    },
    monStyle: function(){
      return{
        backgroundColor: this.color,
        width: this.width +"px"
      }
    }
  } */
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
  width: 250px;
  height: 250px;
  border: 1px solid #333;
}
.red{
  background: red;
}
.bordure{
  border: 10px solid #333;
}

canvas{
  width: 300px;
  height: 200px;
  border: 1px solid black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
