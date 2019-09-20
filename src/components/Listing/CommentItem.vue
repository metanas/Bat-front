<template lang="pug">

.d-flex.flex-row.mb-3.pb-3.border-bottom
    router-link.a(:to="detailPath")
        img.img-thumbnail.border-0.rounded-circle.list-thumbnail.align-self-center.xsmall( :src="data.thumb" :alt="data.title")
    .pl-3.pr-2
        router-link.a(:to="detailPath")
            p.font-weight-medium.mb-0 {{ data.title }}
            p.text-muted.mb-1.text-small {{ data.detail }}
            div
                stars( :value="data.rate" :disabled=true)

    
</template>

<script lang="ts">
import {Component,Prop, Vue} from "vue-property-decorator";
import Stars from "@/components/Common/Stars";

@Component({
    name : "CommentItem",
    components: {
        Stars
    }
})
export default class CommentItem extends Vue {
    @Prop() public data: string;
    @Prop() public detail: string;

}
</script>

