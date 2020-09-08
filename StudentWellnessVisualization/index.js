
$(
    function() {
        loadRoadmap()
        loadQuestion1SVG()
        loadQuestion2SVG()
        loadQuestion3SVG()
		loadQuestion4SVG()
        
    }
);

function roadmapClick(id){
    $('html, body').animate({
        scrollTop: $("#question"+id).offset().top
    }, 20);
}

function loadRoadmapAction(id){
    $("#roadmap-section-"+id).click(function(){
        roadmapClick(id)
    })
}
function loadRoadmap(){
    loadRoadmapAction('1')
    loadRoadmapAction('2')
    loadRoadmapAction('3')
    loadRoadmapAction('4')
}
color = {
    '1': '#FB9482',
    '2': '#F8AB1D',
    '3': '#7FC8BB',
    '4': '#9FC855'
}

function questionOneCurveOf(id){
    return $("#persona-curve-" + id)
}
function questionOneAvatarOf (id,state){
    return $("#persona-avatar-"+state+"-p"+id)
}
function questionOneDetailOf (id){
    return $('#persona-detail-' + id)
}
function questionOneCurveOn (id){
    questionOneCurveOf(id).css("stroke-width", '6')
}
function questionOneCurveOff (id){
    questionOneCurveOf(id).css("stroke-width", '2')
}
function questionOneAvatarShow (id, state){
    questionOneAvatarOf(id,state).css('display' , 'block')
}
function questionOneAvatarBlock (id, state){
    questionOneAvatarOf(id,state).css('display' , 'none')
}
function questionOneDetailShow (id){
    questionOneDetailOf(id).css('display' , 'block')
}
function questionOneDetailBlock (id){
    questionOneDetailOf(id).css('display' , 'none')
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
questionOneClickFocus = 0
function question1Animate(id) {
    $("#persona-curve-" + id).mouseenter(function() {
        if (questionOneClickFocus!=id){
            $("#persona-curve-" + id).css("stroke-width", '6');
            $("#persona-avatar-hover-p" + id).css('display' , 'block')
            $("#persona-avatar-off-p" + id).css('display' , 'none')
            $('#persona-detail-' + id).css('display' , 'block')
        }
        
    });
    $("#persona-curve-" + id).mouseleave(function() {
        if (questionOneClickFocus!=id){
            $("#persona-curve-" + id).css("stroke-width", '2');
            $("#persona-avatar-hover-p" + id).css('display' , 'none')
            $("#persona-avatar-off-p" + id).css('display' , 'block')
            $('#persona-detail-' + id).css('display' , 'none')
        }
        
    });
    
    $("#persona-avatar-p" + id).mouseenter(function() {
        if (questionOneClickFocus!=id){
            $("#persona-avatar-hover-p" + id).css('display' , 'block')
            $("#persona-avatar-off-p" + id).css('display' , 'none')
            $("#persona-curve-" + id).css("stroke-width", '6')
            $('#persona-detail-' + id).css('display' , 'block')
        }
        
    });
    $("#persona-avatar-p" + id).mouseleave(function() {
        if (questionOneClickFocus!=id){
            $("#persona-avatar-hover-p" + id).css('display' , 'none')
            $("#persona-avatar-off-p" + id).css('display' , 'block')
            $("#persona-curve-" + id).css("stroke-width", '2')
            $('#persona-detail-' + id).css('display' , 'none')
        }
        
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
    $("g[id^='q2g']").mouseenter(function(e){
        $("g[id='"+$(this).attr('id')+"'] > circle").css('stroke',"#989898");
        $("g[id='"+$(this).attr('id')+"'] > circle").css('stroke-width','6');
        $("g[id='"+$(this).attr('id')+"'] > text").css('display','block');
    })
    $("g[id^='q2g']").mouseleave(function(){
        $("g[id='"+$(this).attr('id')+"'] > circle").css('stroke','none')
        $("g[id='"+$(this).attr('id')+"'] > text").css('display','none');
       
    })

    $("g[id^='q2w']").mouseenter(function(e){
        $("g[id='"+$(this).attr('id')+"'] > circle").css('stroke',"#989898");
        $("g[id='"+$(this).attr('id')+"'] > circle").css('stroke-width','6');
        $("g[id='"+$(this).attr('id')+"'] > text").css('display','block');
    })
    $("g[id^='q2w']").mouseleave(function(){
        $("g[id='"+$(this).attr('id')+"'] > circle").css('stroke','none')
        $("g[id='"+$(this).attr('id')+"'] > text").css('display','none');
       
    })

    $("#question2-write-in-bar").click(function(){
        $("#question2-provided").attr("display","inline")
        $("#question2-write-ins").attr("display","none")
    })

    $("#question2-provided-bar").click(function(){
        $("#question2-write-ins").attr("display","inline")
        $("#question2-provided").attr("display","none")
    })
    
}

var question3ControlPanelFocus = '0';
var question3IsInPersonaState = true;
var question3StressorFocus = ''

function question3FocusOfControlPanel(){
    return question3ControlPanelFocus;
}
function question3ResetControlPanelFocus(){
    question3ControlPanelFocus = '0';
}
function question3SetControlPanelFocusTo(id){
    question3ControlPanelFocus = id
}
function question3SetPersonaStateTo(s){
    question3IsInPersonaState = s
}
function question3StateOfGraph(){
    return question3IsInPersonaState;
}

function question3ResetPersonaState(){
    question3IsInPersonaState = true;
}

function question3SetControlPanelAvatarOff(id){
    $('#question3-avatar-click-cover-p'+id).attr("display",'none');
    $('#question3-avatar-hover-cover-p'+id).attr("display",'none');
}

function question3SetControlPanelAvatarHover(id){
    $('#question3-avatar-click-cover-p'+id).attr("display",'none');
    $('#question3-avatar-hover-cover-p'+id).attr("display",'inline');
}

function question3SetControlPanelAvatarClick(id){
    if (id != '0'){
        $('#question3-avatar-click-cover-p'+id).attr("display",'inline');
        $('#question3-avatar-hover-cover-p'+id).attr("display",'none');
    }
    
}
function question3ShowPersonaBubbles(id){
    if (question3IsInPersonaState){
        $("#question3-bbg-p"+id).attr("display","inline");
    }
    
}
function question3HideAllPersonaBubbles(){
    question3HidePersonaBubbles(question3FocusOfControlPanel())
}


function question3HidePersonaBubbles(id){
    if(question3IsInPersonaState&& id != '0'){
        $("#question3-bbg-p"+id).attr("display","none");
    }
}
function question3HideControlPanel(){
    $('#question3-control-panel').attr('display','none')
}
function question3ShowControlPanel(){
    $('#question3-control-panel').attr('display','inline')
}
function question3ShowStressorBubbles(c){
    if(!question3IsInPersonaState){
        $("#question3-bbg-"+c).attr('display','inline');
    }
}

function question3HideStressorBubbles(c){
    if(!question3IsInPersonaState){
        $("#question3-bbg-"+c).attr('display','none');
    }
}
function question3HideAllStressorsBubbles(){
    for (k in question3StressorList.keys()){
        if (question3StressorList[k]){
            question3HideStressorBubbles(k)
        }
    }
}
function question3SetToStressorState(){
    if(question3IsInPersonaState){
        question3HidePersonaBubbles(question3FocusOfControlPanel())
        question3SetControlPanelAvatarOff(question3FocusOfControlPanel())
        question3ResetControlPanelFocus()
        question3SetPersonaStateTo(false);
    }
}

function question3SetToPersonaState(){
    if(!question3IsInPersonaState){
        question3ShowPersonaBubbles(question3FocusOfControlPanel())
        question3HideStressorBubbles(question3StressorFocus)
        question3SetControlPanelAvatarClick(question3FocusOfControlPanel())
        question3StressorFocus=""
        question3SetPersonaStateTo(true);

    }
}
function question3ControlPanelHover(id){
    if(!question3IsInPersonaState){
        question3SetToPersonaState()
    }
    if(question3FocusOfControlPanel()!=id&&question3IsInPersonaState){
        question3SetControlPanelAvatarHover(id);
        question3ShowPersonaBubbles(id);
    }
}

function question3ControlPanelExit(id){
    if(question3IsInPersonaState){
        if(question3FocusOfControlPanel()!=id){
            question3SetControlPanelAvatarOff(id);
            question3HidePersonaBubbles(id);
        }
        
    }
}

function question3ControlPanelClick(id){
    if (question3IsInPersonaState){
       if(question3FocusOfControlPanel() != id){
           question3SetControlPanelAvatarClick(id);
           question3ShowPersonaBubbles(id);
           if(question3FocusOfControlPanel()!='0'){
            question3SetControlPanelAvatarOff(question3FocusOfControlPanel());
            question3HidePersonaBubbles(question3FocusOfControlPanel());
           }
       }else{
            question3SetControlPanelAvatarOff(id);
            question3HidePersonaBubbles(id);
       }

       question3SetControlPanelFocusTo(id)
    }
}
function question3StressorArchiveClick(c){
    if (question3IsInPersonaState){
        question3SetToStressorState();
    }
    if (!question3IsInPersonaState){
        if (c == question3StressorFocus){
            question3HideStressorBubbles(c);
            question3StressorFocus = ""
    
        }else{
            if (""!=question3StressorFocus){
                question3HideStressorBubbles(question3StressorFocus);
            }
            question3ShowStressorBubbles(c);
            question3StressorFocus = c
    
        }
    }
    

}

function question3LoadPersonaEvent(id){
    $("#question3-persona-avatar-p"+id).mouseenter(function(){
        question3ControlPanelHover(id);
    })
    $("#question3-persona-avatar-p"+id).mouseleave(function(){
        question3ControlPanelExit(id);
    })
    $("#question3-persona-avatar-p"+id).click(function(){
        question3ControlPanelClick(id);
    })
}

function question3LoadStressorEvent(c){
    $("a[id="+c+"]").click(function(){
        question3StressorArchiveClick(c)
    })
}

function loadQuestion3SVG(){
    question3LoadPersonaEvent('1')
    question3LoadPersonaEvent('2')
    question3LoadPersonaEvent('3')
    question3LoadPersonaEvent('4')

    question3LoadStressorEvent("school")
    question3LoadStressorEvent("health")
    question3LoadStressorEvent("relationship")
    question3LoadStressorEvent("future")
    question3LoadStressorEvent("family")
    question3LoadStressorEvent("noeffort")
    question3LoadStressorEvent("effort")
    question3LoadStressorEvent("professional")
}

var question4ControlPanelFocus = '0';
var question4BubblePanelFocusedCatagory = "";

function question4ResetControlPanelFocus(){
    question4ControlPanelFocus = '0';
}

function question4ResetBubblePanelFocus(){
    question4BubblePanelFocusedCatagory = ""
}
function question4SetControlPanelFocus(val){
    question4ControlPanelFocus = val;
}
function question4SetBubblePanelFocus(val){
    question4BubblePanelFocusedCatagory = val
}
function question4IsBubbleExpanded(id,catagory){
	return question4ControlPanelFocus==id && question4BubblePanelFocusedCatagory== catagory;
}

function question4IsAnyBubbleExpanded(){
	return question4BubblePanelFocusedCatagory != "";
}

function question4CatagoryOfExpandedBubble(){
	return question4BubblePanelFocusedCatagory;
}

function question4PersonaOfExpandedBubble(){
	return question4ControlPanelFocus;
}
function question4IsControlPanelAvatarClicked(id){
    return question4ControlPanelFocus == id;
}
function question4IsControlPanelClicked(){
	return question4ControlPanelFocus != '0';
}
function question4HideBubble(id,catagory,state){
    $("#q4-p"+id+"-"+catagory+"-"+state).attr('display','none');
}
function question4ShowBubble(id,catagory,state){
    $("#q4-p"+id+"-"+catagory+"-"+state).attr('display','inline');
}
function question4HighlightPersonaBubble(id){
	$("#q4-p"+id+"-try-bg").attr('display','inline');
	$("#q4-p"+id+"-work-bg").attr('display','inline');
	$("#q4-p"+id+"-notwork-bg").attr('display','inline');
}
function question4DehighlightPersonaBubble(id){
	if (id != 0){
		$("#q4-p"+id+"-try-bg").attr('display','none');
		$("#q4-p"+id+"-work-bg").attr('display','none');
		$("#q4-p"+id+"-notwork-bg").attr('display','none');
	}
	
}
function question4SetControlPanelAvatarOff(id){
    $('#question4-avatar-click-cover-p'+id).attr("display",'none');
    $('#question4-avatar-hover-cover-p'+id).attr("display",'none');
}

function question4SetControlPanelAvatarHover(id){
    $('#question4-avatar-click-cover-p'+id).attr("display",'none');
    $('#question4-avatar-hover-cover-p'+id).attr("display",'inline');
}

function question4SetControlPanelAvatarClick(id){
    $('#question4-avatar-click-cover-p'+id).attr("display",'inline');
    $('#question4-avatar-hover-cover-p'+id).attr("display",'none');
}
function question4ShrinkExpandedBubbles(){
	question4ShrinkPersonaBubbles(
        question4PersonaOfExpandedBubble(),
        question4CatagoryOfExpandedBubble());
}
function question4ExpandFocusedBubble(){
    question4ExpandPersonaBubble(
        question4PersonaOfExpandedBubble(),
        question4CatagoryOfExpandedBubble());
}
function question4ExpandPersonaBubble(id,catagory){
	$("#q4-p0-"+catagory+"-bg").attr("display","none");
	$("#q4-p"+id+"-"+catagory+"-bg").attr("display","none");
	$("#q4-p"+id+"-"+catagory+"-expand").attr('display','inline');
}

function question4ShrinkPersonaBubbles(id,catagory){
	$("#q4-p0-"+catagory+"-bg").attr('display','inline');
	if(question4IsControlPanelClicked()){
		$("#q4-p"+id+"-"+catagory+"-bg").attr('display','inline');
	}
	$("#q4-p"+id+"-"+catagory+"-expand").attr('display','none');
}

function question4ControlPanelAvatarHovered(id){
    if (!question4IsControlPanelAvatarClicked(id)){
        question4ShowBubble('0',question4CatagoryOfExpandedBubble(),"bg")
        question4HighlightPersonaBubble(id)
        question4SetControlPanelAvatarHover(id)
        if(question4IsControlPanelClicked()){
            question4DehighlightPersonaBubble(question4PersonaOfExpandedBubble());
        }
        if(question4IsAnyBubbleExpanded()){
            question4HideBubble(id,question4CatagoryOfExpandedBubble(),"bg")
            question4HideBubble('0',question4CatagoryOfExpandedBubble(),"bg")
            question4HideBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),"expand")
            question4ShowBubble(id,question4CatagoryOfExpandedBubble(),"expand")   
        }
    }
}

function question4ControlPanelAvatarHoverExit(id){
    if(!question4IsControlPanelAvatarClicked(id)){
        question4ShowBubble('0',question4CatagoryOfExpandedBubble(),"bg")
        question4DehighlightPersonaBubble(id)
        question4SetControlPanelAvatarOff(id)
        if(question4IsControlPanelClicked()){
            question4HighlightPersonaBubble(question4PersonaOfExpandedBubble());
        }
        if(question4IsAnyBubbleExpanded()){
            question4HideBubble(id,question4CatagoryOfExpandedBubble(),"expand")
            question4HideBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),"bg")
            question4HideBubble('0',question4CatagoryOfExpandedBubble(),"bg")
            question4ShowBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),"expand")
        }
    }
}
function question4BubblePanelClicked(catagory){
    if (question4CatagoryOfExpandedBubble()==''){
        question4SetBubblePanelFocus(catagory);
        question4HideBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),'bg')
        question4HideBubble('0',question4CatagoryOfExpandedBubble(),'bg')
        question4ShowBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),'expand')
    }else if(catagory != question4CatagoryOfExpandedBubble()){
        if(question4IsAnyBubbleExpanded()){
            question4ShrinkExpandedBubbles()
            question4ShowBubble('0',question4CatagoryOfExpandedBubble(),"bg")
            if (question4IsControlPanelClicked()){
                question4ShowBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),"bg")
            }
        }
        question4SetBubblePanelFocus(catagory);
        question4HideBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),'bg')
        question4HideBubble('0',question4CatagoryOfExpandedBubble(),'bg')
        question4ShowBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),'expand')
    }else{
        if(question4IsControlPanelClicked()){
            question4ShowBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),'bg')
        }
        question4ShowBubble('0',question4CatagoryOfExpandedBubble(),'bg')
        question4HideBubble(question4PersonaOfExpandedBubble(),question4CatagoryOfExpandedBubble(),'expand')
        question4ResetBubblePanelFocus();

    }
	
}
function question4ControlPanelAvatarClick(id){
    oldPersona = question4PersonaOfExpandedBubble();
    question4SetControlPanelAvatarOff(oldPersona);
    question4ResetControlPanelFocus();
    if(question4IsAnyBubbleExpanded()){
        catagory = question4CatagoryOfExpandedBubble()
        $("#q4-p"+oldPersona+"-"+catagory+"-expand").attr('display','none');
    }else{
        question4DehighlightPersonaBubble(oldPersona)
    }
    if(oldPersona !=id){
        question4SetControlPanelAvatarClick(id)
        if(question4IsAnyBubbleExpanded()){
            $("#q4-p"+id+"-"+catagory+"-expand").attr('display','inline');
        }else{
            question4HighlightPersonaBubble(id);
        }
        question4ControlPanelFocus = id
    }
    
}
function question4LoadControlPanelClick(id){
    $('#question4-persona-avatar-p'+id).click(function(){
        question4ControlPanelAvatarClick(id)
    })
}
function question4LoadControlPanelHover(id){
    $('#question4-persona-avatar-p'+id).mouseenter(
		function(){
			question4ControlPanelAvatarHovered(id)
		}
	)
	$('#question4-persona-avatar-p'+id).mouseleave(
		function(){
			question4ControlPanelAvatarHoverExit(id)
		}
    )
}

function question4LoadBubblePanelClick(id){
    $("#q4-p"+id+"-work").click(function(){
		question4BubblePanelClicked('work')
	})
	$("#q4-p"+id+"-notwork").click(function(){
		question4BubblePanelClicked('notwork')
	})
	$("#q4-p"+id+"-try").click(function(){
		question4BubblePanelClicked('try')
	})
}
function loadQuestion4SVG(){
	
    question4LoadBubblePanelClick('0');
    question4LoadBubblePanelClick('1');
    question4LoadBubblePanelClick('2');
    question4LoadBubblePanelClick('3');
    question4LoadBubblePanelClick('4');

    question4LoadControlPanelClick('1');
    question4LoadControlPanelClick('2');
    question4LoadControlPanelClick('3');
    question4LoadControlPanelClick('4');

    question4LoadControlPanelHover('1');
    question4LoadControlPanelHover('2');
    question4LoadControlPanelHover('3');
    question4LoadControlPanelHover('4');
}
