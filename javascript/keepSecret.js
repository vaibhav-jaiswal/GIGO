function createSecretHolder(secret) {

  var obj = {
    
    getSecret : function () {
      return secret;
    },
    setSecret : function(arg){
      secret = arg;
    }
    
  };
  
  return obj;

}