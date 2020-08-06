export const state = () => ({
  instance: {
    test: 'yep',
    title: '',
    id: '',
    liveStatus: '',
    streamServerUrls: [],
    vodServerUrls: [],
    meta: {},
    chat: {
      messages: [
        {
          timeStamp: '123123123',
          user: 'Gil',
          content: 'Trees smell blue',
          authLevel: 'none'
        },
        {
          timeStamp: '12312412',
          user: 'Fred',
          content: 'Fuck Gil',
          authLevel: 'none'
        }
      ]
    },
  },
})

export const mutations = {
  addMsg(state,msg) {
    state.instance.chat.messages.push({
      timeStamp: msg.timestamp,
      user: msg.user,
      content: msg.content,
      authLevel: msg.level
    })
  }
}

