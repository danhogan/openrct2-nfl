import hello from './hello';
import {
  getPeeps,
  getStaff,
  getHandymen,
  getMechanics,
  getSecurity,
  getEntertainers,
} from './helpers';

let something = function() {
  for (let x=0; x < 100; x++){
    for (let y=0; y < 100; y++){
      let someSpot = map.getTile(x,y);
      // Iterate every element on the tile
      for (var i = 0; i < someSpot.numElements; i++) {
        var element = someSpot.getElement(i);

        element.baseHeight = 20;
      }
    }
  }
}

let blah = function(){
  console.log("blah");
}

const main = (): void => {
  console.log(`${hello()} Your plug-in has started!`);

  console.log(`In your park, there are currently ${getPeeps().length} peeps`);
  console.log(`${getStaff().length} of them is your staff.`);

  console.log('Your staff consists of:');
  console.log(`- ${getHandymen().length} handymen`);
  console.log(`- ${getMechanics().length} mechanics`);
  console.log(`- ${getSecurity().length} security`);
  console.log(`- ${getEntertainers().length} entertainers`);

  console.log("hey?");

  // Add a menu item under the map icon on the top toolbar
  ui.registerMenuItem("I don't know but maybe something", function() {
    something();
  });

  ui.registerMenuItem("blahhh", function() {
    blah();
  });
};

export default main;
