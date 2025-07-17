(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_807F782A_8E23_A905_41DE_623121285A09",
  "this.Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "this.Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "this.Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D"
 ],
 "class": "Player",
 "borderSize": 0,
 "paddingRight": 0,
 "vrPolyfillScale": 0.8,
 "borderRadius": 0,
 "backgroundPreloadEnabled": false,
 "paddingLeft": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "minWidth": 20,
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingTop": 0,
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "gap": 10,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player463"
 },
 "overflow": "visible",
 "shadow": false,
 "definitions": [{
 "duration": 5000,
 "label": "3. EXT 3 - CABA\u00d1A VT1",
 "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
 "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
 "width": 1600,
 "image": {
  "levels": [
   {
    "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 800
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "4. INT 1 - CABA\u00d1A VT1",
 "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
 "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2000
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 45.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0723BC43_16FC_8AD1_41A3_4C99E8C69984",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "7. INT 3- CABA\u00d1A VT1",
 "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
 "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2000
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928",
   "camera": "this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222",
   "camera": "this.panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288",
   "camera": "this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9",
   "camera": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A",
   "camera": "this.panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2",
   "camera": "this.panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A",
   "camera": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619",
   "camera": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A",
   "camera": "this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34",
   "camera": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8254539B_9174_E45B_41E1_D495F1784A65",
   "camera": "this.panorama_8254539B_9174_E45B_41E1_D495F1784A65_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2",
   "camera": "this.panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE",
   "camera": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257",
   "camera": "this.panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B",
   "camera": "this.panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29",
   "camera": "this.panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA",
   "camera": "this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9",
   "camera": "this.panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 132.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07816BEF_16FC_8DD1_41A6_E3BC07379902",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_070A9C2E_16FC_8A53_41B2_2C2921954252",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 53.92,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04AEFC95_16FC_8A71_4190_4A896BDB535B",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "04.  360 TERRAZA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9"
  }
 ],
 "thumbnailUrl": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_t.jpg",
 "id": "panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5768D57D_5CB6_4CAB_41C1_5BE99F0EA4B1"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -56.74,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0710FC29_16FC_8A51_41B6_C9DC993215C4",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "12. 360 - PUENTE",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B"
  }
 ],
 "thumbnailUrl": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_t.jpg",
 "id": "panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5723258F_5CC9_CC67_41C4_7C24C172A389",
  "this.overlay_5723558F_5CC9_CC67_41D5_E47C00936C35",
  "this.overlay_5723459E_5CC9_CC69_41A2_C9C1E0DCD884"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -4.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07992BDF_16FC_8DF1_41A4_49E35585D2E8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 48.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04514CA6_16FC_8A53_41A5_D75D31F1A1B6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 102.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_077FEC14_16FC_8A77_41A7_6BC212029C6E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 88.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04C2BC53_16FC_8AF1_4192_24B61F00A815",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "2. EXT 2 - CABA\u00d1A VT1",
 "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
 "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
 "width": 1600,
 "image": {
  "levels": [
   {
    "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 800
},
{
 "hfov": 360,
 "label": "02. 360 HALL ACCESO",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9"
  }
 ],
 "thumbnailUrl": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_t.jpg",
 "id": "panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9A9BC782_9155_6C25_41D9_B9C426D9A97A",
  "this.overlay_9A9BA783_9155_6C2B_4156_7E467FBDA3C5"
 ]
},
{
 "duration": 5000,
 "label": "6. EXT 4 - CABA\u00d1A VT1",
 "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
 "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2000
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -44.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07904BE4_16FC_8DD7_4199_1995AE2D5DE0",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "14. 360 OFICINA    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE"
  }
 ],
 "thumbnailUrl": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_t.jpg",
 "id": "panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5719ABBF_5CCA_DBA7_41AE_E551BF18511F"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 92.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0788EBE9_16FC_8DD1_4184_194782BB8EC7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 58.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07715C19_16FC_8A71_41A3_8BA30646C18F",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -43.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_075AFC04_16FC_8A57_41A9_EFBD9FB16D70",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 57.31,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0746AC0E_16FC_8A53_417B_07B0D0AD948D",
 "automaticZoomSpeed": 10
},
{
 "fontFamily": "Arial",
 "backgroundColor": "#404040",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "01. 360 ACCESO",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "1 B. 360 PARQUEADERO - CASA    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "02. 360 HALL ACCESO",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "03. 360 SALON",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "04.  360 TERRAZA",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "05. 360 COCINA",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "06.  360  ESCALERAS",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "7. 360 CORREDOR",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "8. 360 HAB PPAL",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "9. 360 HAB 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "10. 360 -HAB 3",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "11. 360 - HAB 4",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "12. 360 - PUENTE",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "13. 360 JUEGOS NIÑOS    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "14. 360 OFICINA    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "15. 360 BAÑO PPAL - CASA    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "16. 360 BAÑO AUX - CASA    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "16. B  360 BAÑO AUX - CASA    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "17. 360 BAÑO SOCIAL - CASA    M+U",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "id": "Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "rollOverFontColor": "#FFFFFF",
 "label": "Media",
 "opacity": 0.4,
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020"
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "06.  360  ESCALERAS",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1"
  }
 ],
 "thumbnailUrl": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_t.jpg",
 "id": "panorama_9AE70BB9_916D_A467_4159_F2824AC3417A",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9AE72BB9_916D_A467_41E0_325242060720",
  "this.overlay_9E415557_917D_6C2A_41DA_3D3E3B4CD272",
  "this.overlay_9FF51833_917D_646A_41E0_68369471EDCF",
  "this.overlay_81D00F8E_9173_FC3D_41CB_9A372470F7DF",
  "this.overlay_828ECC3C_91F4_DC5D_41C8_3C8F33164DBF",
  "this.overlay_51B17684_5CCE_CC59_41CB_3106294276D0"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 176.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04966C76_16FC_8AB3_4157_CED191F86AB9",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "10. 360 -HAB 3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA"
  }
 ],
 "thumbnailUrl": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_t.jpg",
 "id": "panorama_8254539B_9174_E45B_41E1_D495F1784A65",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8254839B_9174_E45B_41D1_60D282CE9A3B",
  "this.overlay_8187A56E_9175_ACFD_41D2_3AA023202AA8",
  "this.overlay_536E7EE2_5CCA_FDD9_41D4_8E066FC85C62"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 5.8,
  "pitch": 2.81
 },
 "class": "PanoramaCamera",
 "id": "panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -8.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04A31CA0_16FC_8A4F_41AF_BBC8FDB3A122",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -150.23,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07E36BD9_16FC_8DF1_41A8_BDEE10E9A0C9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04E38C6C_16FC_8AD7_419A_7672C41159B0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 67.93,
  "pitch": -3.08
 },
 "class": "PanoramaCamera",
 "id": "panorama_8254539B_9174_E45B_41E1_D495F1784A65_camera",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "touchControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": false,
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.56,
  "pitch": -4.1
 },
 "class": "PanoramaCamera",
 "id": "panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -97.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04D6CC48_16FC_8ADF_41A0_27550926D2F2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "05. 360 COCINA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9"
  }
 ],
 "thumbnailUrl": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_t.jpg",
 "id": "panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_574A7EB1_5CB6_5DBB_41D4_A9AB949C797B"
 ]
},
{
 "hfov": 360,
 "label": "15. 360 BA\u00d1O PPAL - CASA    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A"
  }
 ],
 "thumbnailUrl": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_t.jpg",
 "id": "panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D990F84_5CDA_3C59_41D6_A099C0104BA1"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 3.05,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04B8CC8B_16FC_8A51_417B_1E303695F113",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -165.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_048ACC81_16FC_8A51_419D_A38EE7F53715",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "8. 360 HAB PPAL",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29"
  }
 ],
 "thumbnailUrl": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_t.jpg",
 "id": "panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9D6B33B4_916C_A46D_41D8_116071E0A236",
  "this.overlay_5229A56E_5CCE_CCA9_41D6_5543CD43974D"
 ]
},
{
 "hfov": 360,
 "label": "7. 360 CORREDOR",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2"
  }
 ],
 "thumbnailUrl": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_t.jpg",
 "id": "panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06B03C5C_16C4_8AF0_41B0_C514F4D01A09",
  "this.overlay_06B02C5C_16C4_8AF0_41AE_F0B480E9651A",
  "this.overlay_06B3DC5C_16C4_8AF0_4159_8401C873B350"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -47.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07BB9BF4_16FC_8DB7_419B_C824C3B9BC94",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 87.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07362C38_16FC_8ABF_41AA_3DC42149B0E4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -91.6,
  "pitch": 2.1
 },
 "class": "PanoramaCamera",
 "id": "panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_071D1C23_16FC_8A51_41AB_5045FBA2AD33",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "03. 360 SALON",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288"
  }
 ],
 "thumbnailUrl": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_t.jpg",
 "id": "panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5758AB7E_5CB7_C4A9_41C6_D3440805FD96",
  "this.overlay_5758CB7E_5CB7_C4A9_41C7_7BA2FEC703A8",
  "this.overlay_5758DB7E_5CB7_C4A9_41D0_3B5023D0D368",
  "this.overlay_5758FB7E_5CB7_C4A9_4191_E62148F70763"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 4.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04C82C4D_16FC_8AD1_41B1_A4CC57CD055C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -28.01,
  "pitch": 1.97
 },
 "class": "PanoramaCamera",
 "id": "panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -89.65,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04475CB1_16FC_8BB1_419F_6C03EA794C68",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -57.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_0729FC3E_16FC_8AB3_4170_2DA4903B5858",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -148.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04E8BC5D_16FC_8AF1_418D_0B708635144B",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "17. 360 BA\u00d1O SOCIAL - CASA    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A"
  }
 ],
 "thumbnailUrl": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_t.jpg",
 "id": "panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_521E96DD_5CCF_CDEB_41B1_62A6FC8B653B"
 ]
},
{
 "hfov": 360,
 "label": "1 B. 360 PARQUEADERO - CASA    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928"
  }
 ],
 "thumbnailUrl": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_t.jpg",
 "id": "panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1981EF00_16DC_864F_41A4_1AE498204BA4"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 87.07,
  "pitch": -0.62
 },
 "class": "PanoramaCamera",
 "id": "panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "16. 360 BA\u00d1O AUX - CASA    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8254539B_9174_E45B_41E1_D495F1784A65"
  }
 ],
 "thumbnailUrl": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_t.jpg",
 "id": "panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4DB02763_5CDA_CCDF_41C4_0016C0DE721F"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 67.36,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_074CCC09_16FC_8A51_41B5_FF1F5BCFF4F1",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "13. 360 JUEGOS NI\u00d1OS    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE"
  }
 ],
 "thumbnailUrl": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_t.jpg",
 "id": "panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_571AC256_5CCA_44F9_41D7_192933C93BFD"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 88.71,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_04F59C58_16FC_8AFF_4191_3237761E802A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 179.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07A73BFE_16FC_8DB3_41B4_331D26CC5B37",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "01. 360 ACCESO",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288"
  }
 ],
 "thumbnailUrl": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_t.jpg",
 "id": "panorama_57EA8695_5CB6_4C78_417C_6328ACC03928",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57EAB695_5CB6_4C78_41CC_4559258DE854",
  "this.overlay_1835A714_16DD_8670_41A0_0F11D279AC32"
 ]
},
{
 "class": "PlayList",
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "items": [
  {
   "media": "this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928",
   "camera": "this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222",
   "camera": "this.panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288",
   "camera": "this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9",
   "camera": "this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A",
   "camera": "this.panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2",
   "camera": "this.panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A",
   "camera": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619",
   "camera": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A",
   "camera": "this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34",
   "camera": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8254539B_9174_E45B_41E1_D495F1784A65",
   "camera": "this.panorama_8254539B_9174_E45B_41E1_D495F1784A65_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2",
   "camera": "this.panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE",
   "camera": "this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257",
   "camera": "this.panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B",
   "camera": "this.panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29",
   "camera": "this.panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA",
   "camera": "this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9",
   "camera": "this.panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1",
   "camera": "this.panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 18, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -179.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_07AD8BF9_16FC_8DB1_4194_A888AE5030C5",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "11. 360 - HAB 4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA"
  }
 ],
 "thumbnailUrl": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_t.jpg",
 "id": "panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_80ED7F55_91B5_DC2F_41DE_EF992F81BE05",
  "this.overlay_4E115893_5CD6_C47F_41D5_3EB78EFDE7B6"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 163.58,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_076B4C1E_16FC_8A73_41B4_D18E314E7755",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 178.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_073C6C33_16FC_8AB1_41A4_182D897FB7E6",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "1. EXT 1 - CABA\u00d1A VT1",
 "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
 "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
 "width": 160,
 "image": {
  "levels": [
   {
    "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 80
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 67.46,
  "pitch": 2.81
 },
 "class": "PanoramaCamera",
 "id": "panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "5. INT 2 - CABA\u00d1A VT1",
 "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
 "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 2000
},
{
 "hfov": 360,
 "label": "9. 360 HAB 2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9"
  }
 ],
 "thumbnailUrl": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_t.jpg",
 "id": "panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_817BAA5A_917C_A425_41C6_33A0034BA0B8",
  "this.overlay_539DB664_5CC9_CCD9_419A_682E53F48B9F"
 ]
},
{
 "hfov": 360,
 "label": "16. B  360 BA\u00d1O AUX - CASA    M+U",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34"
  }
 ],
 "thumbnailUrl": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_t.jpg",
 "id": "panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9",
 "cardboardMenu": "this.Menu_0435EBB6_16FC_8DB3_41B1_AFCB320841D5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 100,
 "partial": false,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4D563AC4_5CDA_45D9_41A1_4D558DB6DF90"
 ]
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_camera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 9,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 14,
 "width": "100%",
 "class": "ViewerArea",
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 1,
 "minHeight": 50,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 9,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowVerticalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionDuration": 500,
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarWidth": 10,
 "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "22.545%",
 "children": [
  "this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingRight": 0,
 "right": 25,
 "borderRadius": 5,
 "paddingLeft": 0,
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "89%",
 "bottom": "3%",
 "contentOpaque": false,
 "minWidth": 265,
 "scrollBarMargin": 2,
 "gap": 1,
 "paddingTop": 0,
 "layout": "horizontal",
 "horizontalAlign": "right",
 "paddingBottom": 0,
 "data": {
  "name": "--Settings Button Set"
 },
 "overflow": "visible",
 "shadow": false
},
{
 "scrollBarWidth": 10,
 "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
 "left": "2.14%",
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "21%",
 "class": "Container",
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 120,
 "propagateClick": false,
 "top": "3.5%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 300,
 "verticalAlign": "top",
 "height": "25%",
 "gap": 10,
 "paddingTop": 0,
 "layout": "vertical",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "data": {
  "name": "--Stickers Container"
 },
 "overflow": "visible",
 "shadow": false
},
{
 "maxWidth": 150,
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 1,
 "scrollBarColor": "#52B7EF",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "right": "2%",
 "itemLabelHorizontalAlign": "center",
 "class": "ThumbnailList",
 "selectedItemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "borderRadius": 3,
 "paddingLeft": 15,
 "minHeight": 1,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemBorderRadius": 0,
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Arial",
 "selectedItemThumbnailShadowBlurRadius": 10,
 "minWidth": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "verticalAlign": "top",
 "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontColor": "#FFFFFF",
 "rollOverItemLabelTextDecoration": "underline",
 "height": "82.127%",
 "itemBackgroundOpacity": 0,
 "horizontalAlign": "left",
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 50,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "selectedItemBorderSize": 0,
 "itemBackgroundColorRatios": [],
 "shadow": false,
 "selectedItemBackgroundColor": [],
 "rollOverItemLabelFontWeight": "bold",
 "backgroundOpacity": 0.25,
 "selectedItemThumbnailShadow": true,
 "borderSize": 0,
 "paddingRight": 15,
 "itemLabelTextDecoration": "none",
 "selectedItemBackgroundOpacity": 0,
 "selectedItemLabelFontSize": 12,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontStyle": "italic",
 "propagateClick": false,
 "rollOverItemLabelFontColor": "#FFFFFF",
 "selectedItemLabelTextDecoration": "underline",
 "top": "3.5%",
 "scrollBarMargin": 4,
 "itemLabelFontSize": 12,
 "selectedItemThumbnailShadowOpacity": 0.73,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailWidth": 80,
 "backgroundColorDirection": "vertical",
 "itemThumbnailHeight": 80,
 "paddingTop": 20,
 "gap": 10,
 "itemBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "itemThumbnailShadow": false,
 "paddingBottom": 20,
 "itemPaddingBottom": 3,
 "itemLabelGap": 9,
 "data": {
  "name": "-ThumbnailList"
 },
 "scrollBarWidth": 7,
 "visible": false
},
{
 "scrollBarWidth": 10,
 "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
 "left": "2%",
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "37.394%",
 "children": [
  "this.Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B"
 ],
 "class": "Container",
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "bottom": "3%",
 "contentOpaque": false,
 "minWidth": 1,
 "height": 92,
 "scrollBarMargin": 2,
 "gap": 1,
 "paddingTop": 0,
 "layout": "vertical",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "data": {
  "name": "-Discover Container"
 },
 "overflow": "visible",
 "shadow": false
},
{
 "maxHeight": 265,
 "maxWidth": 485,
 "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
 "backgroundOpacity": 0,
 "width": "5%",
 "right": "0.6%",
 "class": "Image",
 "borderSize": 0,
 "paddingRight": 0,
 "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.98%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "5%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "data": {
  "name": "Image21736"
 },
 "shadow": false,
 "scaleMode": "fit_inside"
},
{
 "transparencyActive": true,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "backgroundOpacity": 0,
 "width": "17.48%",
 "toolTipBorderSize": 0,
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "class": "IconButton",
 "toolTipDisplayTime": 600,
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
 "paddingLeft": 0,
 "toolTipBorderRadius": 1,
 "minHeight": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTip": "Full Screen",
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipShadowSpread": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": "76.75%",
 "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
 "toolTipBorderColor": "#767676",
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "toolTipShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "toolTipFontColor": "#FFFFFF",
 "shadow": false,
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "data": {
  "name": "Icon fullscreen"
 },
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipTextShadowVerticalLength": 0
},
{
 "transparencyActive": true,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "backgroundOpacity": 0,
 "width": "17.15%",
 "toolTipBorderSize": 0,
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "class": "IconButton",
 "toolTipDisplayTime": 600,
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
 "paddingLeft": 0,
 "toolTipBorderRadius": 1,
 "minHeight": 1,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTip": "Audio On/Off",
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipShadowSpread": 0,
 "minWidth": 1,
 "mode": "toggle",
 "height": "76.75%",
 "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
 "toolTipBorderColor": "#767676",
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "toolTipShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "toolTipFontColor": "#FFFFFF",
 "shadow": false,
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "data": {
  "name": "Icon audio"
 },
 "toolTipFontWeight": "normal",
 "cursor": "hand",
 "toolTipTextShadowVerticalLength": 0
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A_1_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.53
  }
 ],
 "id": "overlay_5768D57D_5CB6_4CAB_41C1_5BE99F0EA4B1",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9, this.camera_07AD8BF9_16FC_8DB1_4194_A888AE5030C5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_1_HS_2_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.56
  }
 ],
 "id": "overlay_5723258F_5CC9_CC67_41C4_7C24C172A389",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A, this.camera_07A73BFE_16FC_8DB3_41B4_331D26CC5B37); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_1_HS_3_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -91.03
  }
 ],
 "id": "overlay_5723558F_5CC9_CC67_41D5_E47C00936C35",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257, this.camera_075AFC04_16FC_8A57_41A9_EFBD9FB16D70); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE_1_HS_4_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90.35
  }
 ],
 "id": "overlay_5723459E_5CC9_CC69_41A2_C9C1E0DCD884",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B, this.camera_074CCC09_16FC_8A51_41B5_FF1F5BCFF4F1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_1_HS_6_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.51
  }
 ],
 "id": "overlay_9A9BC782_9155_6C25_41D9_B9C426D9A97A",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928, this.camera_076B4C1E_16FC_8A73_41B4_D18E314E7755); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288_1_HS_7_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.86
  }
 ],
 "id": "overlay_9A9BA783_9155_6C2B_4156_7E467FBDA3C5",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9, this.camera_071D1C23_16FC_8A51_41AB_5045FBA2AD33); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57199BBF_5CCA_DBA7_41D2_F8ABCFD7FF8B_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -112.64
  }
 ],
 "id": "overlay_5719ABBF_5CCA_DBA7_41AE_E551BF18511F",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE, this.camera_04475CB1_16FC_8BB1_419F_6C03EA794C68); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_1_HS_9_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 135.57
  }
 ],
 "id": "overlay_9AE72BB9_916D_A467_41E0_325242060720",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619, this.camera_073C6C33_16FC_8AB1_41A4_182D897FB7E6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_1_HS_10_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.73
  }
 ],
 "id": "overlay_9E415557_917D_6C2A_41DA_3D3E3B4CD272",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A, this.camera_0723BC43_16FC_8AD1_41A3_4C99E8C69984); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_1_HS_11_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -91.29
  }
 ],
 "id": "overlay_9FF51833_917D_646A_41E0_68369471EDCF",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9, this.camera_0729FC3E_16FC_8AB3_4170_2DA4903B5858); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_1_HS_12_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 123.26
  }
 ],
 "id": "overlay_81D00F8E_9173_FC3D_41CB_9A372470F7DF",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34, this.camera_07362C38_16FC_8ABF_41AA_3DC42149B0E4); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_1_HS_13_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.85
  }
 ],
 "id": "overlay_828ECC3C_91F4_DC5D_41C8_3C8F33164DBF",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE, this.camera_04D6CC48_16FC_8ADF_41A0_27550926D2F2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9AE70BB9_916D_A467_4159_F2824AC3417A_1_HS_14_0.png",
      "width": 202,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.69
  }
 ],
 "id": "overlay_51B17684_5CCE_CC59_41CB_3106294276D0",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1, this.camera_04C82C4D_16FC_8AD1_41B1_A4CC57CD055C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_1_HS_1_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -146.05
  }
 ],
 "id": "overlay_8254839B_9174_E45B_41D1_60D282CE9A3B",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_1_HS_3_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.25
  }
 ],
 "id": "overlay_8187A56E_9175_ACFD_41D2_3AA023202AA8",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8254539B_9174_E45B_41E1_D495F1784A65_1_HS_4_0.png",
      "width": 202,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -47.82
  }
 ],
 "id": "overlay_536E7EE2_5CCA_FDD9_41D4_8E066FC85C62",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA, this.camera_07715C19_16FC_8A71_41A3_8BA30646C18F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "maxWidth": 70,
 "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "backgroundOpacity": 0,
 "width": "17.15%",
 "class": "IconButton",
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": "76.75%",
 "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton8475"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2_1_HS_11_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.56
  }
 ],
 "id": "overlay_574A7EB1_5CB6_5DBB_41D4_A9AB949C797B",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9, this.camera_04514CA6_16FC_8A53_41A5_D75D31F1A1B6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -176.95
  }
 ],
 "id": "overlay_4D990F84_5CDA_3C59_41D6_A099C0104BA1",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A, this.camera_07BB9BF4_16FC_8DB7_419B_C824C3B9BC94); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_1_HS_2_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -134.5
  }
 ],
 "id": "overlay_9D6B33B4_916C_A46D_41D8_116071E0A236",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A, this.camera_048ACC81_16FC_8A51_419D_A38EE7F53715); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D6B03B4_916C_A46D_41C1_9DDBD4F15C5A_1_HS_3_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 132.8
  }
 ],
 "id": "overlay_5229A56E_5CCE_CCA9_41D6_5543CD43974D",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_564A5DFF_5CBA_5FA7_41C4_ADD1513A1F29, this.camera_04B8CC8B_16FC_8A51_417B_1E303695F113); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_1_HS_2_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.6
  }
 ],
 "id": "overlay_06B03C5C_16C4_8AF0_41B0_C514F4D01A09",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A, this.camera_07904BE4_16FC_8DD7_4199_1995AE2D5DE0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_1_HS_4_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.59
  }
 ],
 "id": "overlay_06B02C5C_16C4_8AF0_41AE_F0B480E9651A",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619_1_HS_6_0.png",
      "width": 139,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.33
  }
 ],
 "id": "overlay_06B3DC5C_16C4_8AF0_4159_8401C873B350",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2, this.camera_0788EBE9_16FC_8DD1_4184_194782BB8EC7); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_1_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.78
  }
 ],
 "id": "overlay_5758AB7E_5CB7_C4A9_41C6_D3440805FD96",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288, this.camera_04966C76_16FC_8AB3_4157_CED191F86AB9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_1_HS_7_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 122.25
  }
 ],
 "id": "overlay_5758CB7E_5CB7_C4A9_41C7_7BA2FEC703A8",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A, this.camera_04F59C58_16FC_8AFF_4191_3237761E802A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_1_HS_9_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -131.23
  }
 ],
 "id": "overlay_5758DB7E_5CB7_C4A9_41D0_3B5023D0D368",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_574A6EB1_5CB6_5DBB_41C4_74644289D7A2, this.camera_04E8BC5D_16FC_8AF1_418D_0B708635144B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57589B7E_5CB7_C4A9_41CC_71C8743AC4F9_1_HS_10_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.41
  }
 ],
 "id": "overlay_5758FB7E_5CB7_C4A9_4191_E62148F70763",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5768C57D_5CB6_4CAB_41B1_DF3196150B1A, this.camera_04E38C6C_16FC_8AD7_419A_7672C41159B0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_563DC501_5CBA_4C58_41D4_E130C5360FF1_1_HS_0_0.png",
      "width": 297,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.07
  }
 ],
 "id": "overlay_521E96DD_5CCF_CDEB_41B1_62A6FC8B653B",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A, this.camera_0746AC0E_16FC_8A53_417B_07B0D0AD948D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.93,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_1_HS_0_0.png",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 29.77
  }
 ],
 "id": "overlay_1981EF00_16DC_864F_41A4_1AE498204BA4",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57EA8695_5CB6_4C78_417C_6328ACC03928, this.camera_077FEC14_16FC_8A77_41A7_6BC212029C6E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_56C8DCE2_5CBA_DDD8_41D5_68623CB130FA_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -121.43
  }
 ],
 "id": "overlay_4DB02763_5CDA_CCDF_41C4_0016C0DE721F",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8254539B_9174_E45B_41E1_D495F1784A65, this.camera_07816BEF_16FC_8DD1_41A6_E3BC07379902); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_571AD256_5CCA_44F9_41D6_B4F01D82C257_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 136.82
  }
 ],
 "id": "overlay_571AC256_5CCA_44F9_41D7_192933C93BFD",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5723358F_5CC9_CC67_41C0_4CF63CD138DE, this.camera_04C2BC53_16FC_8AF1_4192_24B61F00A815); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_1_HS_6_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.51
  }
 ],
 "id": "overlay_57EAB695_5CB6_4C78_41CC_4559258DE854",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1AE36474_16DC_9AB7_4190_53EA3DC9E222, this.camera_07E36BD9_16FC_8DF1_41A8_BDEE10E9A0C9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_57EA8695_5CB6_4C78_417C_6328ACC03928_1_HS_7_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.42
  }
 ],
 "id": "overlay_1835A714_16DD_8670_41A0_0F11D279AC32",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9A9BF782_9155_6C25_41CE_828EBB3D6288, this.camera_07992BDF_16FC_8DF1_41A4_49E35585D2E8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_1_HS_4_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.77
  }
 ],
 "id": "overlay_80ED7F55_91B5_DC2F_41DE_EF992F81BE05",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_06B06C5C_16C4_8AF0_41B2_CA242E06A619, this.camera_04A31CA0_16FC_8A4F_41AF_BBC8FDB3A122); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80503D03_91B4_DC2B_41D4_A3F0E145C5C2_1_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -56.12
  }
 ],
 "id": "overlay_4E115893_5CD6_C47F_41D5_3EB78EFDE7B6",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_1_HS_1_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -92.54
  }
 ],
 "id": "overlay_817BAA5A_917C_A425_41C6_33A0034BA0B8",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9AE70BB9_916D_A467_4159_F2824AC3417A, this.camera_0710FC29_16FC_8A51_41B6_C9DC993215C4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.87,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34_1_HS_2_0.png",
      "width": 241,
      "class": "ImageResourceLevel",
      "height": 228
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -126.08
  }
 ],
 "id": "overlay_539DB664_5CC9_CCD9_419A_682E53F48B9F",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9, this.camera_070A9C2E_16FC_8A53_41B2_2C2921954252); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_56C22171_5CBA_44B8_4193_D528FE8E9FC9_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 122
  }
 ],
 "id": "overlay_4D563AC4_5CDA_45D9_41A1_4D558DB6DF90",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9D766501_916F_EC27_41AF_BDB60BAAAA34, this.camera_04AEFC95_16FC_8A71_4190_4A896BDB535B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "shadow": false,
 "children": [
  "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
  "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
  "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930"
 ],
 "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "75.269%",
 "class": "Container",
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "layout": "horizontal",
 "horizontalAlign": "right",
 "paddingBottom": 0,
 "data": {
  "name": "-Hide buttons"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "shadow": false,
 "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
 "backgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "class": "Container",
 "borderSize": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "55.435%",
 "gap": 10,
 "paddingTop": 0,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "data": {
  "name": "Container Content"
 },
 "overflow": "visible",
 "scrollBarWidth": 10
}],
 "height": "100%",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
