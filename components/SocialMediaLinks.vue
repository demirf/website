<script>
import Superpeer from './icons/Superpeer';
import Twitter from './icons/Twitter';
import Linkedin from './icons/Linkedin';
import Github from './icons/Github';

export default {
  components: {
    Superpeer,
    Twitter,
    Linkedin,
    Github
  },
}
</script>

<template>
  <div class="flex space-x-4 mt-8 items-center">
    <a href="https://twitter.com/ddemirferhat" target="_blank">
      <twitter class="w-5 h-5" />
    </a>
    <a href="https://superpeer.com/fer" target="_blank">
      <superpeer class="w-5 h-5" />
    </a>
    <a href="https://www.linkedin.com/in/demirferhat/" target="_blank">
      <linkedin class="w-5 h-5" />
    </a>
    <a href="https://github.com/demirf" target="_blank">
      <github class="w-5 h-5" />
    </a>
  </div>
</template>
