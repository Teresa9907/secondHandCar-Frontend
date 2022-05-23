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
            :size="formSize"
            :label-position="right"
            >
            <!-- :inline="true" -->
                <el-form-item :label="t('historytab.pinpai')" prop="carBand">
                    <el-select v-model="formInline.carBand" placeholder="please select..">
                        <el-option :label="t('brands.bentian')" value="本田" />
                        <el-option :label="t('brands.fengtian')" value="丰田" />
                        <el-option :label="t('brands.dazhong')" value="大众" />
                        <el-option :label="t('brands.richan')" value="日产" />
                        <el-option :label="t('brands.fute')" value="福特" />
                        <el-option :label="t('brands.baoma')" value="宝马" />
                        <el-option :label="t('brands.benchi')" value="奔驰" />
                        <el-option :label="t('brands.aodi')" value="奥迪" />
                        <el-option :label="t('brands.xiandai')" value="现代" />
                    </el-select>
                </el-form-item>
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
                <el-form-item :label="t('historytab.ranyou')" prop="carBurnType">
                    <el-radio-group v-model="formInline.carBurnType" size="large">
                        <el-radio label="汽油">
                            {{t('fueltype.qiyou')}}
                        </el-radio>
                        <el-radio label="电动">
                            {{t('fueltype.diandong')}}
                        </el-radio>
                        <el-radio label="混合动力">
                            {{t('fueltype.hunhe')}}
                        </el-radio>
                        <el-radio label="柴油">
                            {{t('fueltype.chaiyou')}}
                        </el-radio>
                        <el-radio label="天然气">
                            {{t('fueltype.tianran')}}
                        </el-radio>
                        <el-radio label="液化石油气">
                            {{t('fueltype.yehua')}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item :label="t('historytab.biansu')" prop="carDangType">
                    <el-radio-group v-model="formInline.carDangType" size="large">
                        <el-radio label="自动">
                            {{t('fueltype.zidong')}}
                        </el-radio>
                        <el-radio label="手动">
                            {{t('fueltype.shoudong')}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item :label="t('historytab.shangpai')" prop="ticketTime">
                    <el-date-picker
                        v-model="formInline.ticketTime"
                        type="month"
                        placeholder="select date"
                        value-format="YYYY-MM-DD"
                        />
                </el-form-item>
                <el-form-item :label="t('historytab.licheng')" prop="runKiloM">
                    <el-input v-model.number="formInline.runKiloM" placeholder="please input.." style="width: 23%">
                        <template #append>10k km</template>
                    </el-input>
                </el-form-item>
                <el-form-item :label="t('historytab.jiaoyi')" prop="regionSelect">
                    <el-select v-model="data.provinceObj" placeholder="select.." @change="provinceChange" value-key="name">
                        <el-option v-for="(item, index) in data.provinceData" :key="index" :label="this.getChars(item.name)" :value="item"></el-option>
                    </el-select>&nbsp;&nbsp;
                    <el-select v-model="data.cityObj" placeholder="select.." @change="cityChange" value-key="name">
                        <el-option v-for="(item, index) in data.cityData" :key="index" :label="this.getChars(item.name)" :value="item"></el-option>
                    </el-select>&nbsp;&nbsp;
                    <el-select v-model="data.countryObj" placeholder="select.." @change="countryChange" value-key="name">
                        <el-option v-for="(item, index) in data.countryData" :key="index" :label="this.getChars(item.name)" :value="item"></el-option>
                    </el-select>&nbsp;&nbsp;
                </el-form-item>
                
                <el-form-item>
                <el-button type="primary" @click="onSubmit(formInline)">Submit For Valuation</el-button>
                </el-form-item>
        </el-form>
        <!-- <el-button @click="printCarBand"></el-button> -->
    </div>
<!-- 估值报告部分 -->
    <div class="historyMain">
         <el-row >
            <el-col :span="8" :offset="7">
                <el-divider content-position="center"><b>History Report</b></el-divider>
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
            label="Brand"
            width="100">
            </el-table-column>
            <el-table-column
            prop="car_type"
            label="BodyType"
            width="100">
            </el-table-column>
            <el-table-column
            prop="oil_type"
            label="FuelType"
            width="100">
            </el-table-column>
            <el-table-column
            prop="mt_type"
            label="Transmission"
            width="120">
            </el-table-column>
            <el-table-column
            prop="road_time"
            label="Liscence Time"
            width="130">
            </el-table-column>
            <el-table-column
            prop="km"
            label="Mileage"
            width="100">
            </el-table-column>
            <el-table-column
            prop="location"
            label="Trade Area"
            width="180">
            </el-table-column>
            <el-table-column
            prop="price"
            label="Price"
            sortable
            width="100">
            </el-table-column>
            <el-table-column label="Operations">
                <template #default="scope">
                    <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)"
                    >view</el-button>
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
import History from '../../assets/json/history'
import { useStore } from "vuex";
import axios, { Axios } from 'axios';
import { useI18n } from 'vue-i18n'
import pinyin from 'js-pinyin'
export default defineComponent({
    components: {
        
    },
    data() {
        return {
// 读入报告，以json数据形式传入
            informTab: 'InfomTab',
            roadTimeInfo: '',
            locationInfo: '',
            tableData: [{
                band: '丰田1',
                bodytype: '轿车',
                burntype: '0',
                dangtype: 'djdj',
                tickettime: '123456',
                kiloms: '123.23',
                region: 'jdjdjd',
                price: 17.52
                }, 
                {
                band: '丰田2',
                bodytype: '轿车',
                burntype: '0',
                dangtype: 'djdj',
                tickettime: '123456',
                kiloms: '123.23',
                region: 'jdjdjd',
                price: 27.52
                },
                {
                band: '丰田3',
                bodytype: '轿车',
                burntype: '0',
                dangtype: 'djdj',
                tickettime: '123456',
                kiloms: '123.23',
                region: 'jdjdjd',
                price: 7.52
                },],
// 表单数据，除城市信息外            
                formInline:({
                carBand: this.store.state.his2info.brand,
                carBodyType:this.store.state.his2info.car_type,
                carBurnType:this.store.state.his2info.oil_type,
                carDangType:this.store.state.his2info.mt_type,
                ticketTime: this.store.state.his2info.road_time,
                runKiloM: this.store.state.his2info.km,
            }),              
            
// 表单校验信息
            rules:({               
                carBand:[
                    {
                    required: true,
                    message: 'Please enter a valid value',
                    trigger: 'change',
                    },
                ],
                carBodyType:[
                    {
                    required: true,
                    message: 'Please enter a valid value',
                    trigger: 'change',
                    },
                ],
                carBurnType:[
                    {
                    required: true,
                    message: 'Please enter a valid value',
                    trigger: 'change',
                    },
                ],
                carDangType:[
                    {
                    required: true,
                    message: 'Please enter a valid value',
                    trigger: 'change',
                    },
                ],
                ticketTime:[
                    {
                    type: 'date',
                    required: true,
                    message: 'Please enter a valid value',
                    trigger: 'change',
                    },
                ],
                runKiloM:[
                    { required: true, message: 'Please enter a valid value', trigger: 'blur' },
                    { type: 'number', min: 0, max: 999, message: 'Please enter a valid value, up to 3 integers and 2 decimal places', trigger: 'blur' },
                ],
                // regionSelect:[
                //     {
                //     required: true,
                //     message: '请选择交易地区',
                //     trigger: 'change',
                //     },
                // ]
            })
            
        }
    },
    setup() {
        const {t} = useI18n();
        const store = useStore();
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
        t
        // historydata
        }        
    },
    name: "SellTab",
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
        getChars(value){
            return(pinyin.getFullChars(value))
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
              
    // 表单有效，提交给后端
            var FormData = require('form-data');
                var data = new FormData();
                data.append('brand', this.formInline.carBand);
                data.append('car_type', this.formInline.carBodyType);
                data.append('oil_type', this.formInline.carBurnType);
                data.append('mt_type', this.formInline.carDangType);
                data.append('road_time', this.roadTimeInfo); 
                data.append('km', this.formInline.runKiloM);
                data.append('location', this.locationInfo);

                const that = this;
            
                var config = {
                method: 'post',
                url: 'api/create_es',
                data : data
                };

                //嵌套放的1
                var data2 = new FormData();
                var config2 = {
                method: 'post',
                url: 'api/get_user_car_es_by_id',
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
                    console.log("返回值返回值")
                    console.log(response.data.data);
                    console.log(that.store.state.responses)
            //         console.log(response.car_data.brand)
                    // that.store.commit('setResponses', response.data.data)
            //         console.log(that.store.state.responses.car_data)
                    that.store.commit('setPageState', 'InfomTab')
                })
                .catch(function (error) {
                console.log(error);
                });
                    //结束
                })
                 .catch(function (error) {
                 console.log(error);
                 });
        // post部分到此为止
        // post id, get 预测
            
            // var data2 = new FormData();
            // var config2 = {
            //   method: 'post',
            //   url: 'api/get_user_car_es_by_id',
            //   data : data2
            // };

        //     axios(config2).then(function (response) {
        //         that.store.commit('setResponses',response.data.data)
        //         console.log(response.data.data);
        //         console.log(that.store.state.responses)
        // //         console.log(response.car_data.brand)
        //         // that.store.commit('setResponses', response.data.data)
        // //         console.log(that.store.state.responses.car_data)
        //         // that.store.commit('setPageState', 'InfomTab')
        //     })
        //     .catch(function (error) {
        //       console.log(error);
        //     });

        //结束
            alert('submit!');
            console.log(this.formInline);
            // this.store.commit('setPageState', this.informTab)

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
}
.historyMain{
    margin-top: 40px;
}
</style>
