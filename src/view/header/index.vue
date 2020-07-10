<template>
  <el-row :gutter="0">
    <el-col :span="6">
      <div class="grid-content bg-purple logoContain">
        <img src="./img/13ingoLogo.png" alt="Logo" />
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <!-- <input type="text" placeholder="请输入内容" v-model="search" class="search"/>
        <el-button icon="el-icon-search" circle></el-button>-->
        <div style="heigth:30px;borderRadius:50px;">
          <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">秘密</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.el-row
  margin-bottom 20px
  &:last-child
    margin-bottom 0
.el-col
  border-radius 4px
.bg-purple
  background rgba(255, 255, 255, 0)
.grid-content
  min-height 60px
  line-height 60px
  text-align center
.row-bg
  padding 10px 0
  background-color #f9fafc
.search
  height 30px
  width 450px
  border-radius 15px
.logoContain
  width 100%
  display flex
  flex-direction row
  justify-content space-evenly
  img
    width 50px
</style>