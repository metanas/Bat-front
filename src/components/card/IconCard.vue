<template lang="pug">
.icon-row-item
  b-cart.mb-4.text-center
    i(:class="icon")
    p.card-text.font-weight-semibold.mb-0 {{ title }}
    p.lead.text-center {{ value }}
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
	name: "IconCard"
})
export default class IconCard extends Vue {
	@Prop({ default: "icon-card-title" }) public title!: string;

	@Prop({ default: "iconsminds-clock" }) public icon!: string;

	@Prop({ default: 0 }) public value: number;
}
</script>

<style scoped>

</style>
