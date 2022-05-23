<template>

<el-dialog v-model="dialogTableVisible" :title="t('login.xiugaishoujihao')">
      <!-- <div>
        <el-alert title="请输入正确的手机号" type="error" show-icon />  
      </div> -->

      <div style="margin-left: 0; margin-top: 20px">
      <el-row>{{t('login.qingshuru')}}</el-row>
  <!-- 手机号行 -->
      <el-row style="margin-top: -26px" >
        <!-- <el-col :span='4'>
            <el-select v-model="value" class="m-2" placeholder="区号">
          <el-option
           v-for="item in telPre"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          />
          </el-select>
        </el-col> -->

        <el-col :span="19">
          <el-input v-model="userTelInput" :placeholder="t('login.shouji')" clearable />
        </el-col>
        
        
      </el-row>
  <!-- 验证码行 -->
      <el-row>
        <el-col :span="8" >
          <el-input style="width: 100%" :suffix-icon="Message" :prefix-icon="Check" v-model="TextNum" :placeholder="t('login.yanzheng')" clearable />
        </el-col>

        <el-col :span="4" :offset="1">
          <el-button type="primary" :disabled = "buttonStateST" @click="returnTel">{{t('login.huoqu')}}</el-button>
        </el-col>
      </el-row>
      </div>
  <!-- 底部按钮 -->
      <div>
        <el-divider />
        <el-row>
          <el-col :span="3" :offset="14">
              <el-button @click="dialogTableVisible = false">{{t('login.quxiao')}}</el-button>
          </el-col>
          <el-col :span="3" :offset="2">
              <el-button type="primary" @click="returnInput" >{{t('login.queren')}}</el-button>
          </el-col>

        </el-row>
      </div>

  </el-dialog> 




<div style=" margin-top: 40px">
  <el-row>
    <el-col :span="24">
        <b>{{t('personalpage.zhanghuxinxi')}}</b>
    </el-col>
  </el-row>


  <el-row style="text-align: center; margin-left: 0">
    <el-col :span="24">{{t('personalpage.touxiang')}}</el-col>
    <el-col :span="24">
      <!-- <el-avatar :size="100" :src="avatar_urlST" /> -->
      <el-avatar :size="100" :src="this.store.state.userPicUrl" />
    </el-col>
    <el-col :span="24">
      <input id = "uploadImg" type="file" title="t('personalpage.xuanze')">
      <input @click="submitImg" type="submit" :value="t('personalpage.shangchuan')">
    </el-col>
  </el-row>

  <el-row style="height: 20px">
    <el-col :span="24">
        {{t('personalpage.ming')}}
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <el-input v-model="userNameST" clearable />
        <!-- {{userName}} -->
        <!-- <el-input v-model="userName" placeholder='{{userName}}' clearable /> -->

    </el-col>
  </el-row>

  <el-row style="height: 20px" >
    <el-col :span="24">
        {{t('personalpage.dangqian')}}
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="5">
        {{this.store.state.userTel}}
    </el-col>
    <el-col :span="8">
        <el-button class="telPost" type = "primary" @click="dialogTableVisible = true">{{t('personalpage.xiugai')}}</el-button>
    </el-col>
  </el-row>  

  <el-row style="height: 20px">
    <el-col :span="24">
        {{t('personalpage.suozai')}}
    </el-col>
  </el-row>
  <el-row :gutter="20" style="margin-left: 24%">
    <el-col :span="5">
        <el-select v-model="value1" class="m-2" placeholder="Select">
          <el-option
            v-for="item in optionsPro"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
          </el-select>
    </el-col>
    <el-col :span="5">
        <el-select v-model="value2" class="m-2" placeholder="Select">
          <el-option
            v-for="item in optionsCity"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
          </el-select>
    </el-col>
  </el-row> 

  <el-row>
    <el-button type="primary" @click="submitInfo">{{t('personalpage.gengxin')}}</el-button>
  </el-row>
</div>  
<!-- <el-button type="primary" v-on:click="testout">测试传值</el-button>     -->
</template>


<script>

import { ref } from 'vue'
const input = ref('')
import { ElMessage } from 'element-plus'
import { defineComponent, onBeforeMount } from "vue";
import axios, { Axios } from 'axios';
import { useStore } from "vuex";
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: "SelfTab",
  data(props){
      return{
          buttonStateST:false,
          testdata:'123140',
          userList:[],
          userTelST: props.userTel,
          userNameST: this.store.state.userName,
          avatar_urlST: props.avatar_url,
          // avatar_urlST: "https://muscar.oss-cn-guangzhou.aliyuncs.com/img/624ea63460026fb39e7ccc86.jpg",
          value1: 'Beijing',
          value2: 'FengTai',
          dialogTableVisible: false,
          value:'',
          userTelInput:'',
          TextNum:'',
          telPre : [
          {
            value: 'Mainland',
            label: '+86',
          },
          {
            value: 'Hongkong',
            label: '+852',
          },
          {
            value: 'Macau',
            label: '+853',
          }, 
        ],

        optionsPro : [
          {
            value: 'Beijing',
            label: 'Beijing',
          },
          {
            value: 'Option2',
            label: 'Option2',
          },
          {
            value: 'Option3',
            label: 'Option3',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ],

        optionsCity : [
          {
            value: 'FengTai',
            label: 'FengTai',
          },
          {
            value: 'Option2',
            label: 'Option2',
          },
          {
            value: 'Option3',
            label: 'Option3',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ]

      }
      
  },
  props:{
      // userTel: {
      //   type: String,
      //   default: ""
      // },
      // userName: {
      //   type: String,
      //   default: ""
      // },
      // avatar_url:{
      //   default: "CircleUrl"
      // }
  },
  setup(props) {
    const store = useStore();
    const {t} = useI18n();

     onBeforeMount(() => {
       const that = this;
       console.log(props.userTel)
      axios
      .get('/api/get_user_info')
      .then(function(response){
          
          console.log(response)
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
    }); 
    return{
      store,
      t
    } 
  },
  

  

  // created(){
  //   // this.getUserList()
  // },
  
  methods: {
    testout(props){
      console.log(this.avatar_urlST)
      this.avatar_urlST = "CircleUrl"
      // props.userTel = '1111';
      // console.log(this.userTelST)
      // console.log(this.userTel)
      // this.$emit("listenToChildEvent",this.userNameST)
      // console.log(this.testdata)
    },
// 更改手机号-发送验证码
    returnTel(){
        var FormData = require('form-data');
        var data = new FormData();
        data.append('phone', this.userTelInput);
    
        const that = this;

        var config = {
          method: 'post',
          url: 'api/send_sms',
          data : data
        };

        axios(config)
        .then(function(response) {
        console.log(response.data.msg);
        that.returnCode = response.data.code;
        that.returnMessage = response.data.msg;
        console.log(that.returnCode)
      if (that.returnCode == 200){
        that.buttonStateST = true;
          ElMessage({
                message: that.returnMessage,
                type: 'success',
                
          });
          }
          else{
           ElMessage({
                message: that.returnMessage,
                type: 'error',
          });
      }

      })
      .catch(function (error) {
       console.log(error);
      });
    },

// 更改手机号确认
    returnInput () {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('phone', this.userTelInput);
        data.append('code',this.TextNum);
    
        const that = this;

        var config = {
          method: 'post',
          url: 'api/bind_phone',
          data : data
        };

        axios(config)
        .then(function(response) {
        console.log(response.data.msg);
        that.returnCode = response.data.code;
        that.returnMessage = response.data.msg;
        console.log(that.returnCode)
      if (that.returnCode == 200){
          that.dialogTableVisible = false
          that.store.commit('setUserTel', that.userTelInput)
          ElMessage({
                message: that.returnMessage,
                type: 'success',
          });
          }
          else{
           ElMessage({
                message: that.returnMessage,
                type: 'error',
          });
      }

      })
      .catch(function (error) {
       console.log(error);
      });
        
    },
// 更新信息click
submitInfo(){
  var FormData = require('form-data');
        var data = new FormData();
        data.append('username', this.userNameST);
        data.append('province',this.value1);
        data.append('city',this.value2)
        const that = this;

        var config = {
          method: 'post',
          url: 'api/update_user_info',
          data : data
        };

        axios(config)
        .then(function(response) {
        console.log(response.data.msg);
        that.store.commit('setUserName', that.userNameST)
        that.store.commit('setProvince', that.value1)
        that.store.commit('setCity', that.value2)
        that.returnCode = response.data.code;
        that.returnMessage = response.data.msg;
        console.log(that.returnCode)
      if (that.returnCode == 200){
          ElMessage({
                message: that.returnMessage,
                type: 'success',
          });
          }
          else{
           ElMessage({
                message: that.returnMessage,
                type: 'error',
          });
      }

      })
      .catch(function (error) {
       console.log(error);
      });
},

// 图片上传
    submitImg(){
         var FormData = require('form-data');
        var data = new FormData();
        var img = document.getElementById("uploadImg")
        data.append('file', img.files[0]);
        
        const that = this;

        var config = {
          method: 'post',
          url: 'api/upload',
          data : data
        };

        axios(config)
        .then(function(response) {
        console.log(response.data.msg);
        that.returnCode = response.data.code;
        that.returnMessage = response.data.msg;
        console.log(that.returnCode)
      if (that.returnCode == 200){
          ElMessage({
                message: that.returnMessage,
                type: 'success',
          });
          }
          else{
           ElMessage({
                message: that.returnMessage,
                type: 'error',
          });
      }

      })
      .catch(function (error) {
       console.log(error);
      });
    },
      
      isTel(){
        if (this.userTelInput.length == 11){
          this.openIsDisabled = false
        }
      },
  }})


</script>

<style scoped>

.el-input{
    margin-top: 0;
    width: 50%;
}
.el-row{
  margin-left: 25%;
}

.el-alert {
  
  height: 30px;
}
.el-alert:first-child {
  margin: 0;
}

.el-dialog.el-row{
  margin-left: 0%;
  text-align: left;
}


</style>