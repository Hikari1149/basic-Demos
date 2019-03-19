var width=400,
    height=300;
var svg=d3.select('body')
    .append('svg')
    .attr('width',width)
    .attr('height',height);
var padding={left:30,right:30,top:20,bottom:20};

var dataset = [ 250 , 210 , 170 , 130 , 90 ];  //数据（表示矩形的宽度）
var rectHeight=25;

var linear=d3.scale.linear()
    .domain([d3.min(dataset),d3.max(dataset)])
    .range([0,300])


svg.selectAll('rect')
.data(dataset)//绑定
.enter()//指定选择集的enter部分 有数据，而没有足够图形元素的时候，使用此方法可以添加足够的元素。
.append('rect')//添加足够数量的rect元素.
.attr('x',20)
.attr('y',function(d,i){
    return i*rectHeight;
})
.attr('width',function(d){
    return linear(d);
})
.attr('height',rectHeight-2)
.attr('fill','steelblue');

//坐标轴
var dataset2=[2.5,2.1,1.7,1.3,0.9];
var linear2=d3.scale.linear()
    .domain([0,d3.max(dataset2)])
    .range([0,250]);
var axis=d3.svg.axis()
    .scale(linear)
    .orient('bottom')//指定刻度方向
    .ticks(7)//刻度数量

svg.append('g')
    .attr('class','axis')
    .attr('transform','translate(20,130)')
    .call(axis);




