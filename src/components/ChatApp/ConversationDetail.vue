<template lang="pug">
div
  .d-flex.flex-row.chat-heading
    .d-flex
      img.img-thumbnail.border-0.rounded-circle.ml-0.mr-4.list-thumbnail.align-self-center.small(:alt='otherUser.title' :src='otherUser.img')
    .d-flex.min-width-zero
      .card-body.pl-0.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero
        .min-width-zero
          div
            p.list-item-heading.mb-1.truncate {{otherUser.title}}
          p.mb-0.text-muted.text-small {{otherUser.date}}
  .separator.mb-5
  vue-perfect-scrollbar.scroll(:settings='{ suppressScrollX: true, wheelPropagation: false }' ref='chatArea')
    div(v-for='(message,index) in messages' :key='`message${index}`')
      b-card(no-body='' :class="{'d-inline-block mb-3' : true, 'float-left':message.sender===otherUser.id, 'float-right':message.sender===currentUser.id}")
        .position-absolute.pt-1.pr-2.r-0
          span.text-extra-small.text-muted {{message.time}}
        b-card-body
          .d-flex.flex-row.pb-1(v-if='message.sender===currentUser.id')
            img.img-thumbnail.border-0.rounded-circle.mr-3.list-thumbnail.align-self-center.xsmall(:alt='currentUser.title' :src='currentUser.img')
            .d-flex.flex-grow-1.min-width-zero
              .m-2.pl-0.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero
                .min-width-zero
                  p.mb-0.truncate.list-item-heading {{currentUser.title}}
          .d-flex.flex-row.pb-1(v-else='')
            img.img-thumbnail.border-0.rounded-circle.mr-3.list-thumbnail.align-self-center.xsmall(:alt='otherUser.title' :src='otherUser.img')
            .d-flex.flex-grow-1.min-width-zero
              .m-2.pl-0.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero
                .min-width-zero
                  p.mb-0.truncate.list-item-heading {{otherUser.title}}
          .chat-text-left
            p.mb-0.text-semi-muted {{message.text}}
      .clearfix
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import vuePerfectScrollbar from "vue-perfect-scrollbar/index.vue";
@Component({
  name: "ConversationDetail",
  components: { vuePerfectScrollbar }
})
export default class ConversationDetail extends Vue {
  @Prop() public curentUser: object;

  @Prop() public otherUser: object[];

  @Prop() public messages: object[];

  public mounted(): void {
	this.scrollToEnd();
  }

  public updated(): void {
	this.scrollToEnd();
  }

  public scrollToEnd(): void {
	setTimeout(() => {
		const container = this.$refs.chatArea.$el;
		container.scrollTop = container.scrollHeight;
	}, 0);
  }
}
</script>
