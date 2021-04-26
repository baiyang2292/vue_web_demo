export default {
    computed: {
        conditionDataStr(){
            return JSON.stringify(this.conditionData);
        }
    },
    watch: {
        conditionDataStr(newVal, oldVal){
            newVal = JSON.parse(newVal);
            oldVal = JSON.parse(oldVal);
            if(newVal.pageNum === oldVal.pageNum && newVal.pageNum !== 1){
                this.conditionData.pageNum = 1;
            }
        },
    },
    methods: {
        handleSizeChange(val) {
            this.conditionData.pageNum = 1;
            this.conditionData.pageSize = val;
            this.getPageData();
        },
        handleCurrentChange(val) {
            this.conditionData.pageNum = val;
            this.getPageData();
        },
    },
}