$(function(){
	var data=[
			{"id":111,"name":"这个是名字","website":"网址","description":"详细描述"},
			{"id":111,"name":"这个是名字","website":"网址","description":"详细描述"},
			{"id":111,"name":"这个是名字","website":"网址","description":"详细描述"},
			{"id":111,"name":"这个是名字","website":"网址","description":"详细描述"},
			{"id":111,"name":"这个是名字","website":"网址","description":"详细描述"},
			{"id":111,"name":"这个是名字","website":"网址","description":"详细描述"}
	];
	$("#jihua").DataTable({
		"info":true,
		"autoWidth":true,
		"data":data,
		"destroy":true,
		"ordering":false,
		"dom":"<'dt-toolbar'<'col-xs-8 col-sm-8 hidden-xs'> <'col-sm-4 col-xs-4' f> r>" +"t"+
				"<'dt-footer' <'col-xs-4 col-sm-4' i> <'col-xs-8 col-sm-8' <'col-xs-4'><'col-xs-5' p><'col-xs-3' l>>>",
		"language":{
			"info":"_START_至_END_共_TOTAL_",
			"search":"搜索",
			"lengthMenu":"显示 _MENU_条数据",
			"paginate": {
		        "first":      "首页",
		        "last":       "尾页",
		        "next":       "下页",
		        "previous":   "上页"
		    }
		},
		"columns":[
						{"targets":0,"data":"id","title":"编号","width":"20%","class":"text-center"},
						{"targets":1,"data":"name","title":"名称","width":"20%","class":"text-center"},
						{"targets":2,"data":"website","title":"地址","width":"20%","class":"text-center"},
						{"targets":3,"data":"description","title":"描述","width":"20%","class":"text-center"},
						{"targets":4,"data":"","title":"操作","width":"20%","class":"text-center"}
					],
		"columnDefs":[
				{"defaultContent":'空空不空',"targets":"_all"},
				{
					"targets":0,"orderable":false,
					"render":function(data,row,type,meta){
						return data;
					}
				},
				{
					"targets":1,"orderable":false,
					"render":function(data,row,type,meta){
						return data;
					}
				},
				{
					"targets":2,"orderable":false,
					"render":function(data,row,type,meta){
						return data;
					}
				},
				{
					"targets":3,"orderable":false,
					"render":function(data,row,type,meta){
						return data;
					}
				},
				{
					"targets":4,"orderable":false,
					"render":function(data,row,type,meta){
						return "<a>查看</a><a>修改</a><a>删除</a>";
					}
				},
			]
	});
})