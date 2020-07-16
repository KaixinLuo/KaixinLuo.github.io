color = {
    '1': '#9FC855',
    '2': '#FB9482',
    '3': '#7FC8BB',
    '4': '#F8AB1D'
}
$(
    function() {
        animate('1')
        animate('2')
        animate('3')
        animate('4')
    }
);


function animate(id) {
    $("#CurvePersona" + id).mouseenter(function() {

        $("#P" + id + "AvtBg").get(0).style.fill = color[id]
        $('#DetailP' + id).get(0).style.display = 'block'
    });
    $("#CurvePersona" + id).mouseleave(function() {
        $("#P" + id + "AvtBg").get(0).style.fill = ""
        $('#DetailP' + id).get(0).style.display = ''
    });
    $("#P" + id + "AvtBg").mouseenter(function() {
        $("#CurvePersona" + id).css("stroke-width", '6')
        $('#DetailP' + id).get(0).style.display = 'block'
    });
    $("#P" + id + "AvtBg").mouseleave(function() {
        $("#CurvePersona" + id).css("stroke-width", '')
        $('#DetailP' + id).get(0).style.display = ''
    });
}