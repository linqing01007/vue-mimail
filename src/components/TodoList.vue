<template>
  <!-- 这是一个基于slot的todolist组件，包含已完成事项和待办事项两部分，这两部分的内容可以由父组件定制-->
  <div>
    <div class="undo">
      <h4>待办事项</h4>
      <ul>
        <li v-for="todo of undos" :key="todo.id">
          <slot name="undo" :undo="todo">暂无待办事项</slot>
        </li>
      </ul>
    </div>
    <div class="done">
      <h4>已办结</h4>
      <ul>
        <li v-for="todo of dones" :key="todo.id">
          <slot name="done" :done="todo">今天还没有完成事项哦</slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todoList',
  props: ['todos'],
  computed: {
    undos () {
      return this.todos.filter(todo => !todo.isComplete)
    },
    dones () {
      return this.todos.filter(todo => todo.isComplete)
    }
  },
  mounted () {
    console.log('todolist mounted: ', this.todos)
  }
}
</script>
