const prompts = require('prompts');

const {
  Barikoi,
  autocomplete,
  autocompletePO,
  distance,
  geocode,
  nearby,
  reverseGeocode,
} = require('barikoi-unified');

(async () => {
  try {
    const APIKEY = process.env.BARIKOI_API;
    const args = process.argv.slice(2);

    let answers;

    if (args.length > 0 && args[0] === 'quiet') {
      if (!APIKEY) {
        throw 'BARIKOI_API environment variable must be set for quiet mode to work!';
      }
      answers = {
        apiKey: APIKEY,
        latitude: 23.774741,
        longitude: 90.36542960000001,
        latitude2: 23.858334,
        longitude2: 90.26667,
        search: 'Hotel',
        poSearch: 'Savar',
        limit: 5,
        placeId: 289608,
        radius: 10,
        testType: args[1] === 'factory' ? 1 : 0,
        testApis: [0, 1, 2, 3, 4, 5],
      };
    } else {
      answers = await prompts([
        {
          type: 'text',
          name: 'apiKey',
          message: 'Enter your API Key',
          initial: APIKEY,
          validate: (value) => (!value ? `Invalid Input` : true),
        },
        {
          type: 'text',
          name: 'latitude',
          message: 'Enter Source latitude',
          initial: '23.774741',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseFloat(value),
        },
        {
          type: 'text',
          name: 'longitude',
          message: 'Enter Source longitude',
          initial: '90.36542960000001',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseFloat(value),
        },
        {
          type: 'text',
          name: 'latitude2',
          message: 'Enter Destination latitude',
          initial: '23.858334',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseFloat(value),
        },
        {
          type: 'text',
          name: 'longitude2',
          message: 'Enter Destination longitude',
          initial: '90.26667',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseFloat(value),
        },
        {
          type: 'text',
          name: 'search',
          message: 'Enter Search Term',
          initial: 'Hotel',
          validate: (value) => (!value ? `Invalid Input` : true),
        },
        {
          type: 'text',
          name: 'poSearch',
          message: 'Enter Search Term for Post Office',
          initial: 'Savar',
          validate: (value) => (!value ? `Invalid Input` : true),
        },
        {
          type: 'text',
          name: 'limit',
          message: 'Enter Search Limit',
          initial: '5',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseInt(value),
        },
        {
          type: 'text',
          name: 'placeId',
          message: 'Enter a place id for geocoding',
          initial: '289608',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseInt(value),
        },
        {
          type: 'text',
          name: 'radius',
          message: 'Enter nearby place radius',
          initial: '10',
          validate: (value) => (!value ? `Invalid Input` : true),
          format: (value) => parseInt(value),
        },
        {
          type: 'select',
          name: 'testType',
          message: 'Select Test Type',
          initial: 0,
          choices: [{ title: 'Standalone Functions' }, { title: 'Factory Function' }],
        },
        {
          type: 'multiselect',
          name: 'testApis',
          message: 'API(s) to test',
          choices: [
            { title: 'Autocomplete', selected: true },
            { title: 'Autocomplete (Post Office)', selected: true },
            { title: 'Distance', selected: true },
            { title: 'Geocode', selected: true },
            { title: 'Nearby Places', selected: true },
            { title: 'Reverse Geocode', selected: true },
          ],
        },
      ]);
    }

    const {
      apiKey,
      search,
      testType,
      testApis,
      latitude,
      longitude,
      latitude2,
      longitude2,
      placeId,
      radius,
      limit,
      poSearch,
    } = answers;
    if (testType === 0) {
      console.log('Testing barikoi-headless using standalone functions.');

      // Autocomplete API
      if (testApis.includes(0)) {
        console.log('Testing Autocomplete API');
        const res = await autocomplete(apiKey, { q: search });
        console.log('Result:', res);
      }

      // Autocomplete (Post Office) API
      if (testApis.includes(1)) {
        console.log('Testing Autocomplete (Post Office) API');
        const res = await autocompletePO(apiKey, { q: poSearch });
        console.log('Result:', res);
      }

      // Distance API
      if (testApis.includes(2)) {
        console.log('Testing Distance API');
        const res = await distance(apiKey, {
          form: { latitude, longitude },
          to: { latitude: latitude2, longitude: longitude2 },
        });
        console.log('Result:', res);
      }

      // Geocode API
      if (testApis.includes(3)) {
        console.log('Testing Geocode API');
        const res = await geocode(apiKey, { place_id: placeId });
        console.log('Result:', res);
      }

      // Nearby Places API
      if (testApis.includes(4)) {
        console.log('Testing Nearby Places API');
        const res = await nearby(apiKey, { distance: radius, latitude, longitude, limit });
        console.log('Result:', res);
      }

      // Reverse Geocode API
      if (testApis.includes(5)) {
        console.log('Testing Reverse Geocode API');
        const res = await reverseGeocode(apiKey, { latitude, longitude });
        console.log('Result:', res);
      }
    }

    if (testType === 1) {
      console.log('Testing barikoi-headless using factory function.');

      // Init Factory wwith API Key
      const barikoi = Barikoi(apiKey);

      // Autocomplete API
      if (testApis.includes(0)) {
        console.log('Testing Autocomplete API');
        const res = await barikoi.autocomplete({ q: search });
        console.log('Result:', res);
      }

      // Autocomplete (Post Office) API
      if (testApis.includes(1)) {
        console.log('Testing Autocomplete (Post Office) API');
        const res = await barikoi.autocompletePO({ q: poSearch });
        console.log('Result:', res);
      }

      // Distance API
      if (testApis.includes(2)) {
        console.log('Testing Distance API');
        const res = await barikoi.distance({
          form: { latitude, longitude },
          to: { latitude: latitude2, longitude: longitude2 },
        });
        console.log('Result:', res);
      }

      // Geocode API
      if (testApis.includes(3)) {
        console.log('Testing Geocode API');
        const res = await barikoi.geocode({ place_id: placeId });
        console.log('Result:', res);
      }

      // Nearby Places API
      if (testApis.includes(4)) {
        console.log('Testing Nearby Places API');
        const res = await barikoi.nearby({ distance: radius, latitude, longitude, limit });
        console.log('Result:', res);
      }

      // Reverse Geocode API
      if (testApis.includes(5)) {
        console.log('Testing Reverse Geocode API');
        const res = await barikoi.reverseGeocode({ latitude, longitude });
        console.log('Result:', res);
      }
    }
    console.log('All Tests Complete.');
  } catch (error) {
    console.error('Error:', error);
  }
})();
