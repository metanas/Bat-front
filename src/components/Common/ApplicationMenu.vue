<template lang="pug">
div(:class="{'app-menu':true, 'shown' : isOpen}"  @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false")
    slot
    a.app-menu-button.d-inline-block.d-xl-none(@click.prevent="toggle")
        i.simple-icon-options
</template>

<script lang="ts">
import {Component, Watch, Vue} from "vue-property-decorator";
import { setTimeout } from "timers";

@Component({
	name: "ApplicationMenu"})

export default class ApplicationMenu extends Vue {

	public isOpen = false;
	public isMenuOver = false;
	public addEvents() {
		document.addEventListener("click", this.handleDocumentClick);
		document.addEventListener("touchstart", this.handleDocumentClick);
	}

	public removeEvents() {
		document.removeEventListener("click", this.handleDocumentClick);
		document.removeEventListener("touchstart", this.handleDocumentClick);
	}

	public handleDocumentClick(e?: MouseEvent) {
		if (!this.isMenuOver) {
			this.toggle();
		}
	}
	public toggle() {
		this.isOpen = !this.isOpen;

	}
	@Watch public isOpen(val) {if (val) {
		setTimeout(() => {
			this.$emit("show");
		}, 300);

		this.addEvents();
	} else {
		this.removeEvents();
	}}

}
</script>

