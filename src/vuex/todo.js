export default {
  namespaced: true,
  state: {
    todos: [{
      title: 'Add new docker commands to support swarm',
      project: 'Enterprise',
      done: false,
      author: {
        email: 'caxaria@gmail.com',
        name: 'João Caxaria'
      }
    }, {
      title: 'Use new commands instead of compose semantics',
      project: 'Enterprise',
      done: true,
      author: {
        email: 'mrfyda@gmail.com',
        name: 'Rafael Cortês'
      }
    }, {
      title: 'Pylint issues not being reported (Voleon)',
      project: 'Bug',
      done: false,
      author: {
        email: 'mrfyda@gmail.com',
        name: 'Rafael Cortês'
      }
    }, {
      title: 'List outdated and repositories to be deleted',
      project: 'Open source',
      done: false,
      author: {
        email: 'mrfyda@gmail.com',
        name: 'Rafael Cortês'
      }
    }],
    selectedAuthor: null
  },
  mutations: {
    selectedAuthor (state, author) {
      state.selectedAuthor = author
    }
  }
}
