<template>
    <div class="y_timeline">
        <div class="y_timeline-node"></div>
        <div class="y_timeline-tail"></div>

        <div class="y_timeline-wrap">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
.y_timeline {
    position: relative;
    &-node {
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        border: 4px solid #fff;
        background-color: #1890ff;
        box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
        z-index: 1;
    }
    &-tail {
        position: absolute;
        left: 10px;
        border-right: 1px dashed #DDE0E7;
        height: 100%;
        width: 0;
    }
    &-wrap{
        position: relative;
        margin-left: 32px;
    }
}
</style>