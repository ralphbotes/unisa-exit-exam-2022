/*! 27.0.1.0 */
/*! VersionVI: 01A270087m   */
function WDDeplace(){arguments.length&&(WDDrag.prototype.constructor.apply(this,[0,0]),this.m_nBloqueTime=0)}function WDPosition(n,t){arguments.length&&(n?this.m_tabElements=n:(this.m_tabElements=[],this.__s_SetVersionCourante(this.m_tabElements,t)))}function WDPositionXY(n){arguments.length&&WDPosition.prototype.constructor.apply(this,[n,this.ms_nTypeXY])}function WDPositionColonnes(n){arguments.length&&WDPosition.prototype.constructor.apply(this,[n,this.ms_nTypeColonnes])}WDDeplace.prototype=new WDDrag;WDDeplace.prototype.constructor=WDDeplace;WDDeplace.prototype.BloqueDeplacement=function(){this.m_nBloqueTime=(new Date).getTime()};WDDeplace.prototype.__bBloque=function(){return WDPosition.prototype.s_bBloque()?!0:(new Date).getTime()-this.m_nBloqueTime<20};WDDeplace.prototype._vbOnMouseDown=function(n,t,i,r){var f,e;if(this.__bBloque())return!1;if(f=_JGE(t,document,!0,!1),f){if(this.m_oObjetDeplace&&this.bOnMouseUp(n),!WDDrag.prototype._vbOnMouseDown.apply(this,arguments))return!1;if(r)for(var s="dww"+t.replace(/_/g,""),h="dwwcz"+t.replace(/_/g,""),u=clWDUtil.oGetTarget(),o=null;u!=null&&u!=document.body&&u!=o;){if(u.id==s||u.id==h){f=u;break}o=u;u=u.parentNode}return this.m_nPosElementX=parseInt(clWDUtil.GetStyleLeft(clWDUtil.oGetCurrentStyle(f)),10),this.m_nPosElementY=parseInt(clWDUtil.oGetCurrentStyle(f).top,10),this.m_oObjetDeplace=f,this.m_bSauvePosition=i,this.m_sIDDeplace=t,this.BloqueDeplacement(),bIE||(e=clWDUtil.oGetOriginalTarget(n),clWDUtil.bBaliseEstTag(e,"input")&&e.focus()),!0}};WDDeplace.prototype._vOnMouseMove=function(n){WDDrag.prototype._vOnMouseMove.apply(this,arguments);clWDUtil.SetStyleLeft(this.m_oObjetDeplace.style,this.m_nPosElementX,this.nGetOffsetPosX(n));this.m_oObjetDeplace.style.top=this.m_nPosElementY+this.nGetOffsetPosY(n)+"px"};WDDeplace.prototype._vOnMouseUp=function(){var t=this.m_oObjetDeplace,n;this.m_bSauvePosition&&(n=new WDPositionXY(null),n.vSauve(t),WDPosition.prototype.s_Ajoute(n,this.m_sIDDeplace));delete this.m_nPosElementX;delete this.m_nPosElementY;delete this.m_oObjetDeplace;delete this.m_bSauvePosition;delete this.m_sIDDeplace;WDDrag.prototype._vOnMouseUp.apply(this,arguments)};WDPosition.prototype.ms_nVersionCourante=1;WDPosition.prototype.ms_nVersionMin=0;WDPosition.prototype.ms_nVersionMinReq=1;WDPosition.prototype.ms_nIndiceVersion=0;WDPosition.prototype.ms_nIndiceVersionMinReq=1;WDPosition.prototype.ms_nIndiceType=2;WDPosition.prototype.ms_nIndiceDebutSpecifique=3;WDPosition.prototype.ms_nTypeXY=0;WDPosition.prototype.ms_nTypeColonnes=1;WDPosition.prototype.ms_sSeparateurIntraPosition="|";WDPosition.prototype.ms_cSeparateurIDPosition=":";WDPosition.prototype.ms_sSeparateurInterPositions="&";WDPosition.prototype.ms_sCookieName="WDDeplace";WDPosition.prototype.ms_tabPositions={};WDPosition.prototype.s_ChargementPrepare=function(n,t){var i=WDPosition.prototype;i.ms_sPrefixeId=n+"."+t+".";clWDUtil.nSetTimeout(i.s_Chargement,clWDUtil.ms_oTimeoutImmediat);i.s_ChargementPrepare=clWDUtil.m_pfVide};WDPosition.prototype.s_Chargement=function(){var n=WDPosition.prototype,e=n.ms_tabPositions,r,i,f;if(n.ms_bCharge=!0,r=clWDUtil.m_oCookie.GetCookie(n.ms_sCookieName),r.length!=0){for(var u=r.split(n.ms_sSeparateurInterPositions),t=0,o=u.length,t=0;t<o;t++)u[t]&&(i=u[t].split(n.ms_cSeparateurIDPosition),i[0]&&i[1]&&(f=n.__s_ChargementUnePosition(i[1]),f&&(e[i[0]]=f)));clWDUtil.bForEachIn(e,function(t,i){if(clWDUtil.s_bCommencePar(t,n.ms_sPrefixeId)){var r=t.substring(n.ms_sPrefixeId.length);i.vbCharge(r)||(delete n.ms_tabPositions[n.ms_sPrefixeId+r],n.s_Sauvegarde())}return!0})}};WDPosition.prototype.s_bBloque=function(){return!WDPosition.prototype.ms_bCharge};WDPosition.prototype.s_Sauvegarde=function(){var n=WDPosition.prototype,t=n.ms_tabPositions,r=0,i,u;if(clWDUtil.bForEachIn(t,function(){return r++,!0}),t.length==0||r==0){clWDUtil.m_oCookie.ClearCookie(n.ms_sCookieName);return}i=[];clWDUtil.bForEachIn(t,function(t,r){return i.push(t+n.ms_cSeparateurIDPosition+r.__toString()),!0});u=i.join(n.ms_sSeparateurInterPositions);clWDUtil.m_oCookie.SetCookie(n.ms_sCookieName,u)};WDPosition.prototype.__s_ChargementUnePosition=function(n){var t=WDPosition.prototype,i=n.split(t.ms_sSeparateurIntraPosition);if((i[t.ms_nIndiceVersion]=parseInt(i[t.ms_nIndiceVersion],10),i[t.ms_nIndiceVersion]<t.ms_nVersionMin)||(i[t.ms_nIndiceVersionMinReq]=parseInt(i[t.ms_nIndiceVersionMinReq],10),i[t.ms_nIndiceVersionMinReq]>t.ms_nVersionCourante))return!1;0==i[t.ms_nIndiceVersion]?(i.splice(t.ms_nIndiceType,0,[t.ms_nTypeXY]),t.__s_SetVersionCourante(i,t.ms_nTypeXY)):i[t.ms_nIndiceType]=parseInt(i[t.ms_nIndiceType],10);switch(i[t.ms_nIndiceType]){case t.ms_nTypeXY:return new WDPositionXY(i);case t.ms_nTypeColonnes:return new WDPositionColonnes(i);default:return undefined}};WDPosition.prototype.__s_SetVersionCourante=function(n,t){var i=WDPosition.prototype;n[i.ms_nIndiceVersion]=i.ms_nVersionCourante;n[i.ms_nIndiceVersionMinReq]=i.ms_nVersionMinReq;n[i.ms_nIndiceType]=t};WDPosition.prototype.s_Ajoute=function(n,t){var i=WDPosition.prototype;i.ms_tabPositions[i.ms_sPrefixeId+t]=n;i.s_Sauvegarde()};WDPosition.prototype.__nGetType=function(){return parseInt(this.m_tabElements[this.ms_nIndiceType],10)};WDPosition.prototype.__toString=function(){return this.m_tabElements.join(this.ms_sSeparateurIntraPosition)};WDPosition.prototype.vSauve=function(){this.m_tabElements.length=this.ms_nIndiceDebutSpecifique};WDPosition.prototype.__Ecrit=function(n){this.m_tabElements.push(n)};WDPosition.prototype.__sLit=function(n){return this.m_tabElements[this.ms_nIndiceDebutSpecifique+n]};WDPositionXY.prototype=new WDPosition;WDPositionXY.prototype.constructor=WDPositionXY;WDPositionXY.prototype.ms_nIndicePosX=0;WDPositionXY.prototype.ms_nIndicePosY=1;WDPositionXY.prototype.ms_tabMemorise=[];WDPositionXY.prototype.ms_oDeplace=new WDDeplace(!0);WDPositionXY.prototype.s_AjouteDeplacement=function(n){WDPositionXY.prototype.ms_tabMemorise=WDPositionXY.prototype.ms_tabMemorise.concat(n)};WDPositionXY.prototype.vSauve=function(n){WDPosition.prototype.vSauve.apply(this,arguments);this.__Ecrit(clWDUtil.GetStyleLeft(clWDUtil.oGetCurrentStyle(n)));this.__Ecrit(clWDUtil.oGetCurrentStyle(n).top)};WDPositionXY.prototype.vbCharge=function(n){if(clWDUtil.bDansTableau(this.ms_tabMemorise,n)){var t=_JGE(n,document,!0,!1);return t&&(clWDUtil.SetStyleLeft(t.style,parseInt(this.__sLit(this.ms_nIndicePosX),10),0),t.style.top=this.__sLit(this.ms_nIndicePosY)),!0}return!1};WDPositionColonnes.prototype=new WDPosition;WDPositionColonnes.prototype.constructor=WDPositionColonnes;WDPositionColonnes.prototype.vSauve=function(n){WDPosition.prototype.vSauve.apply(this,arguments);clWDUtil.bForEachThis(n,this,function(n){return this.__Ecrit(n.m_nPositionAffichage),!0})};WDPositionColonnes.prototype.vbCharge=function(n){var t=oGetObjetChamp(n),i;return t&&t.SetColonnePositionAffichage?(i=[],clWDUtil.bForEachIn(this.m_tabElements,function(n,t){return i.push(parseInt(t,10)),!0}),t.SetColonnePositionAffichage(i.slice(this.ms_nIndiceDebutSpecifique)),!0):!1}