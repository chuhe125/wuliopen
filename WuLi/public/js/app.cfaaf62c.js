(function(e){function t(t){for(var n,s,o=t[0],l=t[1],p=t[2],c=0,d=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,p||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s={},o=s,l=a("2877"),p=Object(l["a"])(o,r,i,!1,null,null,null),u=p.exports,c=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login_container"},[a("div",{staticClass:"login_box"},[a("p",{staticClass:"title"},[e._v("物理实验教师端")]),a("el-form",{staticClass:"login_form"},[a("el-form-item",[a("el-input",{attrs:{"prefix-icon":"el-icon-user-solid"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",[a("el-input",{attrs:{"prefix-icon":"el-icon-search",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("登录")])],1)],1)],1)])},m=[],f=(a("d3b7"),{data:function(){return{form:{username:"",password:""}}},methods:{login:function(){var e=this;fetch("http://test.isekko.cn/api/user/login",{method:"post",body:JSON.stringify({username:this.form.username,password:this.form.password}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),200==t.code?(window.sessionStorage.setItem("token",t.data.token),e.$message.success("登录成功"),e.$router.push("/home")):e.$message.error(t.msg)}))}}}),_=f,h=(a("9ce0"),Object(l["a"])(_,d,m,!1,null,null,null)),b=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("el-container",{staticClass:"home-container"},[a("el-header",[a("div",{staticClass:"header"},[a("img",{attrs:{src:"https://www.nsu.edu.cn/img/logo.png",alt:""}})])]),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("el-menu",{attrs:{"background-color":"#40424b","default-active":e.$route.path,router:""}},[a("el-menu-item",{attrs:{index:"/result"}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("成绩导出")])])],1)],1),a("el-main",[a("router-view")],1)],1)],1)],1)},x=[],v={},w=v,y=(a("7df3"),Object(l["a"])(w,g,x,!1,null,null,null)),k=y.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"block"},[a("div",{staticClass:"nav"},[a("el-cascader",{attrs:{options:e.optionss,placeholder:"请选择年级"},model:{value:e.form.student_year,callback:function(t){e.$set(e.form,"student_year",t)},expression:"form.student_year"}}),a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择班级"},model:{value:e.form.student_class,callback:function(t){e.$set(e.form,"student_class",t)},expression:"form.student_class"}},e._l(e.options2,(function(e){return a("el-option",{key:e.class,attrs:{label:e.class,value:e.class}})})),1),a("el-cascader",{attrs:{options:e.options1,placeholder:"请选择实验名称"},model:{value:e.form.experiment_name,callback:function(t){e.$set(e.form,"experiment_name",t)},expression:"form.experiment_name"}}),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(t){return e.chaxun()}}},[e._v("查询")])],1),a("el-table",{staticClass:"tablr",staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"student_class",label:"班级"}}),a("el-table-column",{attrs:{prop:"student_num",label:"学号"}}),a("el-table-column",{attrs:{prop:"student_name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"experiment_name",label:"实验"}}),a("el-table-column",{attrs:{prop:"grade",label:"分数",width:"60",align:"center"}}),a("el-table-column",{attrs:{prop:"postate",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.postate?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.dialog(t.row.id)}}},[e._v(" 批阅 ")]):e._e(),"0"==t.row.postate&&2==t.row.state?a("el-tag",{attrs:{type:"success"}},[e._v(" 已批阅 ")]):e._e(),"2"==t.row.postate&&2==t.row.state?a("el-tag",{attrs:{type:"success"}},[e._v(" 已批阅 ")]):e._e(),1==t.row.state?a("el-tag",{attrs:{type:"danger"}},[e._v("未完成")]):e._e()]}}])}),a("el-table-column",{attrs:{align:"center","render-header":e.renderHeader},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.state?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.daochu(t.row.id)}}},[e._v(" 导出 ")]):e._e(),1==t.row.state?a("el-tag",{attrs:{type:"danger"}},[e._v("未完成")]):e._e()]}}])})],1),a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"审批",visible:e.dialogVisible,width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"toutou"},[a("div",{staticClass:"photo"},[this.form.p1&&this.form.p2?a("p",[e._v("表头测量数据截图")]):e._e(),this.form.p1&&""==this.form.p2?a("p",[e._v("X-曲线：")]):e._e(),a("img",{staticClass:"photos",attrs:{src:this.form.p1}})]),a("el-input",{staticClass:"mark_input",attrs:{placeholder:"请输入分数"},model:{value:e.form.fraction_p1,callback:function(t){e.$set(e.form,"fraction_p1",t)},expression:"form.fraction_p1"}}),""!=this.form.p2?a("div",{staticClass:"tupian2"},[a("div",{staticClass:"photo1"},[a("p",[e._v("实验电路设计截图")]),a("img",{staticClass:"photos",attrs:{src:this.form.p2}})]),a("el-input",{staticClass:"mark_input",attrs:{placeholder:"请输入分数"},model:{value:e.form.fraction_p2,callback:function(t){e.$set(e.form,"fraction_p2",t)},expression:"form.fraction_p2"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.dialogs}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.dialogs1}},[e._v("确 定")])],1)])],1)])],1)},C=[],$=a("b85c"),j=a("1da1"),O=(a("3ca3"),a("ddb0"),a("96cf"),a("c4e3")),S=a.n(O),R=a("21a6"),z=a.n(R),P={data:function(){return{currentPage:1,pageSize:10,dialogVisible:!1,student_id:"",tutu:!1,form:{fraction_p1:"",fraction_p2:"",p1:"",p2:"",student_num:"",student_year:"",student_class:"",experiment_name:""},options2:[],optionss:[{value:"2020级",label:"2020级"}],options1:[{value:"电表改装设计实验",label:"电表改装设计实验"},{value:"万用表改装设计实验",label:"万用表改装设计实验"},{value:"箱式直流电桥测量电阻",label:"箱式直流电桥测量电阻"},{value:"大学物理实验一报告",label:"大学物理实验一报告"},{value:"单摆法测重力加速度",label:"单摆法测重力加速度"},{value:"欧姆表的改装设计",label:"欧姆表的改装设计"},{value:"自组式直流电桥测量电阻值",label:"自组式直流电桥测量电阻值"},{value:"示波器的调整与使用",label:"示波器的调整与使用"},{value:"霍尔效应测量磁感应强度",label:"霍尔效应测量磁感应强度"}],tableData:[]}},created:function(){this.getClass()},methods:{getClass:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/api/menu/getclass");case 2:a=t.sent,n=a.data,e.options2=n.data;case 5:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},renderHeader:function(e){var t=this;return e("div",[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(){return t.exportExcel()}}},["批量导出已完成实验"])])},exportExcel:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$message.success("正在批量下载，请勿操作页面（此过程耗时大约两分钟）"),a=e.tableData.length,n=[],r={},i=0;case 5:if(!(i<a)){t.next=19;break}if(2!=e.tableData[i].postate||2!=e.tableData[i].state){t.next=10;break}"欧姆表的改装设计"==e.form.experiment_name?(r={fileUrl:"http://180.76.111.200/api/experiment6/pdf6?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"霍尔效应测量磁感应强度"==e.form.experiment_name&&(r={fileUrl:"http://180.76.111.200/api/experiment9/pdf9?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)),t.next=16;break;case 10:if(1!=e.tableData[i].postate){t.next=15;break}return e.$message.error("请先批阅再导出！"),t.abrupt("return");case 15:0==e.tableData[i].postate&&2==e.tableData[i].state&&("劈尖测细丝实验"==e.form.experiment_name?(r={fileUrl:"http://120.55.71.155/api/experiment/pdf?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"电表改装设计实验"==e.form.experiment_name&&(r={fileUrl:"http://120.55.71.155/api/experiment/pdf8?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)),"箱式直流电桥测量电阻"==e.form.experiment_name?(r={fileUrl:"http://180.76.111.200/api/bridge/pdf?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"大学物理实验一报告"==e.form.experiment_name?(r={fileUrl:"http://180.76.111.200/api/experiment1/pdf1?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"单摆法测重力加速度"==e.form.experiment_name?(r={fileUrl:"http://180.76.111.200/api/pendulum/pdf3?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"自组式直流电桥测量电阻值"==e.form.experiment_name?(r={fileUrl:"http://180.76.111.200/api/bridge1/pdf5?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"示波器的调整与使用"==e.form.experiment_name?(r={fileUrl:"http://180.76.111.200/api/experiment14/pdf14?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)):"万用表改装设计实验"==e.form.experiment_name&&(r={fileUrl:"http://180.76.111.200/api/experiment11/pdf11?student_id="+e.tableData[i].id,renameFileName:e.tableData[i].student_class+"-"+e.tableData[i].student_name+"-"+e.tableData[i].experiment_name+".pdf"},n.push(r)));case 16:i++,t.next=5;break;case 19:e.filesToRar(n,"file"),setTimeout((function(){e.arrID=""}),2e3);case 21:case"end":return t.stop()}}),t)})))()},chaxun:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,e.$http.get("/api/admin/home?student_year="+e.form.student_year+"&&student_class="+e.form.student_class+"&&experiment_name="+e.form.experiment_name);case 3:n=t.sent,r=n.data,200==r.code?(e.$message.success("查询成功"),a.tableData=r.data):e.$message.error(r.msg);case 6:case"end":return t.stop()}}),t)})))()},dialog:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){var n,r,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.dialogVisible=!0,t.student_id=e,"霍尔效应测量磁感应强度"!=t.form.experiment_name){a.next=8;break}return a.next=5,t.$http.get("api/experiment9/returnphoto?student_id="+e);case 5:n=a.sent,r=n.data,200==r.code&&(t.form.p1=r.data[0].tu);case 8:if(console.log(e),"欧姆表的改装设计"!=t.form.experiment_name){a.next=16;break}return a.next=12,t.$http.post("/api/experiment6/completion6out",{student_id:e});case 12:i=a.sent,s=i.data,200==s.code&&(t.form.p1=s.data.p1,t.form.p2=s.data.p2),100==s.code&&(t.dialogVisible=!1,t.$message.error("查询失败"));case 16:case"end":return a.stop()}}),a)})))()},dialogs:function(){this.dialogVisible=!1},dialogs1:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var a,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("欧姆表的改装设计"!=e.form.experiment_name){t.next=15;break}if(console.log(123),!(""!=e.form.fraction_p1&&e.form.fraction_p1>=0&&e.form.fraction_p1<=5&&""!=e.form.fraction_p2&&e.form.fraction_p2>=0&&e.form.fraction_p2<=5)){t.next=14;break}return console.log(456),console.log(e.form.fraction_p1),console.log(e.form.fraction_p2),t.next=8,e.$http.post("/api/experiment6/completion6photo?student_id="+e.student_id+"&&fraction_p1="+e.form.fraction_p1+"&&fraction_p2="+e.form.fraction_p2);case 8:a=t.sent,n=a.data,200==n.code&&(console.log(n),e.chaxun()),e.dialogVisible=!1,t.next=15;break;case 14:e.$message({type:"error",message:"请输入分数"});case 15:if("霍尔效应测量磁感应强度"!=e.form.experiment_name){t.next=26;break}if(!(""!=e.form.fraction_p1&&e.form.fraction_p1>=0&&e.form.fraction_p1<=20)){t.next=25;break}return t.next=19,e.$http.post("/api/experiment9/scorephoto?student_id="+e.student_id+"&&fraction="+e.form.fraction_p1);case 19:r=t.sent,i=r.data,200==i.code&&e.chaxun(),e.dialogVisible=!1,t.next=26;break;case 25:e.$message({type:"error",message:"请输入分数"});case 26:case"end":return t.stop()}}),t)})))()},daochu:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.student_id=e,"欧姆表的改装设计"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment6/pdf6?student_id="+t.student_id:"劈尖测细丝实验"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment/pdf?student_id="+t.student_id:"电表改装设计实验"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment10/pdf10?student_id="+t.student_id:"万用表改装设计实验"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment11/pdf11?student_id="+t.student_id:"箱式直流电桥测量电阻"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/bridge/pdf?student_id="+t.student_id:"大学物理实验一报告"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment1/pdf1?student_id="+t.student_id:"单摆法测重力加速度"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/pendulum/pdf3?student_id="+t.student_id:"牛顿环法测曲率半径"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment4/pdf4?student_id="+t.student_id:"欧姆表的改装设计"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment6/pdf6?student_id="+t.student_id:"自组式直流电桥测量电阻值"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/bridge1/pdf5?student_id="+t.student_id:"示波器的调整与使用"==t.form.experiment_name?window.location.href="http://180.76.111.200/api/experiment14/pdf14?student_id="+t.student_id:"霍尔效应测量磁感应强度"==t.form.experiment_name&&(window.location.href="http://180.76.111.200/api/experiment9/pdf9?student_id="+t.student_id);case 2:case"end":return a.stop()}}),a)})))()},filesToRar:function(e,t){var a=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,i,s,o,l,p,u,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=a,i=new S.a,s={},o=[],r.title="正在加载压缩文件",l=Object($["a"])(e);try{for(u=function(){var e=p.value;c=r.getImgArrayBuffer(e.fileUrl).then((function(t){i.file(e.renameFileName,t,{binary:!0}),s[e.renameFileName]=t})),o.push(c)},l.s();!(p=l.n()).done;)u()}catch(d){l.e(d)}finally{l.f()}Promise.all(o).then((function(){i.generateAsync({type:"blob"}).then((function(e){r.title="正在压缩",z.a.saveAs(e,t),r.title="压缩完成"}))})).catch((function(e){r.$message.error("文件压缩失败")}));case 8:case"end":return n.stop()}}),n)})))()},getImgArrayBuffer:function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(){200==this.status?t(this.response):a(this.status)},n.send()}))}}},N=P,F=(a("fc1a"),Object(l["a"])(N,D,C,!1,null,"7207bb2a",null)),U=F.exports;n["default"].use(c["a"]);var T=[{path:"/",redirect:"login"},{path:"/login",component:b,name:"login"},{path:"/home",component:k,redirect:"/result",children:[{path:"/result",component:U}]}],E=new c["a"]({mode:"hash",base:"",routes:T}),V=E,M=a("5c96"),I=a.n(M),A=(a("0fae"),a("aede"),a("bc3a")),H=a.n(A);n["default"].prototype.$massage=M["Message"],n["default"].use(I.a),n["default"].prototype.$http=H.a,H.a.defaults.baseURL="http://180.76.111.200/",H.a.interceptors.request.use((function(e){return e.headers.Authorization=window.sessionStorage.getItem("data"),e})),n["default"].config.productionTip=!1,V.beforeEach((function(e,t,a){return"/login"===e.path?a():window.sessionStorage.getItem("token")?void a():(M["Message"].error("您还没有登录，请先登录"),a("/login"))})),new n["default"]({router:V,render:function(e){return e(u)}}).$mount("#app")},"5c4c":function(e,t,a){},"7df3":function(e,t,a){"use strict";a("5c4c")},"9ce0":function(e,t,a){"use strict";a("d64c")},aede:function(e,t,a){},d121:function(e,t,a){},d64c:function(e,t,a){},fc1a:function(e,t,a){"use strict";a("d121")}});
//# sourceMappingURL=app.cfaaf62c.js.map