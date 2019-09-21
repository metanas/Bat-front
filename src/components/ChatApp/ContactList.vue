<template lang="pug">
vue-perfect-scrollbar(:settings="{ suppressScrollX: true, wheelPropagation: false }" )
  div.pt-0.spaced-content.pb-0
    div.d-flex.flex-row.mb-3.border-bottom.pb-3( v-for="(contact,index) in data" :key="`contact${index}`" )
      a.d-flex( href="#" @click.prevent="selectContact(contact.id)" )
      img.img-thumbnail.border-0.rounded-circle.mr-3.list-thumbnail.align-self-center.xsmall( :alt="contact.title" :src="contact.img" )
      div.d-flex.flex-grow-1.min-width-zero
        div.pl-0.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero
          div.min-width-zero
            p.mb-0.truncate {{contact.title}}
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import vuePerfectScrollbar from "vue-perfect-scrollbar/index.vue";

@Component({
  name: "ContactList",
  components: {
	vuePerfectScrollbar
  }
})
export default class ContactList extends Vue {
  @Prop({ required: true }) public data!: object[];

  public selectContact(userId: number): void {
	this.$emit("select-contact", userId);
  }
}
</script>

<style scoped>

</style>
