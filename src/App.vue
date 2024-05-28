<script>
export default {
  name: 'App',
  props: {
  },
  computed: {

  },

}
</script>

<template>    
  <div
    class="test"
  >
    fdsafdasd
  </div>
</template>
<style lang="less" scoped>
.test {
    @apply w-full cursor-pointer leading-normal	text-sm py-1 px-3 bg-white transition duration-300;
  min-height: 32px;
  color: rgba(0, 0, 0, 65%);
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  &:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
}
</style>
