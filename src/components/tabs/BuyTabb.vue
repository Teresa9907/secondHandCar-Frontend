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
                        <el-radio label="<2w" />
                        <el-radio label="2~5w" />
                        <el-radio label="5~8w" />
                        <el-radio label="8~12w" />
                        <el-radio label="12~16w" />
                        <el-radio label="16~20w" />
                        <el-radio label="input">
                            <el-input v-model="input1" placeholder="" style="width: 80px" />
                            --
                            <el-input v-model="input2" placeholder="" style="width: 80px"/>
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
            <el-table-column label="操作">
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
export default defineComponent({
    components: {
        
    },
    data() {
        return {
// 读入报告，以json数据形式传入
            input1: 0,
            input2: 0,
            ReconInfo: 'ReconInfo',
            roadTimeInfo: '',
            locationInfo: '',
// 表单数据，除城市信息外            
                formInline:({
                carBand: this.store.state.responses.brand,
                carBodyType:this.store.state.responses.car_type,
                budget: {

                }
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
        // this.store.state.create_id




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
    name: "BuyTabb",
    props:{

    },
    methods:{
        
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
                data.append('max_price', this.input2*10000);
                data.append('min_price', this.input1*10000);
                data.append('id',this.store.state.create_id)
                // this.sell2info.brand=this.formInline.carBand
                // this.sell2info.road_time=this.formInline.ticketTime
                // this.sell2info.location=''
                // this.sell2info.km=this.formInline.runKiloM

                const that = this;
                

                var config = {
                method: 'post',
                url: 'api/update_rec',
                data : data
                };

                axios(config)
                .then(function(response) {
                    console.log("update_rec的response")
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
              url: 'api/get_user_car_rec_by_id',
              data : data2
            };

            axios(config2).then(function (response) {
                console.log("get by id的response")
                that.store.commit('setResponses',response.data.data)
                console.log(response.data.data);
                console.log(that.store.state.responses)
                that.store.commit('setPageState', that.ReconInfo)
            })
            .catch(function (error) {
              console.log(error);
            });

        //结束
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
            this.store.commit('setPageState', this.ReconInfo)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       
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
