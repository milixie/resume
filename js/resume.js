	$(function(){
		//导航浮动到顶部
		$(window).scroll(function(){
			var oHeader = $('header'),
				oScrollH = $('body').scrollTop() || $('html').scrollTop();
			if(oScrollH == 0){
				oHeader.removeClass('fix-head');
			}else{
				oHeader.addClass('fix-head');
			}
		});
		//回到顶部
		var backToTop = $('.back-to-top');
		$(window).scroll(function(){
			if($(window).scrollTop() > 100){
				backToTop.fadeIn(1000);
			}else{
				backToTop.fadeOut(2000);
			}
		});
		backToTop.on('click',function(){
			$('body').animate({scrollTop:0},1000);
			return false;
		});
		//基本信息淡入淡出效果
		var baseInfoPrev = $('.base-info-prev'),
			baseInfoNext = $('.base-info-next'),
			baseInfoList = $('.base-info-list'),
			num = 0,
			flag = false,
			timer = null;
		function time(){
			clearInterval(timer);
			timer = setInterval(function(){
				next();
			},3000);
		}
		time();
		baseInfoList.on('mouseover',function(){
			clearInterval(timer);
		});
		baseInfoList.on('mouseout',function(){
			time();
		});
		function prev(){
			if(flag){
				return;
			}
			num--;
			if(num == -1){
				num = baseInfoList.length - 1;
			}
			animate(num);
		}
		function next(){
			if(flag){
				return;
			}
			num++;
			if(num == baseInfoList.length){
				num = 0;
			}
			animate(num);
		}
		baseInfoPrev.on('click',function(){
			clearInterval(timer);
			prev();
			time();
		});
		baseInfoNext.on('click',function(){
			clearInterval(timer);
			next();
			time();
		});
		function animate(number){
			flag = true;
			var go = function(){
				for(var i = 0; i < baseInfoList.length; i++){
					baseInfoList.eq(i).fadeOut(100);
				}
				baseInfoList.eq(number).fadeIn(2000,function(){
					flag = false;
				});
			}
			go();
		}
		//项目经验处小轮播：
		var oBtnIcon = $('.btn-icon li'),
			oProject = $('.project-public')
			len = oBtnIcon.length,
			isAnimate = false;
		oBtnIcon.on('click',function(){
			if(isAnimate){
				return;
			}
			isAnimate = true;
			var that = $(this);
			var index = that.index();
			for(var i = 0 ; i < len; i++){
				oBtnIcon.eq(i).removeClass('hover-active');
				oProject.eq(i).fadeOut(600);
			}
			that.addClass('hover-active');
			setTimeout(function(){
				oProject.eq(index).slideDown(1000,function(){
					isAnimate = false;
				});
			},600);
		});
		//技能hover效果
		var oSkillWrap = $('.skill-wrap'),
			oSkillWrapP = $('.skill-wrap p');
		var oWidth = $(window).width();
		while(oWidth < 768){
			oSkillWrap.on('mouseover',function(){
				$(this).children('p').hide();
			})
		}
	});