<template lang="pug">

.d-flex.flex-row.mb-3
    router-link.d-block.position-relative(tag="a" :to="detailPath")
        img.list-thumbnail.border-0( :src="order.img" :alt="order.title" )
        b-badge.position-absolute.badge-top-right( :variant="order.statusColor" pill) {{order.status}}
    .pl-3.pt-2.pr-2.pb-2
        router-link(tag="a" :to="detailPath")
            p.list-item-heading {{order.title}}
            .pr-4
                p.text-muted.mb-1.text-small {{order.description}}
            .text-primary.text-small.font-weight-medium.d-none.d-sm-block {{ order.createDate }}

    
</template>

<script lang="ts">
import {Prop, Vue} from "vue-property-decorator";
export default class RecentOrderItem extends Vue {
    @Prop() public data: object;
    @Prop() public detailPath: string;
    @Prop() public order: object;

    }
</script>
