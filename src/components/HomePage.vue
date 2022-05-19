<template>
  <div class="common-layout">  
    <el-container>
<!-- 页面头 -->
        <el-affix offset="0">
      <el-header>
        <el-row>
            <el-col :span="1">
                <img src="../assets/logo.png" alt="logo" align="middle" width="30" height="30">
            </el-col>
            <el-col :span="4">
                <b>LOGO</b>
            </el-col>

            
            <el-col :span="10">
                <el-menu
            :default-active="activeIndex"
            :ellipsis=false
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            background-color=transparent
            active-text-color="#ffffff"
            @select="handleSelect"
  >
                
                <el-sub-menu index="2" class = "submenu">
                <template #title >{{t('header.quanguo')}}</template>
                 <el-menu-item index="2-1" style="color: black">item one</el-menu-item>
                 <el-menu-item index="2-2" style="color: black">item two</el-menu-item>
                 <el-menu-item index="2-3" style="color: black">item three</el-menu-item>
                 <el-sub-menu index="2-4"  style="color: black">
                    <template #title>item four</template>
                        <el-menu-item index="2-4-1" style="color: black">item one</el-menu-item>
                        <el-menu-item index="2-4-2" style="color: black">item two</el-menu-item>
                        <el-menu-item index="2-4-3" style="color: black">item three</el-menu-item>
                    </el-sub-menu>
                 </el-sub-menu>
                 <el-menu-item index="1"
                 :offset="2"  
                  @click = "tabChange('HomeTab')"
                  >{{t('header.shouye')}}</el-menu-item>
                 <!-- @click="tabChange('InfomTab')", 放下边空行的 -->
                 <el-menu-item
                  @click="tabChange('InfomTab')"
                  index="3">{{t('header.mai3che')}}</el-menu-item>
                <!-- <el-menu-item index="3" disabled>Info</el-menu-item> -->
                <el-menu-item index="4"
                @click="tabChange('SellTab')">{{t('header.mai4che')}}</el-menu-item>
    </el-menu>
            </el-col>
<!-- 中英切换 -->
      <el-col :span="1" :offset="1">
                <el-menu
            :default-active="activeIndex2"
            :ellipsis=false
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            background-color=transparent
            active-text-color="#ffffff"
            @select="handleSelect">
                
                <el-sub-menu 
                  index="2" 
                  class = "submenu"
                  text-color="#000"
                  >
                <template #title>
                  <img src="../assets/lang.png" width="18" height="18" padding-right="10px" >
                  {{t('header.yuyan')}}
                  </template>
                 <el-menu-item index="2-1" text-color="#000" style="color: black; text-align: center" 
                   @click="$i18n.locale='CN'">简体中文</el-menu-item>
                 <el-menu-item index="2-2" style="color: black"
                  @click="$i18n.locale='ENG'">English</el-menu-item>
                 </el-sub-menu>
              </el-menu>
            </el-col>
<!-- 右上角 -->
  <!-- currentLogin: false -->
  <!-- 未登录 -->
    <template v-if="currentLogin === false"> 
      <el-col :span="4" :offset="3">
                <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            background-color=transparent
            active-text-color="#ffffff"
            @select="handleSelect">
                
                <el-sub-menu index="2" class = "submenu">
                <template #title>
                  {{t('header.qingdenglu')}}</template>
                 <el-menu-item index="2-2" style="color: black" @click="dialogTableVisible = true">{{t('header.zhuce')}}</el-menu-item>
                 </el-sub-menu>
                </el-menu>
            </el-col>
    </template>
  <!-- currentLogin: true -->
  <!-- 已登录 -->
    <template v-if="currentLogin === true">
      <el-col :span="4" :offset="2">
                <el-menu
            :default-active="activeIndex2"
            :ellipsis=false
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            background-color=transparent
            @select="handleSelect">
                
                <el-sub-menu 
                  index="2" 
                  class = "submenu"
                  text-color="#000">
                <template #title>
                  <el-avatar :size="25" :src=this.store.state.userPicUrl />

                  {{ this.store.state.userName }}</template>
                 <el-menu-item index="2-1" text-color="#000" style="color: black; text-align: center" 
                      @click="tabChange('PersonalPage')"
                      >{{t('header.geren')}}</el-menu-item>
                 <el-menu-item index="2-2" style="color: black" @click="logout">{{t('header.tuichu')}}</el-menu-item>
                 </el-sub-menu>
              </el-menu>
            </el-col>
    </template>
            


        </el-row>
      </el-header>
      </el-affix>
      <el-main>
<!-- 页面体       -->
        <template v-if="this.store.state.pageState === 'PersonalPage'">
              <PersonalPage :avatar_url="avatar_url" :userName="userName" :userTel='userTel' v-on:listenToPP="changeName" v-on:listenToImgPP="avatar_upload"></PersonalPage>
          </template>
          <template v-else-if="this.store.state.pageState === 'HomeTab'">
              <HomeTab></HomeTab>
          </template>
          <template v-else-if="this.store.state.pageState === 'SellTab'">
              <SellTab></SellTab>
          </template>
          <template v-else-if="this.store.state.pageState === 'SellTabb'">
              <SellTabb></SellTabb>
          </template>         
          <template v-else-if="this.store.state.pageState === 'InfomTab'">
              <InfomTab></InfomTab>
        </template>
        <!-- <history-tab></history-tab> -->
        <!-- <el-button @click="test">try</el-button> -->
<!-- 注册页          -->
    <el-dialog v-model="dialogTableVisible" title="注册">
      <div style="margin-left: 10%;">
      <el-row>{{t('login.qingshuru')}}</el-row>
  <!-- 手机号行 -->
      <el-row style="margin-top: -26px" >
        <el-col :span='4'>
            <el-select v-model="value" class="m-2" placeholder="区号">
          <el-option
           v-for="item in telPre"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          />
          </el-select>
        </el-col>

        <el-col :span="8" :offset="1">
          <el-input v-model="userTelInput" :placeholder="t('login.shouji')" clearable />
        </el-col>
        
        
      </el-row>
  <!-- 验证码行 -->
      <el-row>
        <el-col :span="8" >
          <el-input :suffix-icon="Message" :prefix-icon="Check" v-model="textNum" :placeholder="t('login.yanzheng')" clearable />
        </el-col>

        <el-col :span="4" :offset="1">
          <el-button type="primary" :disabled="buttonState" @click="returnTel">{{buttonText}}</el-button>
        </el-col>
      </el-row>
      </div>
  <!-- 底部按钮 -->
      <div>
        <el-divider />
        <el-row>
          <el-col :span="3" :offset="17">
              <el-button @click="dialogTableVisible = false">{{t('login.quxiao')}}</el-button>
          </el-col>
          <el-col :span="3" :offset="1">
              <el-button type="primary" @click="returnLogin">{{t('login.queren')}}</el-button>
          </el-col>

        </el-row>
      </div>

  </el-dialog> 


<!-- <el-button @click="getUserInfo" :disabled="buttonState"  type="primary">输出</el-button> -->
<el-button @click="test"></el-button>
      </el-main>
<!-- 页脚 -->
      <el-footer >
        <div>
          <el-row>
            <el-col :span="1" :offset="1">
              <p style="text-align: right;">
                <img src="../assets/电脑.png"  width="18" height="18">
              </p>
            </el-col>
            <el-col :span="3" style="padding-left: 10px">
              <p class="p" style="font-weight: bold;">关于本站</p>
              <p class="p">用户协议</p>
              <p class="p">用户中心</p>
              <p class="p">帮助</p>
            </el-col>
            <el-col :span="1">
              <p style="text-align: right;">
                <img src="../assets/？.jpg"  width="18" height="18">
              </p>
            </el-col>
            <el-col :span="3" style="padding-left: 10px">
              <p class="p" style="font-weight: bold;">本站服务</p>
              <p class="p">车辆估值</p>
              <p class="p">购车建议</p>
            </el-col>
          </el-row>
          <el-row>
            <p class="p2">copyright © 2022 软件工程项目小组出品</p>
          </el-row>

        </div>

      </el-footer>
    </el-container>
  </div>
</template>


<script>
import axios, { Axios } from 'axios';
import { defineComponent, reactive } from "vue";
import { ElMessage } from 'element-plus'
import PersonalPage from '../components/PersonalPage.vue'
import HomeTab from '../components/tabs/HomeTab.vue'
import SellTab from '../components/tabs/SellTab.vue'
import SellTabb from '../components/tabs/SellTabb.vue'
import { useI18n } from 'vue-i18n'
import InfomTab from '../components/tabs/InfomTab.vue'
import HistoryTab from '../components/tabs/HistoryTab.vue'
import { useStore } from "vuex";
export default defineComponent({
  components: { 
    PersonalPage,
    HomeTab,
    SellTab,
    InfomTab,
    HistoryTab,
    SellTabb
    },
  name: "HomePage",
  setup() {
    const store = useStore();
    const {t} = useI18n();
      return {
        store,
        t
      }
  },
  props: {

  },
  data(){
      return{
          testName: '请登录',
          activeIndex: '1',
          buttonTime: 10,
          buttonText: this.t('login.huoqu'),
          buttonState: false,
          url:'../assets/logo.png',
          // avatar_url: 'circleUrl',
          userName: '请登录',
          userTel: '',
          dialogTableVisible: false,
          value:'',
          userTelInput:'',
          textNum:'',
          returnCode: '',
          returnMessage: '',
          currentTab: this.store.state.pageState,
          currentLogin: false,
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
      }
  },
  methods: {
    test(){
      // console.log($i18n.locale)
      },

    
      avatar_upload:function(data){
        this.avatar_url = data
      },
      logout(){
        this.dialogTableVisible = true;
        this.currentLogin=false;
        this.store.state.userName="请登录";
      },
  
      tabChange(tabItem){
        this.store.commit('setPageState', tabItem)
        this.store.commit('setWithData',false)
        console.log("点了")
        console.log(this.store.state.pageState)
        // this.store.commit('setTabState', 'SelfTab')
        // this.store.state.pageState = tabItem
        // this.currentTab = tabItem
      },


      handleSelect(key, keyPath){
        console.log(key, keyPath)  
      },
     
// 返回验证码验证
      returnLogin(){
        var FormData = require('form-data');
        var data = new FormData();
        data.append('type','phone')
        data.append('phone', this.userTelInput);
        data.append('code',this.textNum);
        const that = this;

        var config = {
          method: 'post',
          url: 'api/login',
          data : data
        };

        axios(config).then(function (response) {
          that.store.commit('setUserName', response.data.data.username)
          that.store.commit('setUserPic', response.data.data.photo)       
          that.store.commit('setUserTel', response.data.data.phone)
          that.store.commit('setProvince', response.data.data.province)
          that.store.commit('setCity', response.data.data.city)     
          that.currentLogin = true;
          console.log(that.userName)
          console.log(response);
          // that.userTelInput = ''
          that.textNum = ''
        })
        .catch(function (error) {
          console.log(error);
        });
        that.dialogTableVisible = false
        ElMessage({
              message: '登录成功！',
              type: 'success',
          })
      },
// 返回注册手机号
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
        that.store.commit('setResponses', response)
        that.returnCode = response.data.code;
        that.returnMessage = response.data.msg;
        console.log(that.returnCode)
      if (that.returnCode == 200){
          that.buttonState = true;
          ElMessage({
                message: that.returnMessage,
                type: 'success',
          });
          let interval = window.setInterval(function() {
            that.buttonText = that.t('login.chongfa',{time: that.buttonTime})
            // that.buttonText = "(" + that.buttonTime + '秒)后重新发送';
						--that.buttonTime;
						if(that.buttonTime < 0) {
							that.buttonText = "重新发送";
							that.buttonTime = 10;
							that.buttonState = false;
							window.clearInterval(interval);
            }
          },1000)
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

      getUserInfo(){
        const that = this;
      axios
      .get('/api/get_user_info')

      .then(function(response){
          console.log(response)
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
    });
      },
      
          },
        });


        



</script>
<style scoped>
.p{
  height: 15px;
  font-size: 13px;
  color: rgb(71, 71, 71);
  text-align: left;
}
.p2{
  text-align: center;
  color:grey;
  width: 100%;
  font-size: 13px;
}
.el-col{
  text-align: center;
  color:darkgray;
}
.el-alert {
  
  height: 30px;
}
.el-alert:first-child {
  margin: 0;
}
/* .el-main{
  /* height: 800px;
} */
.el-menu--horizontal {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: solid 0px var(--el-menu-border-color);
    border-right: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
</style>

