<template lang="pug">

p-cart.d-flex.flex-row(:class="{'active': selectedItems.includes(data.id)}" @click.prevent="toggleItem($event,data.id)" no-body )
    .card-body.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero.align-items-lg-center
        router-link.w-40.w-sm-100( :to="`?p=${data.id}`")
            p.list-item-heading.mb-1.truncate {{data.title}}
        p.mb-1.text-muted.text-small.w-15.w-sm-100 {{data.category}}
        p.mb-1.text-muted.text-small.w-15.w-sm-100  {{data.date}}
        .w-15.w-sm-100
            b-badge(pill :variant="data.statusColor") {{data.status}}
    .custom-control.custom-checkbox.pl-1.align-self-center.pr-4
        b-form-checkbox.itemCheck.mb-0( :checked="selectedItems.includes(data.id)" )

</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
	name: "DataListItem"
})
export default class DataListItem extends Vue {
	@Prop() public data: object;
	@Prop() public selectedItems: number[];
	public toggleItem(event?: any, itemId?: number) {
		this.$emit("toggle-item", event, itemId); }
}
</script>

