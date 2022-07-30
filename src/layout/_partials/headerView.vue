<template>
    <header>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
      <div class="container">
        <router-link class="navbar-brand" :to="{name: 'home'}">
        <img src="@/assets/imgs/logo-vuefood.png" alt="VueFood" class="logo">
        </router-link>
        <div>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-cart active">
              <router-link class="nav-link" :to="{name: 'cart'}"><i class="fas fa-shopping-cart"></i> (2)</router-link>
            </li>
            <li class="nav-item nav-cart active">
              <router-link :to="{name: 'login'}">Entrar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>