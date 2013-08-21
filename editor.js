
alert("YOYO");

/*
var toolbar=document.createElement('div');
toolbar.setAttribute('id','toolbar');
toolbar.setAttribute('class','ui-widget-header ui-corner-all');

var btn=document.createElement('button');
btn.setAttribute('id','save');
btn.setAttribute('class','ui-widget-header ui-corner-all');
var txt = document.createTextNode('Save');

btn.appendChild(txt);
toolbar.appendChild(btn);
document.getElementsByTagName('body')[0].appendChild(toolbar);
*/
var jq191 = jQuery.noConflict();

jq191('body').prepend('<div id="toolbar" class="ui-widget-header ui-corner-all"><button id="save">Save</button><button id="create">Say</button><button id="resizify">Resize!</button><button id="index">z-index!</button><span id="radio"><input type="radio" id="radio1" name="radio" /><label for="radio1">Drag&Drop</label><input type="radio" id="radio2" name="radio" /><label for="radio2">Change Color</label><input type="radio" id="radio3" name="radio" /><label for="radio3">Delete</label><input type="radio" id="radio4" name="radio" /><label for="radio4">Font Resizer</label><input type="radio" id="radio5" name="radio" /><label for="radio5">Image Rotater</label></span><input  type="text" id="status" value="None"/><span id="AAA"><button class="jfontsize-button" id="jfontsize-m">A-</button><button class="jfontsize-button" id="jfontsize-d">A</button><button class="jfontsize-button" id="jfontsize-p">A+</button></span><span id="color-group"><button id="color-txt">Text Color</button><button id="color-bg">Background Color</button></span></div> ');
//document.getElementsByTagName('body')[0].innerHTML += '<div id="toolbar" class="ui-widget-header ui-corner-all"><button id="save">Save</button><button id="create">Say Something!</button><button id="resizify">Resize!</button><span id="radio"><input type="radio" id="radio1" name="radio" /><label for="radio1">Drag&Drop</label><input type="radio" id="radio2" name="radio" /><label for="radio2">Change Color</label><input type="radio" id="radio3" name="radio" /><label for="radio3">Delete</label><input type="radio" id="radio4" name="radio" /><label for="radio4">Font Resizer</label><input type="radio" id="radio5" name="radio" /><label for="radio5">Image Rotater</label></span><input  type="text" id="status" value="None"/><span id="AAA"><button class="jfontsize-button" id="jfontsize-m">A-</button><button class="jfontsize-button" id="jfontsize-d">A</button><button class="jfontsize-button" id="jfontsize-p">A+</button></span><span id="color-group"><button id="color-txt">Text Color</button><button id="color-bg">Background Color</button></span></div>';
jq191('body').append('<div id="dialog-color-txt" title="Color Picker"><p class="validateTips" style="font-size:15px; margin-top:15px; margin-bottom:15px;">Choose a Color</p><form><div><label class="span2" for="text-color">for text : </label><input id="text-color" class="color-dialog span1" type="color" value="#000000"/></div></form></div>');
jq191('body').append('<div id="dialog-color-bg" title="Color Picker"><p class="validateTips" style="font-size:15px; margin-top:15px; margin-bottom:15px;">Choose a Color</p><form><div><label class="span2" for="background-color">for background : </label><input id="background-color" class="color-dialog span1" type="color" value="#FFFFFF"/></div></form></div>');
jq191('body').append('<div id="dialog-word" title="Word Creater"><p class="validateTips" style="font-size:15px; margin-top:15px; margin-bottom:15px;">What do you wanna say:</p><input type="text" id="word" /></div>');
jq191('body').append('<div id="dialog-angle" title="Image Rotater"><p class="validateTips" style="font-size:15px; margin-top:15px; margin-bottom:15px;">What angle you want it to display:</p><input type="text" id="angle" />degree</div>');
jq191('body').append('<div id="dialog-index" title="Index Setting"><p class="validateTips" style="font-size:15px; margin-top:15px; margin-bottom:15px;">What z-index you want it to display:</p><input type="text" id="z-index" /></div>');


obj = "empty";
reset = 0;
resizeflag = 1;
dragmeflag = 0;
angle = 0;


jq191(function() {

  setDialog();
  setHover();

  jq191("#AAA").hide();
  jq191("#color-group").hide();
  jq191( "button" ).button();

  jq191( "#save" ).button({
    text: false,
    label: 'Save',
    icons: {
        primary: "ui-icon-disk"
    }
  });

  jq191('#create').click(function() {
  	alert("HA!!!!");
    //alert( $(" #status ").val("YOYO") );
    jq191("#status").val("Enter Word");
    jq191( "#dialog-word" ).dialog( "open" );
  });

  jq191('#index').click(function() {
  	//alert("HA!!!!");
    //alert( $(" #status ").val("YOYO") );
    if (obj!="empty"){
		jq191("#status").val("Enter Index");
		jq191( "#dialog-index" ).dialog( "open" );
	} else{
		alert("Please select a segment first!");
	}
  });

  jq191( "#radio" ).buttonset();

  jq191('input[name=radio]').change(function(){

    if (this.id == "radio1"){

      dragmeflag = 1;
      if (resizeflag==1){
        jq191(".resizeme").resizable( "destroy" );
        resizeflag = 0;
      }

      jq191(".hideme" ).removeAttr('onclick');
      jq191(".colorme" ).removeAttr('onclick');
      jq191(".fontme" ).removeAttr('onclick');
      jq191(".rotateme").removeAttr('onclick');
      jq191("#AAA").hide();
      jq191("#color-group").hide();
      jq191(".dragme" ).draggable( { cursor:"move"} );
      jq191("#status").val("Drag you want");

      jq191("img").draggable( { cursor:"move"} );

    }else if (this.id == "radio2"){
      // if (dragmeflag = 1){
      //     $(".dragme").draggable( "destroy" );
      //     dragmeflag = 1;
      // }
      if (resizeflag==1){
        jq191(".resizeme").resizable( "destroy" );
        resizeflag = 0;
      }

      jq191(".hideme" ).removeAttr('onclick');
      jq191(".colorme" ).removeAttr('onclick');
      jq191(".fontme" ).removeAttr('onclick');
      jq191(".rotateme").removeAttr('onclick');
      jq191("#AAA").hide();
      jq191("#color-group").show();
      jq191(".colorme" ).attr('onclick', 'Change(this);');

      if (obj!="empty"){
        jq191( "#status" ).val( "Selected" );
      } else{
        jq191( "#status" ).val( "Select an object" );
      } 

    }else if (this.id == "radio3"){
      if (resizeflag==1){
        jq191(".resizeme").resizable( "destroy" );
        resizeflag = 0;
      }

      jq191(".hideme" ).removeAttr('onclick');
      jq191(".colorme" ).removeAttr('onclick');
      jq191(".fontme" ).removeAttr('onclick');
      jq191(".rotateme").removeAttr('onclick');
      jq191("#AAA").hide();
      jq191("#color-group").hide();
      jq191(".hideme" ).attr('onclick', 'Delete(this);');

      jq191("#status").val("Click to delete");

      //$("img").attr('onclick', 'Delete(this);');

    }else if (this.id == "radio4"){
      if (resizeflag==1){
        jq191(".resizeme").resizable( "destroy" );
        resizeflag = 0;
      }

      jq191(".hideme" ).removeAttr('onclick');
      jq191(".colorme" ).removeAttr('onclick');
      jq191(".fontme" ).removeAttr('onclick');
      jq191(".rotateme").removeAttr('onclick');
      jq191("#AAA").show();
      jq191("#color-group").hide();
      jq191(".fontme" ).attr('onclick', 'Font(this);');

      if (obj!="empty"){
        jq191( "#status" ).val( "Selected" );
      } else{
        jq191( "#status" ).val( "Select an object" );
      } 

    }else if (this.id == "radio5"){
      if (resizeflag==1){
        jq191(".resizeme").resizable( "destroy" );
        resizeflag = 0;
      }

      jq191(".hideme" ).removeAttr('onclick');
      jq191(".colorme" ).removeAttr('onclick');
      jq191(".fontme" ).removeAttr('onclick');
      jq191(".rotateme").removeAttr('onclick');
      jq191("#AAA").hide();
      jq191("#color-group").hide();
      jq191(".rotateme" ).attr('onclick', 'Rotate(this);');
      
      if (obj!="empty"){
        jq191( "#status" ).val( "Selected" );
        jq191( "#dialog-angle" ).dialog( "open" );

      }else{
        jq191( "#status" ).val( "Select an object" );
      } 
    }
    
  });  //end of radio .change

  jq191(".resizeme").resizable({
   });
});  //end of function() 

function Font(item){
      alert(item);
      //alert( parseInt($(item).css('font-size')) );
      reset = parseInt(jq191(item).css('font-size'));
      now = reset;  
      obj = item;
    };

    jq191('#jfontsize-m').click(function() {
      if (obj!="empty" && reset==0){
        reset = parseInt(jq191(obj).css('font-size'));
        now = reset;
      }
      if (reset != 0 ){
        now = now-1;
        jq191(obj).css('font-size', now);
      }else {
        alert("Please select a segment first!");
      }
    });

    jq191('#jfontsize-d').click(function() {
      if (obj!="empty" && reset==0){
        reset = parseInt(jq191(obj).css('font-size'));
        now = reset;
      }
      if (reset != 0 ){
        now=reset;
        jq191(obj).css('font-size', now);
      }else {
        alert("Please select a segment first!");
      }
    });

    jq191('#jfontsize-p').click(function() {
      if (obj!="empty" && reset==0){
        reset = parseInt(jq191(obj).css('font-size'));
        now = reset;
      }
      if (reset != 0 ){
        now = now+1;
        jq191(obj).css('font-size', now);
      }else {
        alert("Please select a segment first!");
      }
});

function Delete(item){
  //$(item).hide();
  //$(item).removeAttr('src');
  jq191(item).remove();
};

function Change(item){
  //$( "#dialog-color" ).dialog( "open" );
  //alert(obj);
  obj = item;
  reset = 0;
  alert(obj);
};

jq191('#color-txt').click(function() {
  if (obj!="empty"){
    jq191("#status").val("Change text color");
    jq191( "#dialog-color-txt" ).dialog( "open" );
  } else{
    alert("Please select a segment first!");
  } 
});

jq191('#color-bg').click(function() {
  if (obj!="empty"){
    jq191("#status").val("Change bg color");
    jq191( "#dialog-color-bg" ).dialog( "open" );
  } else{
    alert("Please select a segment first!");
  } 
});

 function Rotate(item){
  obj = item;
  reset = 0;
  alert(obj);
  //$(obj).rotate( {angle: 30} );
  jq191("#status").val("Rotating");
  jq191( "#dialog-angle" ).dialog( "open" );
}

function rgb2hex(rgbString){
  //alert(rgbString);
  var parts = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  // parts now should be ["rgb(0, 70, 255", "0", "70", "255"]
  delete (parts[0]);
  for (var i = 1; i <= 3; ++i) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length == 1) parts[i] = '0' + parts[i];
  } 
  var hexString ='#'+parts.join('').toUpperCase(); // "#0070FF"
  return hexString
};


function setDialog(){
  //var quest = $( "#quest" );
  jq191( "#dialog-color-txt" ).dialog({
    autoOpen: false,
    height: 250,
    width: 350,
    modal: true,
    show: {
      effect: "fade",
      duration: 1500
    },
    hide: {
      effect: "explode",
      duration: 500
    },
    buttons: {
      "OK": function() {
        //var chosen_color = document.getElementById('background-color').value;
        var chosen_color_txt = jq191('#text-color').val();
        jq191(obj).css('color', chosen_color_txt);
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
      },
      Cancel: function() {
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
      }
    },
    close: function() {
        jq191("#status").val("Selected");
      //quest.val( "" ).removeClass( "ui-state-error" );
    }
  });

  jq191( "#dialog-color-bg" ).dialog({
    autoOpen: false,
    height: 250,
    width: 350,
    modal: true,
    show: {
      effect: "fade",
      duration: 1500
    },
    hide: {
      effect: "explode",
      duration: 500
    },
    buttons: {
      "OK": function() {
        var chosen_color_bg = jq191('#background-color').val();
        jq191(obj).css('background-color', chosen_color_bg);
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
      },
      Cancel: function() {
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
      }
    },
    close: function() {
        jq191("#status").val("Selected");
      //quest.val( "" ).removeClass( "ui-state-error" );
    }
  });

  jq191( "#dialog-word" ).dialog({
    autoOpen: false,
    height: 250,
    width: 350,
    modal: true,
    show: {
      effect: "fade",
      duration: 1500
    },
    hide: {
      effect: "explode",
      duration: 500
    },
    buttons: {
      "OK": function() {
        jq191("body").append('<div class="fontme dragme colorme hideme rotateme" style="display:inline-block;">'+jq191('#word').val()+'</div>'); 
        jq191( this ).dialog( "close" );
        jq191("#status").val("None");
        //alert( $('#word').val() );
        setHover();
      },
      Cancel: function() {
        jq191( this ).dialog( "close" );
        jq191("#status").val("None");
      }
    },
    close: function() {
      jq191("#status").val("None");
    }
  });

  jq191( "#dialog-angle" ).dialog({
    autoOpen: false,
    height: 250,
    width: 350,
    modal: true,
    show: {
      effect: "fade",
      duration: 1500
    },
    hide: {
      effect: "explode",
      duration: 500
    },
    buttons: {
      "OK": function() {
        //alert(value);
        //alert($("#angle").val());
        //alert(obj);
        jq191(obj).rotate( {angle: parseInt(jq191("#angle").val())} );
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
        //alert( $('#word').val() );
      },
      Cancel: function() {
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
      }
    },
    close: function() {
      jq191("#status").val("Selected");
    }
   });

   jq191( "#dialog-index" ).dialog({
    autoOpen: false,
    height: 250,
    width: 350,
    modal: true,
    show: {
      effect: "fade",
      duration: 1500
    },
    hide: {
      effect: "explode",
      duration: 500
    },
    buttons: {
      "OK": function() {
        //alert(value);
        //alert($("#angle").val());
        //alert(obj);
        //jq191(obj).rotate( {angle: parseInt(jq191("#z-index").val())} );
        //parseInt(jq191("#z-index").val())
        alert( jq191("#z-index").val() );
        jq191(obj).css("z-index", jq191("#z-index").val());
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
        //alert( $('#word').val() );
      },
      Cancel: function() {
        jq191( this ).dialog( "close" );
        jq191("#status").val("Selected");
      }
    },
    close: function() {
      jq191("#status").val("Selected");
    }
  });
};  // end of setDialog();

function setHover(){
    jq191(".hideme").hover(
        function () {
            jq191(this).addClass("select");
        },
        function () {
            jq191(this).removeClass("select");
        }
    );  
}

jq191('#resizify').click(function(){
    resizeflag = 1;
    jq191(".resizeme").resizable({
        /*handles:"all",            //定义可变化大小的方向,可选值"n, e, s, w, ne, se, sw, nw","all"代表全部
        //helper:"proxy",
        aspectRatio: true,        //是否同步向x,y变化大小，也就是按照原有的比例缩放 默认是false
       autoHide: true,          //是否自动隐藏变化控制器
        transparent: false,
        grid: [10, 10],            //定义x,y轴两个方向的变化步进,单位px
        animate: true,           //定义延迟是否变化大小
        animateDuration: "slow", //变化速度
       animateEasing: "swing",
       ghost: true,             //是否显示变化影子,利用此属性可以较为精确定位 (估计这比较难理解，尝试改变属性值就清楚了)
       start:function(e,ui){$(this).append("Start!");},  //定义开始变化大小时执行的函数
       resize:function(e,ui){},                          //定义在变化大小时执行的函数
       stop:function(e,ui){$(this).append("Stop!");}*/    //与start相反
       //draggable() 是使一个对象具有拖动的功能?
   });
});

jq191(window).scroll(function(){
  if(jq191(this).scrollTop()>jq191('#toolbar').position().top + 50){
    jq191('#toolbar').css({position:'fixed',top:0, left:0});
  }else{
    jq191('#toolbar').css({position:'relative'});
  } 

});
