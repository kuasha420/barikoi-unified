# Barikoi Unified - Node Example

Just a simple CLI app to demo and test barikoi-unified api.

## Installation

1. Clone the Repository
2. cd into the `examples/node` folder.
3. install dependencies using `yarn` or `npm i`.
4. Follow usage instruction.

## Usage Instruction

### Interactive Use

For interactive CLI use, just run `yarn start` and answer the questions.

You can prefill the API key using `BARIKOI_API` environment variable.

ie. `BARIKOI_API=YOUR-API-KEY-HERE yarn start`

### Quiet mode

You can skip the whole questioning and run the demo quietly using the following command:

`BARIKOI_API=YOUR-API-KEY-HERE yarn start quiet`

Or,

`BARIKOI_API=YOUR-API-KEY-HERE yarn start quiet factory`

The `BARIKOI_API` environment variable must be set for quiet mode to work.
