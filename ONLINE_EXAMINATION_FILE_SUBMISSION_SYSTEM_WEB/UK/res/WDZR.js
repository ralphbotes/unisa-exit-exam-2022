/*! 27.0.1.0 */
/*! VersionVI: 01A270087m   */
function WDZRCacheLigne(n,t,i){n&&(WDTableCacheLigne.prototype.constructor.apply(this,arguments),this.m_nLignePosVisibleEff=clWDAJAXMain.nXMLGetAttributSafe(n,this.XML_LIGNE_EFFECTIVE,parseInt(i/t.vnGetNbLignesLogiquesParLignePhysique(),10)),this.m_nColonneEff=clWDAJAXMain.nXMLGetAttributSafe(n,this.XML_COLONNE_EFFECTIVE,i%t.vnGetNbLignesLogiquesParLignePhysique()))}function WDZR(n,t,i,r,u){if(arguments.length){WDTable.prototype.constructor.apply(this,[n,t,i,r,[u[0],u[1],u[2],u[3],u[4],WDSelection.prototype.ms_nSelectionSimple,u[5],undefined,!0]]);var f=u[6];this.m_nNbLignesLogiquesParLignePhysique=f}}WDZRCacheLigne.prototype=new WDTableCacheLigne;WDZRCacheLigne.prototype.constructor=WDZRCacheLigne;WDZRCacheLigne.prototype.XML_LIGNE_EFFECTIVE="LIGNEEFF";WDZRCacheLigne.prototype.XML_COLONNE_EFFECTIVE="COLONNEEFF";WDZRCacheLigne.prototype._vPlaceXMLDansCellule=function(n,t){var i=n.childNodes;i.length===3&&i[1].nodeName===clWDAJAXMain.XML_CHAMP_LIGNES_LIGNE_CORPS&&(t.m_sValeur=clWDAJAXMain.sXMLGetValeur(i[1]))};WDZRCacheLigne.prototype.vnGetLigneHTML=function(){return this.m_nLignePosVisibleEff};WDZRCacheLigne.prototype.vnGetColonneHTML=function(){return this.m_nColonneEff};WDZR.prototype=new WDTable;WDZR.prototype.constructor=WDZR;WDZR.prototype.vCacheLigne=WDZRCacheLigne;WDZR.prototype.vbZR=function(){return!0};WDTable.prototype._vsGetIDCellule=function(n,t){return this._sGetIDCellule(n,t,n.vnGetColonneHTML())};WDZR.prototype._vInitHTMLLigne=function(){this.m_sHTMLLigne=clWDUtil.sGetHTMLDansCommentaire(this.m_oHote)};WDZR.prototype._vtabGenereLignesHTML=function(){for(var r=this._sCorrigeHTMLLigne(this.m_sHTMLLigne),t=this.m_nNbLignesHTML,i=new Array(t),n=0;n<t;n++)i[n]=r.replace(/\[%_INDICE_%\]/g,n);return i};WDZR.prototype._vForceDefilement=function(){var n=this.m_oHote,t;try{bIEQuirks||(t=n.tabIndex,n.tabIndex="1000");n.focus()}finally{bIEQuirks||(n.tabIndex=t)}WDTable.prototype._vForceDefilement.apply(this,arguments)};WDZR.prototype._vnGetOffset=function(){return 0};WDZR.prototype._vsGetCSSLigneHeight=function(){return bIEQuirks?"height":"min-height"};WDZR.prototype.__bAvecSelection=function(){return this.bAutoriseSelection()&&""!==this.m_tabStyle[2]};WDZR.prototype._vbAvecCouleurDeFondSelection=WDZR.prototype.__bAvecSelection;WDZR.prototype.vbLigneEstSelectionneeSansZR=function(){return this.__bAvecSelection()&&WDTable.prototype.vbLigneEstSelectionneeSansZR.apply(this,arguments)};WDZR.prototype.vVideCellule=function(n,t){this.__VideCellule(n.oGetCelluleHTML(this,t))};WDZR.prototype.__VideCellule=function(n){clWDUtil.SupprimeFilsEtOnFocus(n,!0)};WDZR.prototype.vRemplitCellule=function(n,t,i,r,u,f){var e,o;this.__VideCellule(n);e=n.parentNode;1===this.vnGetNbLignesLogiquesParLignePhysique()&&(e=e.parentNode);o=0===f.vnGetNbReplieesInclusSelf();clWDUtil.SetDisplay(e,o);o&&(n.innerHTML=String(t),this._SetOnXxxSurChampsCellule(n,r,u))};WDZR.prototype._vInvalideDebordeLargeur=function(){};WDZR.prototype._vbGetDebordeLargeur=function(){return!1};WDZR.prototype.vnGetNbLignesLogiquesParLignePhysique=function(){return this.m_nNbLignesLogiquesParLignePhysique};WDZR.prototype.OnSelectLigne=function(n,t,i){if(!(this.m_oCache.m_tabRequetes.length>0)){var r=this.nRelative2Visible2Absolue(n);this.bLigneEstSelectionnee(r,NaN)||this.bLigneDeselectionneSauf(r,NaN,i)&&this.__bLigneSelectionnePosVisible(r,[],!0,i)}};WDZR.prototype._vPostMAJLignes=function(){WDTable.prototype._vPostMAJLignes.apply(this,arguments);bIE&&!clWDUtil.bHTML5&&(this.m_oHote.className+="")};WDZR.prototype._xvoGetInfoXY=WDZRClassique.prototype._xvoGetInfoXY