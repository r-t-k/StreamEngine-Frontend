<template>

  <div id="app">
    <div class="app-container">

      <div id="player-head" class="p-d-flex">
        Flex Container
        <Button icon="pi pi-arrow-left" @click="visibleRight = true" class="p-mr-2" />
      </div>
      <div id="player-grid" class="p-grid">
        <div v-bind:class="{ playerWithChat: visibleRight }" id="player-content" class="p-col-12">12</div>
        <Sidebar :visible.sync="visibleRight" position="right" class="chat-width">
          <Chat />
        </Sidebar>
      </div>
    </div>
  </div>

</template>

<script>
	import Chat from '../components/Chat.vue'

	export default {
		layout: 'main',

		components: {
			Chat,
		},
		data() {
			return {
				visibleRight  : true,
				playerWithChat: false
			}
		}

	}
</script>

<style scoped>
  #player-head {
    min-height: 5vh;
  }

  #player-grid {
    min-height: 85vh;
  }

  #player-content {
    background: yellow;
  }

  .playerWithChat {
    width: 80vw;
  }

  .chat-width {
    width: 20vw;
  }
</style>
