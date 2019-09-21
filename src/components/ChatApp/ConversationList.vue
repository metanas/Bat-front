<template lang="pug">
vue-perfect-scrollbar.scroll(:settings='{ suppressScrollX: true, wheelPropagation: false }')
  .pt-0.spaced-content.pb-0
    .d-flex.flex-row.mb-1.border-bottom.pb-3(v-for='(conversation,index) in conversations' :key='`conversation${index}`')
      a.d-flex(href='#' @click.prevent='selectConversation(conversation)')
        img.img-thumbnail.border-0.rounded-circle.mr-3.list-thumbnail.align-self-center.xsmall(:alt='otherUser(conversation.users).title' :src='otherUser(conversation.users).img')
        .d-flex.flex-grow-1.min-width-zero
          .pl-0.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero
            .min-width-zero
              p.mb-0.truncate {{otherUser(conversation.users).title}}
              p.mb-1.text-muted.text-small {{conversation.lastMessageTime}}
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

  @Component({
  name: "ConversationList"
})
export default class ConversationList extends Vue {
  @Prop() public conversations: object[];

  @Prop() public contacts: object[];

  @Prop() public currentUser: object;

  public mounted(): void {
	this.selectConversation(this.conversations[0]);
  }

  public selectConversation(conversation: object): void {
	const otherUser = this.otherUser(conversation.users);
	this.$emit("select-conversation", otherUser, conversation.messages);
  }

  public otherUser(users: object[]): object | undefined {
	let otherUserId = users.find((x) => x !== this.currentUser.id);
	return this.contacts.find((x) => x.id === otherUserId);
  }
}
</script>
