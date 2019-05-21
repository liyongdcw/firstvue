<template>
  <div>
    <el-dialog title="创建需求" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>{{row}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible:false
    };
  },
  props:{
    row:{
        type:Object,
        required:true
    }
  },
  methods: {
    open(){
        this.dialogVisible = true
    },
    editData(){
        this.dialogVisible = true
        // this.tempData = row
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

