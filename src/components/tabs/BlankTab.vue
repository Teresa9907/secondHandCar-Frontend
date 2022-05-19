<template>
    <div></div>
           

</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from "vuex";


export default defineComponent({
    name: "BlankTab",
    setup() {
        const store = useStore();
        // onMounted(() => { 
        //     // this.store.commit('setTabState', 'HistoryTab')
        // });    
        return{
            store
        }   
    },
    data(){
        return{
                     
        }
    },
    methods:{

    },
})
</script>

