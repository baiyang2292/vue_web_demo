<template>
    <label class="radioBtnWrap" :class="{ active: radioKey === value }">
        <input
            type="radio"
            :value="value"
            class="radioInput"
            v-model="radioKey"
        />
        <div class="radioBtn"><slot></slot></div>
    </label>
</template>

<script>
export default {
    props: ["value"],
    data() {
        return {};
    },
    computed: {
        radioKey: {
            get() {
                return this._radioGroup.value;
            },
            set(val) {
                console.log(val);
                this._radioGroup.$emit("input", this.value);
            }
        },
        _radioGroup() {
            let parent = this.$parent;
            while (parent) {
                if (parent.$options.name !== "yRadioGroup") {
                    parent = parent.$parent;
                } else {
                    return parent;
                }
            }
            return false;
        }
    }
};
</script>

<style lang="less" scoped>
.radioBtnWrap {
    position: relative;
    display: inline-block;
    height: 32px;
    padding: 0 16px;
    line-height: 32px;
    border-radius: 2px;
    color:#303133;
    &.active {
        background-color: rgba(255, 255, 255, 1);
        color:#1989FA;
    }
}
.radioInput {
    position: absolute;
    visibility: hidden;
}
</style>