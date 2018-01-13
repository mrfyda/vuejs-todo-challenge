<template>
  <div>
    <div class='ui basic content segment'>
      <sui-dropdown text="Assignee">
        <sui-dropdown-menu>
          <sui-dropdown-item v-for="author in authors" :key="author.username" v-on:click.native="selectAuthor(author)">
            <v-gravatar class="ui mini avatar image" :email="author.email" default-img="mm"/>
            {{ author.name }}
          </sui-dropdown-item>
        </sui-dropdown-menu>
      </sui-dropdown>
      <div class="ui basic button" v-on:click="resetAuthor">Clear</div>
    </div>

    <div class='ui basic content segment'>
      <div class="ui cards">
        <todo v-for="task in tasks" :key="task.title" v-bind:todo="task"
              v-on:delete-todo="deleteTodo"
              v-on:complete-todo="completeTodo"/>
      </div>
    </div>

    <create-todo v-on:create-todo="addTodo"/>

    <div class='ui basic content segment'>
      <sui-progress progress label="Completed Tasks" :percent="completedPercentage"/>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Todo from './Show'
  import CreateTodo from './Create'

  export default {
    components: {
      Todo, CreateTodo
    },
    computed: {
      completedPercentage () {
        return (this.$store.state.todo.todos.filter(todo => { return todo.done === true }).length / this.$store.state.todo.todos.length) * 100
      },
      authors () {
        let resArr = []
        this.$store.state.todo.todos.map(todo => todo.author).filter(function (item) {
          let i = resArr.findIndex(x => x.name === item.name)
          if (i <= -1) {
            resArr.push(item)
          }
          return null
        })
        return resArr
      },
      tasks () {
        if (this.$store.state.todo.selectedAuthor) {
          return this.$store.state.todo.todos.filter(todo => todo.author.email === this.$store.state.todo.selectedAuthor.email)
        } else {
          return this.$store.state.todo.todos
        }
      }
    },
    methods: {
      deleteTodo (todo) {
        const todoIndex = this.$store.state.todo.todos.indexOf(todo)
        this.$store.state.todo.todos.splice(todoIndex, 1)
      },
      addTodo (todo) {
        this.$store.state.todo.todos.push(todo)
      },
      completeTodo (todo) {
        const todoIndex = this.$store.state.todo.todos.indexOf(todo)
        this.$store.state.todo.todos[todoIndex].done = true
      },
      selectAuthor (author) {
        this.$store.commit('todo/selectedAuthor', author)
      },
      resetAuthor () {
        this.$store.commit('todo/selectedAuthor', null)
      }
    }
  }
</script>

<style>
</style>
