<template lang="pug">

b-card.d-flex.flex-row.mb-3 (no-body)
    .d-flex.flex-grow-1.min-width-zero
        b-card-body.align-self-center.d-flex.flex-column.flex-md-row.justify-content-between.min-width-zero.align-items-md-center
            router-link.list-item-heading.mb-1.truncate.w-40.w-xs-100( tag="a" :to="detailPath" ) {{data.name}}
            p.mb-1.text-muted.text-small.w-15.w-xs-100 {{data.address}}
            p.mb-1.text-muted.text-small.w-15.w-xs-100 {{data.date}}
            .w-15.w-xs-100.text-right
                b-badge(pill :variant="data.statusColor") {{data.status}}
</template>

<script lang="ts">
import {Component,Prop, Vue} from "vue-property-decorator";
@Component({
    name:"OrderItem"
})
export default class OrderItem extends Vue {
    @Prop() public data: object;
    @Prop() public detailPath: string;

    }
</script>
