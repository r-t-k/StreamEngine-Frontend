<template>
  <div id="chat">
    <div id="messages">
      <ScrollPanel style="width: 100%; height: 65vh" class="custom">
        <div id="messages-scroll">
          <Card v-for="item in messages" :key="item" v-bind:class="{ last: index==messages.length-1 }">
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
    <div id="editor">
      <Editor v-model="userMessage" editorStyle="height: 25vh">
        <template slot="toolbar">
          <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-underline"></button>
        </span>
        </template>
      </Editor>
      <Button label="Submit" @click="submitUserMessage()" />
    </div>
  </div>
</template>

<script>
	export default {
		name   : 'Chat',
		props  : {},
		data() {
			return {
				messages   : [
					{
						user   : 'test user 1',
						content: 'foo content'
					},
					{
						user   : 'test user 2',
						content: 'foo content 2'
					}
				],
				userMessage: ''
			}
		},
		methods: {
			submitUserMessage: function () {
				this.messages.push(
					{
						user   : 'test user 3',
						content: this.userMessage
					}
				);
				this.userMessage = '';
			},
		scrollToElement() {
			const el = this.$el.getElementsByClassName('last')[0];

			if (el) {
				el.scrollIntoView();
			}
		}
		}

	}
</script>
<style>
  #chat {
    height: 100vh;
  }
</style>
