<template lang="pug">

b-card(:class="{'active': selectedItems.includes(data.id)}" @click.prevent="toggleItem($event,data.id)" no-body )
    .position-relative
        router-link.w-40.w-sm-100(:to="`?p=${data.id}`")
            img.card-img-top( :src="data.img" :alt="data.title")
        b-badge.position-absolute.badge-top-left( pill :variant="data.statusColor") {{data.status}}
    b-card-body
        b-row
            b-colxx(xxs="2")
                b-form-checkbox.itemCheck.mb-0( :checked="selectedItems.includes(data.id)")
            b-cloxx.mb-3(xxs="10")
                h6.mb-4.card-subtitle {{data.title}}
                P.text-muted.text-small.mb-0.font-weight-light.card-text {{data.date}}

    
</template>

<script lang="ts">
import {Prop, Vue} from "vue-property-decorator";
export default class ImageListItem extends Vue {
    @Prop() public data: object;
    @Prop() public selectedItems: number[];
    public toggleItem (event?: any, itemId?: number) {
        this.$emit('toggle-item', event, itemId)}
    }
</script>

