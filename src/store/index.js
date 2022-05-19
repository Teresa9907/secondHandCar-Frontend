import { createStore } from "vuex";
import { reactive, ref } from 'vue'
import History from '../assets/json/history'
import { stat } from "fs";

//创建存储对象
export default createStore({
    
  // 需要存储的值都放在这里面
  state() {
    
    return {
      // 登录状态
      carObject:{
        carBand:'丰田',
        carBodyType:'轿车',
        carBurnType:'汽油',
        carDangType:'自动挡',
        ticketTime: Date,
        runKiloM:66,
      },
      create_id: '128',
      his2info: Object,
      historys: History.history,
      responses: Object,
      loginState: false,
      userName: '请登录',
      userTel: '',
      province: '',
      city: '',
      userPicUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zbzcml.net%2Farticle%2Feccd0216244e4ff8b3c49fc7060c0d5d.html&psig=AOvVaw0lRc76_xUebKvYzSTpRwMb&ust=1651482621036000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDd6qn6vfcCFQAAAAAdAAAAABAP',
      historydata : reactive({
        historyReport: History.history,
      }),
      pageState: 'HomeTab',
      tabState: 'SelfTab',
      chartData: [9.15, 7.93, 4.11, 1.89, 1.4],
      //需不需要带值 不需要：fasle 需要：true
      withData: false,
      count: 0,	// 在视图中通过$store.state.count来获取
    };
  },
  // 在其他视图中通过 $store.commit('setState', 10) 使用，用于修改stor存的值
  mutations: {
    setcreate_id(state,id){
      state.create_id=id
    },
    setWithData(state, boo){
      state.withData=boo
    },
    setHis2info(state,his2info){
      state.his2info=his2info
    },
    setHistorys(state,historys){
      state.historys=Array.from(historys)
    },
    setCarObject(state,carObject){
      state.carObject=carObject
    },
    setResponses(state,responses){
      state.responses=responses
    },
    setPageState(state,pageState){
      state.pageState=pageState;
    },
    setTabState(state,tabState){
      state.tabState=tabState;
    },
    setState(state, userName) {
      state.userName=userName;
    },
    setUserName(state, userName){
      state.userName = userName;
    },
    setUserPic(state, userPicUrl){
      state.userPicUrl = userPicUrl;
    },
    setUserTel(state, userTel){
      state.userTel = userTel;
    },
  },
  // 相当于组件的计算属性 通过 $store.getters.doubleCount 获取计算后的值
  getters: {
    
    doubleCount(state) {
    
      return state.count * 2;
    },
  },
  // 异步任务 不会改变state 通过 $store.dispath('doubleCount') 使用
  actions: {
    
    doubleCount(context) {
    
      context.commit("doubleCount");
    },
  },
  // store的下级store 方便大型项目复杂数据管理，这里面相当于可以在放置一个和外面这些一样的模块
  modules: {
    },
});