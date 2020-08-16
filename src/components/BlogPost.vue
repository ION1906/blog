<template>
  <div> 
<br><br>
      <div>
        <h1 id="pg2-title">{{ post.title | capitalize }}</h1>
        <br>
        <p id="pg2-body">{{ post.body | capitalize }}</p>
      </div>
      <div>
          <br><br>
<div class="co-b">
  <p>Comments ({{ total }})</p>
<i class="far fa-comment" @click="commentIs = !commentIs"></i>
</div>
<br>
  <div v-if="commentIs">
    <div class="co-i">
                  <form>
                    <i class="far fa-user-circle u-i"></i>
                    <input class="name" type="text" name="name" id="name" v-model="details.name" placeholder="Name">
                    <input class="comment" type="text" name="comment" id="comment" v-model="details.body" placeholder="Comment">
                    <button @click.prevent="addComments" class="c-b">Comment</button>
                  </form>
              </div>
              <br>
</div>
          <div class="co-s">
          <ul class="c-l">
              <li class="c" v-for="comment in comments" :key="comment.id">
                  <h3 class="n">
               
                    
                    <span class="n-span">
                    {{ comment.name | capitalize }}
                    </span>
                    </h3>
                  <br>

                  
                  <p>{{ comment.body | capitalize }}</p>
              </li>
          </ul>
          </div>

          <div>
  
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            post: {},
            comments: [],
            commentIs: false,
            details: {
                name: "",
                body: ""
            },
            total: 5
        }
    },
    created(){
        this.getPosts(),
        this.getComments()
    },
    methods: {
        getPosts(){
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(
            response=> response.json()
        ).then(
            data => this.post = data
            )
        },
        getComments(){
            this.$http.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.id).then(
                response => response.json()
            ).then(
                data => {this.comments = data
                console.log(this.comments)}
            )
        },
        addComments(){
            if (this.details.name && this.details.body){
                this.comments.push(this.details)
                this.details = {}
                this.total++
            }
        }
    },
    filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;
}
#pg2-title {
    width: 50%;
    text-align: center;
    padding-left: 10.3em !important;
}
#pg2-body {
    width: 40%;
     text-align: center;
    padding-left: 22em !important;
    font-size: 18px;
}
.co-b {
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 48%;
  height: 2em;
  padding: 1em !important;
}
.co-b i {
  position: absolute !important;
  top: 50%;
  left: 95%;
  transform: translate(-95%, -50%) !important;
  font-size: 24px;
  cursor: default;
  transition: all 250ms ease;
  -webkit-tap-highlight-color: transparent !important;
}
.co-b p {
  position: absolute !important;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%) !important;
  font-size: 18px;
  font-weight: bold;
}
.co-b i:hover {
  color: #19BF69 !important;
}
.co-i {
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 48%;
  height: 3em;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1em !important;
}
.name, .comment {
  font-family: 'Gilroy', sans-serif !important;
  outline: none !important;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  width: 9em;
  height: 2.4em;
  padding-left: 1em !important;
  font-size: 16px;
}
.u-i {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(-5%, -50%) !important;
  font-size: 24px;
}
.name {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%) !important;
}
.comment {
  position: absolute;
  top: 50%;
  left: 62%;
  transform: translate(-62%, -50%) !important;
}
.c-b:hover {
  background: #19BF69;
}
.co-s {
  position: relative !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 48%;
  height: auto;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  padding: 1em !important;
  margin-bottom: 3em !important;
}
.c-l {
  list-style-type: none;
}
.c {
  margin: 1em !important;
}
.u {
  font-size: 20px;
   margin-right: 0.2em !important;
}
.n {
  font-size: 20px;
}
@media screen and (max-width: 1024px) {
  .comment-input {
    height: auto;
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
  .name {
  position: relative;
  top: 0%;
  left: 0%;
  transform: translate(0, 0) !important;
  margin-left: 2em !important;
}
.comment {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-left: 3.5em !important;
}
.u-i {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-left: 0.5em !important;
  font-size: 24px;
}
.c-b {
  position: relative;
   top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-top: 1.5em !important;
  margin-left: 4.2em !important;
}
}
@media screen and (max-width: 768px) {
.p-title, .p-body, .img {
  width: 60% !important;
}
.co-b, .co-i, .co-s {
  width: 58%;
}
.comment {
  margin-left: 2em !important;
}
}
@media screen and (max-width: 575px) {
  #pg-title, #pg-body {
  width: 80% !important;
}
  .co-b, .co-i, .co-s {
  width: 74%;
  }
  .co-b i {
  position: absolute !important;
  top: 50%;
  left: 90%;
  transform: translate(-90%, -50%) !important;
}
.co-b p {
  position: absolute !important;
  top: 50%;
  left: 12%;
  transform: translate(-12%, -50%) !important;
}
.name {
  width: 10em;
}
.comment {
  position: relative;
  top: 0;
  left: 0;
  transform: translate(0, 0) !important;
  margin-top: 1.5em !important;
  margin-left: 4.2em !important;
  width: 10em;
}
}
@media screen and (max-width: 320px) {
.name {
  margin-left: 1.5em !important;
  width: 9em;
}
.comment {
  width: 9em;
}
.comment, .c-b {
  margin-left: 3.7em !important;
}
}
</style>
