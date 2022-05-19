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
</template>

<script>

import { defineComponent, onMounted } from "vue";
import { ElMessage } from 'element-plus'
import axios, { Axios } from 'axios';
import { useStore } from "vuex";
import { useI18n } from 'vue-i18n'
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
          carSys: '大众新朗逸',
          exNumC: '90'
        },
        {
          carSys: '丰田卡罗拉',
          exNumC: '85'
        },
        {
          carSys: '丰田Cayenne',
          exNumC: '68'
        },
        {
          carSys: '宝马5系',
          exNumC: '57'
        },
        {
          carSys: '奔驰M级',
          exNumC: '51'
        },
        {
          carSys: '大众途观',
          exNumC: '32'
        },
        {
          carSys: '本田思域',
          exNumC: '29'
        },
        {
          carSys: '大众途乐',
          exNumC: '27'
        },
        {
          carSys: '福特F150',
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
    onMounted(() => {
            // var FormData = require('form-data');
            // var data = new FormData();
            // data.append('id', '88');
            // const that = this;

            // var config = {
            //   method: 'post',
            //   url: 'api/get_user_car_es_by_id',
            //   data : data
            // };

            // axios(config).then(function (response) {
            //   store.commit('setResponses',response.data.data)
            //   console.log(response);
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });
            });   
            return{
              store,t
            }
  },
  props: {
    
  },
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
