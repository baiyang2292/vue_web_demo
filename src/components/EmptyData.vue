<template>
    <section class="noData">
        <div class="noData-img"></div>
        <div class="noData-desc">
            <p>暂无数据</p>
            <p>Have no Data</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "EmptyData",
        props:{
            noData: {
                default: false,
                type: Boolean
            }
        }
    }
</script>

<style lang="less" scoped>
    .noData {
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        .noData-img {
            width: 328px;
            height: 270px;
            background: url("../assets/images/es-sfss.png") no-repeat;
            background-size: 328px 270px;
            margin-right: 60px;

        }
        .noData-desc {
            color: rgba(157, 188, 223, 1);
            font-size: 18px;

            p:last-child {
                font-size: 16px;
                margin-top: 10px;
            }
        }
    }
</style>