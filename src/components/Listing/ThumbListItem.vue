<template lang="pug">

b-card.d-flex.flex-row(:class="{'active': selectedItems.includes(data.id)}" @click.prevent="toggleItem($event,data.id)" no-body )
    router-link.d-flex(:to="`?p=${data.id}`")
        img.list-thumbnail.responsive.border-0( :src="data.img" :alt="data.title")
    .pl-2.d-flex.flex-grow-1.min-width-zero
        .card-body.align-self-center.d-flex.flex-column.flex-lg-row.justify-content-between.min-width-zero.align-items-lg-center
            router-link.w-40.w-sm-100(:to="`?p=${data.id}`")
                p.list-item-heading.mb-1.truncate {{ data.title }}
            p.mb-1.text-muted.text-small.w-15.w-sm-100 {{data.category}}
            p.mb-1.text-muted.text-small.w-15.w-sm-100 {{data.date}}
            .w-15.w-sm-100
                b-badge(pill :variant="data.statusColor")
        .custom-control.custom-checkbox.pl-1.align-self-center.pr-4
            b-form-checkbox.itemCheck.mb-0(:checked="selectedItems.includes(data.id)")
</template>

<script lang="ts">
import {Prop, Vue} from "vue-property-decorator";
export default class ThumbListItem extends Vue {
    @Prop() public data: object;
    @Prop() public selectedItems: number[];
    public toggleItem (event?: any, itemId?: number) {
        this.$emit('toggle-item', event, itemId)}

}
</script>

