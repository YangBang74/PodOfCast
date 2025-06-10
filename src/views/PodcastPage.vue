<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>Podcast N {{ route.params.id }}</template>
