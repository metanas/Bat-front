<template lang="pug">
.pr-2.pl-2
        img.mb-4(:src="image" :alt="title")
        h6.mb-1 {{title}}
            span.mr-2 {{order}}
        stars(:value="rate" :disabled=true)
        p.text-small.text-muted.mb-0.d-inline-block {{rateCount}}

</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Stars from "@/components/Common/Stars";

@Component({
	name : "CommentItem",
	components: {
		Stars
	}
})
export default class TopRatedSlideItem extends Vue  {

	@Prop() public image: string;
	@Prop() public order: string;
	@Prop() public rate: number;
	@Prop() public rateCount: number;
	@Prop() public title: string;

	}
</script>
