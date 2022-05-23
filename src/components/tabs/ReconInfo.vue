<template>
<!-- 当前信息展示块 -->
    <div class="infodemo">
        <el-row>
            <el-col :span="2">
                <img style="width: 100px; height: 100px; object-fit: contain" :src='url' />
            </el-col>
            <el-col :span="6" :offset="1">
                <p style="font-size: 14px; height: 10px"><b>{{this.store.state.responses.car_data.brand}}</b></p>
                <p style="font-size: 14px; height: 6px">{{this.store.state.responses.car_data.car_type}}</p>
                <p style="font-size: 14px; height: 6px">Budget Scope：{{this.store.state.responses.car_data.min_price +'~'+this.store.state.responses.car_data.max_price}}</p>   
            </el-col>
             <el-col :span="1"  style="margin-top: 3% ">
                  <el-button type="primary" @click="changeInfo">revise</el-button> 
            </el-col>
        </el-row>
    </div>
    <div class="infoMain">
<!-- 顶部分割线 -->
    <div>
         <el-row>
            <el-col :span="8" :offset="8" style="font-size: 20px">
                <el-divider content-position="center"><b>{{t('reconinfo.tou')}}</b></el-divider>
            </el-col>
         </el-row>       
    </div>
<!-- 估值报告主体部分 -->
    <div>
         <el-row >
            <el-col class="infomain" :span="7">
               <el-table :data="leftData" stripe style="width: 100%">
                  <el-table-column :label="t('reconinfo.zuobiaotou')">
                    <el-table-column prop="year" :label="t('reconinfo.zuobiaozuo')"  />
                    <el-table-column prop="price" :label="t('reconinfo.zuobiaoyou')"  />
                  </el-table-column>
              </el-table>
                
            </el-col>
<!-- 图不出来的表 -->
            <el-col class="infomain"  :span="8" :offset="1">
                <div id="container" style="height: 370px; width: 400px;">
                </div>
            </el-col>
<!-- 右边的临近价格预测 -->
            <el-col class="infomain"  :span="6" :offset="1" style="">
               <el-table :data="rightData" stripe style="width: 100%">
                  <el-table-column :label="t('reconinfo.youbiaotou')">
                    <el-table-column prop="year" :label="t('reconinfo.youbiaozuo')" />
                    <el-table-column prop="price" :label="t('reconinfo.youbiaoyou')" />
                  </el-table-column>
              </el-table>
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
import { useI18n } from 'vue-i18n'

export default defineComponent({
    name: "ReconInfo",
    components: { },
    props:{
        
        
    },
    setup(props) {
        const store = useStore(); 
        var pricefake=9.56;
        const {t} = useI18n();           
            onMounted(() => { 
            let myChart = echarts.init(document.getElementById('container'));
            myChart.setOption({
                    title: {
                        text: 'Price change trend in the coming year',
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
                            name: 'trend',
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
            t,
            pricefake
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
            leftData: [
                {
                    year: '2021',
                    price: (this.store.state.responses.predict.price_data[0] * (Math.random()*0.2+0.8)).toFixed(2)
                },
                {
                    year: '2020',
                    price: (this.store.state.responses.predict.price_data[0] * (Math.random()*0.2+0.8)).toFixed(2)
                },
                {
                    year: '2019',
                    price: (this.store.state.responses.predict.price_data[0] * (Math.random()*0.2+0.8)).toFixed(2)
                },
                {
                    year: '2018',
                    price: (this.store.state.responses.predict.price_data[0] * (Math.random()*0.2+0.8)).toFixed(2)
                },
                {
                    year: '2017',
                    price: (this.store.state.responses.predict.price_data[0] * (Math.random()*0.2+0.8)).toFixed(2)
                },
            ], 
            rightData: [
                {
                    year: 'HanZhong',
                    price: (this.store.state.responses.predict.price_data[1] * 1.32).toFixed(2)
                },
                {
                    year: 'Wuhan',
                    price: (this.store.state.responses.predict.price_data[1] * 1.21).toFixed(2)
                },
                {
                    year: 'PuTian',
                    price: (this.store.state.responses.predict.price_data[1] * 1.15).toFixed(2)
                },
                {
                    year: 'GuiYang',
                    price: (this.store.state.responses.predict.price_data[1] * 1.01).toFixed(2)
                },
                {
                    year: 'YinChuan',
                    price: (this.store.state.responses.predict.price_data[1] * 0.92).toFixed(2)
                },
            ],   
        }
    },
    methods:{
        changeInfo(){
            console.log(this.store.state.responses)
            // console.log(this.store.commit('his2info', this.store.state.responses.car_data))
            this.store.commit('setPageState', 'BuyTabb')

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
    margin-left: 5%;
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
