<template>
<!-- 当前信息展示块 -->
    <div class="infodemo">
        <el-row>
            <el-col :span="2">
                <img style="width: 100px; height: 100px; object-fit: contain" :src='url' />
            </el-col>
            <el-col :span="6" :offset="1">
                <p style="font-size: 14px; height: 10px"><b>{{this.store.state.responses.car_data.brand}}</b></p>
                <p style="font-size: 14px; height: 6px">{{this.store.state.responses.car_data.road_time.slice(0,4)}}年{{Number(this.store.state.responses.car_data.road_time.slice(5,7))}}月上牌  行驶里程{{this.store.state.responses.car_data.km}}万公里</p>
                <p style="font-size: 14px; height: 6px">{{this.store.state.responses.car_data.location}}</p>   
            </el-col>
             <el-col :span="1"  style="margin-top: 3% ">
                  <el-button type="primary" @click="changeInfo">修改信息</el-button> 
            </el-col>
        </el-row>
    </div>
    <div class="infoMain">
<!-- 顶部分割线 -->
    <div>
         <el-row>
            <el-col :span="8" :offset="7" style="font-size: 20px">
                <el-divider content-position="center"><b>估值报告</b></el-divider>
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
                            <p style="font-size: 14px; height: 6px">车况好</p>
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
                            <p style="font-size: 14px; height: 6px">车况正常</p>
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
                            <p style="font-size: 14px; height: 6px">车况差</p>   
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
            <el-col class="infomain"  :span="5" :offset="1" style="margin-top: -25px">
                <el-row>
                    <p style="font-size: 15px; margin-left: 55px"><b>邻近价格预测</b></p>
                </el-row>
                <el-row style="margin-top: -25px">
                    <el-col>
                        <el-row class="lower"></el-row>
                        <el-row class="middle"></el-row>
                        <el-row class="higher"></el-row>
                    </el-col>
                    <el-col>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="Date" width="180" />
                            <el-table-column prop="name" label="Name" width="180" />
                            <el-table-column prop="address" label="Address" />
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


export default defineComponent({
    name: "InfomTab",
    components: { },
    props:{
        
        
    },
    setup(props) {
        const store = useStore(); 
                   
            onMounted(() => { 
            let myChart = echarts.init(document.getElementById('container'));
            myChart.setOption({
                    title: {
                        text: '预测一年内价格变化',
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
                        name: '单位：万'
                        
                    },
                    series: [
                        {
                            name: '价格',
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
