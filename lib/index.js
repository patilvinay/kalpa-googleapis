'use strict';
const playstore = require('google-playstore-publisher');
const path = require('path');


async function appPublish(args) {
  try {
    const data = await playstore.publish(args);
    console.log(data);
  } catch (e) {
    console.log(e);
  }

}

const process = obj => {
  let play = obj.node["kalpa-googleapis"];
  switch (play.action) {
    case "publish":
      const args = {
        keyFilePath: play.keyFile,
        packageName: play.packageName,
        track: play.track,
        apkFilePath: play.apkFile
      };
      appPublish(args);
      break;
    default:
      break;
  }
};


exports.process = process;
