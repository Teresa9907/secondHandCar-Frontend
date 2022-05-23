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
                    <el-button type="danger" @click="multiDeletion" plain>{{t('historytab.xuanzhong')}}</el-button>
                </template>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
            prop="brand"
            :label="t('historytab.pinpai')"
            width="100">
            </el-table-column>
            <el-table-column
            prop="car_type"
            :label="t('historytab.cheshen')"
            width="100">
            </el-table-column>
            <el-table-column
            prop="oil_type"
            :label="t('historytab.ranyou')"
            width="100">
            </el-table-column>
            <el-table-column
            prop="mt_type"
            :label="t('historytab.biansu')"
            width="130">
            </el-table-column>
            <el-table-column
            prop="road_time"
            :label="t('historytab.shangpai')"
            width="130">
            </el-table-column>
            <el-table-column
            prop="km"
            :label="t('historytab.licheng')"
            width="80">
            </el-table-column>
            <el-table-column
            prop="location"
            :label="t('historytab.jiaoyi')"
            width="180">
            </el-table-column>
            <el-table-column
            prop="price"
            :label="t('historytab.baojia')"
            sortable
            width="100">
            </el-table-column>
            <el-table-column :label="t('historytab.caozuo')" width="150">
                <template #default="scope">
                    <el-button type="text" size="small" @click="handleEdit(scope.row)"
                    >{{t('historytab.chakan')}}</el-button>
                    <el-button type="text" size="small" @click="handleChange(scope.$index, scope.row)"
                    >{{t('historytab.xiugai')}}</el-button>
                    <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)"
                    >{{t('historytab.shanchu')}}</el-button>
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
import History from '../../assets/json/history'
import ProvinceCityCountry from '../../assets/json/address'
import { useStore } from "vuex";
import axios, { Axios } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import pinyin from 'js-pinyin'


export default defineComponent({
    name: "HistoryTab",
    setup() {
        const {t} = useI18n();
        const store = useStore();
        var brands
        const cv = (value) => {
            if(value == '本田'){
                return 'Honda'
            }
            else if(value == '大众'){
                return 'Volkswagen'
            }
            else if(value == '丰田'){
                return 'Toyota'
            }
            else if(value == '日产'){
                return 'Nissan'
            }
            else if(value == '福特'){
                return 'Ford'
            }
            else if(value == '宝马'){
                return 'BMW'
            }
            else if(value == '奔驰'){
                return 'Benz'
            }
            else if(value == '奥迪'){
                return 'Audi'
            }
            else if(value == '现代'){
                return 'Hyundai'
            }
            else if(value == '轿车'){
                return 'Sedan'
            }
            else if(value == '跑车'){
                return 'Sports Car'
            }
            else if(value == '敞篷车'){
                return 'Roadster'
            }
            else if(value == '货车'){
                return 'Van'
            }
            else if(value == '客车'){
                return 'Bus'
            }
            else if(value == '手动'){
                return 'Manual'
            }
            else if(value == '自动'){
                return 'Automatic'
            }
            else if(value == '汽油'){
                return 'Gasoline'
            }
            else if(value == '电动'){
                return 'Electric'
            }
            else if(value == '混合动力'){
                return 'Hybrid'
            }
            else if(value == '柴油'){
                return 'Diesel'
            }
            else if(value == '天然气'){
                return 'Natural Gas'
            }
            else if(value == '液化石油气'){
                return 'LPG'
            }
            else{
                return value
            }
        }
        onMounted(() => { 
            const that = this
            axios
            .get('/api/get_user_car_list')

            .then(function(response){
                store.commit('setHistorys',Array.from(response.data.data))
                console.log(store.state.historys[0])
                for (var i=0;i<store.state.historys.length;i++){
                    store.state.historys[i].brand=cv(store.state.historys[i].brand)
                }
                for (var j=0;j<store.state.historys.length;j++){
                    store.state.historys[j].car_type=cv(store.state.historys[j].car_type)
                }
                for (var q=0;q<store.state.historys.length;q++){
                    store.state.historys[q].mt_type=cv(store.state.historys[q].mt_type)
                }
                for (var w=0;w<store.state.historys.length;w++){
                    store.state.historys[w].oil_type=cv(store.state.historys[w].oil_type)
                }
                for (var e=0;e<store.state.historys.length;e++){
                    store.state.historys[e].location=pinyin.getFullChars(store.state.historys[e].location.split(/['省','市','区']/)[2])+' District '+pinyin.getFullChars(store.state.historys[e].location.split(/['省','市','区']/)[1])+' City '+pinyin.getFullChars(store.state.historys[e].location.split(/['省','市','区']/)[0]) + ' Province'
                }
                for (var r=0;r<store.state.historys.length;r++){
                    store.state.historys[r].road_time=store.state.historys[r].road_time.slice(0,10)
                }
                
            })  
            .catch(function (error) { // 请求失败处理 =cv(store.state.historys[e].oil_type)
                console.log(error);
            })
        });
        
        return{
            store,
            t,cv,
            brands
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
                this.t('historytab.querenduoxuan'),
                'Warning',
                {
                confirmButtonText: this.t('historytab.queren'),
                cancelButtonText: this.t('historytab.quxiao'),
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
            this.store.commit('setcreate_id',row.id)
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
                this.t('historytab.querendia'),
                'Warning',
                {
                confirmButtonText: this.t('historytab.queren'),
                cancelButtonText: this.t('historytab.quxiao'),
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
    margin-left: 3%;
    margin-top: 50px;
}
.demo-pagination-block{
    margin-right: 5%;
    margin-top: 50px;
    /* margin-left: 50%; */
    float: right;
}

</style>
