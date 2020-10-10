# Barikoi Unified

[![Star IT Ltd](https://staritltd.com/wp-content/uploads/2019/10/Web_Logo_of_Star_IT_158x80.png)](https://staritltd.com)

🔥 Barikoi API For The Whole JavaScript World 🔥

Barikoi Unified is an asynchronous implementation of Barikoi APIs written in TypeScript. It run whereever JavaScript runs - node, browsers, react-native... you name it!

- Written on TypeScript.
- Supports all kinds of platforms.
- Fully typed and ready for consumption in any JavaScript or TypeScript Project.
- supports autocomplete, distance, nearby, geocode, reverse geocode apis.
- Full inteliSense support for API Queries and Responses.

This is the low level building block for other high level abstractions such as react-barikoi and react-native-barikoi.

## Installation & Usage

### For node/react-native

Install with your favorite package manager.

Using Yarn:

```
yarn add barikoi-unified
```

Using NPM:

```
npm i barikoi-unified

```

Now you can import specific functions or the factory function from the module using commonjs or esm statements.

#### Using Named Exports

```typescript
import { Barikoi } from 'barikoi-unified';

const barikoi = Barikoi('YOUR-API-KEY');
```

#### Using Default Exports

````typescript
import BK from 'barikoi-unified';

const barikoi = BK.Barikoi('YOUR-API-KEY');

### For Browser

Add a script tag with the umd bundle from unpkg or release page.

```html
<script src="https://unpkg.com/barikoi-unified"></script>
````

Now you will have `BkUnified` global in your hand with all functions to use!

```html
<script>
  // Create a Barikoi Instance
  const barikoi = BkUnified.Barikoi('YOUR-API-KEY');

  // Check for geolocation API Support
  if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
    // Get Current Position
    navigator.geolocation.getCurrentPosition((position) => {
      // Destructure lat & long
      const { latitude, longitude } = position.coords;

      // Call reverseGeocode API
      barikoi
        .reverseGeocode({ latitude, longitude })
        .then((place) => {
          // Do whatever with the place
          console.log(place);
          alert(JSON.stringify(place));
        })
        .catch((error) => console.error(error));
    });
  }
</script>
```

## APIS

🛈 NOTE: Prepend `BkUnified.` on every api when using the umd module (CDN or Browser) 🛈

## License

This package is licensed under the MIT License.

## Contribution

Any kind of contribution is welcome. Thanks!
