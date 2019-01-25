<template>
<div>
    <div v-for="item in banner" :key="item.id_banner">
           <!-- <div >{{item.path_banner}}</div> -->
           <img :src="'http://www.qhdlink-student.top/'+item.path_banner" alt="" style="width:260px;float:left;">
    </div>
    <div class="kk">
    <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</div>
</div>


</template>

<script>
export default {
  name: 'News',
  data() {
      return {
        banner:'',
           fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, ]
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
               url:'http://www.qhdlink-student.top/student/banner.php',
             data:postData
             }).then((res)=>{
               console.log(res)

               
                   let _news=[];
        for(const k1 in res.data){
             _news.push(res.data[k1])
        }
       console.log(_news)
             this.banner=_news
             console.log(this.banner)

             })

     },


        methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}

</script>


<style scoped>
.kk{
  padding-top: 200px;
}
</style>
