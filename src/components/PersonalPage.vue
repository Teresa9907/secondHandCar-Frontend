<template>
    <div class="common-layout">

    <el-container>
      <el-aside>
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            :collapse="isCollapse"
            text-color="#fff"
            background-color="transparent"
            active-text-color="#ffd04b"
            @select="handleSelect">
                <el-menu-item index="burg">
                  <img  @click="changeIsCollapse" style="padding:" src="../assets/menu_hamburger.png" width="30" height="30">
                </el-menu-item>
                <el-sub-menu index="1" class = "submenu">
                  <template #title>
                    <img src="../assets/setting.png" width="30" height="30">
                    <span style="margin-left: 30px">{{t('personalpage.zhanghushezhi')}}</span>
                  </template>
                 <el-menu-item index="1-1" @click="changeTab('SelfTab')" style="margin-left: 40px">{{t('personalpage.zhanghuxinxi')}}</el-menu-item>
                 <!-- <el-menu-item index="2-2">item two</el-menu-item> -->
                 </el-sub-menu>

                <el-sub-menu index="2" class = "submenu">
                <template #title>
                    <img src="../assets/edit.png" width="30" height="30">
                    <span style="margin-left: 30px">{{t('personalpage.lishi')}}</span>
                  </template>
                 <el-menu-item index="2-1" @click="changeTabH('HistoryTab')" style="margin-left: 40px">{{t('personalpage.guzhi')}}</el-menu-item>
                 <el-menu-item index="2-2" @click="changeTabR('ReconTab')" style="margin-left: 40px">{{t('personalpage.jianyi')}}</el-menu-item>

                 </el-sub-menu>
                 
            </el-menu>
      </el-aside>
    <el-container>
        <el-main>
          <template v-if="this.store.state.tabState === 'SelfTab'">
            <self-tab v-bind:userName="userNamePP" v-bind:userTel="userTelPP" :avatar_url="avatar_urlPP" v-on:listenToChildEvent="showMsgFromChild" v-on:listenToImgFlag="emitToHP"></self-tab>
          </template>
          <template v-else-if="this.store.state.tabState === 'HistoryTab'">
            <history-tab></history-tab>
          </template>
          <template v-else-if="this.store.state.tabState === 'InfomTab'">
            <infom-tab></infom-tab>
          </template>
          <template v-else-if="this.store.state.tabState === 'ReconTab'">
            <recon-tab></recon-tab>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent,onBeforeMount} from "vue";
import SelfTab from "./tabs/SelfTab.vue";
import HistoryTab from "./tabs/HistoryTab.vue";
import InfomTab from "./tabs/InfomTab.vue";
import BlankTab from "./tabs/BlankTab.vue"
import ReconTab from "./tabs/ReconTab.vue"
import axios, { Axios } from 'axios';
import { useStore } from "vuex";
import { useI18n } from 'vue-i18n'
export default defineComponent({
  components: { 
    SelfTab,
    HistoryTab,
    InfomTab,
    BlankTab,
    ReconTab
 },
  name: "PersonalPage",
  props:{
      userTel: {
        type: String,
        default: "1P"
      },
      userName: {
        type: String,
        default: "12P"
      },
      avatar_url:{
        default: "CircleUrl"
      }
  },
  setup(props) {
    console.log(props.avatar_url)
    const store = useStore();
    store.commit('setTabState', 'SelfTab')
    const {t} = useI18n();
    return{
      store,
      t
    }

  },
  data(props){
    return{
      iconSetting: '../assets/logo.png',
      activeIndex2: '1-1',
      testdataPP:'ppp',
      userNamePP:props.userName,
      userTelPP: props.userTel,
      avatar_urlPP: props.avatar_url,
      currentTab: this.store.state.tabState,
      isCollapse: false,

    }
  },
  watch:{
    userNamePP(newValue,oldValue){
      console.log("username变了", newValue, oldValue);
      this.$emit("listenToPP", this.userNamePP)
    }
  },
  methods: {
    changeTab(tabN){
      this.store.commit('setTabState', tabN)
      // this.store.state.tabState = tabN
    },
    changeTabH(tabN){
      this.store.commit('setTabState', tabN)
      // this.store.state.tabState = tabN
// 历史估值报告
     },
     changeTabR(tabN){
      this.store.commit('setTabState', tabN)
      console.log(this.store.state.tabState)
     },
    changeIsCollapse(){
      if(this.isCollapse == false){
        this.isCollapse = true
      }
      else{
        this.isCollapse = false
      }
      console.log(this.isCollapse)
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
        console.log(key)
        if(key != 'burg'){
          this.isCollapse = true
        }
      },
    eimtToHP:function(data){

    },
    showMsgFromChild:function(data){
      console.log("测试复合传参")
      this.userNamePP = data[0]
      console.log(this.userNamePP)
      console.log("测试完毕")

      
    }
      
  },
});

</script>

<style scoped>
.el-header{
    background-color: #ffffff;
}
.el-main{
  height: 1000px;
}
</style>
