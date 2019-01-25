<template>
<div>
 <!--列表-->
		<el-table :data="items" highlight-current-row v-loading="listLoading" v-show="kk" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="100%">
			</el-table-column>
			<el-table-column type="index" width="30">
			</el-table-column>
			<el-table-column prop="title_news" label="姓名" width="600" sortable>
			</el-table-column>

			</el-table-column>
			<el-table-column prop="time_news" label="时间" width="220" sortable>
			</el-table-column>

			<el-table-column label="操作" width="150">
					<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
					<!-- <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button> -->
				</template>
			</el-table-column>
		</el-table>
         
        <div v-if="mm" >
            <el-button type="primary" icon="el-icon-arrow-left" style="float:right;" @click="fh()">返回</el-button>
             <h1>{{news.title_news}}</h1>
             <h3>{{news.time_news}}</h3>
             <div v-html="news.info_news">{{news.info_news}}</div>
           
          
        </div>






   </div>
</template>

<script>
export default {
  name: 'New',
  data() {
      return {
       items:'',
       kk:true,
       news:'',
       mm:false
      }
    },
     created(){
        let postData = this.$qs.stringify({
			   username: '丁远志',
           userpwd: 15032323823,
           userclass:40,
           type:2
			});
			// console.log(postData)
           this.$axios({
              method: 'post',
               url:'http://www.qhdlink-student.top/student/newsa.php',
             data:postData
             }).then((res)=>{
  
                   let _news=[];
        for(const k1 in res.data){
             _news.push(res.data[k1])
        }
       console.log(_news)



          //   console.log(res);
          this.items = _news
          
        })
        .catch(error=>{
            console.log(error);
        })


    },
methods : {
handleEdit: function (index, row) {
			
		let postData = this.$qs.stringify({
           username: '丁远志',
           userpwd: 15032323823,
           userclass:40,
           type:2,
            m: row.id_news

			});
			console.log(postData)	
           this.$axios({
              method: 'post',
               url:'http://www.qhdlink-student.top/student/newsinfo.php',
             data:postData
             }).then((res)=>{
               console.log(res)



               
               this.news=res.data[0]
               console.log(this.news)
                
                this.kk=false;
                this.mm=true;






             })
    },
    fh(){
       this.kk=true;
                this.mm=false;
    }
}
    
  

}
</script>


<style scoped>

</style>
