const find=async(val)=>{

    console.log('here');
    const url=`https://app.zipcodebase.com/api/v1/search?apikey=9f14c460-a33b-11ed-bece-0bf9f9763d40&codes=${val}&country=MY`;
    const response=await fetch(url);
    // console.log(response);
    const value=await response.json();
    // console.log(value);
    if(value.results.length===0){
        window.alert('Please the pin properly');
    }
    else{
        document.getElementById('state').value=value?.results[val][0].city;
    }
    
    // console.log(value.results[val][0].city);

}