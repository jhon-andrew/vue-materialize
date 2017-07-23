<template>
  <div id="app-shell">
    <!-- Navigation Bar -->
    <div class="navbar-fixed">
      <nav class="green lighten-1">
        <div class="nav-wrapper container">
          <ul class="left hide-on-large-only">
            <li><a href="" class="button-collapse waves-effect" data-activates="nav-drawer"><i class="material-icons">menu</i></a></li>
          </ul>
          <router-link to="/" class="brand-logo waves-effect">Branding</router-link>
          <ul class="right hide-on-med-and-down">
            <li><a href="https://www.linkedin.com/in/jhon-andrew" target="_blank">The Developer</a></li>
            <li><a href="" target="_blank">Repository</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Side Navigation Drawer -->
    <ul class="side-nav" id="nav-drawer">
      <!-- banner -->
      <li>
        <div class="user-view">
          <div class="background">
            <img src="https://unsplash.it/g/300/176" alt="300x160 or 300x176 bg-img">
          </div>
          <a href=""><img class="circle" src="https://unsplash.it/g/64/64"></a>
          <a href=""><span class="white-text name">John Doe</span></a>
          <a href=""><span class="white-text email">email@example.com</span></a>
        </div>
      </li>
      <!-- links -->
      <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div class="divider"></div></li>
      <li><a class="subheader">Subheader</a></li>
      <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
  export default {
    name: 'app-shell',
    created () {
      $(document).ready(() => {
        $('.button-collapse').sideNav()
      })
    }
  }
</script>

<style scoped>
  #app-shell { height: inherit; }
  ul.hide-on-large-only > li { margin-left: -38px; }
  .brand-logo { padding: 0 8px; }
</style>
