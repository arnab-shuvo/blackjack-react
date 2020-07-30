# BlackJackCrack

[[Powered by ReactJs]](https://reactjs.org/)

BlackJackCrack is a online version of BlackJack Card Game. Current application is following the rules described bellow:

> Numbered cards are worth their face value - 4 of clubs is worth 4, 10 of spades is worth 10, and so on
> formatting syntax is to make it as readable
> The ace can be either 1 or 11
> Picture cards are worth 10 points.

# Terms:

> PUSH: Both the dealer's and player's points are same
> BlackJack: Player got 21 in his first two cards
> HIT: Player draw cards
> STICK: Dealer drar cards

# Regulations:

-   At the begining of the game, both player and dealer will be given two cards each, Player can see his two cards and one of dealer's cards.

    -   If the player is dealt an Ace and a ten-value card , It is called "BLACKJACK" In that case, player will hit Stick button and it will reveal the hidden card of dealer.
    -   if dealer also scores 21, Then the game is draw and it is called "PUSH"
    -   If dealer score is bellow 21, The player wins

-   If not "BLACKJACK", player will HIT until player is happy with his cards.
    -   If the player's total card's value exceeds 21, Player loose.
    -   If total value is less then 21 and player is happy, the there will be STICK.
    -   After Stick, dealer will start drawing card. He will keep drawing untill total of dealer's card is greater than player's total.
    -   If dealer's card exceed 21, dealer loose. If not, if total is greater than player's point, dealer wins or else player wins.
    -   If both delaer'sw and player's point is same, it will be a PUSH

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
