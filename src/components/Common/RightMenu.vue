<template lang="pug">
    div
        .menu-box( v-if="showPop" :style="freeStyle" ref="menu")
            slot(name="above")
            ul.list-unstyled
                li(v-for="(item,it) in items" @click="listItemClick(it)" :key="it")
                    span
                        i(:class="item.class")
                    span {{item.txt}}
            slot(name="below")
</template>

<script lang="ts">
    import {Component,Watch ,Prop, Vue} from "vue-property-decorator";
    @Component({
        name: "RightMenu",
    })
    export default class RightMenu extends Vue {
        @Prop() public popItems: string;
        @Prop() public mouse: string;
        @Prop() public zIndex: string;
        @Prop() public width: number;
        @Prop() public height: number;
        @Prop() public border: string;
        @Prop() public padding: string;
        @Prop() public boxShadow: string;
        @Prop() public background: string;
        @Prop() public borderRadius: string;
        @Prop() public color: string;

        public freeStyle= '';
        public showPop= false

        @Watch mouse(){
            let x = this.mouse[0]
            let y = this.mouse[1]
            if (x === 'close') {
                this.showPop = false
            } else {
                this.freeStyle = `left:${x}px; top:${y}px;` +
                    `z-index:${this.zIndex};
                            width:${this.width}; height:${this.height};
                            border:${this.border}; padding: ${this.padding};
                            box-shadow:${this.boxShadow}; background: ${this.background};
                            border-radius:${this.borderRadius}; color: ${this.color}
                           `
                this.showPop = true
                if (!this.$refs.menu) {
                    this.$nextTick(() => {
                        const { menu } = this.$refs
                        this.menu = menu
                        document.body.appendChild(menu)
                    })
                }
            }
        }
        @Watch showPop(showPop) {
            const { overrideOncontextmenu, resetOncontextmenu } = this
            if (showPop) {
                overrideOncontextmenu()
                this.$emit('open')
            } else {
                resetOncontextmenu()
                this.$emit('close')
            }
        }

        public items ():void {
            return this.popItems
        }

        public listItemClick(it?: MouseEvent):void{
            this.$emit('ListItemClick', it)
        }
        public overrideOncontextmenu(){
            document.body.oncontextmenu = preventExplorerMenu
        }
        public resetOncontextmenu(){
            document.body.oncontextmenu = null
        }
        public destroyed():void{
            this.resetOncontextmenu();
            this.menu && this.menu.parentNode === document.body && document.body.removeChild(this.menu)

        }
    }
    function preventExplorerMenu () {
        return false
    }
</script>

<style scoped>
    .menu-box{
        border: 1px solid #ddd;
        width: 150px;
        padding: 5px 10px;
        box-shadow: 2px 2px 2px #aaa;
        position: absolute;
        z-index: 10;
        background-color: #eee
    }
    .menu-box >ul{
        margin: auto;
    }
    .menu-box ul li{
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
    }
    .menu-box ul li+li{
        border-top: 1px solid;
    }
    .menu-box ul li:hover{
        background: rgba(255,255,255,0.2);
    }
    .menu-box ul li span{
        display: inline-block;
    }
    .menu-box ul li span:first-child{
        margin-right: 5px;
    }
</style>