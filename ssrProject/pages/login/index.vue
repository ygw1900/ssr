<template>
	<div class="login">
		<div class="loginBox">
			<el-form :label-position="labelPosition" label-width="68px" :model="formLabelAlign">
				<el-form-item label="活动名称">
					<el-input v-model="formLabelAlign.name" size="small"></el-input>
				</el-form-item>
				<el-form-item label="活动区域">
					<el-input v-model="formLabelAlign.pwd" type="password" size="small"></el-input>
				</el-form-item>
				<el-form-item label="" class="passOp">
					<el-checkbox label="记住密码" name="type"></el-checkbox>
					<a href="javascript:;">忘记密码?</a>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm2')" size="small">提交</el-button>
					<el-button @click="resetForm('ruleForm2')" size="small">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          pwd: ''
        }
      };
		},
		asyncData(context){
			console.log(context)
			return{
				
			}
		},
		methods: {
			async submitForm(){
				const res = await axios.post('http://183.62.12.15/haoappAdmin//Member/signIn', {
					phone: this.formLabelAlign.name,
					pwd: this.formLabelAlign.pwd
				})
				console.log(res)
			},
			resetForm(){
				this.formLabelAlign = {
          name: '',
          pwd: ''
        }
			}
		}
	}
</script>

<style scoped lang="less">
	.loginBox{
		width: 400px;
		padding: 50px 30px 28px;
		margin: 100px auto;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		.passOp{
			a{
				color: #409eff;
				float: right;
			}
		}
	}
</style>