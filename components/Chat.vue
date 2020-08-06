<template>
  <div id="chat">
    <div id="messages">
      <ScrollPanel style="width: 100%; height: 65vh" class="custom">


        <div id="messages-scroll">
          <Card v-for="(item, index) in messages" :key="item" v-bind:class="{ last: index==messages.length-1 }">
            <template slot="title">
              {{ item.user }}
            </template>
            <template slot="content">
              <div v-html="item.content"></div>
            </template>
          </Card>
        </div>

      </ScrollPanel>

    </div>
    <div id="test">
      <button @click="disconnect" v-if="status === 'connected'">Disconnect</button>
      <button @click="connect" v-if="status === 'disconnected'">Connect</button>
      {{ status }}
      <br /><br />
      <div v-if="status === 'connected'">
        <form @submit.prevent="sendMessage" action="#">
          <input v-model="message">
          <button type="submit">Send Message</button>
        </form>
        <ul id="logs">
          <li v-for="log in logs" :key="log" class="log">
            {{ log.event }}: {{ log.data }}
          </li>
        </ul>
      </div>
    </div>
    <div id="editor">
      <Editor v-model="editorValue" editorStyle="height: 25vh">
        <template slot="toolbar">
          <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
        </span>
        </template>
      </Editor>
      <button @click="scrollToElement">scroll to me</button>
      <Button label="Submit" @click="prepareMsgContent(); submitUserMessage(); clearEditor();" />
    </div>
  </div>
</template>

<script>
	export default {
		name    : 'Chat',
		props   : {},
		computed: {
			messages() {
				return this.$store.state.channel.instance.chat.messages
			}
		},
		data() {
			return {
				message    : "",
				logs       : [],
				status     : "disconnected",
				editorValue: '',
				userMessage: {
					timeStamp: Date.now(),
					user     : 'Steve',
					content  : '',
					authLevel: 'none'
				}
			}
		},
		methods : {
			submitUserMessage: function () {
				this.$store.commit('channel/addMsg', this.userMessage);
			},
			scrollToElement() {
				const el = this.$el.getElementsByClassName('last')[0];

				if (el) {
					el.scrollIntoView();
				}
			},
			clearEditor      : function () {
				this.editorValue = '';
			},
			prepareMsgContent: function () {
				this.userMessage.content = this.editorValue;
			},
			connect() {
				this.socket = new WebSocket("ws://localhost:6080/ws"); //need to reflect with env var for api
				this.socket.onopen = () => {
					this.status = "connected";
					this.logs.push({event: "Connected to", data: 'ws://localhost:6080/ws'})


					this.socket.onmessage = ({data}) => {
						this.logs.push({event: "Recieved message", data});
					};
				};
			},
			disconnect() {
				this.socket.close();
				this.status = "disconnected";
				this.logs = [];
			},
			sendMessage(e) {
				this.socket.send(this.message);
				this.logs.push({event: "Sent message", data: this.message});
				this.message = "";
			}
		},
		mounted() {
			this.scrollToElement();
		}

	}
</script>
<style>
  #chat {
    height: 100vh;
  }
</style>
