class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
        allcontestant = data.val();
      })
    }
  
    getContestantAtEnd() {
      database.ref('CarsAtEnd').on("value",(data)=>{
        this.rank = data.val();
      })
    }
  
    static updateCarsAtEnd(rank) {
      database.ref('/').update({
        CarsAtEnd:rank
      })
    }
  }