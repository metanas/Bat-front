<template lang="pug">
    .piaf-rater(key="1")
        .piaf-rater-star(v-for="(r,index) in ratings"
            :key="index"
                @click="set(r)"
                @mouseover="star_over(r)"
                @mouseout="star_out"
                :class="{ 'is-active': ((value >= r) && value != null), 'is-disabled': disabled, 'will-be-active':(onMouseOver && tempValue>=r)?true:false }")

</template>

<script lang="ts">
import {Component, Watch , Prop, Vue} from "vue-property-decorator";
@Component({
	name: "Stars",
})
export default class Stars extends Vue {

	@Prop() public value: number;
	@Prop() public disabled: boolean;

	public tempValue = null;
	public ratings = [1, 2, 3, 4, 5];
	public onMouseOver = false;

	public star_over(rate: number): void {
		if (!this.disabled) {
			this.tempValue = rate;
			this.onMouseOver = true;
		}
	}
	public star_out(): void {
		this.onMouseOver = false;
	}
	public set(value: number): void {
		if (!this.disabled) {
			this.tempValue = value;
			this.$emit("input", this.tempValue);
		}
	}
}
</script>
