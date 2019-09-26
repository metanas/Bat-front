<template lang="pug">

.d-flex.flex-row.mb-3.pb-3.border-bottom
    router-link( tag="a" :to="detailPath")
        img.img-thumbnail.border-0.rounded-circle.list-thumbnail.align-self-center.xsmall( :src="data.thumb" :alt="data.title" )

    .pl-3.pr-2
        router-link( tag="a" :to="detailPath")
            p.font-weight-medium.mb-0 {{data.title}}
            p.text-muted.mb-0.text-small {{data.detail}}

    
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
	name: "ListWithUserItem"
})
export default class ListWithUserItem extends Vue {
	@Prop() public data: object;
	@Prop() public detailPath: string;
}
</script>

