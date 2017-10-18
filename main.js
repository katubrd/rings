var one = document.getElementById('ring1');
var two = document.getElementById('ring2');
var three = document.getElementById('ring3');
var four = document.getElementById('ring4');

var ringCarusel = new TimelineLite();

ringCarusel.from(one, 1, {rotation: '-57deg'}, '+=1')
            .from(two, 1, {rotation: '157deg'})
            .from(three, 1, {rotation: '-136deg'})
            .from(four, 1, {rotation: '237deg'});
