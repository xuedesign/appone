// 首頁選單圖片位移
$(window).load(function(){
		// 預設滑鼠移入或移出時移動的速度
		var _animateSpeed = 500;
		
		// 當滑鼠移入或移出 .nav_item 時
		$('.nav_item').hover(function(){
			// 先取得 .link 及其圖片
			// 並計算出要移動的距離(寬度)
			var $link = $(this).find('.link'), 
				_width = $link.width(), 
				$img = $link.find('img'), 
				_imgWidth = $img.width(), 
				_rightPosition = _width - _imgWidth;
			
			// 當滑鼠移入時移動圖片
			$img.stop().animate({
				right: _rightPosition
			}, _animateSpeed);
		}, function(){
			var $link = $(this).find('.link'), 
				$img = $link.find('img');
			
			// 當滑鼠移出時移動圖片回原位
			$img.stop().animate({
				right: 0
			}, _animateSpeed);
		});
	});
	
// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;	