<template>
  <div>
    <header>
      <!-- Navigation menu with horizontal styling -->
      <nav>
        <ul class="horizontal-menu">
          <li>
            <!-- Navigation link for the "About" page -->
            <NuxtLink to="/">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ximports">1-Inports</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/xexports">2-Exports</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/xoutputs">3-Outputs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/xbaddeals">4-Bad-Deals</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
  </div>
</template>

<style scoped>
/* Add styling for the horizontal menu */
.horizontal-menu {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
}

.horizontal-menu li {
  margin: 0;
}
</style>
