window.xs_screen_max=768;window.sm_screen_max=992;function viewport(){var c=window,b="inner";if(!("innerWidth" in window)){b="client";c=document.documentElement||document.body}return{width:c[b+"Width"],height:c[b+"Height"]}}function initialise_main_menu_horizontal_functionality(){var a=$("#main-menu");if(!a.hasClass("main_menu_horizontal_functionality")){a.addClass("main_menu_horizontal_functionality").removeClass("main_menu_mobile_functionality");$("#main-menu li.menu-item").removeClass("active");$("#main-menu li.menu-item .sub-menu:visible").hide();$("#main-menu").show();$("#main-menu li.menu-item > a").off();$("#main-menu > li.menu-item").hover(function(){$(this).addClass("active");$(this).children(".sub-menu").fadeIn()},function(){$(this).removeClass("active");$(this).children(".sub-menu").fadeOut("fast")});$("#main-menu li.menu-item .sub-menu").hover(function(){var b=viewport().width;$(this).show();$(this).parent(".menu-item").addClass("active");$(this).children(".menu-item").hover(function(){var c=$(this).offset().left+$(this).width()+$(this).width();if(c>b){$(this).children(".sub-menu").removeClass("menu_on_the_right").addClass("menu_on_the_left")}else{$(this).children(".sub-menu").removeClass("menu_on_the_left").addClass("menu_on_the_right")}$(this).addClass("active");$(this).children(".sub-menu").fadeIn().css({"z-index":"105"});$(this).parents(".sub-menu").css({"z-index":"100"})},function(){$(this).removeClass("active");$(this).children(".sub-menu").fadeOut("fast")})},function(){$(this).parent(".menu-item").hover(function(){$(this).addClass("active");$(this).children(".sub-menu").fadeIn()},function(){$(this).removeClass("active");$(this).children(".sub-menu").fadeOut("fast")})})}}function initialise_tablet_mainmenu_submenu_fix(){$("#main-menu li.menu-item > a").click(function(b){if(jQuery.browser.mobile&&viewport().width>window.xs_screen_max){var a=$(this).parent(".menu-item").find(".sub-menu");if(a.length>0&&!a.hasClass("active")){b.preventDefault();return false}}})}function initialise_main_menu_mobile_functionality(){var a=$("#main-menu");if(!a.hasClass("main_menu_mobile_functionality")){a.addClass("main_menu_mobile_functionality").removeClass("main_menu_horizontal_functionality");$("#main-menu li.menu-item").removeClass("active");$("#main-menu li.menu-item .sub-menu").hide();$("#main-menu").hide();$("#mobile-menu-icon").removeClass("active");$("#mobile-menu-icon span").removeClass("glyphicon-remove").addClass("glyphicon-th");$("#main-menu li.menu-item").off();$("#main-menu li.menu-item .sub-menu").off();$("#mobile-menu-icon").off();$("#mobile-menu-icon").click(function(b){if($("#main-menu").is(":visible")&&$(this).hasClass("active")){$("#main-menu").slideUp("fast");$("#main-menu .sub-menu").slideUp("fast");$("#main-menu li.menu-item").removeClass("active");$(this).removeClass("active");$(this).removeClass("active").children("span").removeClass("glyphicon-remove").addClass("glyphicon-th");b.preventDefault();return false}else{$(this).addClass("active").children("span").removeClass("glyphicon-th").addClass("glyphicon-remove");$("#main-menu").slideDown();b.preventDefault();return false}});$("#main-menu li.menu-item > a").click(function(c){var b=$(this).parent("li.menu-item");if(b.children(".sub-menu").length>0){if(b.children(".sub-menu").is(":visible")){if($(this).attr("href")=="#"){b.find(".sub-menu:visible").slideUp("fast",function(){b.removeClass("active");b.find(".sub-menu li.menu-item").removeClass("active");c.preventDefault();return false});c.preventDefault();return false}else{}}else{b.children(".sub-menu").slideDown("",function(){b.addClass("active");c.preventDefault();return false});c.preventDefault();return false}}else{}})}}function initialise_submenu_functionality(){$(".sidebar-menu li.menu-item > a").click(function(b){var a=$(this).parent("li.menu-item");if(a.children(".sub-menu").length>0){if(a.children(".sub-menu").is(":visible")){if($(this).attr("href")=="#"){a.find(".sub-menu:visible").slideUp("fast",function(){a.removeClass("active");a.find(".sub-menu li.menu-item").removeClass("active");b.preventDefault();return false});b.preventDefault();return false}else{}}else{a.children(".sub-menu").slideDown("",function(){a.addClass("active");$(this).parent(".menu-item").siblings().find(".sub-menu:visible").slideUp("fast",function(){$(this).parent(".menu-item").removeClass("active");b.preventDefault();return false});b.preventDefault();return false});b.preventDefault();return false}}else{}})}function main_menu_fixed_at_top_on_scroll(e){var g=$("header:first-of-type");if(g.length==0){return false}var d=g.attr("data-menu-fixed-at-top-on-scroll");var b=$("header #main-menu-container");if(b.length==0){return false}var c=$(document).scrollTop();var f=g.attr("data-original-top-offset");var a=g.attr("data-original-header-height");if(f===undefined||isNaN(f)||a===undefined||isNaN(a)||e==true){g.removeClass("fixed-at-top");$(".outer-container").css({"padding-top":""});f=b.offset().top;a=g.innerHeight();g.attr("data-original-top-offset",f);
g.attr("data-original-header-height",a)}if((d=="true"&&c>f)||viewport().width<window.xs_screen_max){g.addClass("fixed-at-top");$(".outer-container").css({"padding-top":a+"px"});if(viewport().width<window.xs_screen_max){toggle_scroll_to_mobile_main_menu("enable")}else{toggle_scroll_to_mobile_main_menu("disable")}}else{g.removeClass("fixed-at-top");$(".outer-container").css({"padding-top":""});toggle_scroll_to_mobile_main_menu("disable")}}function toggle_scroll_to_mobile_main_menu(e){var d=$("#main-menu");d.css({"overflow-y":"visible",height:"auto"});if(e=="enable"){var b=$(document).scrollTop();var f=$("#main-menu").offset().top;var c=f-b;if(c<0||isNaN(c)){c=60}var a=viewport().height-(c+10);d.css({"overflow-y":"auto","max-height":a+"px"})}}function set_equal_heights_to_list_items(){var a=$(".equal-height");a.each(function(){var b=$(this).find(".item");b.each(function(){$(this).find(".item-content").css({height:"auto"})});if(viewport().width>window.xs_screen_max){var d=[];b.each(function(){d.push($(this).find(".item-content").height())});var c=Math.max.apply(Math,d);b.each(function(){$(this).find(".item-content").height(c)})}})}function set_equal_heights_to_section_columns(){var a=$(".horizontal-section-container");a.each(function(){$(this).find(".row").first().children("*[class*='col-']").not("*[class*='-12']").css({"min-height":"1px"})});if($("body").hasClass("isolated-sections")&&viewport().width>window.xs_screen_max){a.each(function(){var d=$(this).find(".row").first().children("*[class*='col-']").not("*[class*='-12']");if(d.length>1){var b=[];d.each(function(){b.push($(this).height())});var c=Math.max.apply(Math,b);d.each(function(){$(this).css({"min-height":c+"px"})})}})}}function fade_in_gallery_images(){var a=$(".gallery-grid");a.each(function(){var b=$(this);if(b.attr("data-gallery-hidden-on-page-load")=="true"){b.find(".gallery-loader").fadeOut("fast");b.find(".gallery-item").animate({opacity:1},1000)}})}function add_clear_items_to_container_rows(a,c){if(a===undefined||a.length==0||c===undefined){return false}var b=a.children(".item");if(b.length==0){return false}a.find(".clearfix_item").remove();var d=c;a.find(".item:nth-of-type("+d+"n+"+d+")").after('<hr class="clearfix_item clearfix" />')}function go_to_top_visibility(){var a=$("#go-to-top");if(a.length>0){var b=$(document).scrollTop();if(b<(viewport().height*0.5)){a.removeClass("active")}else{a.addClass("active")}}}function scroll_to_top(a){if(a!==undefined){a.preventDefault()}$("html, body").stop().animate({scrollTop:0},1500,"easeInOutCubic",function(){$("#go-to-top").removeClass("active")});return false}function validate_and_submit_forms(b){var a=(b!==undefined&&b.length>0)?b:$("form.validate-form");a.each(function(){var c=$(this);c.find(".validate-field").each(function(){$(this).change(function(){$(this).siblings(".alert").remove();if($(this).val().trim()!=""){var e=validate_fields(c,$(this));if(e.length>0){if(e[0]["message"]!==undefined&&e[0]["message"]!=""&&e[0]["message"]!="success"){var d='<div class="alert">'+e[0]["message"]+"</div>";$(this).after(d);$(this).siblings(".alert").fadeIn("fast")}}}})});c.find("#form-captcha-refresh").click(function(){var e=new Date().getTime();c.find("#form-captcha-img").replaceWith('<img id="form-captcha-img" src="php/form_captcha/captcha_img.php?t='+e+'" class="img-responsive" title="Reload" style="display:none">');c.find("#form-captcha").val("");setTimeout(function(){c.find("#form-captcha-img").show()},500)});c.submit(function(e){e.preventDefault();$(this).find(".form-loader").fadeIn("fast");var d=$(this).attr("action");if(d===undefined&&d==""){return false}$(this).find(".alert").remove();$(this).find(".form-general-error-container").empty();var f=false;$(this).find(".validate-field").each(function(){var h=validate_fields(c,$(this));if(h.length>0){if(h[0]["message"]!==undefined&&h[0]["message"]!=""&&h[0]["message"]!="success"){var g='<div class="alert">'+h[0]["message"]+"</div>";$(this).after(g);$(this).siblings(".alert").fadeIn("fast");f=true}}});if(f==true){$(this).find(".form-loader").fadeOut("fast");return false}$.ajax({type:"POST",url:d,data:$(this).serialize(),dataType:"html",success:function(j){c.find(".form-loader").fadeOut("fast");var l=(j=="success")?true:false;var h=(j=="captcha")?false:true;var g="";switch(j){case"success":g="Form submitted successfully.";break;case"captcha":g="Incorrect CAPTCHA.";break;case"incomplete":g="Please fill in all required fields.";break;case"error":g="An error occured. Please try again later.";break}var i='<div class="alert ';i+=(l==true)?"success":"error";i+='">'+g+"</div>";if(!h){c.find("#form-captcha").parents(".form-group").append(i);c.find("#form-captcha").parents(".form-group").find(".alert").fadeIn("fast")}else{c.find(".form-general-error-container").html(i).fadeIn("fast",function(){$(this).delay(10000).fadeOut("fast",function(){$(this).html("")})})}var k=new Date().getTime();c.find("#form-captcha-img").replaceWith('<img id="form-captcha-img" src="php/form_captcha/captcha_img.php?t='+k+'" class="img-responsive" title="Reload" style="display:none">');
c.find("#form-captcha").val("");setTimeout(function(){c.find("#form-captcha-img").show()},500);if(l==true){c.find(".form-control").val("")}},error:function(h){c.find(".form-loader").fadeOut("fast");var g='<div class="alert">An error occured. Please try again later.</div>';c.find(".form-general-error-container").html(g).fadeIn("fast")}})})})}function validate_fields(d,a){if(d!==undefined&&d.length>0){var b=(a!==undefined&&a.length>0)?a:d.find(".validate");var c=new Array();b.each(function(){var e=$(this).attr("data-validation-type");var h=$(this).hasClass("required");var g=$(this).val().trim();var f=new Array();f.field_object=$(this);f.message="success";if(h==true&&(g==""||g===null||g===undefined)){f.message="This field is required"}if(e=="string"&&(g!=""&&g!==null&&g!==undefined)){if(g.match(/^[a-z0-9 .\-]+$/i)==null){f.message="Invalid characters found."}}else{if(e=="email"&&(g!=""&&g!==null&&g!==undefined)){if(g.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)==null){f.message="Please enter a valid email address."}}else{if(e=="phone"&&(g!=""&&g!==null&&g!==undefined)){if(g.match(/^\(?\+?[\d\(\-\s\)]+$/)==null){f.message="Invalid characters found."}}}}c.push(f)});return c}}function mainmenu_search_icon(){var d=$("#search-container");if(d.length==0){return false}if($("#main-menu-container #search-container").length==1){$("#main-menu-container #main-menu").addClass("search-icon-active")}var c=$("#search-container #search-icon");var a=$("#search-container #search-input");var b=$("#search-container #search-close");$("html").click(function(){var e=$("#search-container #search-input");if(c.hasClass("active")&&e.is(":visible")){e.slideUp("fast");c.removeClass("active")}});c.click(function(e){e.preventDefault();e.stopPropagation();var f=$("#search-container #search-input");if(c.hasClass("active")&&f.is(":visible")){f.slideUp("fast");c.removeClass("active")}else{f.slideDown("fast");c.addClass("active")}});b.click(function(e){e.preventDefault();e.stopPropagation();var g=$("#search-container #search-input");var f=$("#search-container #search-icon");if(f.hasClass("active")&&g.is(":visible")){g.slideUp("fast");f.removeClass("active")}});$("#search-container #search-input").click(function(e){e.stopPropagation()})};