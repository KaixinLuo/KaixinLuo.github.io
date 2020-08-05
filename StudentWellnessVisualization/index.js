
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
}
function question2CSS(id){
    $("#question2-persona"+id).css("transition","0.4s");
    $("#question2-persona"+id).css("display","none");
    $("#question2-avatar-background-p" + id).css("transition","0.4s");
}
//super bad practice
var highlightedTarget = "";
function question2Animate(id){
    
    $("#question2-persona-avatar-" + id).mouseenter(function() {
        if (highlightedTarget!==id){
            $("#question2-persona" + id).css('display' , 'block');
            $("#question2-avatar-background-p" + id).css('fill',color[id])
        }
        
    });
    $("#question2-persona-avatar-" + id).mouseleave(function() {
        if (highlightedTarget!==id){
            $("#question2-persona" + id).css('display' , 'none');
            $("#question2-avatar-background-p" + id).css('fill','white')
        }
        
    });

    $("#question2-persona-avatar-" + id).click(function() {
        if (highlightedTarget!==''){
            $("#question2-persona" + highlightedTarget).css('display' , 'none');
            $("#question2-avatar-background-p" + highlightedTarget).css('fill','white')
        }
        if (highlightedTarget!==id){
            highlightedTarget=id
            $("#question2-persona" + id).css('display' , 'block');
            $("#question2-avatar-background-p" + id).css('fill',color[id])
        }else if (highlightedTarget===id){
            highlightedTarget=''
            $("#question2-persona" + id).css('display' , 'none');
            $("#question2-avatar-background-p" + id).css('fill','white')
        }

        
    });

}