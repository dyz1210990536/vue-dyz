<template>
  <div class="qqw">
 		
<el-form :model="ruleForm" ref="ruleForm" label-width="100px" id="ddd" class="demo-ruleForm" >
	        <h1>会员登录</h1><span style="color:red;">{{ruleForm.mmm}}</span>
  <el-form-item label="账号" prop="username">
    <el-input type="username" v-model="ruleForm.username" placeholder="请输入手机号"></el-input>
  </el-form-item>

    <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
  </el-form-item>
   <el-form-item label="班级" prop="class">
    <el-input type="password" v-model="ruleForm.class" placeholder="请输入班级"></el-input>
  </el-form-item>

  <el-form-item >
    <el-button type="primary" @click="addSubmit">登陆</el-button>
  
  </el-form-item>
  
</el-form>
        <!-- <router-link to="/Home">Go to Foo</router-link> -->
  </div>


  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     
        ruleForm: {
		  username: '',
		  password: '',  
		   class:'',
       mmm:''
		  },
    }
  },


methods: {

  addSubmit:function(){
                  
		  let postData = this.$qs.stringify({
			         username: this.ruleForm.username,
               userpwd: this.ruleForm.password,
               userclass: this.ruleForm.class,
               type: 2
			});
			console.log(postData)
           this.$axios({
              method: 'post',
               url:'http://www.qhdlink-student.top/student/login.php',
             data:postData
             }).then((res)=>{
				        console.log(res)
		      if(res.data=='ok'){
                //  alert('登陆成功')
                   this.ruleForm.mmm='登陆成功'
                 
               setTimeout(function(){
								 this.$router.push({ path: '/Home' });
							}.bind(this),1000)
						}else{
              this.ruleForm.mmm='账号或密码错误'
            }
						
						
             });

		  },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.qqw{
	
	width:fit-content;
	margin: 0 auto;
	 text-align: center;
	 margin-top: 80px;
	height: 660px;
	margin-bottom: 20px;	
  
}

</style>
