<template>
   <a href="tel:+79268495999" class="Phone is-animating"></a>
</template>

<style scoped lang="scss">
 .Phone {
   display: block;
   margin: 0;
   width: 75px;
   height: 75px;
   font-size: 15px;
   background-color: #2453E0;
   border-radius: 5em;
   box-shadow:
     0 0 0 0em rgba(#2453E0, 0),
     0em 0.05em 0.1em rgba(#000000, 0.2);
   transform: translate3d(0, 0, 0) scale(1);
 }
 
 .Phone::before,
 .Phone::after {
   position: absolute;
   content: "";
 }
 
 .Phone::before {
   top: 0;
   left: 0;
   width: 75px;
   height: 75px;
   background-color: rgba(#fff, 0.1);
   border-radius: 100%;
   opacity: 1;
   transform: translate3d(0, 0, 0) scale(0);
 }
 
 .Phone::after {
   top: 13.5%;
   left: 13.5%;
   width: 55px;
   height: 55px;
   background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYuNiAxMC44YzEuNCAyLjggMy44IDUuMSA2LjYgNi42bDIuMi0yLjJjLjMtLjMuNy0uNCAxLS4yIDEuMS40IDIuMy42IDMuNi42LjUgMCAxIC40IDEgMVYyMGMwIC41LS41IDEtMSAxLTkuNCAwLTE3LTcuNi0xNy0xNyAwLS42LjQtMSAxLTFoMy41Yy41IDAgMSAuNCAxIDEgMCAxLjIuMiAyLjUuNiAzLjYuMS40IDAgLjctLjIgMWwtMi4zIDIuMnoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=);
   background-position: 50% 50%;
   background-repeat: no-repeat;
   background-size: cover;
   transform: translate3d(0, 0, 0);
 }
</style>