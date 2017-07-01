	var index={
		originHtml:'',
		bindEvent:function(){
			index.originHtml=window.location.href;
			var linkList=$("#ul_head>li a");
			$.each(linkList, function(i,item) {
				$(item).bind("click",function(e){
					e.preventDefault();//禁止超链接默认事件
					e.stopPropagation();//阻止事件冒泡
					var url_to=$(item).attr("href");
					window.location.hash=url_to;
					index.loadURL(url_to);
				});
			});
		},
		loadURL:function(url){
			$.ajax({
				type:"get",
				url:url,
				async:true,
				dataType: "html",
				contentType:"application/json;charset=utf-8",
				success:function(data){
					$("#content").html(data);
				}
			});
		},
		checkEmpty:function(){/*地址栏有锚点地址内容区无内容*/
			var hash=window.location.hash;
			var content=$("#content").html().trim().length;
			if(hash.length>0&&content==0){
				index.loadURL(hash.substr(1));
			}
		}
	}
	$(function(){
		$(window).on("hashchange",function(){
			index.checkEmpty();
		});
		index.bindEvent();
		index.checkEmpty();
	});
