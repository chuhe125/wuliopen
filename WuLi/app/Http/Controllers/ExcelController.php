<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Rap2hpoutre\FastExcel\FastExcel;


class ExcelController extends Controller
{
    public function export(Request $request)
    {
        $student_class=$request['student_class'];

        $d=Student::select('student_name as 姓名','student_num as 学号','student_class as 专业',
            'experiment_name as 实验名称','grade as 总分','grade_xp as 选择判断分')
            ->where('student_class','=',$student_class)->get();

        return (new FastExcel($d))->download($student_class.'物理实验成绩管理表'.'.xlsx');

    }
}
