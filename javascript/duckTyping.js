function isSantaClausable(obj) {
  var santaClause = typeof obj.sayHoHoHo == 'function'
    && typeof obj.distributeGifts == 'function'
    && typeof obj.goDownTheChimney =='function';

  return santaClause;
}
