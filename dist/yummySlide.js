<<<<<<< HEAD
!function(a){function t(a){if(null===a)return 0;var t,n=0;for(t in a)a.hasOwnProperty(t)&&n++;return n}function n(){c.params.w=c.params.isForward?-a(window).width():a(window).width(),c.params.h=c.params.isForward?-a(window).height():a(window).height()}function e(a){return r()?a.pageY:a.pageX}function r(){return"vertical"===c.opts.direction}function s(a){if(0===a)return!t(c.params.nextPage)&&(c.params.nextPage=null);var n=c.params,e=n.page,r=n.order,s=n.pageIndex,p=n.pageLength,d=c.opts.loop,u=p-1;return a<0?n.nextPage=s==u?d?e.eq(r[0]):null:e.eq(r[s+1]):n.nextPage=0==s?d?e.eq(r[u]):null:e.eq(r[s-1]),null===n.nextPage?n.startPos=0:(n.nextPage.show(),n.isForward=o(),i(n))}function i(a){r()?a.nextPage.css({top:a.isForward?"100%":"-100%"}):a.nextPage.css({left:a.isForward?"100%":"-100%"})}function o(){return c.params.curPos<c.params.startPos}a.fn.yummySlide=function(a){return new c(this,a)};var c=function(t,n){c.params.slide=t,c.params.container=a(t).find(".container"),c.params.page=a(t).find(".container .page"),c.params.pageLength=a(t).find(".container .page").length,c.opts=a.extend({},c.option,n),this.init()};c.prototype.init=function(){var a=(c.opts.loop,c.opts.direction,c.opts.mode),t=c.opts.order,n=[];if("sequential"===t)for(var e=0,r=c.params.pageLength;e<r;e++)n.push(e);else if("reverse"===t)for(var e=c.params.pageLength;e>=0;--e)n.push(e);else if("object"==typeof t){if(t.length!==c.params.pageLength)return;n=t}c.method=new p(a),c.params.pageIndex=0,c.params.order=n,this.styleInit(),this.bindEvent()},c.option={loop:!1,order:"sequential",direction:"vertical",mode:"scale",loadFn:null,init:null,custom:null};var p=function(a){var t;switch(a){case"normal":t=p.normal;break;case"cover":t=p.cover;break;case"fade":t=p.fade;break;case"scale":t=p.scale;break;default:t=p.scale}p.prototype.transNext=t.transNext,p.prototype.transSucceed=t.transSucceed,p.prototype.transFail=t.transFail};c.params={slide:null,container:null,page:null,order:[],pageLength:void 0,curPage:null,nextPage:null,pageIndex:0,startPos:void 0,curPos:void 0,isAnimating:!1,isTap:!0,h:void 0,w:void 0,isForward:0},c.prototype.styleInit=function(){var a=c.params.container,n=c.params.slide,e=c.params.page,r=c.params.order,s=c.params.pageLength;if(n.css({width:"100%",height:"100%"}),a.css({width:"100%",height:"100%",position:"relative",overflow:"hidden"}),e.css({display:"none",position:"absolute",top:0,left:0,width:"100%",height:"100%","z-index":2}),c.params.curPage=e.eq(r[0]),curPage=c.params.curPage,curPage.show().css({"z-index":10}),d(curPage),t(c.opts.loadFn)){var i=c.opts.loadFn[0]?c.opts.loadFn[0]:null;t(i)&&i.forEach(function(a,t){var n=a.fn,e=a.arguments?a.arguments:null,r=a.delay?a.delay:void 0;isNaN(r)?n.apply(this,e):setTimeout(function(){n.apply(this,e)},r)})}for(var o=s,p=0;p<o;p++)e.eq(r[p]).attr("data-order",p);a.show(),t(c.opts.init)&&c.opts.init()},c.prototype.bindEvent=function(){var n=this,e=c.params.container;a(document).on("touchmove",function(a){a.preventDefault()});var r=c.opts.custom;t(r)||r.forEach(function(t,e){var r=t.obj,s=t.trigger;r.each(function(){a(this).on(s,function(a){n.customMove()})})}),e.on("touchstart",n.start).on("touchmove",n.move).on("touchend touchcancel",n.end)};var d=function(t){t.find("[data-animation]").each(function(){a(this).addClass(a(this).data("animation"))})},u=function(t){t.find("[data-animation]").each(function(){a(this).removeClass(a(this).data("animation"))})};c.prototype.customMove=function(){if(!c.params.isAnimating){var a=c.params,t=a.page,n=a.pageIndex,e=a.pageLength,r=a.order;a.isForward=!0,a.curPage=t.eq(r[n]),n<e-1?(a.nextPage=t.eq(r[n+1]),a.nextPage.show(),i(c.params),a.isAnimating=!0,c.method.transSucceed(a.curPage,a.nextPage,0)):a.isForward=a.nextPage=null}},c.prototype.start=function(a){if(!c.params.isAnimating){var t=c.params,n=t.page,r=window.Zepto?a.changedTouches[0]:a.originalEvent.touches[0];t.startPos=e(r),t.curPage=n.eq(t.order[t.pageIndex])}},c.prototype.move=function(a){if(!c.params.isAnimating&&!isNan(c.params.startPos)){a.preventDefault(),c.params.isTap=!1;var n=window.Zepto?a.changedTouches[0]:a.originalEvent.touches[0],r=e(n),i=c.params,p=i.startPos,d=(i.curPos,i.curPage),u=r-p;u<0&&d.hasClass("pause")||(o()!==i.isForward&&s(u),$nextPage=c.params.nextPage,t($nextPage)||(i.curPos=r,c.method.transNext(d,$nextPage,u)))}},c.prototype.end=function(a){if(c.params.isAnimating||c.params.isTap||t(c.params.nextPage)||isNan(c.params.startPos))return c.params.startPos=void 0;var n=c.params,e=n.startPos,r=n.curPos,s=n.curPage,i=n.nextPage;n.isTap=!0,n.isAnimating=!0;var o=r-e;Math.abs(o)>30?c.method.transSucceed(s,i,o):c.method.transFail(s,i)},a.fn.emulateTransitionEnd=function(t){var n=!1,e=this;a(this).one("webkitTransitionEnd",function(){n=!0});var r=function(){n||a(e).trigger("webkitTransitionEnd")};setTimeout(r,t)};var l=function(){var a=window.document,t=a.body||a.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in n)if(void 0!==t.style[e])return n[e]}();p._transNext=function(a,t,n,e){a.css({"-webkit-transform":n,transform:n,"z-index":8}),t.css({"-webkit-transform":e,transform:e,"z-index":10})},p._transSucceed=function(a,n,e,r,s){a.css({"-webkit-transform":e,transform:e,"-webkit-transition":"0.9s",transition:"0.9s"}),n.css({"-webkit-transform":r,transform:r,"-webkit-transition":"0.9s",transition:"0.9s"}),n.one(l,function(){a.css({"-webkit-transform":"none",transform:"none","-webkit-transition":"none",transition:"none",top:0,left:0,"z-index":2}).hide(),n.css({"-webkit-transform":"none",transform:"none","-webkit-transition":"none",transition:"none",top:0,left:0,"z-index":10}),d(n),u(a),s.isForward&&a.hasClass("pause")&&a.removeClass("pause"),s.curPage=n;var e=s.pageLength-1;switch(s.pageIndex){case 0:s.pageIndex=s.isForward?s.pageIndex+1:e;break;case e:s.pageIndex=s.isForward?0:s.pageIndex-1;break;default:s.pageIndex+=s.isForward?1:-1}var r=s.pageIndex;if(t(c.opts.loadFn)){var i=c.opts.loadFn[r]?c.opts.loadFn[r]:null;t(i)&&i.forEach(function(a,t){var n=a.fn,e=a.arguments?a.arguments:null,r=a.delay?a.delay:void 0;isNaN(r)?n.apply(this,e):setTimeout(function(){n.apply(this,e)},r)})}setTimeout(function(){s.isAnimating=s.isForward=!1,s.startPos=s.curPos=void 0,s.nextPage=null},20)}).emulateTransitionEnd(910)},p._transFail=function(a,t,n){a.css({"-webkit-transform":"translate3d(0, 0, 0) scale(1)",transform:"translate3d(0, 0, 0) scale(1)","-webkit-transition":"0.9s",transition:"0.9s"}),t.css({"-webkit-transform":"translate3d(0, 0, 0) scale(1)",transform:"translate3d(0, 0, 0) scale(1)","-webkit-transition":"0.9s",transition:"0.9s"}),t.one(l,function(){a.css({"-webkit-transform":"none",transform:"none","-webkit-transition":"none",transition:"none",top:0,left:0,"z-index":10}),t.css({"-webkit-transform":"none",transform:"none","-webkit-transition":"none",transition:"none",top:0,left:0,"z-index":2}).hide(),setTimeout(function(){n.isAnimating=n.isForward=!1,n.startPos=n.curPos=void 0,n.nextPage=null},20)}).emulateTransitionEnd(950)},p.normal={transNext:function(a,t,n){var e=_nextTrans=r()?"translate3d(0, "+n+"px, 0)":"translate3d("+n+"px, 0, 0)";p._transNext(a,t,e,_nextTrans)},transSucceed:function(a,t,e){var s=c.params;n();var i=_nextTrans=r()?"translate3d(0, "+s.h+"px, 0)":"translate3d("+s.w+"px, 0, 0)";p._transSucceed(a,t,i,_nextTrans,s)},transFail:function(a,t){var n=c.params;p._transFail(a,t,n)}},p.scale={transNext:function(t,n,e){var s=r()?1-Math.abs(e)/a(window).height():1-Math.abs(e)/a(window).width();t.css({"-webkit-transform-origin":c.params.isForward?r()?"center bottom":"right center":r()?"center top":"left center","transform-origin":c.params.isForward?r()?"center bottom":"right center":r()?"center top":"left center"});var i=r()?"translate3d(0, "+e+"px, 0) scale("+Math.sqrt(s)+")":"translate3d("+e+"px, 0, 0) scale("+Math.sqrt(s)+")",o=r()?"translate3d(0, "+e+"px, 0) scale(1)":"translate3d("+e+"px, 0, 0) scale(1)";p._transNext(t,n,i,o)},transSucceed:function(t,e,s){var i=c.params,o=r()?1-Math.abs(s)/a(window).height():1-Math.abs(s)/a(window).width();n();var d=r()?"translate3d(0, "+i.h+"px, 0) scale("+Math.sqrt(o)+")":"translate3d("+i.w+"px, 0, 0) scale("+Math.sqrt(o)+")",u=r()?"translate3d(0, "+i.h+"px, 0) scale(1)":"translate3d("+i.w+"px, 0, 0) scale(1)";p._transSucceed(t,e,d,u,i)},transFail:function(a,t){var n=c.params;p._transFail(a,t,n)}},p.fade={transNext:function(t,n,e){var s=r()?1-Math.abs(e)/a(window).height():1-Math.abs(e)/a(window).width(),i=_nextTrans=r()?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";t.css("opacity",Math.pow(s,2)),n.css("opacity",1.5-s),p._transNext(t,n,i,_nextTrans)},transSucceed:function(a,t,e){var s=c.params;n();var i=_nextTrans=r()?"translate3d(0, "+s.h+"px, 0)":"translate3d("+s.w+"px, 0, 0)";a.css("opacity",0),t.css("opacity",1),p._transSucceed(a,t,i,_nextTrans,s)},transFail:function(a,t){var n=c.params;a.css("opacity",1),t.css("opacity",0),p._transFail(a,t,n)}},p.cover={transNext:function(a,t,n){var e=r()?"translate3d(0, "+n+"px, 0)":"translate3d("+n+"px, 0, 0)";p._transNext(a,t,"none",e)},transSucceed:function(a,t,e){var s=c.params;n();_nextTrans=r()?"translate3d(0, "+s.h+"px, 0)":"translate3d("+s.w+"px, 0, 0)";p._transSucceed(a,t,"none",_nextTrans,s)},transFail:function(a,t){var n=c.params;p._transFail(a,t,n)}}}(window.jQuery||window.Zepto);
=======
/**
 * YummySlide
 * @author liucheng 421922402@qq.com
 * @version 1.0.0
 */

;
(function($) {
    $.fn.yummySlide = function(option) {
        return new Slide(this, option);
    };

    var Slide = function(slide, option) {
        Slide.params.slide = slide;
        Slide.params.container = $(slide).find('.container');
        Slide.params.page = $(slide).find('.container .page');
        Slide.params.pageLength = $(slide).find('.container .page').length;

        Slide.opts = $.extend({}, Slide.option, option);
        this.init();
    };

    Slide.prototype.init = function() {
        var loop = Slide.opts.loop,
            direction = Slide.opts.direction,
            mode = Slide.opts.mode,
            order = Slide.opts.order;

        var _order = []; // 设置播放顺序
        if (order === 'sequential') { // 顺序播放
            for (var i = 0, l = Slide.params.pageLength; i < l; i++) {
                _order.push(i);
            }
        } else if (order === 'reverse') { // 逆序播放
            for (var i = Slide.params.pageLength; i >= 0; --i) {
                _order.push(i);
            }
        } else if (typeof order === 'object') { // 用户自定义数组
            if (order.length !== Slide.params.pageLength) return;
            _order = order;
        }

        Slide.method = new SlideMethod(mode);

        Slide.params.pageIndex = 0;
        Slide.params.order = _order;
        this.styleInit(); // 样式初始化
        this.bindEvent(); // 绑定事件
    };

    Slide.option = {
        loop: false, // false | true 循环滑动 默认不循环滚动
        order: 'sequential', // sequential | reverse | [array] 播放次序 顺序|逆序 或者数组来表示 默认顺序
        direction: 'vertical', // vertical | horizontal 滑动方向 默认纵向滑动
        mode: 'scale', // normal | cover | fade | scale 切换效果 普通|覆盖|淡入淡出|缩放 默认普通
        loadFn: null, // 每一页加载完成后执行函数
        init: null, // 首次加载完成后执行函数
        custom: null // 自定义触发滑动方法
    };

    var SlideMethod = function(mode) {
        var method;
        switch (mode) {
            case 'normal':
                method = SlideMethod.normal;
                break;

            case 'cover':
                method = SlideMethod.cover;
                break;

            case 'fade':
                method = SlideMethod.fade;
                break;

            case 'scale':
                method = SlideMethod.scale;
                break;

            default:
                method = SlideMethod.scale;
                break;
        }

        SlideMethod.prototype.transNext = method.transNext;
        SlideMethod.prototype.transSucceed = method.transSucceed;
        SlideMethod.prototype.transFail = method.transFail;
    }

    Slide.params = {
        slide: null, // slider
        container: null, // 滑页容器
        page: null, // 滑页
        order: [], // 滑动顺序
        pageLength: undefined, // 滑页数量
        curPage: null, // 当前页
        nextPage: null, // 下一页
        pageIndex: 0, // 当前页数  从0开始计数
        startPos: undefined, // 起始位置
        curPos: undefined, // 当前位置
        isAnimating: false, // 是否正在滑动
        isTap: true, // 判断是否只是点了一下，没有触发touchmove
        h: undefined, // 屏幕高度
        w: undefined, // 屏幕宽度
        isForward: 0 // 是否往前滑
    };


    /**
     * 样式重置
     */
    Slide.prototype.styleInit = function() {
        var $container = Slide.params.container,
            $slide = Slide.params.slide,
            $page = Slide.params.page,
            order = Slide.params.order,
            pageLength = Slide.params.pageLength;

        $slide.css({
            width: '100%',
            height: '100%'
        });

        $container.css({
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        });

        $page.css({
            display: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            'z-index': 2
        });
        Slide.params.curPage = $page.eq(order[0]);
        curPage = Slide.params.curPage;
        curPage.show().css({
            'z-index': 10
        });
        addAnimation(curPage);

        // 加载每一页之后的执行方法
        if (!!Slide.opts.loadFn) {
            var _loadFn = Slide.opts.loadFn[0] ? Slide.opts.loadFn[0] : null;
            if (!!_loadFn) {
                for (var i = 0, j = _loadFn.length; i < j; i++) {
                    var _fn = _loadFn[i].fn;
                    var _arguments = _loadFn[i].arguments;
                    var delay = _loadFn[i].delay ? _loadFn[i].delay : null;
                    if (!!delay) {
                        _fn && setTimeout(function() {
                            _fn.apply(Slide, _arguments);
                        }, delay);
                    } else {
                        _fn && _fn.apply(Slide, _arguments);
                    }
                }
            }
        }

        for (var l = pageLength, i = 0; i < l; i++) {
            $page.eq(order[i]).attr('data-order', i);
        }
        $container.show();
        !!Slide.opts.init && Slide.opts.init();
    };


    /**
     * touch事件绑定
     */
    Slide.prototype.bindEvent = function() {
        var $this = this,
            $container = Slide.params.container;

        $(document).on('touchmove', function(e) {
            e.preventDefault();
        });
        var custom = !!Slide.opts.custom ? Slide.opts.custom : null;
        !!custom && (function() {
            for (var i = custom.length - 1; i >= 0; i--) {
                var customObj = custom[i].obj,
                    customTrigger = custom[i].trigger;
                customObj.each(function() {
                    $(this).on(customTrigger, function(e) {
                        $this.customMove();
                    });
                });
            };
        })();

        $container.on('touchstart', $this.start).on('touchmove', $this.move).on('touchend touchcancel', $this.end);
    };

    // addAnimation与removeAnimation方法，让页面稳定之后再加载动画，页面隐藏动画即隐藏
    var addAnimation = function(page) {
        page.find('[data-animation]').each(function() {
            $(this).addClass($(this).data('animation'));
        });
    };

    var removeAnimation = function(page) {
        page.find('[data-animation]').each(function() {
            $(this).removeClass($(this).data('animation'));
        });
    };


    /**
     * 自定义触发事件处理方法
     */
    Slide.prototype.customMove = function() {
        if (Slide.params.isAnimating) return;
        var params = Slide.params,
            $page = params.page,
            pageIndex = params.pageIndex,
            pageLength = params.pageLength,
            order = params.order;
        params.isForward = true;

        params.curPage = $page.eq(order[pageIndex]);
        if (pageIndex < pageLength - 1) { // 此处判决条件需要修改！！！
            params.nextPage = $page.eq(order[pageIndex + 1]);
            params.nextPage.show();
            initNextPage(Slide.params);
            params.isAnimating = true;
            Slide.method.transSucceed(params.curPage, params.nextPage, 0);
        } else {
            params.isForward = params.nextPage = null;
        }
    }

    /**
     * start move end 三个touch事件处理方法
     */
    Slide.prototype.start = function(e) {
        if (!!Slide.params.isAnimating) return;
        var params = Slide.params,
            $page = params.page;
        var touch = window.Zepto ? e.changedTouches[0] : e.originalEvent.touches[0];
        params.startPos = getPosition(touch);
        params.curPage = $page.eq(params.order[params.pageIndex]);
    }

    Slide.prototype.move = function(e) {
        if (!!Slide.params.isAnimating || !Slide.params.startPos) return;
        e.preventDefault();
        Slide.params.isTap = false;
        var touch = window.Zepto ? e.changedTouches[0] : e.originalEvent.touches[0];
        var coordinate = getPosition(touch); // 获取当前坐标

        var params = Slide.params,
            startPos = params.startPos,
            curPos = params.curPos,
            $curPage = params.curPage;

        var distance = coordinate - startPos;
        if (distance < 0 && $curPage.hasClass('pause')) return; // 如果往前滑而且当前页还没有触发过自定义滑动
        // 判断是否滑过起点改变方向，否则就直接跳过getNextPage
        if (isForward() !== params.isForward || params.isForward === 0 || params.isForward === null) getNextPage(distance); // 获取nextPage
        $nextPage = Slide.params.nextPage;
        if (!$nextPage) return; // 非循环滑动时候滑到边界的时候会触发此条
        params.curPos = coordinate;
        Slide.method.transNext($curPage, $nextPage, distance);
    }

    Slide.prototype.end = function(e) {
        if (!!Slide.params.isAnimating || !!Slide.params.isTap || !Slide.params.nextPage || !Slide.params.startPos) return Slide.params.startPos = undefined;
        var params = Slide.params,
            startPos = params.startPos,
            curPos = params.curPos,
            $curPage = params.curPage,
            $nextPage = params.nextPage;

        params.isTap = true;
        params.isAnimating = true;
        var distance = curPos - startPos;
        if (Math.abs(distance) > 30) {
            Slide.method.transSucceed($curPage, $nextPage, distance);
        } else {
            Slide.method.transFail($curPage, $nextPage);
        }
    }

    $.fn.emulateTransitionEnd = function(duration) {
        var called = false,
            $el = this;

        $(this).one('webkitTransitionEnd', function() {
            called = true;
        });
        var callback = function() {
            if (!called) $($el).trigger('webkitTransitionEnd');
        };
        setTimeout(callback, duration);
    };

    var transitionEnd = (function() {
        var doc = window.document;
        var element = doc.body || doc.documentElement;
        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (element.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }
    })();

    /**
     * 内部私有方法
     */


    function getWH() {
        Slide.params.w = Slide.params.isForward ? -$(window).width() : $(window).width();
        Slide.params.h = Slide.params.isForward ? -$(window).height() : $(window).height();
    }

    function getPosition(touch) {
        return isVertical() ? touch.pageY : touch.pageX;
    }

    function isVertical() {
        return Slide.opts.direction === 'vertical';
    }

    function getNextPage(distance) {
        if (distance === 0) return !!Slide.params.nextPage && (Slide.params.nextPage = null);

        var params = Slide.params,
            $page = params.page,
            order = params.order,
            pageIndex = params.pageIndex,
            pageLength = params.pageLength;
        var loop = Slide.opts.loop;
        var max = pageLength - 1;
        if (distance < 0) {
            params.nextPage = pageIndex == max ? (loop ? $page.eq(order[0]) : null) : $page.eq(order[pageIndex + 1]);
        } else {
            params.nextPage = pageIndex == 0 ? (loop ? $page.eq(order[max]) : null) : $page.eq(order[pageIndex - 1]);
        }
        if (params.nextPage === null) {
            return params.startPos = 0;
        }
        params.nextPage.show();
        params.isForward = isForward();
        return initNextPage(params);
    }

    function initNextPage(params) {
        if (isVertical()) {
            params.nextPage.css({
                'top': params.isForward ? '100%' : '-100%'
            });
        } else {
            params.nextPage.css({
                'left': params.isForward ? '100%' : '-100%'
            });
        }
    }

    function isForward() { // 返回bool，true = 往上滑或者往左滑 === 往前滑
        return Slide.params.curPos < Slide.params.startPos;
    }

    /**
     * _transNext     方法为滑动的基本方法，其他效果的方法可扩展此方法
     * _transSucceed  方法为滑动成功之后放手自动完成余下滑动的基本方法，其他效果的方法可扩展此方法
     * _transFail     方法为滑动失败之后放手自动完成余下滑动的基本方法，其他效果的方法可扩展此方法
     */
    SlideMethod._transNext = function(curPage, nextPage, _curTrans, _nextTrans) {
        curPage.css({
            '-webkit-transform': _curTrans,
            'transform': _curTrans,
            'z-index': 8
        });
        nextPage.css({
            '-webkit-transform': _nextTrans,
            'transform': _nextTrans,
            'z-index': 10
        });
    }
    SlideMethod._transSucceed = function(curPage, nextPage, _curTrans, _nextTrans, params) {
        curPage.css({
            '-webkit-transform': _curTrans,
            'transform': _curTrans,
            '-webkit-transition': '0.9s',
            'transition': '0.9s'
        });
        nextPage.css({
            '-webkit-transform': _nextTrans,
            'transform': _nextTrans,
            '-webkit-transition': '0.9s',
            'transition': '0.9s'
        });
        nextPage.one(transitionEnd, function() {
            curPage.css({
                '-webkit-transform': 'none',
                'transform': 'none',
                '-webkit-transition': 'none',
                'transition': 'none',
                top: 0,
                left: 0,
                'z-index': 2
            }).hide();
            nextPage.css({
                '-webkit-transform': 'none',
                'transform': 'none',
                '-webkit-transition': 'none',
                'transition': 'none',
                top: 0,
                left: 0,
                'z-index': 10
            });
            addAnimation(nextPage);
            removeAnimation(curPage);
            params.isForward && curPage.hasClass('pause') && curPage.removeClass('pause');
            params.curPage = nextPage;
            var max = params.pageLength - 1;
            switch (params.pageIndex) {
                case 0:
                    params.pageIndex = params.isForward ? params.pageIndex + 1 : max;
                    break;
                case max:
                    params.pageIndex = params.isForward ? 0 : params.pageIndex - 1;
                    break;
                default:
                    params.pageIndex += params.isForward ? 1 : -1;
                    break;
            }
            var pageIndex = params.pageIndex;

            if (!!Slide.opts.loadFn) {
                var _loadFn = Slide.opts.loadFn[pageIndex] ? Slide.opts.loadFn[pageIndex] : null;
                if (!!_loadFn) {
                    for (var i = 0, j = _loadFn.length; i < j; i++) {
                        var _fn = _loadFn[i].fn;
                        var _arguments = _loadFn[i].arguments;
                        var delay = _loadFn[i].delay ? _loadFn[i].delay : null;
                        if (!!delay) {
                            _fn && setTimeout(function() {
                                _fn.apply(Slide, _arguments);
                            }, delay);
                        } else {
                            _fn && _fn.apply(Slide, _arguments);
                        }
                    }
                }
            }
            setTimeout(function() {
                params.isAnimating = params.nextPage = params.startPos = params.curPos = params.isForward = null;
            }, 20);
        }).emulateTransitionEnd(900 + 10);
    }
    SlideMethod._transFail = function(curPage, nextPage, params) {
        curPage.css({
            '-webkit-transform': 'translate3d(0, 0, 0) scale(1)',
            'transform': 'translate3d(0, 0, 0) scale(1)',
            '-webkit-transition': '0.9s',
            'transition': '0.9s'
        });
        nextPage.css({
            '-webkit-transform': 'translate3d(0, 0, 0) scale(1)',
            'transform': 'translate3d(0, 0, 0) scale(1)',
            '-webkit-transition': '0.9s',
            'transition': '0.9s'
        });
        nextPage.one(transitionEnd, function() {
            curPage.css({
                '-webkit-transform': 'none',
                'transform': 'none',
                '-webkit-transition': 'none',
                'transition': 'none',
                top: 0,
                left: 0,
                'z-index': 10
            });
            nextPage.css({
                '-webkit-transform': 'none',
                'transform': 'none',
                '-webkit-transition': 'none',
                'transition': 'none',
                top: 0,
                left: 0,
                'z-index': 2
            }).hide();
            setTimeout(function() {
                params.isAnimating = params.nextPage = params.startPos = params.curPos = params.isForward = null;
            }, 20);
        }).emulateTransitionEnd(900 + 50);
    }

    /**
     * 内置滑动方法，内部滑动方法扩展SlideMethod三个方法
     * normal 方法为基本滑动，无任何效果
     * scale  方法为缩放
     * fade   方法为淡入淡出效果，不配合缩放
     * cover  方法为覆盖滑动
     */
    SlideMethod.normal = {
        transNext: function(curPage, nextPage, distance) {
            var _curTrans = _nextTrans = isVertical() ? 'translate3d(0, ' + distance + 'px, 0)' : 'translate3d(' + distance + 'px, 0, 0)';
            SlideMethod._transNext(curPage, nextPage, _curTrans, _nextTrans);
        },

        transSucceed: function(curPage, nextPage, distance) {
            var params = Slide.params;
            getWH();
            var _curTrans = _nextTrans = isVertical() ? 'translate3d(0, ' + params.h + 'px, 0)' : 'translate3d(' + params.w + 'px, 0, 0)';
            SlideMethod._transSucceed(curPage, nextPage, _curTrans, _nextTrans, params);
        },

        transFail: function(curPage, nextPage) {
            var params = Slide.params;
            SlideMethod._transFail(curPage, nextPage, params);
        }
    }
    SlideMethod.scale = {
        transNext: function(curPage, nextPage, distance) {
            var _scale = isVertical() ? (1 - Math.abs(distance) / $(window).height()) : (1 - Math.abs(distance) / $(window).width());
            curPage.css({
                '-webkit-transform-origin': Slide.params.isForward ? (isVertical() ? 'center bottom' : 'right center') : (isVertical() ? 'center top' : 'left center'),
                'transform-origin': Slide.params.isForward ? (isVertical() ? 'center bottom' : 'right center') : (isVertical() ? 'center top' : 'left center')
            });
            var _curTrans = isVertical() ? 'translate3d(0, ' + distance + 'px, 0) scale(' + Math.sqrt(_scale) + ')' : 'translate3d(' + distance + 'px, 0, 0) scale(' + Math.sqrt(_scale) + ')';
            var _nextTrans = isVertical() ? 'translate3d(0, ' + distance + 'px, 0) scale(1)' : 'translate3d(' + distance + 'px, 0, 0) scale(1)';
            SlideMethod._transNext(curPage, nextPage, _curTrans, _nextTrans);
        },

        transSucceed: function(curPage, nextPage, distance) {
            var params = Slide.params;
            var _scale = isVertical() ? (1 - Math.abs(distance) / $(window).height()) : (1 - Math.abs(distance) / $(window).width());
            getWH();
            var _curTrans = isVertical() ? 'translate3d(0, ' + params.h + 'px, 0) scale(' + Math.sqrt(_scale) + ')' : 'translate3d(' + params.w + 'px, 0, 0) scale(' + Math.sqrt(_scale) + ')';
            var _nextTrans = isVertical() ? 'translate3d(0, ' + params.h + 'px, 0) scale(1)' : 'translate3d(' + params.w + 'px, 0, 0) scale(1)';
            SlideMethod._transSucceed(curPage, nextPage, _curTrans, _nextTrans, params);
        },

        transFail: function(curPage, nextPage) {
            var params = Slide.params;
            SlideMethod._transFail(curPage, nextPage, params);
        }
    }
    SlideMethod.fade = {
        transNext: function(curPage, nextPage, distance) {
            var _scale = isVertical() ? (1 - Math.abs(distance) / $(window).height()) : (1 - Math.abs(distance) / $(window).width());
            var _curTrans = _nextTrans = isVertical() ? 'translate3d(0, ' + distance + 'px, 0)' : 'translate3d(' + distance + 'px, 0, 0)';
            curPage.css('opacity', Math.pow(_scale, 2));
            nextPage.css('opacity', 1.5 - _scale);
            SlideMethod._transNext(curPage, nextPage, _curTrans, _nextTrans);
        },

        transSucceed: function(curPage, nextPage, distance) {
            var params = Slide.params;
            getWH();
            var _curTrans = _nextTrans = isVertical() ? 'translate3d(0, ' + params.h + 'px, 0)' : 'translate3d(' + params.w + 'px, 0, 0)';
            curPage.css('opacity', 0);
            nextPage.css('opacity', 1);
            SlideMethod._transSucceed(curPage, nextPage, _curTrans, _nextTrans, params);
        },

        transFail: function(curPage, nextPage) {
            var params = Slide.params;
            curPage.css('opacity', 1);
            nextPage.css('opacity', 0);
            SlideMethod._transFail(curPage, nextPage, params);
        }
    }
    SlideMethod.cover = {
        transNext: function(curPage, nextPage, distance) {
            var _nextTrans = isVertical() ? 'translate3d(0, ' + distance + 'px, 0)' : 'translate3d(' + distance + 'px, 0, 0)';
            SlideMethod._transNext(curPage, nextPage, 'none', _nextTrans);
        },

        transSucceed: function(curPage, nextPage, distance) {
            var params = Slide.params;
            getWH();
            var _curTrans = _nextTrans = isVertical() ? 'translate3d(0, ' + params.h + 'px, 0)' : 'translate3d(' + params.w + 'px, 0, 0)';
            SlideMethod._transSucceed(curPage, nextPage, 'none', _nextTrans, params);
        },

        transFail: function(curPage, nextPage) {
            var params = Slide.params;
            SlideMethod._transFail(curPage, nextPage, params);
        }
    }
})(window.jQuery || window.Zepto);
>>>>>>> parent of 40325ae... 构建工具里增加autoprefixer与uglify
