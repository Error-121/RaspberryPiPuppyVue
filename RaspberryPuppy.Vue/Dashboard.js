const baseUrl = "https://raspberrypuppy.azurewebsites.net"
const app = Vue.createApp({
  data() {
    return {
      
        // API data
        personality: null,
        trip: null,
        error: '', // Fejlbesked

        //Mock data
        totalDistance: 0,
        approvedWalks: 0,
        failedWalks: 0,
        averageRank: 0,
      
    };
  },

  methods: {
    async fetchPersonalityData() {
      try{
        const response = await axios.get(`${baseUrl}/personality/4020`)
        this.personality = response.data; // Opdater personality-data
        console.log('Personality:', this.personality);
        } catch (error) {
          console.error('Fejl ved hentning af personality-data:', error);
          this.error = 'Kunne ikke hente data fra /personality API.';
        };
  },
  
//   async fetchPersonalityData() { // helper metode: getAllCar + getByVendor are very similar
//     try {
//         const response = await axios.get('https://raspberrypuppy.azurewebsites.net/personality/4020')
//         this.personality = await response.data
//         console.log(response.data)
//         console.log(this.personality[0])
//     } catch (ex) {
//         alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
//     }
// },

  
  //Hent alle hunde
  getAllDogs() {
            console.log("getAllDogs called")
            this.helperGetAndShow(baseUrl)
  },
  async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.dogs = await response.data
            } catch (ex) {
                alert(ex.message)
            }
  },
          
  async fetchTripData() {
    try{
        const response = await axios.get(`${baseUrl}/Trip`);
        this.trip = response.data[0];
        console.log('Trip Data:', this.trip); //Debugging
        // Opdater data med mock-data
           
      } catch(error){
        console.error('Fejl ved hentning af trip-data:', error);
        this.error = 'Kunne ikke hente data fra /trip API.';
      };
  },

  loadMockData() {
    this.totalDistance = 50;
    this.approvedWalks = 12;
    this.failedWalks = 3;
    this.averageRank = 85;
  }

},
mounted() {
    this.fetchPersonalityData(); // Hent data, når komponenten er loadet
    this.fetchTripData();

    //Indlæs mock data
    this.loadMockData();
  },
}).mount('#app');

  