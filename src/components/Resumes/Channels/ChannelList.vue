<template>
  <div class="col container-channels">
    <h3>Channels</h3>
    <div class="channel-info" v-for="(channel, index) in channels" :key="index">
      <p>Channel #<span class="channel-number">{{ channel.channelId }}</span> </p>
      <div class="card-clients" v-for="(client, index) in channel.clients" :key="index - client.conn">
        <h5>Client {{ index + 1 }}</h5>
        <p>
          Ip: {{ client.conn }}
        </p>
        <p>
          Current Channel: <span style="font-weight: lighter;">{{ client.currentChannel }}</span>
        </p>
        <p>
          Status: <span style="font-weight: lighter;">{{ client.status }}</span>
        </p>
      </div>
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
    }
  },
  methods: {
    async getChannels() {
      const res = await apiAxios.get(`${API_HOST}/channels`)
      console.log("🚀 ~ file: ChannelList.vue ~ line 23 ~ getChannels ~ res", res)
      this.channels = res.data
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
  max-height: 500px;
  overflow: scroll;
}

.channel-info {
  border: 1px solid #01022D;
  padding: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: .3s;
}



.channel-info p {
  margin-bottom: 0;
  font-weight: bold;
}

.channel-info p .channel-number {
  font-weight: lighter;
}

.card-clients {
  border: 1px solid #5100FF;
  margin-bottom: 1em;
}
</style>