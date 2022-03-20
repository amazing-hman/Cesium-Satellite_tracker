import { useEffect } from 'react';
import Head from 'next/head';
import * as satellite from "satellite.js";

import { combinedTLE } from "utils/combineTLE";

import {
  Viewer,
  CesiumTerrainProvider,
  Ion,
  IonResource,
  IonImageryProvider,
  Cartesian3,
  PointPrimitiveCollection,
  Color as CesiumColor
} from "cesiumSource/Cesium";

export default function Home() {
  let yearstep = 0;
  let monthstep = 0;
  let datestep = 0;
  let hrstep = 0;
  let minstep = 0;
  let secstep = 0;

  // Propagate an array of satrecs with provided time offsets
  // using a web worker (if available)
  const createPropagatedArray = (
    satrecs,
    now,
    worker = null,
    year = 0,
    month = 0,
    date = 0,
    hr = 0,
    min = 0,
    sec = 0
  ) => {
    return new Promise(function(resolve, reject) {
      // if web workers are supported, use the created worker
      if (worker && 1 > 2) {
        worker.onmessage = (e) => {
          resolve(e.data);
        };
  
        worker.postMessage({
          satrecs,
          now,
          year,
          month,
          date,
          hr,
          min,
          sec
        });
      } else {
        // if web workers are not supported, use this fallback code
        const results = [];

        satrecs.forEach((record) => {
          if (record) { 
            const propagated = satellite.propagate(
              record,
              now.getUTCFullYear() + year,
              now.getUTCMonth() + 1 + month, // month has to be in range from 1 to 12
              now.getUTCDate() + date,
              now.getUTCHours() + hr,
              now.getUTCMinutes() + min,
              now.getUTCSeconds() + sec
            );
    
            if (propagated.position && propagated.velocity) {
              results.push(propagated);
            }
          }
        });
  
        resolve(results);
      }
    });
  };

  // calculate position and velocity of each object from TLE data
  const propagateObjects = (data, now, worker) => {
    return new Promise(function(resolve, reject) {
      const satrecs = [];

      // transform TLE data to satrec data
      let j = 0;
      for (let i=0; i < data.length; i++) {
        const tle1 = data[j];
        const tle2 = data[j + 1];
        if (typeof tle1 == 'string' && typeof tle2 == 'string') {
          satrecs.push(satellite.twoline2satrec(tle1, tle2));
        }
        j = j + 2;
      }
  
      // Propagate objects
      createPropagatedArray(satrecs, now, worker)
      .then(results => resolve({ results, satrecs }));
    });
  };

  // update predicted object position in a set moment of time
  const updatePosition = (pointsCollection, satrecs, now, worker) => {
    secstep = secstep + 10;
    console.log("updating");

    // recalculate time offsets
    if (secstep > 59) {
      minstep = minstep + 1;
      secstep = 0;
    }

    if (minstep > 59) {
      hrstep = hrstep + 1;
      minstep = 0;
    }
    
    if (hrstep > 23) {
      datestep = datestep + 1;
      hrstep = 0;
    }

    // FIX THIS
    // FIX THIS
    // FIX THIS
    // FIX THIS
    if (datestep > 30) {
      monthstep = monthstep + 1;
      datestep = 0;
    }

    if (monthstep + 1 > 11) {
      yearstep = yearstep + 1;
      monthstep = 0;
    }

    // Propagate objects
    createPropagatedArray(
      satrecs,
      now,
      worker,
      yearstep,
      monthstep,
      datestep,
      hrstep,
      minstep,
      secstep
    ).then(results => {
        // set new positions for objects in 3D viewer
        const km = 1000; // need to multiply each coordinate by 1000 to get km
        const points = pointsCollection._pointPrimitives;

        for (let i = 0; i < points.length; i++) {
          points[i].position =  new Cartesian3(results[i].position.x * km, results[i].position.y * km, results[i].position.z * km);
        }
    });
  }; 

  useEffect(() => {
    let worker = null;
    if (window.Worker) {
      worker = new Worker("webWorkers/positionUpdateWorker.js");
    }

    // Create 3D Cesium viewer
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiODM0ODNmMS0wMmZjLTRiNTUtODAxMy0yMWZlMmI5OWE0ZDAiLCJpZCI6ODQ0ODMsImlhdCI6MTY0NjMxNzk4MX0.uVpY8O0Gg7Q3hjFtCfDksBL_4FCvj9AplE6qGK117K4";

    const viewer = new Viewer("cesium-container", {
      terrainProvider: new CesiumTerrainProvider({
        url: IonResource.fromAssetId(1),
      }),
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: true,
      vrButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: false,
      navigationHelpButton: false,
      targetFrameRate: 30,
      requestRenderMode: true
    });

    viewer.scene.debugShowFramesPerSecond = true;
    viewer.resolutionScale = 0.7;

    // Calculate position and velocity from TLE data,
    // render objects in initial object positions and
    // start periodically updating their positions
    const now = new Date();
    
    propagateObjects(combinedTLE, now, worker)
    .then(({ results: propagatedData, satrecs }) => {
      // Create entities in 3D viewer for each object
      const km =  1000; // need to multiply each coordinate by 1000 to get km
      const pointsCollection = viewer.scene.primitives.add(new PointPrimitiveCollection());

      propagatedData.forEach((obj) => 
        pointsCollection.add({
          position: new Cartesian3(obj.position.x * km, obj.position.y * km, obj.position.z * km),
          color: CesiumColor.CHARTREUSE,
          pixelSize: 2
        })
      );

      viewer.scene.render();
      viewer.scene.preRender.addEventListener(() => updatePosition(pointsCollection, satrecs, now, worker));
    });
    
    return () => {
      worker.terminate();
    };
  });

  return (
    <div>
      <Head>
        <title>Satellite Tracker</title>
      </Head>

      <main>
        <div id="cesium-container" className="fullSize"></div>
        <div id="animationContainer"></div>
      </main>
    </div>
  )
}
