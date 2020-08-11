
$(
    function() {
        loadQuestion1SVG()
        loadQuestion2SVG()
        
    }
);
color = {
    '1': '#FB9482',
    '2': '#F8AB1D',
    '3': '#7FC8BB',
    '4': '#9FC855'
}
function loadQuestion1SVG(){
    question1Animate('1')
    question1Animate('2')
    question1Animate('3')
    question1Animate('4')
    question1CSS('1')
    question1CSS('2')
    question1CSS('3')
    question1CSS('4')
}

function question1CSS(id){
    $("#persona-curve-" + id).css("transition","0.4s");
    $("#persona-curve-" + id).css("fill","none");
    $("#avatar-background-p" + id).css("transition","0.4s");
    $("#avatar-background-p" + id).css("fill","white");
    $("#persona-avatar-" + id).css("transition","0.4s");
    $('#persona-detail-' + id).css("transition","0.4s");
    $('#persona-detail-' + id).css("display","none");

}
function question1Animate(id) {
    $("#persona-curve-" + id).mouseenter(function() {
        $("#persona-curve-" + id).css("stroke-width", '6');
        $("#avatar-background-p" + id).css('fill',color[id])
        $('#persona-detail-' + id).css('display' , 'block')
    });
    $("#persona-curve-" + id).mouseleave(function() {
        $("#persona-curve-" + id).css("stroke-width", '2');
        $("#avatar-background-p" + id).css('fill' ,"white")
        $('#persona-detail-' + id).css('display' , 'none')
    });
    $("#avatar-background-p" + id).mouseenter(function() {
        $("#avatar-background-p" + id).css("fill",color[id])
        $("#persona-curve-" + id).css("stroke-width", '6')
        $('#persona-detail-' + id).css('display' , 'block')
    });
    $("#avatar-background-p" + id).mouseleave(function() {
        $("#avatar-background-p" + id).css("fill","white")
        $("#persona-curve-" + id).css("stroke-width", '2')
        $('#persona-detail-' + id).css('display' , 'none')
    });
}

function loadQuestion2SVG(){
    question2CSS('1')
    question2CSS('2')
    question2CSS('3')
    question2CSS('4')
    question2Animate('1')
    question2Animate('2')
    question2Animate('3')
    question2Animate('4')
    question2DataPointEvent()
}
function question2CSS(id){
    $("#question2-persona"+id).css("transition","0.4s");
    $("#question2-persona"+id).css("display","none");
    $("#question2-avatar-background-p" + id).css("transition","0.4s");
    $("#question2-avatar-hover-cover-p"+id).css("display","none");
}
//super bad practice
var highlightedAvatarID = "";
function question2Animate(id){
    
    $("#question2-persona-avatar-p" + id).mouseenter(function() {
        $("#question2-avatar-hover-cover-p" + id).css('display' , 'block');
        if (highlightedAvatarID!==id){
            $("#question2-persona" + id).css('display' , 'block');   
        }
    });
    $("#question2-persona-avatar-p" + id).mouseleave(function() {
        $("#question2-avatar-hover-cover-p" + id).css('display' , 'none');
        if (highlightedAvatarID!==id){
            $("#question2-persona" + id).css('display' , 'none');
        }
        
    });

    $("#question2-persona-avatar-p" + id).click(function() {
        if (highlightedAvatarID!==''){
            $("#question2-persona" + highlightedAvatarID).css('display' , 'none');
            $("#question2-avatar-background-p" + highlightedAvatarID).css('stroke','none')
        }
        if (highlightedAvatarID!==id){
            highlightedAvatarID=id
            $("#question2-persona" + id).css('display' , 'block');
            $("#question2-avatar-background-p" + id).css('stroke',"#989898")
            $("#question2-avatar-background-p" + id).css('stroke-width','6')

        }else if (highlightedAvatarID===id){
            highlightedAvatarID=''
            $("#question2-persona" + id).css('display' , 'none');
            $("#question2-avatar-background-p" + id).css('stroke','none')
        }
    });

}

function question2DataPointEvent(){
    $("circle[id^='q2d']").mouseenter(function(e){
        $(this).css('stroke',"#989898");
        $(this).css('stroke-width','6');
        

        $("div[id='question2float-window']").append("<p>"+$(this).attr('id')+"</p>")
    })
    $("circle[id^='q2d']").mouseleave(function(){
        $(this).css('stroke','none')
        $("div[id='question2float-window']").text = ''
    })
    
}