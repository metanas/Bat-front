<template lang="pug">
p-cart.d-flex.flex-row(:class="{'active': selectedItems.includes(data.id)}" @click.prevent="toggleItem($event,data.id)" no-body )
    .d-flex.flex-grow-1.min-width-zero
        b-card-body.align-self-center.d-flex.flex-column.flex-md-row.justify-content-between.min-width-zero.align-items-md-center pb-2
            a.list-item-heading.mb-0.truncate.w-40.w-xs-100.mb-1.mt-1(href="#" @click.prevent="")
                i(:class="{'heading-icon':true,
                 'simple-icon-check' :data.status === 'COMPLETED',
                     'simple-icon-refresh' : data.status !== 'COMPLETED'
                     }")
                span.align-middle.d-inline-block {{data.title}}
            p.mb-1.text-muted.text-small.w-15.w-xs-100 {{data.category}}
            p.mb-1.text-muted.text-small.w-15.w-xs-100 {{data.date}}
            .w-15.w-xs-100
                b-badge(:variant="data.labelColor" pill) {{data.label}}
        .custom-control.custom-checkbox.pl-1.align-self-md-center.align-self-start.pr-md-2 pt-4
            b-form-checkbox.itemCheck.mb-0(:checked="selectedItems.includes(data.id)")
    .card-body.pt-1
        b.mb-0(v-html="data.detail")
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";
@Component({
    name:"TodoListItem"
})

export default class TodoListItem extends Vue {
    @Prop() public selectedItem: number[];
    @Prop() public data:object;
    public toggleItem (event?: any, itemId?: number) {
        this.$emit('toggle-item', event, itemId)}
}
</script>
