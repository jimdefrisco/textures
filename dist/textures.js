!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.textures=r()}(this,function(){"use strict";var t=function(){return(Math.random().toString(36)+"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)};return{circles:function(){var n=20,e="",a=1,i=2,u=!1,c="#343434",o=1,l="#343434",f=1,s=0,h=t(),r=function(t){var r=t.append("pattern").attr("id",h).attr("patternUnits","userSpaceOnUse").attr("width",n).attr("height",n);e&&r.append("rect").attr("width",n).attr("height",n).attr("fill",e).attr("fill-opacity",a),r.append("circle").attr("cx",n/2).attr("cy",n/2).attr("r",i).attr("fill",c).attr("fill-opacity",o).attr("stroke",l).attr("stroke-opacity",f).attr("stroke-width",s),u&&[[0,0],[0,n],[n,0],[n,n]].forEach(function(t){r.append("circle").attr("cx",t[0]).attr("cy",t[1]).attr("r",i).attr("fill",c).attr("fill-opacity",o).attr("stroke",l).attr("stroke-opacity",f).attr("stroke-width",s)})};return r.heavier=function(t){return 0===arguments.length?i*=2:i*=2*t,r},r.lighter=function(t){return 0===arguments.length?i/=2:i/=2*t,r},r.thinner=function(t){return 0===arguments.length?n*=2:n*=2*t,r},r.thicker=function(t){return 0===arguments.length?n/=2:n/=2*t,r},r.background=function(t){return e=t,r},r.backgroundOpacity=function(t){return a=t,r},r.size=function(t){return n=t,r},r.complement=function(t){return u=0===arguments.length||t,r},r.radius=function(t){return i=t,r},r.fill=function(t){return c=t,r},r.fillOpacity=function(t){return o=t,r},r.stroke=function(t){return l=t,r},r.strokeOpacity=function(t){return f=t,r},r.strokeWidth=function(t){return s=t,r},r.opacity=function(t){return f=o=a=t,r},r.id=function(t){return 0===arguments.length?h:(h=t,r)},r.url=function(){return"url(#"+h+")"},r},lines:function(){var n=20,e="#343434",a=1,i=2,u="",c=1,o=t(),l=["diagonal"],f="auto",s=function(t){var r=t.append("pattern").attr("id",o).attr("patternUnits","userSpaceOnUse").attr("width",n).attr("height",n);u&&r.append("rect").attr("width",n).attr("height",n).attr("fill",u).attr("fill-opacity",c),l.forEach(function(t){r.append("path").attr("d",function(t){var r=n;switch(t){case"0/8":case"vertical":return"M "+r/2+", 0 l 0, "+r;case"1/8":return"M "+r/4+",0 l "+r/2+","+r+" M "+-r/4+",0 l "+r/2+","+r+" M "+3*r/4+",0 l "+r/2+","+r;case"2/8":case"diagonal":return"M 0,"+r+" l "+r+","+-r+" M "+-r/4+","+r/4+" l "+r/2+","+-r/2+" M "+.75*r+","+5/4*r+" l "+r/2+","+-r/2;case"3/8":return"M 0,"+.75*r+" l "+r+","+-r/2+" M 0,"+r/4+" l "+r+","+-r/2+" M 0,"+5*r/4+" l "+r+","+-r/2;case"4/8":case"horizontal":return"M 0,"+r/2+" l "+r+",0";case"5/8":return"M 0,"+-r/4+" l "+r+","+r/2+"M 0,"+r/4+" l "+r+","+r/2+" M 0,"+3*r/4+" l "+r+","+r/2;case"6/8":return"M 0,0 l "+r+","+r+" M "+-r/4+","+.75*r+" l "+r/2+","+r/2+" M "+3*r/4+","+-r/4+" l "+r/2+","+r/2;case"7/8":return"M "+-r/4+",0 l "+r/2+","+r+" M "+r/4+",0 l "+r/2+","+r+" M "+3*r/4+",0 l "+r/2+","+r;default:return"M "+r/2+", 0 l 0, "+r}}(t)).attr("stroke-width",i).attr("shape-rendering",f).attr("stroke",e).attr("stroke-opacity",a).attr("stroke-linecap","square")})};return s.heavier=function(t){return 0===arguments.length?i*=2:i*=2*t,s},s.lighter=function(t){return 0===arguments.length?i/=2:i/=2*t,s},s.thinner=function(t){return 0===arguments.length?n*=2:n*=2*t,s},s.thicker=function(t){return 0===arguments.length?n/=2:n/=2*t,s},s.background=function(t){return u=t,s},s.backgroundOpacity=function(t){return c=t,s},s.size=function(t){return n=t,s},s.orientation=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return 0===arguments.length||(l=r),s},s.shapeRendering=function(t){return f=t,s},s.stroke=function(t){return e=t,s},s.strokeOpacity=function(t){return a=t,s},s.strokeWidth=function(t){return i=t,s},s.opacity=function(t){return a=c=t,s},s.id=function(t){return 0===arguments.length?o:(o=t,s)},s.url=function(){return"url(#"+o+")"},s},paths:function(){var e=1,a=1,i=20,u="#343434",c=1,o=2,l="",f=1,s=function(t){return"M "+t/4+","+3*t/4+"l"+t/4+","+-t/2+"l"+t/4+","+t/2},h=t(),p="transparent",d=1,M="auto",r=function(t){var r=function(t){var r=i;switch(t){case"squares":return"M "+r/4+" "+r/4+" l "+r/2+" 0 l 0 "+r/2+" l "+-r/2+" 0 Z";case"nylon":return"M 0 "+r/4+" l "+r/4+" 0 l 0 "+-r/4+" M "+3*r/4+" "+r+" l 0 "+-r/4+" l "+r/4+" 0 M "+r/4+" "+r/2+" l 0 "+r/4+" l "+r/4+" 0 M "+r/2+" "+r/4+" l "+r/4+" 0 l 0 "+r/4;case"waves":return"M 0 "+r/2+" c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0 c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+-r/2+" "+r/2+" c "+r/8+" "+r/4+" , "+3*r/8+" "+r/4+" , "+r/2+" 0 M "+r+" "+r/2+" c "+r/8+" "+-r/4+" , "+3*r/8+" "+-r/4+" , "+r/2+" 0";case"woven":return"M "+r/4+","+r/4+"l"+r/2+","+r/2+"M"+3*r/4+","+r/4+"l"+r/2+","+-r/2+" M"+r/4+","+3*r/4+"l"+-r/2+","+r/2+"M"+3*r/4+","+5*r/4+"l"+r/2+","+-r/2+" M"+-r/4+","+r/4+"l"+r/2+","+-r/2;case"crosses":return"M "+r/4+","+r/4+"l"+r/2+","+r/2+"M"+r/4+","+3*r/4+"l"+r/2+","+-r/2;case"caps":return"M "+r/4+","+3*r/4+"l"+r/4+","+-r/2+"l"+r/4+","+r/2;case"hexagons":return e=3,a=Math.sqrt(3),"M "+r+",0 l "+r+",0 l "+r/2+","+r*Math.sqrt(3)/2+" l "+-r/2+","+r*Math.sqrt(3)/2+" l "+-r+",0 l "+-r/2+","+-r*Math.sqrt(3)/2+" Z M 0,"+r*Math.sqrt(3)/2+" l "+r/2+",0 M "+3*r+","+r*Math.sqrt(3)/2+" l "+-r/2+",0";default:return t(r)}}(s),n=t.append("pattern").attr("id",h).attr("patternUnits","userSpaceOnUse").attr("width",i*e).attr("height",i*a);l&&n.append("rect").attr("width",i*e).attr("height",i*a).attr("fill",l).attr("fill-opacity",f),n.append("path").attr("d",r).attr("fill",p).attr("fill-opacity",d).attr("stroke",u).attr("stroke-opacity",c).attr("stroke-width",o).attr("stroke-linecap","square").attr("shape-rendering",M)};return r.heavier=function(t){return 0===arguments.length?o*=2:o*=2*t,r},r.lighter=function(t){return 0===arguments.length?o/=2:o/=2*t,r},r.thinner=function(t){return 0===arguments.length?i*=2:i*=2*t,r},r.thicker=function(t){return 0===arguments.length?i/=2:i/=2*t,r},r.background=function(t){return l=t,r},r.backgroundOpacity=function(t){return f=t,r},r.shapeRendering=function(t){return M=t,r},r.size=function(t){return i=t,r},r.d=function(t){return s=t,r},r.fill=function(t){return p=t,r},r.fillOpacity=function(t){return d=t,r},r.stroke=function(t){return u=t,r},r.strokeOpacity=function(t){return c=t,r},r.strokeWidth=function(t){return o=t,r},r.opacity=function(t){return c=d=f=t,r},r.id=function(t){return 0===arguments.length?h:(h=t,r)},r.url=function(){return"url(#"+h+")"},r}}});
