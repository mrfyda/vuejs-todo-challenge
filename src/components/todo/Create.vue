<template>
  <div class='ui basic content segment'>
    <button class="ui primary labeled icon button" id="create-task" v-on:click="openForm" v-show="!isCreating">
      Add Task
      <i class="add icon"></i>
    </button>

    <div class='ui card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Project</label>
            <input v-model="projectText" type='text' ref='project' defaultValue="">
          </div>
          <div class='ui two buttons'>
            <button class='ui primary button' v-on:click="sendForm">
              Create
            </button>
            <button class='ui button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        titleText: '',
        projectText: '',
        isCreating: false
      }
    },
    methods: {
      openForm () {
        this.isCreating = true
      },
      closeForm () {
        this.isCreating = false
      },
      sendForm () {
        if (this.titleText.length > 0 && this.projectText.length > 0) {
          const title = this.titleText
          const project = this.projectText
          this.$emit('create-todo', {
            title: title,
            project: project,
            done: false,
            author: {
              email: 'mrfyda@gmail.com',
              name: 'Rafael Cortês'
            }
          })
          this.newTodoText = ''
        }
        this.isCreating = false
      }
    }
  }
</script>
