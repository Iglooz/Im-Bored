let boredApp = new Vue ({
    el: '#boredApp',
    data: {
        activity: "temp",
        userPicked: false,
        savedActivities: [],
        covidMode: false,


    },
    computed: {},

    methods: {
        getActivity() {
            if(this.covidMode){
                axios.get('https://www.boredapi.com/api/activity?participants=1').then(resp =>{
                    console.log(resp)
                    this.activity = resp.data;
                    this.userPicked = true;
                   })

            } else {
                axios.get('https://www.boredapi.com/api/activity').then(resp =>{
                    console.log(resp)
                    this.activity = resp.data;
                    this.userPicked = true;
                })
            }

        },
        saveActivity(activity) {
            this.savedActivities.push(activity);

        },
        toggleCovidMode() {
            this.covidMode == !this.covidMode;
            console.log(this.covidMode)

        }

    },

})