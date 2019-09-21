<template lang="pug">
.vue-tagsinput(@click="focusNewTag()" :class="{ 'read-only': readOnly, 'vue-tagsinput--focused': isInputActive}" )
  span(v-for="(tag, index) in innerTags" :key="index" class="vue-tagsinput-tag")
    span {{ tag }}
    a.vue-tagsinput-remove( v-if="!readOnly" @click.prevent.stop="remove(index)" )
  input.vue-tagsinput-input( v-if= "!readOnly && !isLimit" ref="inputtag" :placeholder="placeholder" type="text" v-model="newTag"
      @keydown.delete.stop = "removeLastTag" @keydown.enter="addNew" @blur="handleInputBlur" @focus="handleInputFocus")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

const validators = {
  email: new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  url: new RegExp(
    /^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i
  ),
  text: new RegExp(/^[a-zA-Z]+$/),
  digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
  isodate: new RegExp(
    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  )
};

@Component({
  name: "InputTag"
})
export default class InputTag extends Vue {
  @Prop({ default: [] }) public value!: [];

  @Prop({ default: "" }) public placeholder!: string;

  @Prop({ default: false }) public readOnly!: boolean;

  @Prop({ type: [String, Function, Object], default: "" }) public validate!: string | object | void;

  @Prop({ default: () => [13, 188 , 9] }) public addTagOnKeys!: number[];

  @Prop({ default: false }) public addTagOnBlur!: boolean;

  @Prop({ default: -1 }) public limit!: number;

  @Prop({ default: false }) public allowDuplicates!: boolean;

  public newTag = "";
  public innerTags = [...this.value];
  public isInputActive = false;

  get isLimit(): boolean {
	return this.limit > 0 && Number(this.limit) === this.innerTags.length;
  }

  public focusNewTag(): void {
	if (this.readOnly || !this.$el.querySelector(".vue-tagsinput-input")) {
		return;
	}
	this.$el.querySelector(".vue-tagsinput-input")!.focus();
  }

  public handleInputFocus(): void {
	this.isInputActive = true;
  }

  public handleInputBlur(e): void {
	this.isInputActive = false;
	this.addNew(e);
  }

  public addNew(e: KeyboardEvent): void {
	const keyShouldAddTag = e
		? this.addTagOnKeys.indexOf(e.keyCode) !== -1
		: true;
	const typeIsNotBlur = e && e.type !== "blur";
	if (
		(!keyShouldAddTag && (typeIsNotBlur || !this.addTagOnBlur)) ||
		this.isLimit
	) {
		return;
	}
	if (
		this.newTag &&
		(this.allowDuplicates || this.innerTags.indexOf(this.newTag) === -1) &&
		this.validateIfNeeded(this.newTag)
	) {
		this.innerTags.push(this.newTag);
		this.newTag = "";
		this.tagChange();
  if (e) { e.preventDefault(); }
	}
  }

  public validateIfNeeded(tagValue) {
	if (this.validate === "" || this.validate === undefined) {
		return true;
	}
	if (typeof this.validate === "function") {
		return this.validate(tagValue);
	}
	if (
		typeof this.validate === "string" &&
		Object.keys(validators).indexOf(this.validate) > -1
	) {
		return validators[this.validate].test(tagValue);
	}
	if (
		typeof this.validate === "object" &&
		this.validate.test !== undefined
	) {
		return this.validate.test(tagValue);
	}
	return true;
  }

  public remove(index: number): void {
	this.innerTags.splice(index, 1);
	this.tagChange();
  }

  public removeLastTag(): void {
	if (this.newTag) {
		return;
	}
	this.innerTags.pop();
	this.tagChange();
  }

  public tagChange(): void {
	this.$emit("update:tags", this.innerTags);
	this.$emit("input", this.innerTags);
  }
}
</script>

<style>
  .vue-tagsinput {
    overflow: hidden;
    padding-left: 5px;
    padding-top: 5px;
  }

  .vue-tagsinput-tag {
    border-radius: 2px;
    display: inline-block;
    font-weight: 400;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px;
  }

  .vue-tagsinput-remove {
    cursor: pointer;
    font-weight: bold;
  }

  .vue-tagsinput-tag a::before {
    content: " ×";
  }

  .vue-tagsinput-input {
    background: transparent;
    border: 0;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 6px;
    margin-top: 1px;
    outline: none;
    padding: 5px;
    width: 80px;
  }
</style>
