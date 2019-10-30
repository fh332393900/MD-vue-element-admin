<template>
    <div class="table">
        <div class="table-head">
            <el-input class="table-head-item" v-model="form.title" placeholder="标题"></el-input>
            <el-select class="table-head-item" v-model="form.type">
                <el-option v-for="item in options.type" :key="item.value" :value="item.label"></el-option>
            </el-select>
            <el-select class="table-head-item" v-model="form.author">
                <el-option v-for="item in options.type" :key="item.value" :value="item.label"></el-option>
            </el-select>
            <el-date-picker
                class="table-head-item"
                v-model="form.date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
            <el-button class="table-head-item" icon="el-icon-search" type="primary">搜索</el-button>
            <el-button class="table-head-item" icon="el-icon-download" type="primary">导出</el-button>
        </div>
        <div class="table-content">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
                <el-table-column prop="title" label="标题"> </el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column prop="public" label="出版商"></el-table-column>
                <el-table-column prop="price" label="售价" width="90" align="center"></el-table-column>
                <el-table-column prop="phone" label="电话"></el-table-column>
                <el-table-column label="操作" align="center" width="230">
                    <template>
                        <el-button type="primary" size="mini">编辑</el-button>
                        <el-button type="success" size="mini">发布</el-button>
                        <el-button type="danger" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import bookData from './data.js'
export default {
    name: 'documents',
    data() {
        return {
            //表格数据
            tableData: bookData,
            //表单
            form: {
                title: '',
                type: '',
                author: '',
                date: []
            },
            //选择器选项
            options: {
                type: [{
                    value: 0,
                    label: '英语'
                },{
                    value: 1,
                    label: '数学'
                }]
            }
        }
    },
    created() { 
    }
}
</script>
<style lang="scss" scoped>
    .table {
        padding: 20px;
        &-head {
            .el-input {
                width: 200px;
            }
            .el-select {
                width: 140px;
            }
            &-item {
                margin-bottom: 10px;
            }
        }
        &-content {
            margin-top: 20px; 
        }
    }
</style>
