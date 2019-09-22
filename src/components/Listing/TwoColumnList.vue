<template lang="pug">

.d-flex.flex-row
    .w-50
        ul.list-unstyled.mb-0
            li.mb-1( v-for="(item,index) in data.slice(0,data.length/2)" :key="index" )
                router-link(tag="a" :to="item.link") {{item.title}}
    .w-50
        ul.list-unstyled.mb-0
            li.mb-1(v-for="(item,index) in data.slice(data.length/2,data.length)" :key="index")
                router-link(tag="a" :to="item.link") {{item.title}}
    
</template>

<script lang="ts">
import {Prop, Vue} from "vue-property-decorator";
export default class TwoColumnList extends Vue {
    @Prop() public data: object;
    @Prop() public item: object;

}
</script>
