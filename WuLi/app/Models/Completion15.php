<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Completion15 extends Model
{
    protected $table = "completion15";
    public $timestamps = true;
    protected $primaryKey = "id";
    protected $guarded = [];

    public static function establish(
        $l1,
        $l2,
        $l3,
        $l4,
        $l5,
        $d1,
        $d2,
        $d3,
        $d4,
        $d5,
        $t1,
        $t2,
        $t3,
        $t4,
        $t5,
        $ld1,
        $ld2,
        $ld3,
        $ld4,
        $ld5,
        $l6,
        $tt1,
        $tt2,
        $tt3,
        $tt4,
        $tt5,
        $t6,
        $g,
        $n1,
        $n2,
        $n3,
        $n4,
        $n5,
        $n6,
        $y1,
        $y2,
        $xz1,
        $xz2,
        $student_id
    ){
        try {
            $res1 = Completion15::create(
                [
                    'l1'=>  $l1,
                    'l2'=>  $l2,
                    'l3'=>  $l3,
                    'l4'=>  $l4,
                    'l5'=>  $l5,
                    'd1'=>  $d1,
                    'd2'=>  $d2,
                    'd3'=>  $d3,
                    'd4'=>  $d4,
                    'd5'=>  $d5,
                    't1'=>  $t1,
                    't2'=>  $t2,
                    't3'=>  $t3,
                    't4'=>  $t4,
                    't5'=>  $t5,
                    'ld1'=>$ld1,
                    'ld2'=>$ld2,
                    'ld3'=>$ld3,
                    'ld4'=>$ld4,
                    'ld5'=>$ld5,
                    'l6'=>$l6,
                    'tt1'=>$tt1,
                    'tt2'=>$tt2,
                    'tt3'=>$tt3,
                    'tt4'=>$tt4,
                    'tt5'=>$tt5,
                    't6'=>$t6,
                    'g'=>   $g,
                    'n1'=>  $n1,
                    'n2'=>  $n2,
                    'n3'=>  $n3,
                    'n4'=>  $n4,
                    'n5'=>  $n5,
                    'n6'=>  $n6,
                    'y1'=>  $y1,
                    'y2'=>  $y2,
                    'xz1'=>  $xz1,
                    'xz2'=>  $xz2,
                    'student_id' => $student_id

                ]
            );
            return $res1;
        } catch (\Exception $e)
        {
            logError('搜索错误', [$e->getMessage()]);
            return false;
        }
    }






    public static function show15($student_id)
    {
        try {
            $res = self::
            join('student', 'student.id', '=', 'completion15.student_id')
                ->where('student.id', '=', $student_id)
                ->select(
                    'student.student_name',
                    'student.student_level',
                    'student.student_spec',
                    'student.student_year',
                    'student.student_class',
                    'student.student_num',
                    'student.experiment_name',
                    'student.course_name',
                    'student.student_date',
                    'student.student_teacher',

                    'student.grade',
                    'student.grade_xp',

                    'completion15.l1',
                    'completion15.l2',
                    'completion15.l3',
                    'completion15.l4',
                    'completion15.l5',
                    'completion15.d1',
                    'completion15.d2',
                    'completion15.d3',
                    'completion15.d4',
                    'completion15.d5',
                    'completion15.t1',
                    'completion15.t2',
                    'completion15.t3',
                    'completion15.t4',
                    'completion15.t5',
                    'completion15.ld1',
                    'completion15.ld2',
                    'completion15.ld3',
                    'completion15.ld4',
                    'completion15.ld5',
                    'completion15.l6',
                    'completion15.tt1',
                    'completion15.tt2',
                    'completion15.tt3',
                    'completion15.tt4',
                    'completion15.tt5',
                    'completion15.t6',
                    'completion15.g',
                    'completion15.n1',
                    'completion15.n2',
                    'completion15.n3',
                    'completion15.n4',
                    'completion15.n5',
                    'completion15.n6',
                    'completion15.y1',
                    'completion15.y2',
                    'completion15.xz1',
                    'completion15.xz2'
                )->get();

            return $res ?
                $res :
                false;
        } catch (\Exception $e) {
            logError('搜索错误', [$e->getMessage()]);
            return false;
        }

        echo 1;
    }






}
