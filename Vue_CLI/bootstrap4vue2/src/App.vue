<template>
  <div id="app">

    <!-- Navbar -->
    <b-container>
      <b-navbar toggleable="md" type="dark" variant="info">

        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
          
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'home'}" active-class="active" exact>Home</b-nav-item>
              <b-nav-item :to="{name: 'about'}" active-class="active" exact>About</b-nav-item>
              <b-nav-item :to="{name: 'grid'}" active-class="active" exact>Grid</b-nav-item>
              <b-nav-item :to="{name: 'cards'}" active-class="active" exact>Cards</b-nav-item>
              <b-nav-item :to="{name: 'form'}" active-class="active" exact>Form</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        
        </b-container>    
      
      </b-navbar>
    </b-container>
    <!-- Navbar -->

    <b-container>
      <router-view/>
    </b-container>

      <!-- <router-view/> -->
  </div>
</template>