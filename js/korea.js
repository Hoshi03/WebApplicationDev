window.onload = function() {
    drawMap('#container');
};

//지도 그리기
function drawMap(target) {
    var width = 700; //지도의 넓이
    var height = 700; //지도의 높이
    var initialScale = 5500; //확대시킬 값
    var initialX = -12050; //초기 위치값 X
    var initialY = 4050; //초기 위치값 Y
    var labels;

    var projection = d3.geo
        .mercator()
        .scale(initialScale)
        .translate([initialX, initialY]);
    var path = d3.geo.path().projection(projection);
    var zoom = d3.behavior
        .zoom()
        .translate(projection.translate())
        .scale(projection.scale())
        .scaleExtent([height, 800 * height])
        .on('zoom', zoom);

    var svg = d3
        .select(target)
        .append('svg')
        .attr('width', width + 'px')
        .attr('height', height + 'px')
        .attr('id', 'map')
        .attr('class', 'map');

    var states = svg
        .append('g')
        .attr('id', 'states')
        .call(zoom);

    states
        .append('rect')
        .attr('class', 'background')
        .attr('width', width + 'px')
        .attr('height', height + 'px');

    //geoJson데이터를 파싱하여 지도그리기
    d3.json('json/korea.json', function(json) {
        states
            .selectAll('path') //지역 설정
            .data(json.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('id', function(d) {
                return 'path-' + d.properties.name_eng;
            })
            .style('fill', function(d) {
                if (d.properties.name === "경기도") {
                    d3.json('json/경기도맥날.json', function(경기도Json) {
                        var length = 경기도Json.length;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    });
                }
                
                else if (d.properties.name === "서울특별시") {
                    d3.json('json/서울맥날.json', function(서울맥날) {
                        var length = 서울맥날.length;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }

                else if (d.properties.name === "부산광역시") {
                    d3.json('json/부산맥날.json', function(부산맥날) {
                        var length = 부산맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }

                else if (d.properties.name === "대구광역시") {
                    d3.json('json/대구맥날.json', function(대구맥날) {
                        var length = 대구맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }

                else if (d.properties.name === "인천광역시") {
                    d3.json('json/인천맥날.json', function(인천맥날) {
                        var length = 인천맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }

                else if (d.properties.name === "광주광역시") {
                    d3.json('json/광주맥날.json', function(광주맥날) {
                        var length = 광주맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "대전광역시") {
                    d3.json('json/대전맥날.json', function(대전맥날) {
                        var length = 대전맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "울산광역시") {
                    d3.json('json/울산맥날.json', function(울산맥날) {
                        var length = 울산맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }

                else if (d.properties.name === "세종특별자치시") {
                    d3.json('json/세종맥날.json', function(세종맥날) {
                        var length = 세종맥날.length;
                        if (length >= 0 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([0, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }

                else if (d.properties.name === "강원도") {
                    d3.json('json/강원맥날.json', function(강원맥날) {
                        var length = 강원맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "충청북도") {
                    d3.json('json/충북맥날.json', function(충북맥날) {
                        var length = 충북맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "충청남도") {
                    d3.json('json/충남맥날.json', function(충남맥날) {
                        var length = 충남맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "전라북도") {
                    d3.json('json/전북맥날.json', function(전북맥날) {
                        var length = 전북맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "전라남도") {
                    d3.json('json/전남맥날.json', function(전남맥날) {
                        var length = 전남맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "경상북도") {
                    d3.json('json/경북맥날.json', function(경북맥날) {
                        var length = 경북맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "경상남도") {
                    d3.json('json/경남맥날.json', function(경남맥날) {
                        var length = 경남맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }else if (d.properties.name === "제주특별자치도") {
                    d3.json('json/제주맥날.json', function(제주맥날) {
                        var length = 제주맥날.length + 20;
                        if (length >= 1 && length <= 100) {
                            var colorScale = d3.scale.linear()
                                .domain([1, 100])
                                .range(["#ffffff", "#8a4d15"]);
            
                            var color = colorScale(length);
                            d3.select('#path-' + d.properties.name_eng)
                                .style('fill', color);
                        }
                    }); 
                }
                else 
                {
                    return 'gray';
                }
            });
            

        labels = states
            .selectAll('text')
            .data(json.features) 
            .enter()
            .append('text')
            .attr('transform', translateTolabel)
            .attr('id', function(d) {
                return 'label-' + d.properties.name_eng;
            })
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .text(function(d) {
                return d.properties.name;
            });
    });

    function translateTolabel(d) {
        var arr = path.centroid(d);
        if (d.properties.code == 31) {
            arr[1] +=
                d3.event && d3.event.scale
                    ? d3.event.scale / height + 20
                    : initialScale / height + 20;
        } else if (d.properties.code == 34) {
            arr[1] +=
                d3.event && d3.event.scale
                    ? d3.event.scale / height + 10
                    : initialScale / height + 10;
        }
        return 'translate(' + arr + ')';
    }

    function zoom() {
        projection.translate(d3.event.translate).scale(d3.event.scale);
        states.selectAll('path').attr('d', path);
        labels.attr('transform', translateTolabel);
    }
}
