<template>
  <div class="col container-clients">
    <h3>Clients on {{ channel }}</h3>
    <div class="client-info" v-for="(channel, index) in channels" :key="index">
      <p>Channel #<span class="channel-number">{{ channel }}</span> </p>
    </div>
  </div>
</template>

<script>
import { apiAxios } from "../../Core/Axios.core"
import { API_HOST } from "../../../constants/api.config"
export default {
  name: "ChannelList",
  data() {
    return {
      channels: [],
      channel: 1
    }
  },
  methods: {
    async getChannels() {
      const res = await apiAxios.get(`${API_HOST}/channels`)
      this.channels = res.data["Channels"]
    }
  },
  async mounted() {
    await this.getChannels()
  },
}
</script>

<style>
.container-channels {
  color: #01022D;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid #01022D;
}

.channel-info {
  border: 1px solid #01022D;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  cursor: pointer;
  transition: .3s;
}

.channel-info:hover {
  color: #FFFFFF;
  background-color: #5100FF;
  border-color: #5100FF;
  border-radius: .5em;
}

.channel-info p {
  margin-bottom: 0;
  font-weight: bold;
}

.channel-info p .channel-number {
  font-weight: lighter;
}
</style>