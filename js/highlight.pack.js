var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function c(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function j(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}function g(t,s){var r="";for(var q=0;q<t.childNodes.length;q++){if(t.childNodes[q].nodeType==3){var p=t.childNodes[q].nodeValue;if(s){p=p.replace(/\n/g,"")}r+=p}else{if(t.childNodes[q].nodeName=="BR"){r+="\n"}else{r+=g(t.childNodes[q])}}}if(/MSIE [678]/.test(navigator.userAgent)){r=r.replace(/\r/g,"\n")}return r}function a(s){var q=s.className.split(/\s+/);q=q.concat(s.parentNode.className.split(/\s+/));for(var p=0;p<q.length;p++){var r=q[p].replace(/^language-/,"");if(d[r]||r=="no-highlight"){return r}}}function b(p){var q=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{q.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);q.push({event:"stop",offset:t,node:s.childNodes[r]})}}}return t})(p,0);return q}function l(y,z,x){var r=0;var w="";var t=[];function u(){if(y.length&&z.length){if(y[0].offset!=z[0].offset){return(y[0].offset<z[0].offset)?y:z}else{return z[0].event=="start"?y:z}}else{return y.length?y:z}}function s(C){var D="<"+C.nodeName.toLowerCase();for(var A=0;A<C.attributes.length;A++){var B=C.attributes[A];D+=" "+B.nodeName.toLowerCase();if(B.nodeValue!=undefined&&B.nodeValue!=false&&B.nodeValue!=null){D+='="'+m(B.nodeValue)+'"'}}return D+">"}while(y.length||z.length){var v=u().splice(0,1)[0];w+=m(x.substr(r,v.offset-r));r=v.offset;if(v.event=="start"){w+=s(v.node);t.push(v.node)}else{if(v.event=="stop"){var q=t.length;do{q--;var p=t[q];w+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);t.splice(q,1);while(q<t.length){w+=s(t[q]);q++}}}}w+=x.substr(r);return w}function i(){function p(u,t,v){if(u.compiled){return}if(!v){u.bR=c(t,u.b?u.b:"\\B|\\b");if(!u.e&&!u.eW){u.e="\\B|\\b"}if(u.e){u.eR=c(t,u.e)}}if(u.i){u.iR=c(t,u.i)}if(u.r==undefined){u.r=1}if(u.k){u.lR=c(t,u.l||hljs.IR,true)}for(var s in u.k){if(!u.k.hasOwnProperty(s)){continue}if(u.k[s] instanceof Object){u.kG=u.k}else{u.kG={keyword:u.k}}break}if(!u.c){u.c=[]}u.compiled=true;for(var r=0;r<u.c.length;r++){p(u.c[r],t,false)}if(u.starts){p(u.starts,t,false)}}for(var q in d){if(!d.hasOwnProperty(q)){continue}p(d[q].dM,d[q],true)}}function e(J,D){if(!i.called){i();i.called=true}function z(r,M){for(var L=0;L<M.c.length;L++){if(M.c[L].bR.test(r)){return M.c[L]}}}function w(L,r){if(C[L].e&&C[L].eR.test(r)){return 1}if(C[L].eW){var M=w(L-1,r);return M?M+1:0}return 0}function x(r,L){return L.iR&&L.iR.test(r)}function A(O,N){var M=[];for(var L=0;L<O.c.length;L++){M.push(O.c[L].b)}var r=C.length-1;do{if(C[r].e){M.push(C[r].e)}r--}while(C[r+1].eW);if(O.i){M.push(O.i)}return c(N,"("+M.join("|")+")",true)}function s(M,L){var N=C[C.length-1];if(!N.t){N.t=A(N,H)}N.t.lastIndex=L;var r=N.t.exec(M);if(r){return[M.substr(L,r.index-L),r[0],false]}else{return[M.substr(L),"",true]}}function p(O,r){var L=H.cI?r[0].toLowerCase():r[0];for(var N in O.kG){if(!O.kG.hasOwnProperty(N)){continue}var M=O.kG[N].hasOwnProperty(L);if(M){return[N,M]}}return false}function F(M,O){if(!O.k){return m(M)}var N="";var P=0;O.lR.lastIndex=0;var L=O.lR.exec(M);while(L){N+=m(M.substr(P,L.index-P));var r=p(O,L);if(r){t+=r[1];N+='<span class="'+r[0]+'">'+m(L[0])+"</span>"}else{N+=m(L[0])}P=O.lR.lastIndex;L=O.lR.exec(M)}N+=m(M.substr(P,M.length-P));return N}function K(r,M){if(M.sL&&d[M.sL]){var L=e(M.sL,r);t+=L.keyword_count;return L.value}else{return F(r,M)}}function I(M,r){var L=M.cN?'<span class="'+M.cN+'">':"";if(M.rB){q+=L;M.buffer=""}else{if(M.eB){q+=m(r)+L;M.buffer=""}else{q+=L;M.buffer=r}}C.push(M);B+=M.r}function E(O,L,Q){var R=C[C.length-1];if(Q){q+=K(R.buffer+O,R);return false}var M=z(L,R);if(M){q+=K(R.buffer+O,R);I(M,L);return M.rB}var r=w(C.length-1,L);if(r){var N=R.cN?"</span>":"";if(R.rE){q+=K(R.buffer+O,R)+N}else{if(R.eE){q+=K(R.buffer+O,R)+N+m(L)}else{q+=K(R.buffer+O+L,R)+N}}while(r>1){N=C[C.length-2].cN?"</span>":"";q+=N;r--;C.length--}var P=C[C.length-1];C.length--;C[C.length-1].buffer="";if(P.starts){I(P.starts,"")}return R.rE}if(x(L,R)){throw"Illegal"}}var H=d[J];var C=[H.dM];var B=0;var t=0;var q="";try{var v=0;H.dM.buffer="";do{var y=s(D,v);var u=E(y[0],y[1],y[2]);v+=y[0].length;if(!u){v+=y[1].length}}while(!y[2]);if(C.length>1){throw"Illegal"}return{r:B,keyword_count:t,value:q}}catch(G){if(G=="Illegal"){return{r:0,keyword_count:0,value:m(D)}}else{throw G}}}function f(t){var r={keyword_count:0,r:0,value:m(t)};var q=r;for(var p in d){if(!d.hasOwnProperty(p)){continue}var s=e(p,t);s.language=p;if(s.keyword_count+s.r>q.keyword_count+q.r){q=s}if(s.keyword_count+s.r>r.keyword_count+r.r){q=r;r=s}}if(q.language){r.second_best=q}return r}function h(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function o(u,x,q){var y=g(u,q);var s=a(u);if(s=="no-highlight"){return}if(s){var w=e(s,y)}else{var w=f(y);s=w.language}var p=b(u);if(p.length){var r=document.createElement("pre");r.innerHTML=w.value;w.value=l(p,b(r),y)}w.value=h(w.value,x,q);var t=u.className;if(!t.match("(\\s|^)(language-)?"+s+"(\\s|$)")){t=t?(t+" "+s):s}if(/MSIE [678]/.test(navigator.userAgent)&&u.tagName=="CODE"&&u.parentNode.tagName=="PRE"){var r=u.parentNode;var v=document.createElement("div");v.innerHTML="<pre><code>"+w.value+"</code></pre>";u=v.firstChild.firstChild;v.firstChild.cN=r.cN;r.parentNode.replaceChild(v.firstChild,r)}else{u.innerHTML=w.value}u.className=t;u.result={language:s,kw:w.keyword_count,re:w.r};if(w.second_best){u.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function k(){if(k.called){return}k.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=j(r[p]);if(q){o(q,hljs.tabReplace)}}}function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",k,false);window.addEventListener("load",k,false)}else{if(window.attachEvent){window.attachEvent("onload",k)}else{window.onload=k}}}var d={};this.LANGUAGES=d;this.highlight=e;this.highlightAuto=f;this.fixMarkup=h;this.highlightBlock=o;this.initHighlighting=k;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(p,s){var r={};for(var q in p){r[q]=p[q]}if(s){for(var q in s){r[q]=s[q]}}return r}}();hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:true,eE:true,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:true,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();hljs.LANGUAGES.xml=function(){var b="[A-Za-z0-9\\._:-]+";var a={eW:true,c:[{cN:"attribute",b:b,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[a],starts:{cN:"css",e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[a],starts:{cN:"javascript",e:"<\/script>",rE:true,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},a]}]}}}();hljs.LANGUAGES.python=function(){var c={cN:"string",b:"(u|b)?r?'''",e:"'''",r:10};var b={cN:"string",b:'(u|b)?r?"""',e:'"""',r:10};var a={cN:"string",b:"(u|r|ur|b|br)'",e:"'",c:[hljs.BE],r:10};var f={cN:"string",b:'(u|r|ur|b|br)"',e:'"',c:[hljs.BE],r:10};var d={cN:"title",b:hljs.UIR};var e={cN:"params",b:"\\(",e:"\\)",c:[c,b,a,f,hljs.ASM,hljs.QSM]};return{dM:{k:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1,nonlocal:10},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}},i:"(</|->|\\?)",c:[hljs.HCM,c,b,a,f,hljs.ASM,hljs.QSM,{cN:"function",b:"\\bdef ",e:":",i:"$",k:{def:1},c:[d,e],r:10},{cN:"class",b:"\\bclass ",e:":",i:"[${]",k:{"class":1},c:[d,e],r:10},hljs.CNM,{cN:"decorator",b:"@",e:"$"}]}}}();