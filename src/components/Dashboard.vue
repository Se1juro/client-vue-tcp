<template>
  <div class="container mt-3">
    <h1 class="container__title">Dash Board</h1>
    <div class="container container--channels row">
      <ChannelList />
      <FileHistory />
    </div>
  </div>
</template>

<script>
import ChannelList from './Resumes/Channels/ChannelList.vue'
import FileHistory from './Resumes/History/FileHistory.vue'

export default {
  name: "DashBoard",
  data() {
    return {
      message: "",
      socket: null
    };
  },
  components: { ChannelList, FileHistory }
}

</script>

<style>
.container__title {
  margin-bottom: 1em;
}
</style>