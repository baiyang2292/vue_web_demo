<template>
    <div class="y-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'yRadioGroup',
    props:["value"],
}
</script>

<style lang="less" scoped>
    .y-radio-group{
        display: inline-block;
        background-color: #f0f2f5;
        border-radius: 2px;
        padding: 0 4px;
    }
</style>