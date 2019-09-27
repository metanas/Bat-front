<template lang="pug">
    span
        h1(v-if="heading && heading.length>0") {{heading}}
        b-nav.pt-0.breadcrumb-container.d-none.d-sm-block.d-lg-inline-block
            b-breadcrumb(:items="items")
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
	name: "Breadcrumb"})
export default  class Breadcrumb extends Vue {

	@Prop() public heading: string;
	public items = [];
	public getUrl( path: string, sub: string , index: string) {
		let pathToGo = "/" + path.split(sub)[0] + sub;
		if (pathToGo === "/app") {
			pathToGo = "/";
		}
		return pathToGo;
	}
	public mounted(): void {
		const path = this.$route.path.substr(1);
		let rawPaths = path.split("/");

		for (const pName in this.$route.params) {
			if (rawPaths.includes(this.$route.params[pName])) {
				rawPaths = rawPaths.filter((x) => x !== this.$route.params[pName]);
			}
		}
		rawPaths.map((sub, index) => {
			this.items.push({
				text: this.$t("menu." + sub),
				to: this.getUrl(path, sub, index)
			});
		});
	}
}
</script>

