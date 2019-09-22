<template lang="pug">
table.table.table-sm.table-borderless
    tbody
        td
            td
                span( :class="`log-indicator align-middle ${log.color}`")
            td
                span.font-weight-medium {{log.label}}
            td.text-right
                span.text-muted {{log.time}}
</template>

<script lang="ts">
import {Prop, Vue} from "vue-property-decorator";
export default class LogList extends Vue{
    @Prop() public log: object;
    }
</script>
