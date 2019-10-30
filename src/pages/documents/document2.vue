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
                <el-table-column prop="rate" label="评分">
                    <template slot-scope="scope">
                        <el-rate v-model="scope.row.rate" disabled text-color="#ff9900"></el-rate>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center" width="230">
                    <template>
                        <el-button type="primary" size="mini" @click="dialogVisible.editForm = true">编辑</el-button>
                        <el-button type="success" size="mini">发布</el-button>
                        <el-button type="danger" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog title="编辑" :visible.sync="dialogVisible.editForm">
            <el-form :model="form">
                <el-form-item label="活动名称" label-width="100">
                    <el-input v-model="editForm.name" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" label-width="100">
                    <el-select v-model="editForm.area" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible.editForm = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible.editForm = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import bookData from './data.js'
export default {
    name: 'document2',
    data() {
        return {
            dialogVisible:{
                editForm: false
            },
            tableData: bookData,//表格数据
            form: {//搜索的表单
                title: '',
                type: '',
                author: '',
                date: []
            },
            editForm: {
                name: '',
                area: ''
            },
            options: {//选择器选项
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
