<template>
    <div class="historymain">
        
        <el-table
            :data="Array.from(this.store.state.historys).slice(10*this.currentPage-10,10*this.currentPage)"
            style="width: 100%"
            :size="mini"
            :highlight-current-row="true"
            @selection-change="handleSelectionChange"
            >
            <!-- :default-sort = "{prop: 'date', order: 'descending'}" -->
            <el-table-column align="left">
                <template #header>
                    <el-button type="danger" @click="multiDeletion" plain>选中删除</el-button>
                </template>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
            prop="brand"
            label="品牌"
            width="100">
            </el-table-column>
            <el-table-column
            prop="car_type"
            label="车身类型"
            width="100">
            </el-table-column>
            <el-table-column
            prop="oil_type"
            label="燃油类型"
            width="100">
            </el-table-column>
            <el-table-column
            prop="mt_type"
            label="变速箱"
            width="100">
            </el-table-column>
            <el-table-column
            prop="road_time"
            label="上牌时间"
            width="100">
            </el-table-column>
            <el-table-column
            prop="km"
            label="里程"
            width="100">
            </el-table-column>
            <el-table-column
            prop="location"
            label="交易地区"
            width="180">
            </el-table-column>
            <el-table-column
            prop="price"
            label="报价"
            sortable
            width="100">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button type="text" size="small" @click="handleEdit(scope.row)"
                    >查看</el-button>
                    <el-button type="text" size="small" @click="handleChange(scope.$index, scope.row)"
                    >修改</el-button>
                    <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                </template>
                
            </el-table-column>
        </el-table-column>

        </el-table>      
    </div>
    <div class="demo-pagination-block">
    <el-pagination
      v-model:currentPage="currentPage1"
      :page-size="10"
      :small="small"
      :disabled="disabled"
      :background="true"
      layout="total, prev, pager, next, jumper"
      :total="data.historyData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
    <!-- <el-button @click="testt" class="jj">好耶</el-button> -->
</template>

<script>
import { defineComponent, reactive, onMounted} from 'vue'
import { useStore } from "vuex";
import axios, { Axios } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'


export default defineComponent({
    name: "ReconTab",
    setup() {
        const store = useStore();
        console.log("no display")
        onMounted(() => { 
            axios
            .get('/api/get_user_car_list')

            .then(function(response){
                console.log(response.data.data)
                store.commit('setHistorys',response.data.data)
            })  
            .catch(function (error) { // 请求失败处理
                console.log(error);
            })
        });
        
        return{
            store
        }
        
    },
    data(){
        return{
            data: { historyData: this.store.state.historys},
            currentPage: '1',
            multipleSelection: [],
            sellTabb: 'SellTabb',
            infomTab: 'InfomTab',
            deleteArr: [],  
            responseFake:{car_data: Object},        
        }
    },
    methods:{
// 删除
        multiDeletion(){
            var idsInfo = ''
            ElMessageBox.confirm(
                '确认删除？',
                'Warning',
                {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
                }
            )
                .then(() => {
                    // console.log(ids)
                    idsInfo='['+this.deleteArr+']'
                    console.log(idsInfo)

        // axios开始
                    var FormData = require('form-data');
                    var data = new FormData();
                    data.append('id',idsInfo)
                    
                    const that = this;

                    var config = {
                    method: 'post',
                    url: 'api/delete_es',
                    data : data
                    };

                    axios(config).then(function (response) {
                        console.log(response)
                        console.log("发了")
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                    
        // axios结束
                    ElMessage({
                        type: 'success',
                        message: '删除成功！',
                    })
                    this.store.commit('setTabState', 'BlankTab')
                })
                .catch(() => {
                ElMessage({
                    type: 'info',
                    message: 'Delete canceled',
                })
                })
        },
// 多选
        handleSelectionChange(val) {
            var arr = []
            Array.from(val).forEach(element => {
                arr.push(element.id)
            });
            this.deleteArr = arr
            console.log(Array.from(this.deleteArr))
            },
// 查看       
        handleEdit(row) {
        console.log(row.id);
        this.store.commit('setcreate_id',row.id)
        var FormData = require('form-data');
            var data = new FormData();
            data.append('id', row.id);
            const that = this;

            var config = {
              method: 'post',
              url: 'api/get_user_car_es_by_id',
              data : data
            };

            axios(config).then(function (response) {
                that.store.commit('setResponses',response.data.data)
                console.log(response.data.data);
                console.log(that.store.state.responses)
        //         console.log(response.car_data.brand)
        //         // that.store.commit('setResponses', response.data.data)
        //         console.log(that.store.state.responses.car_data)
                that.store.commit('setPageState', that.infomTab)
            })
            .catch(function (error) {
              console.log(error);
            });
        //     this.store.commit('setPageState', this.infomTab)

        },
        handleChange(index,row){
            // this.store.commit('setHis2info', row)
            this.responseFake.car_data=row
            this.store.commit('setResponses',this.responseFake)
            console.log(this.store.state.responses)
            this.store.commit('setPageState', this.sellTabb)

        },
        handleDelete(index,row){
            var ids = []
            var idsInfo=''
            ids.push(row.id)
            // ids.push(14)
            
            ElMessageBox.confirm(
                '确认删除？',
                'Warning',
                {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
                }
            )
                .then(() => {
                    // console.log(ids)
                    idsInfo='['+ids+']'
                    console.log(idsInfo)
                    this.store.state.historys.splice((this.currentPage-1)*10+index,1)

        // axios开始
                    var FormData = require('form-data');
                    var data = new FormData();
                    data.append('id',idsInfo)
                    
                    const that = this;

                    var config = {
                    method: 'post',
                    url: 'api/delete_es',
                    data : data
                    };

                    axios(config).then(function (response) {
                        console.log(response)
                        console.log("发了")
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                    
        // axios结束
                    // axios
                    //     .get('/api/get_user_car_list')

                    //     .then(function(response){
                    //         console.log(response.data.data)
                    //         this.store.commit('setHistorys',response.data.data)
                    //     })  
                    //     .catch(function (error) { // 请求失败处理
                    //         console.log(error);
                    //     })
                    ElMessage({
                        type: 'success',
                        message: '删除成功！',
                    })
                })
                .catch(() => {
                ElMessage({
                    type: 'info',
                    message: 'Delete canceled',
                })
                })
            // console.log(typeof(this.tableData))
        },
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val
        console.log(this.currentPage)
        },
        testt(){
            console.log(this.tableData)

        }
    }
})
</script>

<style scoped>
.historymain{
    margin-left: 5%;
    margin-top: 50px;
}
.demo-pagination-block{
    margin-right: 5%;
    margin-top: 50px;
    /* margin-left: 50%; */
    float: right;
}

</style>
