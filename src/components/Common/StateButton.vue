<template lang="pug">
    span
        b-button(:id="id"
            :class="{'btn-multiple-state': true,
                'show-spinner': status === 'processing',
                'show-success':status === 'success',
                'show-fail': status === 'fail' }"
                :variant="variant"
                @click="handleClick"
                :disabled="status != 'default'")
        b-tooltip(:show="messageShow" ref="statusTooltip" :target="id" placement="top") {{message}}
        span.spinner.d-inline-block
            span.bounce1
            span.bounce2
            span.bounce3
        span.icon.success
            i.simple-icon-check
        span.icon.fail
            i.simple-icon-exclamation
        span.label
            slot
</template>

<script lang="ts">
    import {Component,Prop, Vue} from "vue-property-decorator";
    @Component({
        name: "StateButton",
    })

    export default class StateButton extends Vue{

        @Prop() public id: number;
        @Prop() public variant: string;
        @Prop() public click: object;

        status= 'default';
        message= '';
        messageShow= false;

        public handleClick(){
            this.status = 'processing';
            this.click()
                .then(res => {
                    this.status = 'success';
                    this.message = res
                })
                .catch(err => {
                    this.status = 'fail';
                    this.message = err
                })
                .finally(() => {
                    this.messageShow = true;
                    this.$refs.statusTooltip.$emit('enable');
                    setTimeout(() => {
                        this.messageShow = false;
                        this.status = 'default';
                        this.$refs.statusTooltip.$emit('disable')
                    }, 3000)
                })
        }
    }
</script>

