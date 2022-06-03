<template>
  <div class="register">
    <h1>Welcome!</h1>
    <input type="text" name="username" placeholder="name" /><br />
    <input type="email" name="email" placeholder="email" /> <br />
    <input type="password" name="password" placeholder="password" /> <br />
    <button type="submit" name="submit">Register</button>
  </div>
</template>

<script>
export default {
  name: 'Register-User',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
