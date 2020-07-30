# BlackJackCrack

[[Powered by ReactJs]](https://reactjs.org/)

BlackJackCrack is an online version of BlackJack Card Game. Current application is following the rules described bellow:

> Numbered cards are worth their face value - 4 of clubs is worth 4, 10 of spades is worth 10, and so on

> formatting syntax is to make it as readable

> The ace can be either 1 or 11

> Picture cards are worth 10 points.

# Terms:

> PUSH: Both the dealer's and player's points are the same

> BlackJack: Player got 21 in his first two cards

> HIT: Player draw cards

> STICK: Dealer draw cards

# Regulations:

-   At the begining of the game, both player and dealer will be given two cards each, Player can see his two cards and one of dealer's cards.

    -   If the player is dealt an Ace and a ten-value card , It is called "BLACKJACK" In that case, player will STICK and it will reveal the hidden card of the dealer.
    -   if the dealer also scores 21, Then the game is tied and it is called "PUSH"
    -   If the dealer score is bellow 21, The player wins

-   If not "BLACKJACK", player will HIT until player is happy with his cards.
    -   If the player's total score is 21, Its a "BLACKJACK" and player will "STICK".
    -   If the player's total score exceeds 21, Player looses.
    -   If total value is less than 21 and player is happy, the there will be STICK.
    -   After Stick, the dealer will start drawing card. He will keep drawing untill the total of dealer's card is greater than the player's total or it is less than 17.
    -   If dealer's cards exceed 21, dealer looses. Otherwise if the total score of the dealer is greater than the player's score, dealer wins.
    -   If both the dealer's and the player's points are the same, it will be a PUSH

### Tech

BlackJack uses a number of open source projects to work properly:

-   ReactJs - SPA!
-   Tyescript - Type casting
-   Redux - State Management Package
-   Material UI - Layout of the Components
-   Styled Components - design the componentss

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ yarn
$ yarn start
```

Or for npm,

```sh
$ npm i
$ npm start
```
