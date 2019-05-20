<template>
<div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="province" label="省份" width="120"></el-table-column>
    <el-table-column prop="city" label="市区" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" width="300"></el-table-column>
    <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="editRow(scope.row)"
          type="text"
          icon="el-icon-edit"
          size="small"
        ></el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          icon="el-icon-delete"
          size="small"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
  title="创建需求"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <div>
      {{tempData}}
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  methods: {
    editRow(row) {
      this.dialogVisible = true;
      console.log(row)
      this.tempData = row
      console.log(this.tempData)
    },
    deleteRow(index, rows) {
      this.$confirm("确认删除？")
        .then(_ => {
          rows.splice(index, 1);
        })
        .catch(_ => {});
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },

  data() {
    return {
      tempData:{
          date: "",
          name: "",
          province: "",
          city: "",
          address: "",
          zip: ""
      },
      dialogVisible: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>