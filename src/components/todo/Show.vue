<template>
  <div v-if="!isEditing" class='ui card'>
    <div class="content">
      <i class="right floated remove icon" v-on:click="deleteTodo(todo)"></i>
      <i class="right floated edit icon" v-on:click="showForm"></i>
      <div class='header'>
        {{ todo.title }}
      </div>
      <div class='description'>
        {{ todo.project }}
      </div>
    </div>
    <div class="extra content">
      <div class="ui tiny basic green button" v-on:click="completeTodo(todo)" v-show="!todo.done">Complete</div>
      <div class="right floated author">
        <v-gravatar class="ui avatar image" :email="todo.author.email " :size="56" default-img="mm"/>
        {{ todo.author.name }}
      </div>
    </div>
  </div>

  <div v-else="!isEditing" class='ui card'>
    <div class="content">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title">
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project">
        </div>
          <button class='ui basic blue button' v-on:click="hideForm">
            Save
          </button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data () {
      return {
        isEditing: false
      }
    },
    methods: {
      showForm () {
        this.isEditing = true
      },
      hideForm () {
        this.isEditing = false
      },
      deleteTodo (todo) {
        this.$emit('delete-todo', todo)
      },
      completeTodo (todo) {
        this.$emit('complete-todo', todo)
      }
    }
  }
</script>

<style>
  .ui.card > .content .edit.icon,
  .ui.cards > .card > .content .edit.icon,
  .ui.card > .content .remove.icon,
  .ui.cards > .card > .content .remove.icon {
    cursor: pointer;
    opacity: .75;
    -webkit-transition: color .1s ease;
    transition: color .1s ease;
  }
  .ui.card > .content .edit.icon:hover,
  .ui.cards > .card > .content .edit.icon:hover {
    color: blue;
  }
  .ui.card > .content .remove.icon:hover,
  .ui.cards > .card > .content .remove.icon:hover {
    color: red;
  }
</style>
