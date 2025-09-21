(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "children": [
  "this.MainViewer",
  "this.Container_807F782A_8E23_A905_41DE_623121285A09",
  "this.Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "this.Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "this.Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "minHeight": 20,
 "propagateClick": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.8,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 67.46,
  "pitch": 2.81
 },
 "id": "panorama_6491F20F_6975_7517_41D5_607C0DD96692_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "14. 360 OFICINA    M+U",
 "id": "panorama_679C34E6_6977_3D09_41C1_1891807DFB93",
 "thumbnailUrl": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_679C04E6_6977_3D09_41BA_BC0B416AA86A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_camera",
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 48.77,
  "pitch": 0
 },
 "id": "camera_7AA8EC80_69BD_2D09_41B5_EB781EC4ABA3",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "gyroscopeEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": false,
 "mouseControlMode": "drag_rotation"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "1 B. 360 PARQUEADERO - CASA    M+U",
 "id": "panorama_64815E60_696B_2D09_41A5_3B13B1B8899A",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6480AE60_696B_2D09_41D6_3BE6A6CB92FA"
 ]
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 176.14,
  "pitch": 0
 },
 "id": "camera_7B3F4C41_69BD_2D0B_41D7_E2E30C580DDB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -165.27,
  "pitch": 0
 },
 "id": "camera_7A7D7CD0_69BD_2D09_41D0_A31D21DF7A22",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 179.15,
  "pitch": 0
 },
 "id": "camera_7DB34CF0_69BD_2D09_41D3_8B1C718F2176",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -97.44,
  "pitch": 0
 },
 "id": "camera_7B512C51_69BD_2D0B_41B8_58EBF6CE8972",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 124.2,
  "pitch": 0
 },
 "id": "camera_7A24FCB0_69BD_2D09_41AA_4FC321E1E312",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -90.41,
  "pitch": 0
 },
 "id": "camera_7A93AC6B_69BD_2D1F_41D0_47EA9B0F7994",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_66DE6C01_696B_ED0B_41D6_379684575591_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 88.97,
  "pitch": 0
 },
 "id": "camera_7ADB6C85_69BD_2D0B_41C6_7C8098411DBA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.47,
  "pitch": 0
 },
 "id": "camera_7B2AAC4C_69BD_2D19_41C2_21351874858C",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64815E60_696B_2D09_41A5_3B13B1B8899A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67A55098_696D_D539_41AA_CC414248A6C0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67A55098_696D_D539_41AA_CC414248A6C0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_66DE6C01_696B_ED0B_41D6_379684575591",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_66DE6C01_696B_ED0B_41D6_379684575591_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_679C34E6_6977_3D09_41C1_1891807DFB93",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_679C34E6_6977_3D09_41C1_1891807DFB93_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_66510F7A_696B_2BF9_41D0_A25D955135FD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6605BA5C_6977_7539_41D9_E0F5618E176A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8",
   "camera": "this.panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_679C34E6_6977_3D09_41C1_1891807DFB93_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -179.59,
  "pitch": 0
 },
 "id": "camera_7D9E5CE0_69BD_2D09_41C7_B35E6B486EDB",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "02. 360 HALL ACCESO",
 "id": "panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4",
 "thumbnailUrl": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_644C5768_696F_5B19_41C1_22B86E0B810A",
  "this.overlay_644C2768_696F_5B19_41C2_D08ACFC732B4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 87.07,
  "pitch": -0.62
 },
 "id": "panorama_67B4924A_696D_3519_41C2_271DD1109124_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.56,
  "pitch": -4.1
 },
 "id": "panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -4.49,
  "pitch": 0
 },
 "id": "camera_7DC9ED0F_69BD_2F16_41D4_D208FD3FC3AE",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_66DE6C01_696B_ED0B_41D6_379684575591",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "06.  360  ESCALERAS",
 "id": "panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
 "thumbnailUrl": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_666E6FBF_696D_6B76_41D1_ED23BDBBDBE3",
  "this.overlay_666E3FBF_696D_6B76_41CF_9078128772E3",
  "this.overlay_666E2FBF_696D_6B76_41D9_32C2C01F507B",
  "this.overlay_666FFFBF_696D_6B76_41B8_FF531C24B694",
  "this.overlay_666FEFBF_696D_6B76_41D2_223EC2CBA18F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 67.93,
  "pitch": -3.08
 },
 "id": "panorama_67AF991C_696B_5739_41D2_A1DE645439F1_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 100.51,
  "pitch": 0
 },
 "id": "camera_7B248C46_69BD_2D09_41CB_83E2042CDFE7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 178.4,
  "pitch": 0
 },
 "id": "camera_7B442C56_69BD_2D09_41C2_26003820DD6A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 67.36,
  "pitch": 0
 },
 "id": "camera_7DD41D00_69BD_2F09_41BD_DDEA546F3508",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -31.17,
  "pitch": 0
 },
 "id": "camera_7ACDEC8A_69BD_2D19_41D6_C8DEF1C8F58B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 163.58,
  "pitch": 0
 },
 "id": "camera_7A583CC0_69BD_2D09_41B4_E0C81AC495F5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 45.5,
  "pitch": 0
 },
 "id": "camera_7B7F3C60_69BD_2D09_41CD_15159CE3C578",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6605BA5C_6977_7539_41D9_E0F5618E176A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "10. 360 -HAB 3",
 "id": "panorama_67AF991C_696B_5739_41D2_A1DE645439F1",
 "thumbnailUrl": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_67AF491C_696B_5739_41A4_D7F161434171",
  "this.overlay_67AF591C_696B_5739_41D2_6F9DF2D887AF",
  "this.overlay_67AF291C_696B_5739_41BB_7488784000A1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 89.68,
  "pitch": 0
 },
 "id": "camera_7B4BBC5B_69BD_2D3F_41CF_6DB7F3AA9E59",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_66510F7A_696B_2BF9_41D0_A25D955135FD",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "8. 360 HAB PPAL",
 "id": "panorama_64BD8256_696B_7509_41BE_DCA40CAADB65",
 "thumbnailUrl": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_64BDB256_696B_7509_41C8_DEDB2DD11473",
  "this.overlay_64BDA256_696B_7509_41CB_B4301A490AC8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "7. 360 CORREDOR",
 "id": "panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
 "thumbnailUrl": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_67A468A1_696C_F50B_41D4_5D054A362126",
  "this.overlay_67A488A1_696C_F50B_41D2_2569E11F41FE",
  "this.overlay_67A4A8A1_696C_F50B_41D5_FE9D307E13A4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 5.8,
  "pitch": 2.81
 },
 "id": "panorama_67A55098_696D_D539_41AA_CC414248A6C0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 102.49,
  "pitch": 0
 },
 "id": "camera_7A108C9A_69BD_2D39_41D0_32FD70A3EA37",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "13. 360 JUEGOS NI\u00d1OS    M+U",
 "id": "panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7",
 "thumbnailUrl": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_679454EE_6975_3D19_41D8_039F4C6F5974"
 ]
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
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "9. 360 HAB 2",
 "id": "panorama_66DE6C01_696B_ED0B_41D6_379684575591",
 "thumbnailUrl": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_66DD9C01_696B_ED0B_41D5_E1E56271B385"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 3.05,
  "pitch": 0
 },
 "id": "camera_7A6F0CDA_69BD_2D39_419B_8DAC57588B22",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -86.26,
  "pitch": 0
 },
 "id": "camera_7DC76D0A_69BD_2F19_41CC_53043D60CCF2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 57.06,
  "pitch": 0
 },
 "id": "camera_7A326CAA_69BD_2D19_41D4_6C218929E280",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -8.67,
  "pitch": 0
 },
 "id": "camera_7A032C9F_69BD_2D37_41CB_843D59CA411F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -44.55,
  "pitch": 0
 },
 "id": "camera_7A568CBA_69BD_2D79_41A9_76D7F969CB4C",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "05. 360 COCINA",
 "id": "panorama_67A55098_696D_D539_41AA_CC414248A6C0",
 "thumbnailUrl": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_67A28098_696D_D539_41C8_4FEF0E9FDD20"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "04.  360 TERRAZA",
 "id": "panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0",
 "thumbnailUrl": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_67ED557B_696D_3FFE_41C9_E230C9B0B349"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 91.04,
  "pitch": 0
 },
 "id": "camera_7AEEFC94_69BD_2D09_41CA_E0AC4A04C617",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 58.57,
  "pitch": 0
 },
 "id": "camera_7AB73C75_69BD_2D0B_41B9_AEE59444C43E",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64815E60_696B_2D09_41A5_3B13B1B8899A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67B4924A_696D_3519_41C2_271DD1109124_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67A55098_696D_D539_41AA_CC414248A6C0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67A55098_696D_D539_41AA_CC414248A6C0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_66DE6C01_696B_ED0B_41D6_379684575591",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_66DE6C01_696B_ED0B_41D6_379684575591_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6491F20F_6975_7517_41D5_607C0DD96692_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_679C34E6_6977_3D09_41C1_1891807DFB93",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_679C34E6_6977_3D09_41C1_1891807DFB93_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_66510F7A_696B_2BF9_41D0_A25D955135FD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6605BA5C_6977_7539_41D9_E0F5618E176A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_67A55098_696D_D539_41AA_CC414248A6C0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "03. 360 SALON",
 "id": "panorama_67B4924A_696D_3519_41C2_271DD1109124",
 "thumbnailUrl": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_67B4824A_696D_3519_41D8_1CC9140F1AE2",
  "this.overlay_67B4E24A_696D_3519_41A7_25F62839EA8F",
  "this.overlay_67B4D24A_696D_3519_41DA_523573F4C1FB",
  "this.overlay_67B5224A_696D_3519_41BE_DB83AA967530"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 124.05,
  "pitch": 0
 },
 "id": "camera_7D80BCEA_69BD_2D19_41CA_DC5C646F9CCB",
 "automaticZoomSpeed": 10
},
{
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_64815E60_696B_2D09_41A5_3B13B1B8899A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "01. 360 ACCESO",
 "id": "panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6",
 "thumbnailUrl": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_64975BED_696F_2B1B_41D4_25F27A0F4BEB",
  "this.overlay_64970BED_696F_2B1B_41D3_D88FCED138B4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -114.51,
  "pitch": 0
 },
 "id": "camera_7B363C3C_69BD_2D79_41B5_3BA782D90BC5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -91.6,
  "pitch": 2.1
 },
 "id": "panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 4.56,
  "pitch": 0.06
 },
 "id": "panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_679C34E6_6977_3D09_41C1_1891807DFB93",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "12. 360 - PUENTE",
 "id": "panorama_6491F20F_6975_7517_41D5_607C0DD96692",
 "thumbnailUrl": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6491E20F_6975_7517_41CE_7BFB2D5EEAB3",
  "this.overlay_6491920F_6975_7517_419D_78F52059302D",
  "this.overlay_6491820F_6975_7517_41B3_0873CF3186B8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 33.95,
  "pitch": 0
 },
 "id": "camera_7AFF9C8F_69BD_2D17_419F_88120DFCF07A",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "15. 360 BA\u00d1O PPAL - CASA    M+U",
 "id": "panorama_66510F7A_696B_2BF9_41D0_A25D955135FD",
 "thumbnailUrl": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6650FF7A_696B_2BF9_41D0_D91E092C0C76"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_camera",
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -90.41,
  "pitch": 0
 },
 "id": "camera_7A822C70_69BD_2D09_41D0_168FD1D26DCD",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "16. 360 BA\u00d1O AUX - CASA    M+U",
 "id": "panorama_6605BA5C_6977_7539_41D9_E0F5618E176A",
 "thumbnailUrl": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_66054A5C_6977_7539_41C5_992E1C6108A1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -57.75,
  "pitch": 0
 },
 "id": "camera_7B61EC65_69BD_2D0B_41C2_A0AB3741967D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.22,
  "pitch": 0
 },
 "id": "camera_7A4ACCCA_69BD_2D19_41A4_6E780A32C3C6",
 "automaticZoomSpeed": 10
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -89.65,
  "pitch": 0
 },
 "id": "camera_7AB98C7A_69BD_2DF9_41D7_8D235442AF75",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "16. B  360 BA\u00d1O AUX - CASA    M+U",
 "id": "panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8",
 "thumbnailUrl": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_667673B1_6977_3B0B_419A_1D4342258801"
 ]
},
{
 "fontFamily": "Arial",
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
  }
 ],
 "fontColor": "#FFFFFF",
 "id": "Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "rollOverOpacity": 0.8,
 "label": "Media",
 "rollOverBackgroundColor": "#000000",
 "opacity": 0.4,
 "class": "Menu",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020",
 "rollOverFontColor": "#FFFFFF"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "11. 360 - HAB 4",
 "id": "panorama_6714A6ED_6974_FD1B_41C8_5D117915827A",
 "thumbnailUrl": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_t.jpg",
 "cardboardMenu": "this.Menu_7B1A2C33_69BD_2D0F_41D4_D329BF96A750",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/b/3/{row}_{column}.jpg",
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
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6714D6ED_6974_FD1B_41C7_48845466EC62",
  "this.overlay_6714F6ED_6974_FD1B_41CC_634FEE27AB4F"
 ]
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
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -43.18,
  "pitch": 0
 },
 "id": "camera_7DA5CCFA_69BD_2EF9_41D7_5CDF37CBC2EF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -150.23,
  "pitch": 0
 },
 "id": "camera_7DF85D19_69BD_2F3A_41D3_F7B5BF739F86",
 "automaticZoomSpeed": 10
},
{
 "class": "ViewerArea",
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 9,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 14,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 1,
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
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "transitionMode": "blending",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 9,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
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
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106"
 ],
 "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "22.545%",
 "borderRadius": 5,
 "right": 25,
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "top": "89%",
 "bottom": "3%",
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 265,
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 1,
 "paddingTop": 0,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--Settings Button Set"
 },
 "scrollBarVisible": "rollOver",
 "class": "Container"
},
{
 "overflow": "visible",
 "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
 "left": "2.14%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "21%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 120,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "3.5%",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 300,
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "height": "25%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--Stickers Container"
 },
 "scrollBarVisible": "rollOver",
 "class": "Container"
},
{
 "class": "ThumbnailList",
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 15,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 1,
 "itemMode": "normal",
 "right": "2%",
 "selectedItemBorderRadius": 0,
 "borderRadius": 3,
 "selectedItemBackgroundColorRatios": [],
 "minHeight": 1,
 "horizontalAlign": "left",
 "itemVerticalAlign": "middle",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Arial",
 "scrollBarWidth": 7,
 "selectedItemThumbnailShadowBlurRadius": 10,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "scrollBarColor": "#52B7EF",
 "verticalAlign": "top",
 "itemThumbnailOpacity": 1,
 "itemThumbnailWidth": 80,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelPosition": "bottom",
 "rollOverItemLabelTextDecoration": "underline",
 "height": "82.127%",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "shadow": false,
 "itemThumbnailBorderRadius": 50,
 "itemPaddingTop": 3,
 "itemHorizontalAlign": "center",
 "itemPaddingRight": 3,
 "itemBackgroundColorRatios": [],
 "itemBackgroundColor": [],
 "selectedItemLabelFontColor": "#FFFFFF",
 "selectedItemBackgroundColor": [],
 "rollOverItemLabelFontWeight": "bold",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "backgroundOpacity": 0.25,
 "paddingRight": 15,
 "selectedItemLabelFontSize": 12,
 "itemLabelTextDecoration": "none",
 "borderSize": 0,
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontStyle": "italic",
 "propagateClick": false,
 "selectedItemLabelTextDecoration": "underline",
 "top": "3.5%",
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarMargin": 4,
 "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "selectedItemThumbnailShadow": true,
 "itemLabelFontSize": 12,
 "selectedItemBorderSize": 0,
 "itemLabelFontColor": "#FFFFFF",
 "selectedItemThumbnailShadowOpacity": 0.73,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "itemLabelGap": 9,
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 10,
 "itemThumbnailHeight": 80,
 "rollOverItemLabelFontColor": "#FFFFFF",
 "paddingBottom": 20,
 "selectedItemLabelFontWeight": "bold",
 "selectedItemBackgroundOpacity": 0,
 "itemPaddingBottom": 3,
 "data": {
  "name": "-ThumbnailList"
 },
 "visible": false,
 "itemThumbnailShadow": false,
 "maxWidth": 150,
 "scrollBarVisible": "rollOver"
},
{
 "overflow": "visible",
 "children": [
  "this.Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B"
 ],
 "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "37.394%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "verticalAlign": "bottom",
 "horizontalAlign": "left",
 "bottom": "3%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 1,
 "paddingTop": 0,
 "height": 92,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-Discover Container"
 },
 "scrollBarVisible": "rollOver",
 "class": "Container"
},
{
 "maxHeight": 265,
 "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "0.6%",
 "width": "5%",
 "borderRadius": 0,
 "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0.98%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "paddingTop": 0,
 "height": "5%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image21736"
 },
 "class": "Image",
 "maxWidth": 485
},
{
 "transparencyActive": true,
 "maxHeight": 70,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "width": "17.48%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTip": "Full Screen",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 1,
 "horizontalAlign": "center",
 "toolTipBorderRadius": 1,
 "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "minWidth": 1,
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": "76.75%",
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "data": {
  "name": "Icon fullscreen"
 },
 "cursor": "hand",
 "class": "IconButton",
 "maxWidth": 70,
 "toolTipTextShadowVerticalLength": 0
},
{
 "transparencyActive": true,
 "maxHeight": 70,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "width": "17.15%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTip": "Audio On/Off",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 1,
 "horizontalAlign": "center",
 "toolTipBorderRadius": 1,
 "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "minWidth": 1,
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": "76.75%",
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "data": {
  "name": "Icon audio"
 },
 "cursor": "hand",
 "class": "IconButton",
 "maxWidth": 70,
 "toolTipTextShadowVerticalLength": 0
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -112.64,
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_679C34E6_6977_3D09_41C1_1891807DFB93_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_679C04E6_6977_3D09_41BA_BC0B416AA86A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6491F20F_6975_7517_41D5_607C0DD96692, this.camera_7AB98C7A_69BD_2DF9_41D7_8D235442AF75); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "17.15%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
 "mode": "push",
 "minWidth": 1,
 "paddingTop": 0,
 "height": "76.75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton8475"
 },
 "cursor": "hand",
 "class": "IconButton",
 "maxWidth": 70
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 29.77,
   "hfov": 8.93,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_1_HS_0_0.png",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6480AE60_696B_2D09_41D6_3BE6A6CB92FA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6, this.camera_7A108C9A_69BD_2D39_41D0_32FD70A3EA37); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.93,
   "yaw": 29.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_64815E60_696B_2D09_41A5_3B13B1B8899A_1_HS_0_0_0_map.gif",
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
   "yaw": 175.51,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_1_HS_6_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_644C5768_696F_5B19_41C1_22B86E0B810A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6, this.camera_7A583CC0_69BD_2D09_41B4_E0C81AC495F5); this.mainPlayList.set('selectedIndex', 0)",
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
   "yaw": -3.86,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4_1_HS_7_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_644C2768_696F_5B19_41C2_D08ACFC732B4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B4924A_696D_3519_41C2_271DD1109124, this.camera_7A4ACCCA_69BD_2D19_41A4_6E780A32C3C6); this.mainPlayList.set('selectedIndex', 3)",
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
   "yaw": 148.83,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0_HS_9_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_666E6FBF_696D_6B76_41D1_ED23BDBBDBE3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C, this.camera_7B442C56_69BD_2D09_41C2_26003820DD6A); this.mainPlayList.set('selectedIndex', 7)",
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
   "yaw": 14.73,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_1_HS_10_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_666E3FBF_696D_6B76_41CF_9078128772E3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65, this.camera_7B7F3C60_69BD_2D09_41CD_15159CE3C578); this.mainPlayList.set('selectedIndex', 8)",
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
   "yaw": -79.49,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0_HS_11_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_666E2FBF_696D_6B76_41D9_32C2C01F507B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B4924A_696D_3519_41C2_271DD1109124, this.camera_7B61EC65_69BD_2D0B_41C2_A0AB3741967D); this.mainPlayList.set('selectedIndex', 3)",
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
   "yaw": 93.74,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_0_HS_12_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_666FFFBF_696D_6B76_41B8_FF531C24B694",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_66DE6C01_696B_ED0B_41D6_379684575591, this.camera_7B4BBC5B_69BD_2D3F_41CF_6DB7F3AA9E59); this.mainPlayList.set('selectedIndex', 9)",
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
   "yaw": -0.85,
   "hfov": 7.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E7FBF_696D_6B76_41C2_A00939B05F06_1_HS_13_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_666FEFBF_696D_6B76_41D2_223EC2CBA18F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6491F20F_6975_7517_41D5_607C0DD96692, this.camera_7B512C51_69BD_2D0B_41B8_58EBF6CE8972); this.mainPlayList.set('selectedIndex', 12)",
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
   "yaw": -146.05,
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_1_HS_1_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67AF491C_696B_5739_41A4_D7F161434171",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C, this.camera_7A93AC6B_69BD_2D1F_41D0_47EA9B0F7994); this.mainPlayList.set('selectedIndex', 7)",
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
   "yaw": -83.25,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_1_HS_3_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67AF591C_696B_5739_41D2_6F9DF2D887AF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C, this.camera_7A822C70_69BD_2D09_41D0_168FD1D26DCD); this.mainPlayList.set('selectedIndex', 7)",
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
   "yaw": -55.8,
   "hfov": 9.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67AF991C_696B_5739_41D2_A1DE645439F1_0_HS_4_0.png",
      "width": 202,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67AF291C_696B_5739_41BB_7488784000A1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6605BA5C_6977_7539_41D9_E0F5618E176A, this.camera_7AB73C75_69BD_2D0B_41B9_AEE59444C43E); this.mainPlayList.set('selectedIndex', 16)",
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
   "yaw": -134.5,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_1_HS_2_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_64BDB256_696B_7509_41C8_DEDB2DD11473",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06, this.camera_7A7D7CD0_69BD_2D09_41D0_A31D21DF7A22); this.mainPlayList.set('selectedIndex', 6)",
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
   "yaw": 135.45,
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64BD8256_696B_7509_41BE_DCA40CAADB65_0_HS_3_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_64BDA256_696B_7509_41CB_B4301A490AC8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_66510F7A_696B_2BF9_41D0_A25D955135FD, this.camera_7A6F0CDA_69BD_2D39_419B_8DAC57588B22); this.mainPlayList.set('selectedIndex', 15)",
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
   "yaw": -1.6,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_1_HS_2_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67A468A1_696C_F50B_41D4_5D054A362126",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06, this.camera_7ACDEC8A_69BD_2D19_41D6_C8DEF1C8F58B); this.mainPlayList.set('selectedIndex', 6)",
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
   "yaw": 89.59,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_1_HS_4_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67A488A1_696C_F50B_41D2_2569E11F41FE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1, this.camera_7AFF9C8F_69BD_2D17_419F_88120DFCF07A); this.mainPlayList.set('selectedIndex', 10)",
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
   "yaw": 171.33,
   "hfov": 6.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C_1_HS_6_0.png",
      "width": 139,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67A4A8A1_696C_F50B_41D5_FE9D307E13A4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A, this.camera_7AEEFC94_69BD_2D09_41CA_E0AC4A04C617); this.mainPlayList.set('selectedIndex', 11)",
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
   "yaw": 136.82,
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_679454EE_6975_3D19_41D8_039F4C6F5974",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6491F20F_6975_7517_41D5_607C0DD96692, this.camera_7ADB6C85_69BD_2D0B_41C6_7C8098411DBA); this.mainPlayList.set('selectedIndex', 12)",
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
   "yaw": -90.32,
   "hfov": 14.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_66DE6C01_696B_ED0B_41D6_379684575591_0_HS_1_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 313
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_66DD9C01_696B_ED0B_41D5_E1E56271B385",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06, this.camera_7DC76D0A_69BD_2F19_41CC_53043D60CCF2); this.mainPlayList.set('selectedIndex', 6)",
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
   "yaw": 65.49,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67A55098_696D_D539_41AA_CC414248A6C0_0_HS_11_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67A28098_696D_D539_41C8_4FEF0E9FDD20",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B4924A_696D_3519_41C2_271DD1109124, this.camera_7AA8EC80_69BD_2D09_41B5_EB781EC4ABA3); this.mainPlayList.set('selectedIndex', 3)",
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
   "yaw": 179.53,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0_1_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67ED557B_696D_3FFE_41C9_E230C9B0B349",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B4924A_696D_3519_41C2_271DD1109124, this.camera_7D9E5CE0_69BD_2D09_41C7_B35E6B486EDB); this.mainPlayList.set('selectedIndex', 3)",
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
   "yaw": 179.78,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_1_HS_5_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67B4824A_696D_3519_41D8_1CC9140F1AE2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4, this.camera_7B3F4C41_69BD_2D0B_41D7_E2E30C580DDB); this.mainPlayList.set('selectedIndex', 2)",
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
   "yaw": 122.25,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_1_HS_7_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67B4E24A_696D_3519_41A7_25F62839EA8F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06, this.camera_7B248C46_69BD_2D09_41CB_83E2042CDFE7); this.mainPlayList.set('selectedIndex', 6)",
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
   "yaw": -131.23,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_1_HS_9_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67B4D24A_696D_3519_41DA_523573F4C1FB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67A55098_696D_D539_41AA_CC414248A6C0, this.camera_7B363C3C_69BD_2D79_41B5_3BA782D90BC5); this.mainPlayList.set('selectedIndex', 5)",
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
   "yaw": 0.41,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_67B4924A_696D_3519_41C2_271DD1109124_1_HS_10_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67B5224A_696D_3519_41BE_DB83AA967530",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67ED757B_696D_3FFE_41D4_0BC87B6869D0, this.camera_7B2AAC4C_69BD_2D19_41C2_21351874858C); this.mainPlayList.set('selectedIndex', 4)",
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
   "yaw": -77.51,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_1_HS_6_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_64975BED_696F_2B1B_41D4_25F27A0F4BEB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64815E60_696B_2D09_41A5_3B13B1B8899A, this.camera_7DF85D19_69BD_2F3A_41D3_F7B5BF739F86); this.mainPlayList.set('selectedIndex', 1)",
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
   "yaw": -16.42,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64977BED_696F_2B1B_41BE_D0450BBDEBE6_1_HS_7_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_64970BED_696F_2B1B_41D3_D88FCED138B4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_644C4768_696F_5B19_41D3_2FE824F5B6B4, this.camera_7DC9ED0F_69BD_2F16_41D4_D208FD3FC3AE); this.mainPlayList.set('selectedIndex', 2)",
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
   "yaw": 82.56,
   "hfov": 7.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_1_HS_2_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6491E20F_6975_7517_41CE_7BFB2D5EEAB3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E7FBF_696D_6B76_41C2_A00939B05F06, this.camera_7DB34CF0_69BD_2D09_41D3_8B1C718F2176); this.mainPlayList.set('selectedIndex', 6)",
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
   "yaw": -91.03,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_1_HS_3_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6491920F_6975_7517_419D_78F52059302D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_679474EE_6975_3D19_41B3_3F63FD3C5FA7, this.camera_7DA5CCFA_69BD_2EF9_41D7_5CDF37CBC2EF); this.mainPlayList.set('selectedIndex', 13)",
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
   "yaw": 90.35,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6491F20F_6975_7517_41D5_607C0DD96692_1_HS_4_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6491820F_6975_7517_41B3_0873CF3186B8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_679C34E6_6977_3D09_41C1_1891807DFB93, this.camera_7DD41D00_69BD_2F09_41BD_DDEA546F3508); this.mainPlayList.set('selectedIndex', 14)",
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
   "yaw": -176.95,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_66510F7A_696B_2BF9_41D0_A25D955135FD_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6650FF7A_696B_2BF9_41D0_D91E092C0C76",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64BD8256_696B_7509_41BE_DCA40CAADB65, this.camera_7A568CBA_69BD_2D79_41A9_76D7F969CB4C); this.mainPlayList.set('selectedIndex', 8)",
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
   "yaw": -121.43,
   "hfov": 7.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6605BA5C_6977_7539_41D9_E0F5618E176A_1_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_66054A5C_6977_7539_41C5_992E1C6108A1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67AF991C_696B_5739_41D2_A1DE645439F1, this.camera_7A24FCB0_69BD_2D09_41AA_4FC321E1E312); this.mainPlayList.set('selectedIndex', 10)",
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
   "yaw": -122.94,
   "hfov": 7.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8_0_HS_0_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_667673B1_6977_3B0B_419A_1D4342258801",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6714A6ED_6974_FD1B_41C8_5D117915827A, this.camera_7D80BCEA_69BD_2D19_41CA_DC5C646F9CCB); this.mainPlayList.set('selectedIndex', 11)",
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
   "yaw": -88.96,
   "hfov": 7.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0_HS_4_0.png",
      "width": 168,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6714D6ED_6974_FD1B_41C7_48845466EC62",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67A448A1_696C_F50B_41D2_9B2FC095BF4C, this.camera_7A032C9F_69BD_2D37_41CB_843D59CA411F); this.mainPlayList.set('selectedIndex', 7)",
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
   "yaw": -55.95,
   "hfov": 9.69,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6714A6ED_6974_FD1B_41C8_5D117915827A_0_HS_5_0.png",
      "width": 215,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6714F6ED_6974_FD1B_41CC_634FEE27AB4F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_667603B1_6977_3B0B_41CE_D3636D4F4FA8, this.camera_7A326CAA_69BD_2D19_41D4_6C218929E280); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "maps": []
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
  "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
  "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930"
 ],
 "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "75.269%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "right",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-Hide buttons"
 },
 "scrollBarVisible": "rollOver",
 "class": "Container"
},
{
 "overflow": "visible",
 "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "height": "55.435%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container Content"
 },
 "scrollBarVisible": "rollOver",
 "class": "Container"
}],
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "data": {
  "name": "Player463"
 },
 "layout": "absolute",
 "contentOpaque": false,
 "downloadEnabled": false,
 "paddingTop": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "defaultVRPointer": "laser",
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "height": "100%",
 "backgroundPreloadEnabled": false
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
