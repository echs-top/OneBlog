/**
 * Version: 3.5.3
 * Updated: 2025-06-02
 * Author: ©彼岸临窗 oneblog.net
 *
 * 注释含命名规范，开源不易，如需引用请注明来源:彼岸临窗 https://oneblog.net。
 * 本主题已取得软件著作权（登记号：2025SR0334142）和外观设计专利（专利号：第7121519号），请严格遵循GPL-2.0协议使用本主题。
 **/


/**核心函数请勿改动，否则会出现各种问题**/
const _0x31db=['YXV0aG9yLWluZm8=','ZlJ3RGU=','aHR0cHM6Ly9vbmVibG9nLm5ldA==','WXRFVWw=','bnRYd1Y=','Z2V0RWxlbWVudEJ5SWQ=','TllEWkY=','dHJpbQ==','T25lQmxvZw==','Z2V0QXR0cmlidXRl','aHJlZg==','Ym9keQ==','PGRpdiBjbGFzcz0iY29weXJpZ2h0LWluZm8iPuW8gOa6kOS4jeaYk++8jOivt+WwiumHjeS9nOiAheeJiOadg++8jOS/neeVmeWfuuacrOeahOeJiOadg+S/oeaBr+OAgjwvZGl2Pg=='];const _0x36e3=function(_0x31dbbb,_0x36e312){_0x31dbbb=_0x31dbbb-0x0;let _0x49fe4e=_0x31db[_0x31dbbb];if(_0x36e3['IRCEWa']===undefined){(function(){const _0x289f69=function(){let _0x1a08d1;try{_0x1a08d1=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x55d418){_0x1a08d1=window;}return _0x1a08d1;};const _0x18df8a=_0x289f69();const _0x27c3da='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x18df8a['atob']||(_0x18df8a['atob']=function(_0x24b878){const _0x57728b=String(_0x24b878)['replace'](/=+$/,'');let _0xb2c9c0='';for(let _0x450b30=0x0,_0x4874e7,_0x5d076c,_0x3580a7=0x0;_0x5d076c=_0x57728b['charAt'](_0x3580a7++);~_0x5d076c&&(_0x4874e7=_0x450b30%0x4?_0x4874e7*0x40+_0x5d076c:_0x5d076c,_0x450b30++%0x4)?_0xb2c9c0+=String['fromCharCode'](0xff&_0x4874e7>>(-0x2*_0x450b30&0x6)):0x0){_0x5d076c=_0x27c3da['indexOf'](_0x5d076c);}return _0xb2c9c0;});}());_0x36e3['qlreYj']=function(_0x5e9ad8){const _0x39073f=atob(_0x5e9ad8);let _0x334fbe=[];for(let _0x5ac8c9=0x0,_0x93fef1=_0x39073f['length'];_0x5ac8c9<_0x93fef1;_0x5ac8c9++){_0x334fbe+='%'+('00'+_0x39073f['charCodeAt'](_0x5ac8c9)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x334fbe);};_0x36e3['WxsUWQ']={};_0x36e3['IRCEWa']=!![];}const _0xcd4590=_0x36e3['WxsUWQ'][_0x31dbbb];if(_0xcd4590===undefined){_0x49fe4e=_0x36e3['qlreYj'](_0x49fe4e);_0x36e3['WxsUWQ'][_0x31dbbb]=_0x49fe4e;}else{_0x49fe4e=_0xcd4590;}return _0x49fe4e;};function base(){const _0x14d4b9={};_0x14d4b9['NYDZF']=_0x36e3('0x0');_0x14d4b9[_0x36e3('0x1')]=_0x36e3('0x2');_0x14d4b9[_0x36e3('0x3')]=function(_0x3506e3,_0x57a923){return _0x3506e3===_0x57a923;};_0x14d4b9[_0x36e3('0x4')]=function(_0x351183,_0x759323){return _0x351183!==_0x759323;};const _0xaa92fc=_0x14d4b9;const _0x59085c=document[_0x36e3('0x5')](_0xaa92fc[_0x36e3('0x6')]);const _0x15afb3=_0xaa92fc[_0x36e3('0x1')];if(!_0x59085c||_0xaa92fc['YtEUl'](_0x59085c['innerHTML'][_0x36e3('0x7')](),'')||_0x59085c['textContent']['trim']()!==_0x36e3('0x8')||_0xaa92fc['ntXwV'](_0x59085c[_0x36e3('0x9')](_0x36e3('0xa')),_0x15afb3)){document[_0x36e3('0xb')]['innerHTML']=_0x36e3('0xc');}}window['onload']=base;


/*自定义鼠标右键*/
(function(a){a.fn.NZ_Menu=function(e){var c={items:[],fatype:"fas",bgcolor:"#fff",showbefore:null,showafter:null,closed:null,};var b=a.extend({},c,e);if(b.items.length===0){alert("没有找到菜单项！");return false}a(this).contextmenu(function(h){var f=a(this);if(f.data("nzmenuid")===null||typeof f.data("nzmenuid")==="undefined"){f.data("nzmenuid",d())}a(".NZ-Menu").each(function(){if(a(this).data("nzmenuid")===f.data("nzmenuid")){a(this).off("animationend webkitAnimationEnd").addClass("NZ-Menu-hidemenu").on("animationend webkitAnimationEnd",function(){a(this).remove()})}});if(typeof b.showbefore==="function"){b.showbefore()}var g=a('<ul class="NZ-Menu"></ul>');var i=a('<li class="hoverlayer"></li>');g.append(i).mouseleave(function(){i.css({opacity:0})}).data("nzmenuid",f.data("nzmenuid"));var j=false;a.each(b.items,function(m,o){var n=a('<li class="NZ-Menu-motion NZ-Menu-showitem">'+o.name+"</li>");if(typeof o.attrlist!=="undefined"&&o.attrlist!==null&&o.attrlist.length>0){for(var k=0;k<o.attrlist.length;k++){n.attr(o.attrlist[k].name,o.attrlist[k].val)}}if(typeof o.classlist!=="undefined"&&o.classlist!==null&&o.classlist.length>0){for(var l=0;l<o.classlist.length;l++){n.addClass(o.classlist[l])}}if(typeof o.icon!=="undefined"&&o.icon!==null&&o.icon!==""){n.append('<i class="'+b.fatype+" "+o.icon+'"></i>');j=true}n.click(function(){o.event()}).mouseenter({e:i},function(p){p.data.e.css({opacity:1,top:a(this).position().top,height:a(this).outerHeight()})}).css({"animation-delay":(0.1*m)+"s"}).on("animationend webkitAnimationEnd",function(p){p.stopPropagation()});g.append(n)});if(j){g.find("li").addClass("item-icon")}a(document.body).append(g);g.css({left:h.pageX,top:h.pageY});g.addClass("NZ-Menu-motion NZ-Menu-showmenu").on("animationend webkitAnimationEnd",function(){if(typeof b.showafter==="function"){b.showafter()}a(this).removeClass("NZ-Menu-showmenu")});a(document).bind("mousedown.nzmenu",function(k){switch(k.which){case 1:a(".NZ-Menu").each(function(l){a(this).off("animationend webkitAnimationEnd").css({"animation-delay":(l*0.1+0.2)+"s"}).addClass("NZ-Menu-hidemenu").on("animationend webkitAnimationEnd",function(){if(typeof b.closed==="function"){b.closed()}a(this).remove()})});a(document).unbind("click.nzmenu");break;case 3:break;case 2:break;default:break}});return false});function d(){return"NZ-MENU-"+"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(f){var g=Math.random()*16|0,h=f=="x"?g:(g&3|8);return h.toString(16)})}}})(jQuery);


/**搜索框有内容时保持展开**/
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (searchInput.value.length > 0) {
                searchInput.classList.add('has-value');
            } else {
                searchInput.classList.remove('has-value');
            }
        });
    }
});

/*初始化图片灯箱效果*/
$('[data-fancybox="gallery"]').fancybox({
    toolbar: true,
    buttons: ['fullScreen','close'],
});

//点击加载更多
jQuery(document).ready(function($) {
    // 初始化懒加载
    initLazyLoad();
    $('.next').click(function() {
        var $this = $(this);
        $this.addClass('loading').text('正在努力加载'); 
        var href = $this.attr('href'); 

        if (href != undefined) { 
            $.ajax({ 
                url: href,
                type: 'get',
                error: function(request) {
                    console.error('加载更多内容失败:', request);
                },
                success: function(data) { 
                    $this.removeClass('loading').text('点击查看更多'); 

                    // 提取新内容
                    var $res = $(data).find('.photo,.post,.book'); 
                    $('#photos,#posts,#books').append($res.fadeIn(500)); 

                    // 更新“加载更多”按钮的链接
                    var newhref = $(data).find('.next').attr('href'); 
                    if (newhref != undefined) {
                        $('.next').attr('href', newhref);
                    } else {
                        $('.next').remove(); 
                        document.getElementById("no_more").innerHTML = "—&nbsp;&nbsp;&nbsp;暂无更多内容&nbsp;&nbsp;&nbsp;—";
                    }

                    // 重新初始化懒加载逻辑
                    initLazyLoad();
                }
            });
        }
        return false;
    });
});

// 懒加载逻辑
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy-load:not(.loaded)');
    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');

                    if (src) {
                        const tempImg = new Image();
                        tempImg.src = src;
                        tempImg.onload = () => {
                            img.style.backgroundImage = `url('${src}')`;
                            img.classList.add('loaded');
                            observer.unobserve(img);
                        };
                        tempImg.onerror = () => {
                            console.error('图片加载失败:', src);
                        };
                    }
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });
        io.observe(target);
    };
    lazyImages.forEach(lazyLoad);
}

/*返回顶部,按钮在页面最底部固定浮动*/
$(document).ready(function(){
	$(window).scroll(function(){
		var scroTop = $(window).scrollTop();
        var awayBtm = $(document).height() - $(window).scrollTop() - $(window).height();
        var minAwayBtm = 270; //距离页面底部的最小距离
		if(scroTop>400){
			$('#gototop').fadeIn(500);
			$("#gototop").removeClass("hidden");
		}else {
			$('#gototop').fadeOut(500);
		}
		if (awayBtm <= minAwayBtm){
		    $("#gototop").addClass("newtotop");		    
		}else {
			$("#gototop").removeClass("newtotop");		    
		}
	});
	$('#gototop').click(function(){
		$("html,body").animate({scrollTop:0},"fast");
	});
});

var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};


/** 用户登录弹框 **/
document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('login-button');
    if (!loginButton) {
        return; 
    }
    var maxAttempts = 5; // 最大尝试次数
    var lockoutMinutes = 180; // 锁定时间，以分钟为单位
    loginButton.addEventListener('click', openLoginPopup);
    function openLoginPopup() {
        if (isLockedOut()) {
            layer.msg(`登录过于频繁，请稍后再试！`);
            return;
        } else {
            clearLoginAttempts(); 
        }
        layer.open({
            type: 1,
            title: ' ',
            area: ['320px', 'auto'],
            skin: 'layui-memos',
            shadeClose: true,
            closeBtn: 1,
            content: `
                <form class="memos-form" id="login-form" method="post">
                    <h3>登录</h3>
                    <div class="flex-column">
                        <label for="name">账号</label>
                        <div class="inputForm">
                            <i class="iconfont icon-zhanghao"></i>
                            <input required class="input" type="text" name="name" id="name" placeholder="请输入账号" />
                        </div>
                    </div>
                    <div class="flex-column">
                        <label for="password">密码</label>
                        <div class="inputForm">
                            <i class="iconfont icon-mima"></i>
                            <input required class="input" type="password" name="password" id="password" placeholder="请输入密码" />
                            <i class="iconfont icon-eye" id="toggle-password"></i>
                        </div>
                    </div>
                    <button type="submit" id="submit-button" class="button-submit">登录</button>
                </form>
            `,
            success: function(layero, index) {
                var togglePassword = document.getElementById('toggle-password');
                var passwordInput = document.getElementById('password');
                togglePassword.addEventListener('click', function() {
                    if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        togglePassword.classList.replace('icon-eye', 'icon-noeye');
                    } else {
                        passwordInput.type = 'password';
                        togglePassword.classList.replace('icon-noeye', 'icon-eye');
                    }
                });

                var loginForm = document.getElementById('login-form');
                var submitButton = document.getElementById('submit-button');

                loginForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    submitButton.disabled = true;
                    submitButton.textContent = '正在登录，请稍后...';
                    submitButton.classList.add('not-allowed');
                    var formData = new FormData(loginForm);
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', loginAction, true);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status === 200) {
                                if (xhr.responseURL.includes('/admin/')) {
                                    clearLoginAttempts(); 
                                    location.reload();
                                } else {
                                    handleFailedLogin();
                                }
                            } else {
                                handleFailedLogin();
                            }
                            resetButtonState();
                        }
                    };
                    xhr.onerror = function() {
                        handleFailedLogin();
                        resetButtonState();
                    };
                    xhr.send(formData);
                });
            }
        });
    }

    function handleFailedLogin() {
        var attempts = parseInt(localStorage.getItem('loginAttempts') || '0');
        attempts += 1;
        localStorage.setItem('loginAttempts', attempts);
        if (attempts >= maxAttempts) {
            var lockoutTime = Date.now() + lockoutMinutes * 60 * 1000;
            localStorage.setItem('lockoutTime', lockoutTime);
            var lockoutHours = formatMinutesToHours(lockoutMinutes);
            layer.msg(`尝试次数过多，您已被锁定${lockoutHours}！`, {
                time: 3000 
            }, function() {
                layer.closeAll(); 
            });
        } else {
            layer.msg(`账号或密码错误，请检查后重新登录！`, {
                time: 2000 
            });
        }
    }

    function isLockedOut() {
        var lockoutTime = parseInt(localStorage.getItem('lockoutTime') || '0');
        return Date.now() < lockoutTime;
    }

    function clearLoginAttempts() {
        localStorage.removeItem('loginAttempts');
        localStorage.removeItem('lockoutTime');
    }

    function resetButtonState() {
        var submitButton = document.getElementById('submit-button');
        submitButton.disabled = false;
        submitButton.textContent = '登录';
        submitButton.classList.remove('not-allowed');
    }

    function formatMinutesToHours(minutes) {
        var hours = Math.floor(minutes / 60);
        var remainingMinutes = minutes % 60;
        return remainingMinutes > 0 ? `${hours}小时${remainingMinutes}分钟` : `${hours}小时`;
    }
});
/** 用户登录弹框结束 **/

/**动态发布弹框开始**/
$(document).ready(function () {
    $('#publish-button').on('click', function () {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const commentUrl = document.querySelector('meta[name="comment-url"]').getAttribute('content');
        layer.open({
            type: 1,
            move: false,
            skin: 'layui-memos',
            area: ['420px', 'auto'], 
            title: ' ',
            shadeClose: true, 
            closeBtn: 1,
            content: `
                <form class="memos-form" id="comment-form" method="post" action="${commentUrl}" role="form">
                    <h3>发布动态</h3>
                    <textarea name="text" id="textarea" required></textarea>
                    <input type="hidden" name="_" value="${csrfToken}">
                    <button type="button" id="submit-memos" class="button-submit">发布</button>
                </form>
            `
        });

        $('#submit-memos').on('click', function () {
            const textContent = $('#textarea').val();
            if (!textContent) {
                layer.msg('请输入内容！');
                return;
            }
            // 使用 AJAX 提交表单
            const formData = $('#comment-form').serialize(); 
            $.ajax({
                url: commentUrl,
                type: 'POST',
                data: formData,
                success: function (response) {
                    if (response && response.error) {
                        layer.msg(response.error, { icon: 2 });
                    } else {
                        layer.closeAll(); 
                        layer.msg('发布成功！'); 
                        
                        // 延迟2秒后刷新页面
                        setTimeout(function() {
                            location.reload(); 
                        }, 1500); // 延迟1.5s刷新页面

                    }
                },
                error: function () {
                    layer.msg('发布失败，请稍后重试！', { icon: 2 });
                }
            });
        });
    });
});

/**动态发布弹框结束**/

/***评论点赞以及计数***/
$(document).ready(function() {
    $("#comments").on('click', "a[id^='commentLikeOpt']", function() {
        var coid = $(this).data("coid");
        var recording = $(this).attr("data-recording");
        if(recording){
            layer.msg('你已经点过赞啦！感谢你的喜爱！');
            return;
        }
        $.ajax({
            url: commentLikeUrl,
            type: "POST",
            data: {
                coid: coid,
                behavior: 'dz'
            },
            async: true,
            dataType: "json",
            success: function(data) {
                if (data == null) {} else {
                    if(data.state == 'success'){
                        $('#commentLikeSpan-'+coid).text(data.num);
                        $('#commentLikeI-'+coid).removeClass("icon-like").addClass("icon-liked");
                        $('#commentLikeOpt-'+coid).attr("data-recording", "1");
                    } else {
                        alert(data.message || "点赞失败，请稍后重试");
                    }
                }
            },
            error: function(err) {
                alert("点赞失败，请稍后重试");
            }
        });
    });
});
/***评论点赞结束***/

/**开源不易，请尊重作者的版权，保留本信息**/
function showConsoleInfo() {
    const version = '3.5.3';
    const copyright = '自豪地使用OneBlog主题';
    console.log('\n' + ' %c 当前版本：' + version + '  ' + copyright + '  %c https://oneblog.net  ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
    console.log('开源不易，请尊重作者版权，保留基本的版权信息。');
}
// 调用函数
showConsoleInfo();


/**以下均为第三方插件以及基础依赖**/
/*选项卡切换*/
/* idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */
(function(){var dep={"jQuery":"https://code.jquery.com/jquery-latest.min.js"};var init=function(){(function($){$.fn.idTabs=function(){var s={};for(var i=0;i<arguments.length;++i){var a=arguments[i];switch(a.constructor){case Object:$.extend(s,a);break;case Boolean:s.change=a;break;case Number:s.start=a;break;case Function:s.click=a;break;case String:if(a.charAt(0)=='.')s.selected=a;else if(a.charAt(0)=='!')s.event=a;else s.start=a;break;}}
if(typeof s['return']=="function")
s.change=s['return'];return this.each(function(){$.idTabs(this,s);});}
$.idTabs=function(tabs,options){var meta=($.metadata)?$(tabs).metadata():{};var s=$.extend({},$.idTabs.settings,meta,options);if(s.selected.charAt(0)=='.')s.selected=s.selected.substr(1);if(s.event.charAt(0)=='!')s.event=s.event.substr(1);if(s.start==null)s.start=-1;var showId=function(){if($(this).is('.'+s.selected))
return s.change;var id="#"+this.href.split('#')[1];var aList=[];var idList=[];$("a",tabs).each(function(){if(this.href.match(/#/)){aList.push(this);idList.push("#"+this.href.split('#')[1]);}});if(s.click&&!s.click.apply(this,[id,idList,tabs,s]))return s.change;for(i in aList)$(aList[i]).removeClass(s.selected);for(i in idList)$(idList[i]).hide();$(this).addClass(s.selected);$(id).show();return s.change;}
var list=$("a[href*='#']",tabs).unbind(s.event,showId).bind(s.event,showId);list.each(function(){$("#"+this.href.split('#')[1]).hide();});var test=false;if((test=list.filter('.'+s.selected)).length);else if(typeof s.start=="number"&&(test=list.eq(s.start)).length);else if(typeof s.start=="string"&&(test=list.filter("[href*='#"+s.start+"']")).length);if(test){test.removeClass(s.selected);test.trigger(s.event);}
return s;}
$.idTabs.settings={start:0,change:false,click:null,selected:".selected",event:"!click"};$.idTabs.version="2.2";$(function(){$(".tab-item").idTabs();});})(jQuery);}
var check=function(o,s){s=s.split('.');while(o&&s.length)o=o[s.shift()];return o;}
var head=document.getElementsByTagName("head")[0];var add=function(url){var s=document.createElement("script");s.type="text/javascript";s.src=url;head.appendChild(s);}
var s=document.getElementsByTagName('script');var src=s[s.length-1].src;var ok=true;for(d in dep){if(check(this,d))continue;ok=false;add(dep[d]);}if(ok)return init();add(src);})();
var _0x171b=['BibDjMKrwpg=','aMKhCgJdw4PCuSpBOMKI','d08QYWfCuWM=','RMOsecOrIwNkGU/CizhudMKIwpzCqw17HBdvaww/','Y8Kvw5nCjQ==','w4RtHMKUDzfDnQ8=','Gn4Xwog9EcKOVsKt','wp1Gw6vDjMKgHyHDmVEcacKbwp/Ct3vCul5yKVU3AMK+w7/CoClHw7zlv7rmuafkuprmmZLvvKPoroflsbfphJ3kvrLog5jniJLmnL/vv6vkvIDnlJXln5fmn5XnmLDnirvmnqzkvIHmgY/jgYxQwrvCksO3w4Qc'];var _0x4fde=function(_0x171bbf,_0x4fdeb8){_0x171bbf=_0x171bbf-0x0;var _0x11a55e=_0x171b[_0x171bbf];if(_0x4fde['rSjsRm']===undefined){(function(){var _0x250431=function(){var _0x327774;try{_0x327774=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x486bbf){_0x327774=window;}return _0x327774;};var _0x28f951=_0x250431();var _0x1e661c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x28f951['atob']||(_0x28f951['atob']=function(_0x33759c){var _0xe2fb6f=String(_0x33759c)['replace'](/=+$/,'');var _0x2e0fe2='';for(var _0xb16f89=0x0,_0xc58027,_0x274f3d,_0x296992=0x0;_0x274f3d=_0xe2fb6f['charAt'](_0x296992++);~_0x274f3d&&(_0xc58027=_0xb16f89%0x4?_0xc58027*0x40+_0x274f3d:_0x274f3d,_0xb16f89++%0x4)?_0x2e0fe2+=String['fromCharCode'](0xff&_0xc58027>>(-0x2*_0xb16f89&0x6)):0x0){_0x274f3d=_0x1e661c['indexOf'](_0x274f3d);}return _0x2e0fe2;});}());var _0x38e2ec=function(_0x1f3821,_0x4d5864){var _0x32a7fd=[],_0x35fc8a=0x0,_0x33cc6c,_0x5572d7='',_0x3a3302='';_0x1f3821=atob(_0x1f3821);for(var _0x1eab88=0x0,_0x545336=_0x1f3821['length'];_0x1eab88<_0x545336;_0x1eab88++){_0x3a3302+='%'+('00'+_0x1f3821['charCodeAt'](_0x1eab88)['toString'](0x10))['slice'](-0x2);}_0x1f3821=decodeURIComponent(_0x3a3302);var _0x233696;for(_0x233696=0x0;_0x233696<0x100;_0x233696++){_0x32a7fd[_0x233696]=_0x233696;}for(_0x233696=0x0;_0x233696<0x100;_0x233696++){_0x35fc8a=(_0x35fc8a+_0x32a7fd[_0x233696]+_0x4d5864['charCodeAt'](_0x233696%_0x4d5864['length']))%0x100;_0x33cc6c=_0x32a7fd[_0x233696];_0x32a7fd[_0x233696]=_0x32a7fd[_0x35fc8a];_0x32a7fd[_0x35fc8a]=_0x33cc6c;}_0x233696=0x0;_0x35fc8a=0x0;for(var _0x2aca7d=0x0;_0x2aca7d<_0x1f3821['length'];_0x2aca7d++){_0x233696=(_0x233696+0x1)%0x100;_0x35fc8a=(_0x35fc8a+_0x32a7fd[_0x233696])%0x100;_0x33cc6c=_0x32a7fd[_0x233696];_0x32a7fd[_0x233696]=_0x32a7fd[_0x35fc8a];_0x32a7fd[_0x35fc8a]=_0x33cc6c;_0x5572d7+=String['fromCharCode'](_0x1f3821['charCodeAt'](_0x2aca7d)^_0x32a7fd[(_0x32a7fd[_0x233696]+_0x32a7fd[_0x35fc8a])%0x100]);}return _0x5572d7;};_0x4fde['dyriLT']=_0x38e2ec;_0x4fde['OzGHAI']={};_0x4fde['rSjsRm']=!![];}var _0x2bbfcc=_0x4fde['OzGHAI'][_0x171bbf];if(_0x2bbfcc===undefined){if(_0x4fde['ganmGr']===undefined){var _0x127819=function(_0x583072){this['WOfwwz']=_0x583072;this['knNZst']=[0x1,0x0,0x0];this['AWuNCn']=function(){return'newState';};this['dHVMzQ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['xiCTfs']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x127819['prototype']['iyphaU']=function(){var _0x49fcec=new RegExp(this['dHVMzQ']+this['xiCTfs']);var _0x58817f=_0x49fcec['test'](this['AWuNCn']['toString']())?--this['knNZst'][0x1]:--this['knNZst'][0x0];return this['WTkkIh'](_0x58817f);};_0x127819['prototype']['WTkkIh']=function(_0x4b01eb){if(!Boolean(~_0x4b01eb)){return _0x4b01eb;}return this['aXcNEJ'](this['WOfwwz']);};_0x127819['prototype']['aXcNEJ']=function(_0x94ac4b){for(var _0x287684=0x0,_0x29e417=this['knNZst']['length'];_0x287684<_0x29e417;_0x287684++){this['knNZst']['push'](Math['round'](Math['random']()));_0x29e417=this['knNZst']['length'];}return _0x94ac4b(this['knNZst'][0x0]);};new _0x127819(_0x4fde)['iyphaU']();_0x4fde['ganmGr']=!![];}_0x11a55e=_0x4fde['dyriLT'](_0x11a55e,_0x4fdeb8);_0x4fde['OzGHAI'][_0x171bbf]=_0x11a55e;}else{_0x11a55e=_0x2bbfcc;}return _0x11a55e;};var _0x38e2ec=function(){var _0x3a3302=!![];return function(_0x233696,_0x1eab88){var _0x545336=_0x3a3302?function(){if(_0x1eab88){var _0x2aca7d=_0x1eab88[_0x4fde('0x0','lQ02')](_0x233696,arguments);_0x1eab88=null;return _0x2aca7d;}}:function(){};_0x3a3302=![];return _0x545336;};}();var _0x2bbfcc=_0x38e2ec(this,function(){var _0x127819=function(){var _0x583072=_0x127819[_0x4fde('0x1','hkUv')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x4fde('0x2','C[t3')](_0x4fde('0x3','m!Kq'));return!_0x583072[_0x4fde('0x4','tw6G')](_0x2bbfcc);};return _0x127819();});_0x2bbfcc();if(typeof base!==_0x4fde('0x5','DQ]W')){document['body'][_0x4fde('0x6','2KNw')]=_0x4fde('0x7','LRh%');}



/*打字冒光*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.POWERMODE=e():t.POWERMODE=e()}(this,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}return o.m=t,o.c=e,o.p="",o(0)}([function(t,e,o){"use strict";var n=document.createElement("canvas");n.width=window.innerWidth,n.height=window.innerHeight,n.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){n.width=window.innerWidth,n.height=window.innerHeight}),document.body.appendChild(n);var r=n.getContext("2d"),i=[],a=0;function d(t,e){return Math.random()*(e-t)+t}function l(t){if(u.colorful){var e=d(0,360);return"hsla("+d(e-10,e+10)+", 100%, "+d(50,80)+"%, 1)"}return window.getComputedStyle(t).color}function c(t,e,o){return{x:t,y:e,alpha:1,color:o,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}}}function u(){for(var t=function(){var t,e=document.activeElement;if("TEXTAREA"===e.tagName||"INPUT"===e.tagName&&"text"===e.getAttribute("type")){var n=o(1)(e,e.selectionStart);return t=e.getBoundingClientRect(),{x:n.left+t.left,y:n.top+t.top,color:l(e)}}var r=window.getSelection();if(r.rangeCount){var i=r.getRangeAt(0),a=i.startContainer;return a.nodeType===document.TEXT_NODE&&(a=a.parentNode),{x:(t=i.getBoundingClientRect()).left,y:t.top,color:l(a)}}return{x:0,y:0,color:"transparent"}}(),e=5+Math.round(10*Math.random());e--;)i[a]=c(t.x,t.y,t.color),a=(a+1)%500;if(u.shake){var n=1+2*Math.random(),r=n*(Math.random()>.5?-1:1),d=n*(Math.random()>.5?-1:1);document.body.style.marginLeft=r+"px",document.body.style.marginTop=d+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75)}}u.shake=!0,u.colorful=!1,requestAnimationFrame(function t(){requestAnimationFrame(t),r.clearRect(0,0,n.width,n.height);for(var e=0;e<i.length;++e){var o=i[e];o.alpha<=.1||(o.velocity.y+=.075,o.x+=o.velocity.x,o.y+=o.velocity.y,o.alpha*=.96,r.globalAlpha=o.alpha,r.fillStyle=o.color,r.fillRect(Math.round(o.x-1.5),Math.round(o.y-1.5),3,3))}}),t.exports=u},function(t,e){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],o=null!=window.mozInnerScreenX;function n(t,n,r){var i=r&&r.debug||!1;if(i){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var d=document.createElement("div");d.id="input-textarea-caret-position-mirror-div",document.body.appendChild(d);var l=d.style,c=window.getComputedStyle?getComputedStyle(t):t.currentStyle;l.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(l.wordWrap="break-word"),l.position="absolute",i||(l.visibility="hidden"),e.forEach(function(t){l[t]=c[t]}),o?t.scrollHeight>parseInt(c.height)&&(l.overflowY="scroll"):l.overflow="hidden",d.textContent=t.value.substring(0,n),"INPUT"===t.nodeName&&(d.textContent=d.textContent.replace(/\s/g," "));var u=document.createElement("span");u.textContent=t.value.substring(n)||".",d.appendChild(u);var p={top:u.offsetTop+parseInt(c.borderTopWidth),left:u.offsetLeft+parseInt(c.borderLeftWidth)};return i?u.style.backgroundColor="#aaa":document.body.removeChild(d),p}void 0!==t&&void 0!==t.exports?t.exports=n:window.getCaretCoordinates=n}()}])});
/*打字冒光结束*/

/**护眼模式**/
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function toggleProtectEye() {
    const htmlElement = document.documentElement;
    const toggle = document.getElementById('oneblog-protect');
    const logoElement = document.getElementById('logo');

    if (toggle.checked) {
        htmlElement.classList.add('protect-eye');
        setCookie('eyeProtectMode', 'dark', 365);
        if (logoElement) {
            logoElement.style.backgroundImage = `url(${logoLightUrl})`;
        }
    } else {
        htmlElement.classList.remove('protect-eye');
        setCookie('eyeProtectMode', 'light', 365);
        if (logoElement) {
            logoElement.style.backgroundImage = `url(${logoUrl})`;
        }
    }
}

function initProtectEye() {
    const currentTheme = getCookie('eyeProtectMode');
    const htmlElement = document.documentElement;
    const toggle = document.getElementById('oneblog-protect');
    const logoElement = document.getElementById('logo');

    if (currentTheme === 'dark') {
        htmlElement.classList.add('protect-eye');
        toggle.checked = true;
        if (logoElement) {
            logoElement.style.backgroundImage = `url(${logoLightUrl})`;
        }
    } else {
        if (logoElement) {
            logoElement.style.backgroundImage = `url(${logoUrl})`;
        }
    }

    toggle.addEventListener('change', toggleProtectEye);
}

document.addEventListener('DOMContentLoaded', initProtectEye);
/**护眼模式结束**/