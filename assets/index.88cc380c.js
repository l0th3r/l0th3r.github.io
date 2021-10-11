var V=Object.defineProperty;var X=(e,t,i)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var d=(e,t,i)=>(X(e,typeof t!="symbol"?t+"":t,i),i);import{T as j,M as P,S as M,a as x,V as I,b as K,c as Y,d as Q,P as Z,R as ee,A as te,W as ne,O as ie,G as ae,C as oe}from"./vendor.884725e3.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};se();function re(e,t){var i=new Blob([t],{type:"type"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(i,e);else{var a=document.createElement("a"),o=URL.createObjectURL(i);a.href=o,a.download=e,document.body.appendChild(a),a.click(),setTimeout(function(){document.body.removeChild(a),window.URL.revokeObjectURL(o)},0)}}function le(){document.getElementById("file-input").click()}const W=document.getElementById("file-input");W.onchange=()=>{const e=W.files[0];var t=new FileReader;t.readAsText(e,"UTF-8"),t.onload=function(i){Pe(i.target.result)}};var L=[];function ce(){const e=new j().load("/textures/planets/sun.jpg"),t=new P(new M(60,32,32),new x({map:e})),i=new C(c.scene,"sun",t,0,0,0,!0);i.allowRotation=!1,i.allowMovements=!1,i.allowInteraction=!1,f.planets.forEach((a,o)=>{const r=new j().load(`/textures/planets/${a.id}.jpg`),l=de(a.equaRadius,1188.3,71492,12,20),h=new P(new M(l,32,32),new x({map:r}));new C(c.scene,a.englishName,h,o*35+150,G(.01,.05),G(.01,.028),!0,{type:"_Interactible"},void 0,void 0,m=>{w(m.id),U(),c.FocusObject(m.id)})})}function de(e,t,i,a,o){var r=e-t,l=i-t,h=r/l,m=o-a,v=m*h,b=v+a;return b}function G(e,t){return Math.random()*(t-e)+e}class C{constructor(t,i,a,o,r,l,h=!0,m={},v=this.Default_Hover,b=this.Default_UnHover,k=this.Default_Interact,z=!1,J=void 0){d(this,"allowMovements",!0);d(this,"allowInteraction",!0);d(this,"allowRotation",!0);d(this,"orbitInfo",{orbitRadius:0,rotSpeed:0,rot:0,orbitSpeed:0,orbit:0,rotSpeed:0,origin:new I(0,0,0)});this.id=i,this.object=a,this.object.data=m,this.object.data.parent=this,this.object.position.set(o,0,0),this.Hover=v,this.UnHover=b,this.Interact=k,this.orbitInfo.orbitRadius=o,this.orbitInfo.rotSpeed=.005+r*.1,this.orbitInfo.rot=Math.random(),this.orbitInfo.orbitSpeed=(.01-l*100*.0048)*.25,this.orbitInfo.orbit=Math.random()*Math.PI*2,this.orbitInfo.rotSpeed*=1,h===!0&&(this.orbitLine=new P(new K(o,.5,10,100),new Y({color:16777215,transparent:!0,opacity:.15})),this.orbitLine.rotation.set(1.5708,0,0),this.orbitLine.position.set(this.orbitInfo.origin.x,this.orbitInfo.origin.y,this.orbitInfo.origin.z),this.orbitLine.data={type:"_OrbitLine"},t.add(this.orbitLine)),this.hasOrbitLine=h,z===!0&&this.LinkOrbit(J),L.push(this),t.add(this.object),this.SetOrbitOrigin(0,0,0)}Update(){this.isLinked===!0&&this.SetOrbitOrigin(this.linked.object.position.x,this.linked.object.position.y,this.linked.object.position.z),this.allowRotation===!0&&(this.orbitInfo.rot+=this.orbitInfo.rotSpeed,this.object.rotation.set(0,this.orbitInfo.rot,0)),this.allowMovements===!0&&(this.orbitInfo.orbit+=this.orbitInfo.orbitSpeed,this.object.position.set(Math.cos(this.orbitInfo.orbit)*this.orbitInfo.orbitRadius+this.orbitInfo.origin.x,this.orbitInfo.origin.y,Math.sin(this.orbitInfo.orbit)*this.orbitInfo.orbitRadius+this.orbitInfo.origin.z))}LinkOrbit(t){this.isLinked=!0,this.linked=t}SetOrbitOrigin(t,i,a){this.orbitInfo.origin.x=t,this.orbitInfo.origin.y=i,this.orbitInfo.origin.z=a,this.hasOrbitLine===!0&&this.orbitLine.position.set(t,i,a)}GetOrbitOrigin(){return this.orbitInfo.origin}Default_Hover(t){}Default_UnHover(){}Default_Interact(){}}var c={allowHover:!0,scene:new Q,camera:new Z(75,window.innerWidth/window.innerHeight,.1,1500),cameraTarget:void 0,raycaster:new ee,mouse:{x:0,y:0},canvas:document.querySelector("#env"),lights:{ambientLight:new te(16777215)},Init:function(){this.renderer=new ne({canvas:this.canvas,alpha:!0}),this.camera.position.set(600,600,0),this.camera.rotation.set(10,0,0),this.cameraBasePos=this.camera.position,this.cameraBaseRot=this.camera.rotation,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.controls=new ie(this.camera,this.renderer.domElement),this.scene.add(this.lights.ambientLight),this.ChangeBG("/textures/stars.jpg")},Update:function(){if(this.cameraTarget){const e=this.cameraTarget.object.position;this.camera.lookAt(new I(e.x,e.y,e.z))}else this.camera.lookAt(new I(0,0,0))},Debug:function(){const e=new ae(1e3,100);this.scene.add(e),window.addEventListener("click",()=>{console.log(this.camera.position),console.log(this.camera.rotation)})},ChangeBG:function(e){this.canvas.style.background=`url(${e}) no-repeat center center`},Render:function(){this.renderer.render(this.scene,this.camera)},Click:function(){this.hoveredObject&&this.hoveredObject.Interact(this.hoveredObject)},hoveredObject:void 0,HoverObjects:function(){if(this.allowHover===!0){this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.scene.children);e.length>0?e[0].object.data.type==="_Interactible"&&e[0].object.data.parent!=this.hoveredObject&&(this.hoveredObject=e[0].object.data.parent,this.hoveredObject.allowInteraction===!0&&(this.hoveredObject.Hover(this.hoveredObject),document.body.style.cursor="pointer")):(this.hoveredObject&&(this.hoveredObject.UnHover(this.hoveredObject),this.hoveredObject=void 0),document.body.style.cursor="default")}},FocusObject:function(e){this.cameraTarget&&this.UnfocusObject();const t=L.filter(i=>i.id===e)[0];t.allowMovements=!1,this.cameraTarget=t,this.camera.position.set(t.object.position.x-30,t.object.position.y+30,t.object.position.z-30)},UnfocusObject:function(){this.cameraTarget&&(this.cameraTarget.allowMovements=!0),this.cameraTarget=void 0,this.camera.position.set(600,600,0),this.camera.rotation.set(10,0,0)}},p=[];class ue{constructor(t,i,a=0){d(this,"clock",new oe);d(this,"planetId","null");d(this,"maxTime",0);d(this,"currentDelta",0);d(this,"currentPourcentage",0);p.filter(o=>o.planetId===t).length>0||(this.planetId=t,this.maxTime=i,this.currentDelta=a,this.eventIndex=p.length,p.push(this))}remap(t,i,a,o,r){var l=t-i,h=a-i,m=l/h,v=r-o,b=v*m,k=b+o;return k}Then(){pe(this.planetId),s.GetPlanetData(this.planetId).data.miningProgression=0,B(this.planetId),p.splice(this.eventIndex,1)}Update(){this.currentPourcentage<100?(this.currentDelta+=this.clock.getDelta(),this.currentPourcentage=this.remap(this.maxTime-this.currentDelta,0,this.maxTime,100,0),s.GetPlanetData(this.planetId).data.miningProgression=this.currentPourcentage,s.GetPlanetData(this.planetId).data.deltaProgression=this.currentDelta):this.Then()}}const n={};n.displayedWindow=void 0;n.planetWin=document.getElementById("ui-planet-win");n.isPlanetWinOpen=!1;n.planetWinProgressBar=document.getElementById("progress-bar-mine");n.planetWinProgressBarPrnct=document.getElementById("progress-bar-prcnt");n.planetWinData={};n.ressourceData=void 0;n.mineBtn=document.getElementById("btn-mine");n.sellStockBtn=document.getElementById("btn-sell-stock");n.upgradeStock=document.getElementById("btn-upgrade-stock");n.saveBtn=document.getElementById("btn-save");n.wipeBtn=document.getElementById("btn-wipe");n.exportBtn=document.getElementById("btn-export");n.importBtn=document.getElementById("btn-import");n.logsContainer=document.getElementById("ui-log-cont");n.mineBtn.addEventListener("click",()=>fe(n.mineBtn.value));n.sellStockBtn.addEventListener("click",()=>me(n.mineBtn.value));n.upgradeStock.addEventListener("click",()=>he(n.mineBtn.value));n.saveBtn.addEventListener("click",()=>g(!0));n.wipeBtn.addEventListener("click",De);n.exportBtn.addEventListener("click",ke);n.importBtn.addEventListener("click",le);document.getElementById("ui-planet-win-close").addEventListener("click",ge);function w(e){s.GetPlanetData(e).CalculateData(),n.planetWinData.planetData=s.GetPlanetData(e).data,n.planetWinData.calcPlanetData=s.GetPlanetData(e).calculatedData,n.planetWinData.ressourceData=S(e),n.planetWinData.stockValue=n.planetWinData.planetData.stock*(n.planetWinData.ressourceData.unit_value+1),n.planetWinId=e,n.mineBtn.value=n.planetWinData.planetData.id,T()}function T(){var e=n.planetWinData.planetData,t=n.planetWinData.calcPlanetData;n.planetWinProgressBar.classList=`progress-planet ui-${e.id}-progress`,n.planetWinProgressBarPrnct.classList=`ui-data ui-${e.id}-progress-prcnt`,B(e.id),u("ui-planet-name",e.id),u("ui-ressource-name",e.ressourceName),u("ui-stock",e.stock),u("ui-max-stock",e.stockLvl*10),u("ui-next-stock-upgrade",e.stock),u("ui-mining-value",e.lvl),u("ui-stock-value",n.planetWinData.stockValue),u("ui-next-stock-upgrade",e.stockLvl+1),u("ui-next-stock-upgrade-price",(e.stockLvl+1)*10),u("ui-next-mining-upgrade",e.lvl+1),u("ui-next-mining-upgrade-price",t.nextUpdatePrice),e.stock>=e.stockLvl*10||e.miningProgression>0&&e.miningProgression<100?n.mineBtn.setAttribute("disabled","true"):n.mineBtn.removeAttribute("disabled"),e.stock<=0?n.sellStockBtn.setAttribute("disabled","true"):n.sellStockBtn.removeAttribute("disabled"),s.money>=(e.stockLvl+1)*10?n.upgradeStock.removeAttribute("disabled"):n.upgradeStock.setAttribute("disabled","true")}function he(e){const t=s.GetPlanetData(e).data;s.money>=(t.stockLvl+1)*10&&(s.ModMoney(-(t.stockLvl+1)*10),s.GetPlanetData(e).data.stockLvl+=1),w(e),U()}function me(e){const t=s.GetPlanetData(e).data,i=S(e);s.ModMoney(t.stock*(i.unit_value+1)),s.GetPlanetData(e).data.stock=0,w(e),g(!1)}function fe(e){s.GetPlanetData(e).CalculateData();const t=s.GetPlanetData(e);new ue(e,t.calculatedData.miningTime)}function pe(e){const t=s.GetPlanetData(e).data;t.stock<t.stockLvl*10&&(s.GetPlanetData(e).data.stock+=t.lvl,y("+1 "+s.GetPlanetData(e).data.ressourceName),n.planetWinId===e&&w(e))}function u(e,t){var i=document.getElementsByClassName(e);for(let a of i)a.innerHTML=t}function B(e){var t=document.getElementsByClassName(`ui-${e}-progress`);for(let i of t)i.style.width=`${s.GetPlanetData(e).data.miningProgression}%`;u(`ui-${e}-progress-prcnt`,Math.floor(s.GetPlanetData(e).data.miningProgression))}function ge(){H(),c.UnfocusObject(),n.isPlanetWinOpen=!1}function U(){ve(n.planetWin),n.isPlanetWinOpen=!0}function H(){n.displayedWindow&&(n.displayedWindow.style.display="none")}function ve(e){H(),n.displayedWindow=e,n.displayedWindow.style.display="block"}function be(){we()}function we(){n.header==null&&(n.header={},n.header.window=document.getElementById("ui-header"),n.header.ui=document.getElementById("ui-money")),n.isHeaderOpen!==!0&&(n.header.window.style.display="block",n.isHeaderOpen=!0),O()}function O(){n.header.ui.innerHTML=s.money}var E=document.getElementsByClassName("ui-nav-btn");for(let e of E)e.addEventListener("mouseenter",()=>{e.childNodes[3].style.display="block"});E=document.getElementsByClassName("ui-nav-btn");for(let e of E)e.addEventListener("mouseleave",()=>{e.childNodes[3].style.display="none"});window.onbeforeunload=function(e){s&&!s.requestWipe&&g(!1)};var R=0;function y(e,t=!1){const i=document.createElement("div");i.id=`ui-log-win-${R}`,t?i.innerHTML=`
            <div class="ui-log-win ui-container ui-bottom ui-element ui-panel ui-border">
                <span class="warning">${e}</span>
            </div>
        `:i.innerHTML=`
            <div class="ui-log-win ui-container ui-bottom ui-element ui-panel ui-border">
                <span>${e}</span>
            </div>
        `,n.logsContainer.appendChild(i),R++}var s=void 0;class A{constructor(t=0,i=!1){d(this,"money");d(this,"firstTime");d(this,"planets",[]);this.money=t,this.firstTime=i}AddPlanetData(t){this.planets.push(t)}GetPlanetData(t){return this.planets.filter(i=>i.data.id===t)[0]}UpdatePlanetData(t,i){this.GetPlanetData(t).InjectData(i),O()}ModMoney(t){this.money+=t,O(),t>0?y(`+${t}$`):y(`${t}$`)}}class N{constructor(t={}){d(this,"data",{id:"null",lvl:1,timeLvl:1,stock:0,stockLvl:1,ressourceName:"null",miningProgression:0,deltaProgression:0});d(this,"calculatedData",{unitValue:0,miningTime:0,nextUpdatePrice:0});this.InjectData(t)}CalculateData(){const t=S(this.data.id);this.calculatedData.unitValue=(this.data.lvl+2)*t.unit_value,this.calculatedData.nextUpdatePrice=t.price*t.coef^this.data.lvl-1,this.calculatedData.miningTime=t.mining_time}InjectData(t={}){this.data=Object.assign(this.data,t)}}function ye(){if(!window.localStorage.GravityClicker||window.localStorage.GravityClicker==="undefined")s=new A(0,!0),f.planets.forEach((e,t)=>{s.AddPlanetData(new N({id:e.englishName,ressourceName:f.settings.ressources[t].name}))}),g();else{const e=JSON.parse(window.localStorage.GravityClicker);s=new A(e.money),e.planets.forEach(t=>{t.data.miningProgression=0,s.AddPlanetData(new N(t.data)),s.GetPlanetData(t.data.id).CalculateData()})}}function g(e=!0){window.localStorage.setItem("GravityClicker",JSON.stringify(s)),e===!0&&y("Game Saved !",!0)}function De(){s.requestWipe=!0,window.localStorage.removeItem("GravityClicker"),location.reload()}function ke(){g(),re("save.grvclick",btoa(window.localStorage.GravityClicker))}function Pe(e){var t,i="null";try{t=JSON.parse(atob(e))}catch(a){i=a}i=="null"?(s=t,g(),location.reload()):(console.log("error"),location.reload())}var f={};function S(e){if(f&&f.settings)return f.settings.ressources.filter(t=>t.name===s.GetPlanetData(e).data.ressourceName)[0]}const q={MakeReq:function(e,t,i,a){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(this.readyState===4&&this.status===200){var r=JSON.parse(this.response);t&&t(this.status,r)}else this.readyState!=4?i&&i(this.readyState):a&&a(this.status)},o.open("GET",e,!0),o.send()},FormatRequestAndSend:function(e=[],t=[]){var i="https://api.le-systeme-solaire.net/rest/bodies?";return e.forEach(a=>{i+=`filter[]=${a}&`}),t.length>0&&(i+="data="),t.forEach(a=>{i+=`${a},`}),i.slice(0,-1)},GetJsonFile:function(e,t,i,a){this.MakeReq(e,(o,r)=>{f.settings=r,t()},i,a)},GetPlanets:function(e,t,i){const a=r=>{const l=r.sort((h,m)=>h.aphelion-m.aphelion);f.planets=l,e(l)},o=this.FormatRequestAndSend(["isPlanet,neq,false","id,neq,ceres","id,neq,eris","id,neq,haumea","id,neq,makemake","id,neq,pluton"],["id","englishName","vol","equaRadius","sideralRotation","discoveredBy","rel","aphelion"]);this.MakeReq(o,(r,l)=>{a(l.bodies)},t,i)}};q.GetPlanets(Ie,Le,$);function Ie(){q.GetJsonFile("/assets/settings.json",Be,void 0,$)}function Le(e){document.getElementById("progress").style.width=`${e*100/4}%`,document.getElementById("loading-txt").innerText=`Loading ${e*100/4}%`}function $(e){document.getElementById("progress").style.width="100%",document.getElementById("loading-txt").innerText="Error: "+e}function Be(){ye(),setTimeout(function(){document.getElementById("progress").style.width="100%",document.getElementById("loading-txt").innerText="Loading 100%",setTimeout(function(){document.getElementById("loading-env").style.display="none",be(),ce(),c.Init(),_()},0)},0)}function _(){requestAnimationFrame(_),L.forEach(e=>e.Update()),p.forEach(e=>e.Update()),p.length>0&&(B(n.planetWinId),T()),c.controls.update(),c.Update(),c.Render()}window.addEventListener("resize",Oe,!1);function Oe(){c.renderer&&(c.camera.aspect=window.innerWidth/window.innerHeight,c.camera.updateProjectionMatrix(),c.renderer.setSize(window.innerWidth,window.innerHeight))}const F=document.getElementById("env");var D={isMouseInCanvas:!1};function Ee(e){D.isMouseInCanvas===!0&&(c.mouse.x=e.clientX/window.innerWidth*2-1,c.mouse.y=-(e.clientY/window.innerHeight)*2+1,c.HoverObjects())}function Se(e){D.isMouseInCanvas===!0&&c.Click()}F.addEventListener("mouseleave",()=>{D.isMouseInCanvas=!1,document.body.style.cursor="default"});F.addEventListener("mouseenter",()=>D.isMouseInCanvas=!0);window.addEventListener("mousemove",Ee,!1);window.addEventListener("click",Se,!1);
