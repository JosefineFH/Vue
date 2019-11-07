<template>
    <div class="ui centered card">
        <div class="content">
            <div class="header">
                {{todo.title}}
            </div>
            <div class="meat">
                {{todo.project}}
            </div>
            <div class="extra content">
                <span class="right floated edit icon">
                    <i class="edit icon"></i>
                </span>
            </div>
        </div>
        <div class="ui bottom attached green basic button" v-show="todo.done">
            Completed
        </div>
        <div class="ui bottom attached red basic button">
            Complete
        </div>

        <my-component v-for="(item, index) in items" v-bind:item="item"  v-bind:index="index">
</my-component>
    </div>
</template>

<script>
export default {
    props: ['todo'],
}
</script>