import Vue from 'vue'
import TodoList from '@/components/todo/List'

describe('todo/List.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(TodoList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#create-task').textContent)
    .toEqual('Add Task')
  })
})
