# Game Of Life

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overpopulation.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

## Getting Started

Stephen Hawking said that Convay's game of life can predict the future if fed with correct input. So we decided to start with this project to get insights of Test Driven development. We have written the tests for core functions in js.

### Prerequisities

* Basics of Javascript & HTML
* Familiarity with test running framework `Mocha`

### Installing

* Clone the repository
```
git clone https://github.com/theflyingmantis/game-of-life.git
```

* Install node packages
```
npm install
```

* Run index.html to run Convay's Game of Life
```
src/public/index.html
```

## Running the tests

```npm test``` 
### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

* Clone the repo on your system and install mocha

## Built With

* mocha - For test runner
* Javascript - Core logic of the game implemented in js
* Sublime 3.0 - Text Editor

## Contributing

Contributions are welcomed. 

## Versioning

Version 1.0

## Authors

* **Abhinav Rai** - *Initial work* - [theflyingmantis](https://github.com/theflyingmantis)
* **Daval Pargal** - *Initial work* - [davalpargal](https://github.com/davalpargal)

## License

You are free to use the code anywhere you want.

## Acknowledgments

* This is my first time with Test Driven Development. Would like to thank my pairing partner Daval Pargal for the sleepless night! 
