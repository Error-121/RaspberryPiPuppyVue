const baseUrl = "https://localhost:7050/Puppy"


// Vue.createApp({
//     data() {
//         return {
//           // Liste over hunde (vi tager kun én for at starte)
//           dogs: [],
//           dogToGetBy: "",
//           idToGetBy: -1,
//           singleDog: null,
//         }
//       },
//       methods: {
//         // Hent alle hunde
//         getAllDogs() {
//           console.log("getAllDogs called")
//           //this.helperGetAndShow(baseUrl)
//           this.dogs = [{id: 1, name: "Fido", race: "gravehund", NeedToWalk: "true", Sounds: "woof" },
//             {id: 2, name: "frida", race: "hund2", NeedToWalk: "true", Sounds: "vow" }
//           ]
//         },
//         // Hent en hund
//         async getById(id) {
//           const url = baseUrl + "/" + id
//           try {
//             const response = await axios.get(url)
//             this.singleDog = await response.data
//           } catch (ex) {
//             alert(ex.message)
//           }
//         },
//         // Hjælpemetode til at hente og vise data
//         async helperGetAndShow(url) {
//           try {
//             const response = await axios.get(url)
//             this.dogs = await response.data
//           } catch (ex) {
//             alert(ex.message)
//           }
//         }
//       }
// }).mount("#app")

//         };
//           ,
//           selectedDog: null, // Den valgte hund
//         };
//       },
//       methods: {
//         // Vælg en hund fra listen
//         selectDog(dog) {
//           this.selectedDog = dog;
//         },
//       },
//       template: `
//         <div>
//           <h1>Vælg en hund</h1>
//           <ul>
//             <li v-for="dog in dogs" :key="dog.id">
//               <button @click="selectDog(dog)">{{ dog.name }}</button>
//             </li>
//           </ul>
    
//           <div v-if="selectedDog">
//             <h2>Behov for {{ selectedDog.name }}</h2>
//             <ul>
//               <li v-for="need in selectedDog.needs" :key="need">{{ need }}</li>
//             </ul>
//           </div>
//         </div>
//       `,
// })
//     data(){
//         return{
//             Puppy:[],
//             idToGetBy: 1,
//             singlePuppy: null,
//             deleteId: 0,
//             deleteMessage: "",
//             addData:{Name: "", Race: "", NeedToWalk: 0},
//             addMessage: "",
//             updateData: {id: 0, Name: "", Race: "", NeedToWalk: 0},
//             updateMessage: ""
//         }
//     },
//     methods:{
//         getAllpuppies(){
//             this.helperGetAndShow(baseUrl)
//         },
//         async getById(id){
//             const url = baseUrl + "/" + id
//             try {
//                 const response = await axios.get(url)
//                 this.singlePuppy = await response.data
//             } catch(ex){
//                 alert(ex.message)
//             }
//         },
//         async deletePuppy(deleteId) {
//             const url = baseUrl + "/" + deleteId
//             try {
//                 response = await axios.post(baseUrl, this.addData)
//                 this.addMessage = "response" + response.status + " " + response.statusText
//                 this.getAllpuppies()
//             } catch (ex) {
//                 alert(ex.message)
//             }

//         },
//         async addPuppy(){
//             try{    
//                 response = await axios.post(baseUrl, this.addData)
//                 this.addMessage = "response" + response.status + " " + response.statusText
//                 this.getAllpuppies()
//             } catch (ex) {
//                 alert(ex.message)
//             }
//         },
//         async updatePuppy(){
//             const url = baseUrl + "/" + this.updateData.id
//             try {
//                 response = await axios.put(url, this.updateData)
//                 this.updateMessage = "response " + response.status + " " + response.statusText
//                 this.getAllpuppies()
//             } catch (ex) {
//                 alert(ex.message)
//             }
//         }


// 

const {Chart, registerables} = ('Chart.js');
Chart.register(...registerables);

const LineChart = {
  props: ['chartData', 'chartOptions'],
  template: '<canvas></canvas>',
  mounted(){
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$el.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: this.chartOptions,
      });
    }
  }
};

const app = Vue.createApp({
  data() {
    return {
      totalDistance: 0,
      approvedWalks: 0,
      failedWalks: 0,
      averageRank: 0,
    };
  },
  methods: {
    fetchData() {
      // Hent data fra en mock API
      axios.get('https://jsonplaceholder.typicode.com/posts/1') // Eksempel-API
        .then(response => {
          // Simuler data baseret på API-svaret
          const mockData = {
            totalDistance: 10.5,
            approvedWalks: 8,
            failedWalks: 2,
            averageRank: 80,
          };
          
          // Opdater data med mock-data
          this.totalDistance = mockData.totalDistance;
          this.approvedWalks = mockData.approvedWalks;
          this.failedWalks = mockData.failedWalks;
          this.averageRank = mockData.averageRank;
        })
        .catch(error => {
          console.error('Fejl ved hentning af data:', error);
        });
    },
  },
  mounted() {
    this.fetchData(); // Hent data, når komponenten er loadet
  },
});

app.mount('#app');