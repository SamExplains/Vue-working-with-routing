<template>
    <div>
        <h1>The User Page</h1>
        <p>Hello, {{ this.name }}</p>
         <button @click="navigateHome" class="btn btn-primary">Go to home</button>
        <!-- Component subroutes -->
        <router-view>User 1</router-view>
    </div>

</template>

<script>
    export default {
      data() {
        return {
          name: this.$route.params.name
        }
      },
      methods: {

          navigateHome() {

              this.$router.push({path: '/'});
          }
      },
      watch: {
        '$route'(to, from) {
            this.name = to.params.name;
        }
      }
    }

</script>