/*! 27.0.1.0 */
/*! VersionVI: 01A270087m   */
var WDSaisie=function(){"use strict";function f(n){var t=clWDUtil.oGetCurrentStyle(n);n.sIndicationColor=t.color;n.sIndicationFontStyle=t.fontStyle;n.style.color=i;n.style.fontStyle=r;n.bIndication=!0}function t(n){var t=clWDUtil.oGetCurrentStyle(n);t.color===i&&n.sIndicationColor!==undefined&&(n.style.color=n.sIndicationColor,n.sIndicationColor=undefined);t.fontStyle===r&&n.sIndicationFontStyle!==undefined&&(n.style.fontStyle=n.sIndicationFontStyle,n.sIndicationFontStyle=undefined);n.bIndication!==undefined&&(n.bIndication=!1)}function n(n,t,i,r,u){if(arguments.length){WDChamp.prototype.constructor.apply(this,arguments);var f=u[0],e=u[1],o=u[2];this.m_sIndication=String(f);this.m_sAliasChampCalendrier=e;this.m_sFormatAffichage=o;this.m_oObjetChampCalendrier=null;this.m_bDepuisOnChange=!1;this.m_bChangeDepuisCalendrier=!1}}var u=!bIE||10<=nIE&&(!bIEQuirks||6<=document.documentMode),i,r;return n.prototype=new WDChamp,n.prototype.constructor=n,n.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);this.RAZIndication()},n.prototype._vLiaisonHTML=function(){WDChamp.prototype._vLiaisonHTML.apply(this,arguments);this.m_sAliasChampCalendrier&&(this.m_oObjetChampCalendrier=clWDUtil.m_oChamps.oGetChampDirect(this.m_sAliasChampCalendrier))},n.prototype.__tabGetChamps=function(){if(this.bGestionTableZR()){var n=[];return this.PourToutesLignesTableZR(function(t,i){n[t-i]=document.getElementsByName("zrl_"+t+"_"+this.m_sAliasChamp)[0]},this.nGetTableZRDebut()),n}return document.getElementsByName(this.m_sAliasChamp)},n.prototype.RAZIndication=function(){""!==this.m_sIndication&&clWDUtil.bForEachThis(this.__tabGetChamps(),this,function(n){return n&&n.value!==undefined&&this.__PlaceIndication(n,!0),!0})},n.prototype.GetProp=function(n,t,i,r){switch(n){case this.XML_CHAMP_PROP_NUM_INDICATION:return this.m_sIndication;case this.XML_CHAMP_PROP_NUM_TEXTESANSFORMAT:return this.GetProp(this,t,i,r);default:return WDChamp.prototype.GetProp.apply(this,arguments)}},n.prototype.SetProp=function(n,t,i,r,f){var e,o;i=WDChamp.prototype.SetProp.apply(this,arguments);switch(n){case this.XML_CHAMP_PROP_NUM_INDICATION:return o=this.__tabGetChamps(),u||clWDUtil.bForEachThis(o,this,function(n){return n&&(n.blur(),this.OnFocus(null,n)),!0}),this.m_sIndication=String(i),clWDUtil.bForEachThis(o,this,function(n){return n&&this.__PlaceIndication(n,!1),!0}),i;case this.XML_CHAMP_PROP_NUM_BOUTONCALENDRIER:return e=r.nextElementSibling,clWDUtil.bBaliseEstTag(e,"div")&&clWDUtil.SetDisplay(e,i),i;case this.XML_CHAMP_PROP_NUM_ETAT:return e=r.nextElementSibling,clWDUtil.bBaliseEstTag(e,"div")&&clWDAJAXMain._AppliqueAttributEtat(f,e.firstElementChild,i,!0),i;default:return i}},n.prototype.MAJContenuCalendrier=function(n,t){var i=this.GetValeur(n,t.value,t),r;r=i===this.m_sFormatAffichage||""===i?"":clWDUtil.sChaineVersDate(t.value,this.m_sFormatAffichage);this.m_oObjetChampCalendrier.OnChangeSaisie(n,r,t)},n.prototype.OnChange=function(n,t,i){if(!this.m_bChangeDepuisCalendrier){!t&&n&&(t=clWDUtil.oGetTarget(n));try{var r=this.m_bDepuisOnChange;this.m_bDepuisOnChange=i;this.MAJContenuCalendrier(n,t)}finally{this.m_bDepuisOnChange=r}}},n.prototype.OnChangeCalendrier=function(n,t,i){var r,u;if(this.bGestionTableZR()&&(r=document.getElementsByName(i.name),1===r.length&&(i=r[0],window.WDTableZRNavigateur&&this.oGetTableZRParent()instanceof WDTableZRNavigateur&&(n=n?clWDUtil.oCloneObjet(n):{},n.target=i))),t=clWDUtil.sDateVersChaine(t,this.m_sFormatAffichage),t=this.SetValeur(n,t,i),i.value=t,!this.m_bDepuisOnChange)try{u=this.m_bChangeDepuisCalendrier;this.m_bChangeDepuisCalendrier=!0;i.onchange(n)}finally{this.m_bChangeDepuisCalendrier=u}},u?(n.prototype.GetValeur=function(n,t){return t},n.prototype.SetValeur=function(n,t,i){return WDChamp.prototype.SetValeur.apply(this,arguments),window.$&&$(i).trigger("trigger.wb.saisie.rwd.postaffectation"),t},n.prototype.OnFocus=clWDUtil.m_pfVide,n.prototype.OnBlur=clWDUtil.m_pfVide,n.prototype.__PlaceIndication=function(n){n.placeholder=this.m_sIndication}):(i="#808080",r="italic",n.prototype.GetValeur=function(n,t,i){return""!==this.m_sIndication&&i.bIndication?"":t},n.prototype.SetValeur=function(n,i,r){if(WDChamp.prototype.SetValeur.apply(this,arguments),""!==this.m_sIndication){if(0===i.length)return r.bIndication||f(r),this.m_sIndication;r.bIndication&&t(r)}return i},n.prototype.OnFocus=function(n,i){if(""!==this.m_sIndication&&(n&&!i&&(i=clWDUtil.oGetTarget(n)),i.bIndication&&(t(i),i.value="",bIE&&i.createTextRange))){var r=i.createTextRange();r.collapse(!0);r.moveStart("character",0);r.moveEnd("character",0);r.select();i.focus()}},n.prototype.OnBlur=function(n,t){""!==this.m_sIndication&&(n&&!t&&(t=clWDUtil.oGetTarget(n)),this.__PlaceIndication(t,!1))},n.prototype.OnSubmit=function(){WDChamp.prototype.OnSubmit.apply(this,arguments);""!==this.m_sIndication&&clWDUtil.bForEachThis(this.__tabGetChamps(),this,function(n){return n&&n.bIndication&&(t(n),n.value=""),!0})},n.prototype.__PlaceIndication=function(n,t){0===n.value.length&&(t&&n.blur(),0===n.value.length&&(f(n),n.value=this.m_sIndication))}),n}()