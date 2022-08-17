// This contains the Native Calls
// GPS , MIC , Camera

export const nativeOperations = {

    gps(success, fail){
        console.log("GPS code starts...");

        navigator.geolocation.getCurrentPosition((position) =>{
            const pos = {
                'lat' : position.coords.latitude,
                'lgn' : position.coords.longitude
            };
            success(pos);

        }, (err) => {
            fail(err);
        });

        console.log("GPS code ends...");
    },

    mic(){

    }
}