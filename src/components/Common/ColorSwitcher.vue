<template lang="pug">
    div(:class="{'theme-colors':true, 'shown' : isOpen}"  @mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false")
        .p-4
            p.text-muted.mb-2 Light Theme
            .d-flex.flex-row.justify-content-between.mb-4
                a(href="#" :class="{'theme-color theme-color-purple':true, 'active' :selectedColor==='light.purple'}" @click.prevent="changeThemeColor('light.purple')")
                a(href="#" :class="{'theme-color theme-color-blue':true, 'active' :selectedColor==='light.blue'}" @click.prevent="changeThemeColor('light.blue')")
                a(href="#" :class="{'theme-color theme-color-green':true, 'active' :selectedColor==='light.green'}" @click.prevent="changeThemeColor('light.green')")
                a(href="#" :class="{'theme-color theme-color-orange':true, 'active' :selectedColor==='light.orange'}" @click.prevent="changeThemeColor('light.orange')")
                a(href="#" :class="{'theme-color theme-color-red':true, 'active' :selectedColor==='light.red'}" @click.prevent="changeThemeColor('light.red')")
            p.text-muted.mb-2 Dark Theme
            .d-flex.flex-row.justify-content-between
                a( href="#" :class="{'theme-color theme-color-purple':true, 'active' :selectedColor==='dark.purple'}" @click.prevent="changeThemeColor('dark.purple')")
                a( href="#" :class="{'theme-color theme-color-blue':true, 'active' :selectedColor==='dark.blue'}" @click.prevent="changeThemeColor('dark.blue')")
                a( href="#" :class="{'theme-color theme-color-green':true, 'active' :selectedColor==='dark.green'}" @click.prevent="changeThemeColor('dark.green')")
                a( href="#" :class="{'theme-color theme-color-orange':true, 'active' :selectedColor==='dark.orange'}" @click.prevent="changeThemeColor('dark.orange')")
                a( href="#" :class="{'theme-color theme-color-red':true, 'active' :selectedColor==='dark.red'}" @click.prevent="changeThemeColor('dark.red')")
        a(href="#" class="theme-button" @click.prevent="toggle")
            i.simple-icon-magic-wand
</template>

<script lang="ts">
import { colors } from "@/constants/config";
import {Component, Watch, Vue} from "vue-property-decorator";

@Component({
	name: "ColorSwitcher"})
export default class ColorSwitcher extends Vue {
	public isOpen = false;
	public isMenuOver = false;
	public selectedColor = "";

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
	public changeThemColor(color: string) {
		localStorage.setItem("themeColor", color);
		this.toggle();
		setTimeout(() => {
			window.location.reload();
		}, 500);
	}
	@Watch public isOpen(val) {if (val) {
		if (val) {
			this.addEvents();
		} else {
			this.removeEvents();
		}
		}
	}
	public beforeDestroy(): void {
		this.removeEvents();
	}
	public mounted(): void {
		const color = localStorage.getItem("themeColor");
		if (color !== null && colors.includes(color)) {
			this.selectedColor = color;
		} else {
			this.selectedColor = "light.orange";
		}
	}


}
</script>
