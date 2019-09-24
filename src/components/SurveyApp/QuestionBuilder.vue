<template lang="pug">
b-card.question.d-flex.mb-4.edit-quesiton(no-body)
    .d-flex.flex-grow-1.min-width-zero
        .card-body.align-self-center.d-flex.flex-column.flex-md-row.justify-content-between.min-width-zero.align-items-md-center
            .list-item-heading.mb-0.truncate.w-80.mb-1.mt-1 {{title}}
                span.heading-number.d-inline-block {{sort}}
    .custom-control.custom-checkbox.pl-1.align-self-center.pr-4
        b-button.icon-button( variant="outline-theme-3" @click="changeMode('preview')"  v-if="mode=='edit'")
            i.simple-icon-eye
        b-button.icon-button(variant="outline-theme-3" @click="changeMode('edit')" v-if="mode=='preview'")
            i.simple-icon-pencil
        b-button.icon-button.rotate-icon-click.rotate(variant="outline-theme-3" @click="showDetail = !showDetail"
            :aria-controls="`questionCollapse${sort}`"
            :aria-expanded="showDetail ? 'true' : 'false'" )
            i(:class="{'with-rotate-icon':true,'simple-icon-arrow-down':!showDetail,'simple-icon-arrow-up':showDetail}")
    b-collapse.question-collapse( :id="`questionCollapse${sort}`" v-model="showDetail")
        .card-body.pt-0
            div(v-if="mode=='edit'" key="edit")
                .form-group.mb-3
                label Title
                b-input(v-model="title")
            .form-group.mb-5
                label Question
                b-input(v-model="question")
            .separator.mb-4
            .form-group
                label.d-block Answer Type
                v-select(:options="questionTypes" v-model="answerType")
                    template(slot="option" slot-scope="option") {{option.label}}
            .form-group(v-if="answerType.options")
                label.d-block Answer
                draggable.answers.mb-3.sortable(type="div" :options="{handle:'.handle'}")
                    .mb-1.position-relative(v-for="(a,index) in answers" :key="index")
                        b-input( :value="a.label")
                        .input-icons
                            span.badge.badge-pill.handle.pr-0.mr-0
                                i.simple-icon-cursor-move
                            span.badge.badge-pill(@click="deleteAnswer(a.value)")
                                i.simple-icon-ban
                .text-center
                    b-button(variant="outline-primary" size="sm" class="mb-2" @click="addAnswer")
                        i.simple-icon-plus.btn-group-icon Add Answer

        div(v-else-if="mode=='preview'" key="preview")
            label {{question}}
            b-input(key="text-input-preview" v-if="answerType.value==0")
            v-select(:options="answers" key="single-select-preview" v-else-if="answerType.value==1")
            v-select(:options="answers" key="multiple-select-preview" v-else-if="answerType.value==2")
            b-form-checkbox-group(stacked key="checkbox-preview" v-else-if="answerType.value==3")
                b-form-checkbox(:value="a.value" v-for="(a,index) in answers" :key="`ans_${index}`") {{a.label}}
            b-form-radio-group(stacked  key="radiobutton-preview"  v-else-if="answerType.value==4")
                b-form-radio(:value="a.value" v-for="(a,index) in answers" :key="`ans_${index}`") {{a.label}}



</template>

<script lang="ts">
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css'
    import draggable from 'vuedraggable'
    import {Component,Watch, Prop, Vue } from "vue-property-decorator";


    const questionTypes = [{ label: 'Text Input', value: 0, options: false },
        { label: 'Single Select', value: 1, options: true },
        { label: 'Multiple Select', value: 2, options: true },
        { label: 'Checkbox', value: 3, options: true },
        { label: 'Radiobutton', value: 4, options: true }]
    @Component({
        name: "QuestionBuilder",
        components: {
            vSelect,
            draggable
        }
    })
    export default class QuestionBuilder extends Vue {
        @Prop() public sort: string;
        @Prop() public data: object;

        public questionTypes = questionTypes;
        public mode = 'edit'; // edit,
        public showDetail = false;
        public title= '';
        public question= '';
        public answers= null;
        public answerType= questionTypes[0];

        public mounted():void{
            this.title = this.data.title
            this.question = this.data.question
            this.answers = this.data.answers
            this.answerType = questionTypes.find(x => x.value === this.data.answerType)
        }

        public changeMode(mode: string):void{
            this.mode = mode;
            this.showDetail = true
        }
        public deleteAnswer(value: number):void{
            this.answers = this.answers.filter(x => x.value !== value)

        }
        public addAnswer():void{
            this.answers.push({ value: this.answers.length + 1, label: '' })
        }
        @Watch showDetail(val){if (!val) {}}
    }

</script>

