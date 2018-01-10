import util from "./util";

export default function (options) {
  var formVue = {
    data() {
      return Object.assign({

      }, options.data || {});
    },
    components: Object.assign({}, options.components || {}),
    created() {},
    methods: Object.assign({
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.postForm(formName);
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      postForm(formName) {
        console.log(JSON.stringify(this[formName]))
        util.post({
          type:'form',
          url:options.save_url,
          data:this[formName],
          success:function(res){
            alert(JSON.stringify(res))
          },
          error(res){
            alert(res)
          }
        })
      }
    }, options.methods || {})
  };

  return formVue;
}
