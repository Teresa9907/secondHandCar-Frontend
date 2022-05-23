<template>
    <div style="margin-top: 100px; padding-left: 10%">
          <el-row >

            <el-col :span="6">
              <el-table :data="brandData" stripe style="width: 100%">
                  <el-table-column :label="t('hometab.hotpinpai')">
                    <el-table-column prop="brandB" :label="t('hometab.pinpai')" width="100%" />
                    <el-table-column prop="exNumB" :label="t('hometab.liang')" width="200%" />
                  </el-table-column>
              </el-table> 
            </el-col>


            <el-col :span="6" :offset="1">
              <el-table :data="carData" stripe style="width: 100%">
                  <el-table-column :label="t('hometab.hotchexi')">
                    <el-table-column prop="carSys" :label="t('hometab.chexi')" width="100%" />
                    <el-table-column prop="exNumC" :label="t('hometab.liang')" width="200%" />
                  </el-table-column>
              </el-table> 
            </el-col>


            <el-col :span="6" :offset="1">
              <el-table :data="priceData" stripe style="width: 100%">
                  <el-table-column :label="t('hometab.jiage')">
                    <el-table-column prop="brandP" :label="t('hometab.pinpai')" width="100%" />
                    <el-table-column prop="price" :label="t('hometab.yuce')" width="200%" />
                  </el-table-column>
              </el-table> 
            </el-col>
          </el-row>
        </div>
        <el-button @click="test">cvvv</el-button>
</template>

<script>

import { defineComponent, onMounted,getCurrentInstance } from "vue";
import { ElMessage } from 'element-plus'
import axios, { Axios } from 'axios';
import { useStore } from "vuex";
import { useI18n } from 'vue-i18n';
import pinyin from 'js-pinyin'
import { el } from "element-plus/lib/locale";
export default defineComponent({
  data(){
    return{
      brandData : [
        {
          brandB: this.t('brands.bentian'),
          exNumB: '890'
        },
        {
          brandB: this.t('brands.fengtian'),
          exNumB: '825'
        },
        {
          brandB: this.t('brands.dazhong'),
          exNumB: '688'
        },
        {
          brandB: this.t('brands.richan'),
          exNumB: '579'
        },
        {
          brandB: this.t('brands.fute'),
          exNumB: '516'
        },
        {
          brandB: this.t('brands.baoma'),
          exNumB: '327'
        },
        {
          brandB: this.t('brands.benchi'),
          exNumB: '298'
        },
        {
          brandB: this.t('brands.aodi'),
          exNumB: '277'
        },
        {
          brandB: this.t('brands.xiandai'),
          exNumB: '187'
        },
      ],

      carData : [
        {
          carSys: 'Volkswagen New Langyi',
          exNumC: '90'
        },
        {
          carSys: 'Toyota Carola',
          exNumC: '85'
        },
        {
          carSys: 'Toyota        Cayenne',
          exNumC: '68'
        },
        {
          carSys: 'BMW 5 Series',
          exNumC: '57'
        },
        {
          carSys: 'Benz M Series',
          exNumC: '51'
        },
        {
          carSys: 'Volkswagen  Touareg',
          exNumC: '32'
        },
        {
          carSys: 'Honda Civic',
          exNumC: '29'
        },
        {
          carSys: 'Volkswagen Tourer',
          exNumC: '27'
        },
        {
          carSys: 'Ford F150',
          exNumC: '18'
        },
      ],

      priceData : [
        {
          brandP: this.t('brands.bentian'),
          price: '6.5'
        },
        {
          brandP: this.t('brands.fengtian'),
          price: '5.7'
        },
        {
          brandP: this.t('brands.dazhong'),
          price: '7'
        },
        {
          brandP: this.t('brands.richan'),
          price: '5'
        },
        {
          brandP: this.t('brands.fute'),
          price: '4.5'
        },
        {
          brandP: this.t('brands.baoma'),
          price: '19'
        },
        {
          brandP: this.t('brands.benchi'),
          price: '18'
        },
        {
          brandP: this.t('brands.aodi'),
          price: '17'
        },
        {
          brandP: this.t('brands.xiandai'),
          price: '6.1'
        },
        
      ]
    }
  },
  components: { 
  },
  name: "HomeTab",
  setup() {
    const store = useStore();
    const {t} = useI18n();
    // const pinyin = require('js-pinyin');
    

    // reconinfo右边的表格
    onMounted(() => { 
            axios
            .get('/api/get_area_price')

            .then(function(response){
                console.log(response)
                // console.log(response.data.data)
                // store.commit('setHistorys',response.data.data)
            })  
            .catch(function (error) { // 请求失败处理
                console.log(error);
            })
        }); 
            return{
              store,t,
              
            }
  },
  props: {
    
  },
  methods:{
    test(){
      console.log(this.cv('手动'))
    }
  }
  })
</script>

<style scoped>
.el-col{
  text-align: center;
}
.el-alert {
  height: 30px;
}
.el-alert:first-child {
  margin: 0;
}
.el-table{
  text-align: center;
  font-size: 10px;
  
}

</style>
