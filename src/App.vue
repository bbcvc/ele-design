<template>
<div>
  导航|<router-link to="/">导航一</router-link>|<router-link to="/xxx">导航二</router-link>
</div>
<router-view />
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>
