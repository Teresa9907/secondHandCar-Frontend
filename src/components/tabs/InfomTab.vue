<template>
<!-- 当前信息展示块 -->
    <div class="infodemo">
        <el-row>
            <el-col :span="2">
                <img style="width: 100px; height: 100px; object-fit: contain" :src='url' />
            </el-col>
            <el-col :span="6" :offset="1">
                <p style="font-size: 14px; height: 10px"><b>{{cv(this.store.state.responses.car_data.brand)}}</b></p>
                <p style="font-size: 14px; height: 6px">{{this.store.state.responses.car_data.road_time.slice(0,4)}}{{this.store.state.responses.car_data.road_time.slice(5,7)}} Licensed with {{this.store.state.responses.car_data.km}}km on the clock</p>
                <p style="font-size: 14px; height: 6px">{{this.pinyinF(this.store.state.responses.car_data.location)}}</p>   
            </el-col>
             <el-col :span="1" :offset="1"  style="margin-top: 3% ">
                  <el-button type="primary" @click="changeInfo">revise</el-button> 
            </el-col>
        </el-row>
    </div>
    <div class="infoMain">
<!-- 顶部分割线 -->
    <div>
         <el-row>
            <el-col :span="10" :offset="6" style="font-size: 20px">
                <el-divider content-position="center"><b>History Reconmendations</b></el-divider>
            </el-col>
         </el-row>       
    </div>
<!-- 估值报告主体部分 -->
    <div>
         <el-row >
            <el-col class="infomain" :span="5">
                <div class="infodemo">
                    <el-row>
                        <el-col :span="2">
                            <img style="width: 60px; height: 60px; object-fit: cover" :src='urlB' />
                        </el-col>
                        <el-col :span="12" :offset="10" style="margin-top: -15px; margin-left: 60px">
                            <p style="font-size: 14px; height: 6px">Good Condition</p>
                            <p style="font-size: 25px; height: 6px; color: #F09E18">{{(store.state.responses.car_data.price*1.03).toFixed(2)}}</p>   
   
                        </el-col>
                    </el-row>
                </div>
                <div class="infodemo">
                    <el-row>
                        <el-col :span="2">
                            <img style="width: 60px; height: 60px; object-fit: cover" :src='urlM' />
                        </el-col>
                        <el-col :span="12" :offset="10" style="margin-top: -15px; margin-left: 60px">
                            <p style="font-size: 14px; height: 6px">Normal</p>
                            <p style="font-size: 25px; height: 6px; color: #F09E18">{{(store.state.responses.car_data.price).toFixed(2)}}</p> 
                        </el-col>
                    </el-row>
                </div>
                <div class="infodemo">
                    <el-row>
                        <el-col :span="2">
                            <img style="width: 60px; height: 60px; object-fit: cover" :src='urlG' />
                        </el-col>
                        <el-col :span="12" :offset="10" style="margin-top: -15px; margin-left: 60px">
                            <p style="font-size: 14px; height: 6px">Bad Condition</p>   
                            <p style="font-size: 25px; height: 6px; color: #F09E18">{{(store.state.responses.car_data.price*0.95).toFixed(2)}}</p> 
                        </el-col>
                    </el-row>
                </div>
            </el-col>
<!-- 图不出来的表 -->
            <el-col class="infomain"  :span="10" :offset="1">
                <div id="container" style="height: 370px; width: 450px;">
                </div>
            </el-col>
<!-- 右边的临近价格预测 -->
            <el-col class="infomain"  :span="6" :offset="1" style="margin-top: -25px">
                <el-row>
                    <p style="font-size: 15px; margin-left: 55px"><b>Prediction of Neighbors</b></p>
                </el-row>
                <el-row style="margin-top: -25px">
                    <el-col :span="5">
                        <el-row class="lower"></el-row>
                        <el-row class="middle"></el-row>
                        <el-row class="higher"></el-row>
                    </el-col>
                    <el-col :span="18" style="margin-top: -5px">
                        <el-table :data="tableData" :show-header="false">
                            <el-table-column prop="date" width="60" />
                            <el-table-column prop="name" width="85" />
                            <el-table-column prop="address" width="120"  />
                        </el-table>
                    </el-col>
                </el-row>
                
                
            </el-col>
         </el-row>       
    </div>
    <el-button @click="testtt">sss</el-button>
    </div>
</template>

<script>
import { defineComponent, reactive, ref, onMounted} from 'vue'
import { useStore } from "vuex";
import * as echarts from 'echarts';
import axios, { Axios } from 'axios';
import pinyin from 'js-pinyin'

export default defineComponent({
    name: "InfomTab",
    components: { },
    props:{
        
        
    },
    setup(props) {
        const store = useStore(); 
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
            let myChart = echarts.init(document.getElementById('container'));
            myChart.setOption({
                    title: {
                        text: 'Predicted price changes within one year',
                        x:'center',
                        textStyle:{
                            fontSize: 12,
                            // fontWeight: 'normal'

                        }
                    },
                    tooltip: {},
                    legend: {
                        right: 'right',
                        textStyle:{
                            fontSize: 12
                        }
                        
                    },
                    xAxis: {
                        data: ['2022/04','2022/07','2022/10','2023/01','2023/04'],
                        axisTick: {
                            alignWithLabel: true
                        },
                    },
                    yAxis: {
                        // axisLabel:{
                        //     formatter: '{value} w',
                        // },
                        name: 'RMB'
                        
                    },
                    series: [
                        {
                            name: 'price',
                            type: 'line',
                            data: store.state.responses.predict.price_data,
                            position: 'right',
                            label: {
                                show: true,
                                position: 'top',
                                // formatter: '{c}w',

                                textStyle: {
                                fontSize: 10
                                }
                            }
                        },
                    ]
                    });
        });

             
        return{
            store,
            cv
            // brand,
            // km,
            // road_time,
            // price,
            // location 
        }
        
                
    },
    data(){
        return{
            carInfo: this.store.state.responses,
            currentPage: '1',
            url: 'https://i.pinimg.com/564x/63/ee/c0/63eec086a5932081dd75f32e9f1c42c8.jpg',
            urlG: 'https://cdn.dribbble.com/users/949133/screenshots/2668548/media/00d43f1c73214a5b9faf8c0bd0367730.png',
            urlM: 'https://i.pinimg.com/564x/70/1a/06/701a0684b3a8aab92f557e007a6a4b90.jpg',
            urlB: 'https://i.pinimg.com/564x/b2/0e/cf/b20ecf7f29620defcc2866726810134d.jpg',


            carName: '大众车',
            statePH: '9.67w',
            statePM: '9.67w',
            statePL: '9.67w',
            hN: 6,
            mN: 2,
            lN: 3, 
            dw: 'px', 
            tableData:
                [{
                    date: '4.2w',
                    name: '5%lower',
                    address: 'ShiYan'
                },
                {
                    date: '4.3w',
                    name: '2%lower',
                    address: 'ChangDe'
                },
                {
                    date: '4.5w',
                    name: 'Same',
                    address: 'XiAn'
                },
                {
                    date: '4.6w',
                    name: '1%higher',
                    address: 'ShaoGuan'
                },
                {
                    date: '4.8w',
                    name: '2%higher',
                    address: 'WuHan'
                },
                {
                    date: '4.8w',
                    name: '2%higher',
                    address: 'QingYuan'
                },
                {
                    date: '4.9w',
                    name: '3%higher',
                    address: 'HuiZhou'
                },
                
                ]  
        }
    },
    methods:{
        changeInfo(){
            console.log(this.store.state.responses)
            // console.log(this.store.commit('his2info', this.store.state.responses.car_data))
            this.store.commit('setPageState', 'SellTabb')

        },
   
        testtt(){
            console.log(this.hN+this.dw)

        },
        pinyinF(value){
            return pinyin.getFullChars(value)
        }
    }
})

</script>

<style scoped>
.p1{
    height: 12px;
    font-size: 12px;
}
.infodemo{
    margin-top: 20px;
    margin-left: 10%;
    /* background-color: aquamarine; */
    height: 100px;
}

.infoMain{
    margin-top: 10px;
    margin-left: 10%;
}
.lower{
    background-color: #3BA1FF;
    width: 20px;
    height: v-bind(lN*25+dw);;
    margin: 0%;
}
.middle{
    background-color: #30C25C;
    width: 20px;
    height: v-bind(mN*25+dw);
    margin: 0%;

}
.higher{
    
    background-color: #FFC927;
    width: 20px;
    height: v-bind(hN*25+dw);
    margin: 0%;

}



</style>
