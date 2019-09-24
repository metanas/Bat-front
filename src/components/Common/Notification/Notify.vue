<template lang="pug">
    div(:class="{'notification-container': true, 'notification-container-empty' : items.length===0}")
    transition-group(name="ntf" tag="div" mode="out" )
        div( v-for="item in items" :key="item.id"  :class="'notification notification-'+item.options.type"  @click="removeItem(item.id)")
            .notification-message
                h4.title(v-if="item.title") {{item.title}}
                .message(v-if="item.message" v-html="item.message")

</template>

<script lang="ts">
    import {Component,Watch ,Prop, Vue} from "vue-property-decorator";
    @Component({
        name: "Notify",
    })

    export default class Notify extends Vue {
        message= null;
        title= null;
        options: {
            type: 'success',
            duration: 2000,
            permanent: false
        };
        items= [];
        idx= 0
        public createUUID(){
            const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            return pattern.replace(/[xy]/g, c => {
                const r = (Math.random() * 16) | 0
                const v = c === 'x' ? r : (r & 0x3) | 0x8
                return v.toString(16)
            })
        }
        public addItem(type:string,title:string,message:string,options:string){
            let defaultOptions = {
                type: type,
                duration: this.options.duration,
                permanent: this.options.permanent
            }
            let itemOptions = Object.assign({}, defaultOptions, options)

            let idx = this.createUUID()
            var newItem = {
                id: idx,
                message: message,
                title: title,
                options: itemOptions
            }

            this.items.push(newItem)

            if (itemOptions.permanent === false) {
                setTimeout(() => {
                    this.removeItem(idx)
                }, itemOptions.duration)
            }
        }
        public removerItem(uid:string){
            this.items = Object.assign([], this.items.filter(x => x.id !== uid))
        }
        public removeAll(){
            this.items = []

        }
    }
</script>

<style scoped>

</style>