<template>
  <div class="col container-files">
    <h3>File History</h3>
    <div class="channel-info" v-for="(channel, index) in history" :key="index">
      <div class="channel-info__data">
        <h4>Info file send </h4>
        <p>Channel #{{ channel.channel }}</p>
        <p>Name file {{ channel.nameFile }}</p>
        <p>Sender {{ channel.sender }}</p>
        <p>Receiver {{ channel.receiver }}</p>
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
      history: []
    }
  },
  methods: {
    async getFileHistory() {
      const res = await apiAxios.get(`${API_HOST}/history-files`)
      this.history = res.data
    }
  },
  async mounted() {
    await this.getFileHistory()
  },
}
</script>

<style>
.container-files {
  color: #01022D;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid #01022D;
  margin-left: 1em;
  max-height: 500px;
  overflow: scroll;
}

.channel-info {
  border: 1px solid #01022D;
  margin-bottom: 1em;
  cursor: pointer;
  transition: .3s;
}

.channel-info__data {
  width: 100%;
  text-align: left;
  padding: 1em;
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