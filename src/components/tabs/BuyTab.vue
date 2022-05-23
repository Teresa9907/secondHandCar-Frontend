<template>
<div class="sellMain">
<!-- 顶部分割线 -->
    <div>
         <el-row >
            <el-col :span="8" :offset="7">
                <el-divider content-position="center"><b>{{t('header.xinxishuru')}}</b></el-divider>
            </el-col>
         </el-row>       
    </div>
<!-- 表单部分 -->
    <div class="sellForm">
        <el-form
            ref="formInline"
            :model="formInline"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            size="500px"
            :label-position="right"
            >
            <!-- :inline="true" -->
            <!-- 选什么牌子 -->
                <el-form-item :label="t('historytab.pinpai')" prop="carBand">
                    <el-radio-group v-model="formInline.carBand" size="large">
                        <el-radio label="本田" style="width: 100px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="6">
                                        <img src="../../assets/logo/honda.png" width="25">
                                        </el-col>
                                    <el-col span="5" offset="5" style="text-align: bottom">
                                        {{t('brands.bentian')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="丰田" style="width: 100px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/Toyota.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.fengtian')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="大众" style="width: 150px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/Volkswagen.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.dazhong')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="日产" style="width: 100px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/Nissan_logo.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.richan')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="福特" style="width: 100px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/Ford.png" width="40">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.fute')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="宝马" style="width: 100px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/BMW.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.baoma')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="奔驰" style="width: 90px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/Benzi.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.benchi')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="奥迪" style="width: 90px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="5">
                                        <img src="../../assets/logo/Audi.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.aodi')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                        <el-radio label="现代" style="width: 100px">
                            <p style="text-align: center">
                                <el-row>
                                    <el-col span="11">
                                        <img src="../../assets/logo/hyundai.png" width="25">
                                        </el-col>
                                    <el-col span="8" offset="5" style="text-align: bottom">
                                        {{t('brands.xiandai')}}
                                        </el-col>                                 
                                </el-row>
                            </p>
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
            <!-- 选什么车型 -->
                <el-form-item :label="t('historytab.cheshen')" prop="carBodyType">
                    <el-radio-group v-model="formInline.carBodyType" size="large">
                        <el-radio label="轿车">
                            {{t('bodytype.jiaoche')}}
                        </el-radio>
                        <el-radio label="SUV">
                            {{t('bodytype.SUV')}}
                        </el-radio>
                        <el-radio label="MPV">
                            {{t('bodytype.MPV')}}
                        </el-radio>
                        <el-radio label="跑车">
                            {{t('bodytype.paoche')}}
                        </el-radio>
                        <el-radio label="敞篷">
                            {{t('bodytype.changpeng')}}
                        </el-radio>
                        <el-radio label="货车">
                            {{t('bodytype.huoche')}}
                        </el-radio>
                        <el-radio label="客车">
                            {{t('bodytype.keche')}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                
                <el-form-item :label="t('historytab.yusuan')" prop="budget">
                    <el-radio-group v-model="formInline.budget" size="large">
                        <el-radio label="0">
                            less than 2w
                        </el-radio>
                        <el-radio label="2">
                            2~5w
                        </el-radio>
                        <el-radio label="5">
                            5~8w
                        </el-radio>
                        <el-radio label="8">
                            8~12w
                        </el-radio>
                        <el-radio label="12">
                            12~16w
                        </el-radio>
                        <el-radio label="16">
                            16~20w
                        </el-radio>
                        <el-radio label="input">
                            <el-input v-model="input11" placeholder="" style="width: 80px" />
                            --
                            <el-input v-model="input22" placeholder="" style="width: 80px"/>
                            w
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="onSubmit(formInline)">{{t('button.guzhi')}}</el-button>
                </el-form-item>
        </el-form>
        <!-- <el-button @click="printCarBand"></el-button> -->
    </div>
<!-- 估值报告部分 -->
    <div class="historyMain">
         <el-row >
            <el-col :span="12" :offset="5">
                <el-divider content-position="center"><b>{{t('header.lishituijian')}}</b></el-divider>
            </el-col>
         </el-row> 

         <el-table
            :data="Array.from(this.store.state.historys).slice(0,3)"
            style="width: 100%"
            :size="mini"
            :highlight-current-row="true"
            >
            <!-- :default-sort = "{prop: 'date', order: 'descending'}" -->
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
            width="100">
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
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                    >{{t('historytab.chakan')}}</el-button>
                </template>
            </el-table-column>
        </el-table>  
        <!-- <el-button @click="testtt">try</el-button>     -->
    </div>


</div>
</template>

<script>
import { reactive, ref } from 'vue'
import { defineComponent } from 'vue'
import ProvinceCityCountry from '../../assets/json/address'
import { useStore } from "vuex";
import axios, { Axios } from 'axios';
import { useI18n } from 'vue-i18n'
import { th } from 'element-plus/lib/locale';
export default defineComponent({
    components: {
        
    },
    data() {
        return {
            reconInfo: 'ReconInfo',
// 读入报告，以json数据形式传入
            input1: 0,
            input2: 0,
            input11: 0,
            input22: 0,
            informTab: 'InfomTab',
            roadTimeInfo: '',
            locationInfo: '',
// 表单数据，除城市信息外            
                formInline:({
                carBand: '',
                carBodyType:'',
                budget: ''
            }),              
            
// 表单校验信息
            rules:({               
                carBand:[
                    {
                    required: true,
                    message: this.t('alerts.xuanpinpai'),
                    trigger: 'change',
                    },
                ],
                carBodyType:[
                    {
                    required: true,
                    message: this.t('alerts.xuancheshen'),
                    trigger: 'change',
                    },
                ],
                budget:[
                    {
                    required: true,
                    message: this.t('alerts.xuanyusuan'),
                    trigger: 'change',
                    },
                ],
               
                
            })
            
        }
    },
    setup() {
        const store = useStore();
        const {t} = useI18n();
        const data = reactive({
        provinceObj: {name: ''},
        cityObj: {name: ''},
        countryObj: {name: ''},
        provinceData: ProvinceCityCountry.address,
        cityData: [],
        countryData: []
        })
        
        
        // const historydata = reactive({
        //     historyReport: History.history,
        // })
        console.log(data)
        // 省份change
        const provinceChange = (value) => {
        data.cityData = value.children  // 市下拉列表
        data.countryData = []  // 清空区县下拉列表数据
        data.cityObj = {} // 清空市输入框内容
        data.countryObj = {}  // 清空区县输入框内容
        }
        // 市change
        const cityChange = (value) => {
        data.countryData = value.children // 县区下拉框列表
        data.countryObj = {}  // 清空区县输入框内容
        }
        // 县change
        const countryChange = (value) => {
        console.log(data)
        }
        return {
        data,
        provinceChange,
        cityChange,
        countryChange,
        store,
        t,
        // historydata
        }        
    },
    name: "BuyTab",
    props:{

    },
    methods:{
        test(){
            console.log(this.formInline.carBodyType.name)
        },
        testtt(){
            this.store.commit('setState', 10)
            console.log(this.store.state.count)
        },
// 表单校验
        async onSubmit() {
        this.$refs.formInline.validate((valid) => {
          if (valid) {
            //   console.log(this.formInline.ticketTime)
            //   console.log(this.store.state.pageState)
              this.locationInfo = this.data.provinceObj.name+this.data.cityObj.name+this.data.countryObj.name
              this.roadTimeInfo = this.formInline.ticketTime+ ' 00:00:00'
            // console.log(this.roadTimeInfo)
            //   console.log(this.locationInfo)
            if(this.formInline.budget == '0'){
                this.input1 = 0;
                this.input2 = 2;
            }
            else if(this.formInline.budget == '2'){
                this.input1 = 2;
                this.input2 = 5;
            }
            else if(this.formInline.budget == '5'){
                this.input1 = 5;
                this.input2 = 8;
            }
            else if(this.formInline.budget == '8'){
                this.input1 = 8;
                this.input2 = 12;
            }
            else if(this.formInline.budget == '12'){
                this.input1 = 12;
                this.input2 = 16;
            }
            else if(this.formInline.budget == '16'){
                this.input1 = 16;
                this.input2 = 20;
            }
            else if(this.formInline.budget == 'input'){
                this.input1 = this.input11;
                this.input2 = this.input22;
            }
              
    // 表单有效，提交给后端
            var FormData = require('form-data');
                var data = new FormData();
                data.append('brand', this.formInline.carBand);
                data.append('car_type', this.formInline.carBodyType);
                data.append('max_price', this.input2*10000);
                data.append('min_price', this.input1*10000);

                const that = this;
            
                var config = {
                method: 'post',
                url: 'api/create_rec',
                data : data
                };

                //嵌套放的1
                var data2 = new FormData();
                var config2 = {
                method: 'post',
                url: 'api/get_user_car_rec_by_id',
                data : data2
                };
                //结束
                
                axios(config)
                .then(async function(response) {
                    console.log(response.data.data.id)
                    that.store.commit('setcreate_id',response.data.data.id)
                    //try 同步请求嵌套
                    data2.append('id',response.data.data.id)
                    await axios(config2).then(function (response) {
                    that.store.commit('setResponses',response.data.data)
                    console.log(response)
                    console.log(response.data.data);
                    console.log(that.store.state.responses)
            
                })
                .catch(function (error) {
                console.log(error);
                });
                //     //结束
                })
                 .catch(function (error) {
                 console.log(error);
                 });
        // post部分到此为止
        //结束
            alert('submit!');
            console.log(this.formInline);
            this.store.commit('setPageState', this.reconInfo)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        // printCarBand(){
        //     console.log(this.formInline.carBand)
        // }
    },
    
})
</script>

<style scoped>
.sellMain{
    margin-top: 40px;
    margin-left: 10%;
}
.sellForm{
    margin-top: 40px;
    margin-left: 15%;
    width: 800px;
}
.historyMain{
    margin-top: 40px;
}
.el-form-item__content {
    line-height: 0;
}

</style>
