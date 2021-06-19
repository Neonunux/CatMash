<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'battle' }">
          battle
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ranking' }">
          ranking
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>
