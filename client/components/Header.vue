<template>
  <header class="header wrapper">
    <NuxtLink :to='`/`'>
      <h1 class="title">
        Qlitre's Life
      </h1>
    </NuxtLink>
    <nav class="nav">
      <ul class="main-nav">
        <li>
          <NuxtLink :to="`/about`">
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 10% 20px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #EDEDE8;
  display: flex;
  align-items: center;
  z-index: 10;
}


.title {
  font-size: 2.4rem;
  color: #888;
  margin: 0;
  padding: 0;
}

.main-nav {
  list-style: none;
  margin: 0;
  display: flex;
}

.main-nav li {
  margin: 0 0 0 30px;
  font-size: 1.8rem;
}

.main-nav a {
  color: #888;
}

.main-nav a:hover {
  opacity: 0.6;
}
</style>