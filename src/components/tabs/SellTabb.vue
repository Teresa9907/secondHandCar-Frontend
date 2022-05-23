<template>
<div class="sellMain">
<!-- 顶部分割线 -->
    <div>
         <el-row >
            <el-col :span="8" :offset="7">
                <el-divider content-position="center"><b>Information Input</b></el-divider>
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
                    <el-select v-model="formInline.carBand" placeholder="please select">
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
                <el-form-item label="BodyType" prop="carBodyType">
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
                <el-form-item label="FuelType" prop="carBurnType">
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
                <el-form-item label="Transmission" prop="carDangType">
                    <el-radio-group v-model="formInline.carDangType" size="large">
                        <el-radio label="自动">
                            {{t('fueltype.zidong')}}
                        </el-radio>
                        <el-radio label="手动">
                            {{t('fueltype.shoudong')}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="License Time" prop="ticketTime">
                    <el-date-picker
                        v-model="formInline.ticketTime"
                        type="month"
                        placeholder="选择日期"
                        value-format="YYYY-MM-DD"
                        />
                </el-form-item>
                <el-form-item label="Mileage" prop="runKiloM">
                    <el-input v-model.number="formInline.runKiloM" placeholder="please input..." style="width: 20%">
                        <template #append>10k km</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="Region" prop="regionSelect">
                    <el-select v-model="data.provinceObj" placeholder="select.." @change="provinceChange" value-key="name">
                        <el-option v-for="(item, index) in data.provinceData" :key="index" :label="this.pinyinF(item.name)" :value="item"></el-option>
                    </el-select>&nbsp;&nbsp;
                    <el-select v-model="data.cityObj" placeholder="select.." @change="cityChange" value-key="name">
                        <el-option v-for="(item, index) in data.cityData" :key="index" :label="this.pinyinF(item.name)" :value="item"></el-option>
                    </el-select>&nbsp;&nbsp;
                    <el-select v-model="data.countryObj" placeholder="select.." @change="countryChange" value-key="name">
                        <el-option v-for="(item, index) in data.countryData" :key="index" :label="this.pinyinF(item.name)" :value="item"></el-option>
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
                <el-divider content-position="center"><b>History Valuation</b></el-divider>
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
            width="100">
            </el-table-column>
            <el-table-column
            prop="road_time"
            label="Liscense Time"
            width="100">
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
                carBand: this.store.state.responses.car_data.brand,
                carBodyType:this.store.state.responses.car_data.car_type,
                carBurnType:this.store.state.responses.car_data.oil_type,
                carDangType:this.store.state.responses.car_data.mt_type,
                ticketTime: this.store.state.responses.car_data.road_time,
                runKiloM: this.store.state.responses.car_data.km,
                
            }),              
            
// 表单校验信息
            rules:({               
                carBand:[
                    {
                    required: true,
                    message: '请选择汽车品牌',
                    trigger: 'change',
                    },
                ],
                carBodyType:[
                    {
                    required: true,
                    message: '请选择车身类型',
                    trigger: 'change',
                    },
                ],
                carBurnType:[
                    {
                    required: true,
                    message: '请选择燃油类型',
                    trigger: 'change',
                    },
                ],
                carDangType:[
                    {
                    required: true,
                    message: '请选择变速箱类型',
                    trigger: 'change',
                    },
                ],
                ticketTime:[
                    {
                    type: 'date',
                    required: true,
                    message: '请选择上牌时间',
                    trigger: 'change',
                    },
                ],
                runKiloM:[
                    { required: true, message: '请输入行驶里程', trigger: 'blur' },
                    { type: 'number', min: 0, max: 999, message: '请输入正确格式，最多含3位整数，2位小数', trigger: 'blur' },
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
        t
        // historydata
        }        
    },
    name: "SellTabb",
    props:{

    },
    methods:{
        pinyinF(value){
            return pinyin.getFullChars(value)
        },
        testtt(){
            this.store.commit('setState', 10)
            console.log(this.store.state.count)
        },
// 表单校验
        onSubmit() {
        this.$refs.formInline.validate((valid) => {
          if (valid) {
              console.log(this.formInline.ticketTime)
            
              console.log(this.store.state.pageState)
              this.locationInfo = this.data.provinceObj.name+this.data.cityObj.name+this.data.countryObj.name
              this.roadTimeInfo = this.formInline.ticketTime+ ' 00:00:00'
            // console.log(this.roadTimeInfo)
            //   console.log(this.locationInfo)
              
    // 表单有效，提交给后端
            var FormData = require('form-data');
                var data = new FormData();
                data.append('id',this.store.state.create_id)
                data.append('brand', this.formInline.carBand);
                data.append('car_type', this.formInline.carBodyType);
                data.append('oil_type', this.formInline.carBurnType);
                data.append('mt_type', this.formInline.carDangType);
                data.append('road_time', this.roadTimeInfo); 
                data.append('km', this.formInline.runKiloM);
                data.append('location', this.locationInfo);

                // this.sell2info.brand=this.formInline.carBand
                // this.sell2info.road_time=this.formInline.ticketTime
                // this.sell2info.location=''
                // this.sell2info.km=this.formInline.runKiloM

                const that = this;
                

                var config = {
                method: 'post',
                url: 'api/update_es',
                data : data
                };

                axios(config)
                .then(function(response) {
                    console.log("update_es的response")
                    console.log(response)
                })
                 .catch(function (error) {
                 console.log(error);
                 });
        // post部分到此为止
        //然后post id, get response
        var data2 = new FormData();
            data2.append('id', this.store.state.create_id);

            var config2 = {
              method: 'post',
              url: 'api/get_user_car_es_by_id',
              data : data2
            };

            axios(config2).then(function (response) {
                console.log("get by id的response")
                that.store.commit('setResponses',response.data.data)
                console.log(response.data.data);
                console.log(that.store.state.responses)
                that.store.commit('setPageState', 'InfomTab')
            })
            .catch(function (error) {
              console.log(error);
            });

        //结束
            alert('submit!');
            // console.log(this.formInline);
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
