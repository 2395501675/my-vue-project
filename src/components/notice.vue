<template>
    <div class="message" v-if="isShow">
        <h5>{{title}}</h5>
        <hr>
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 1000
            }
        },
        data() {
            return {
                isShow: true
            }
        },
        mounted () {
            setTimeout(() => {
                this.isShow = false;
                this.remove()
            }, this.duration);
        },
        methods: {
            show() {
                this.isShow = true;
            }
        }
    }
</script>

<style>
 .message{
     width: 100%;
     height: 150px;
     text-align: center;
     background:#eee;
     position: absolute;
     top:0;
     left: 0;
     border:2px solid green;
 }
</style>