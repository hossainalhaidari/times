const prayTimes = new PrayTimes("Tehran");

const toDate = (date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const calc = () => {
  const lat = parseFloat($("#latitude").val());
  const lng = parseFloat($("#longitude").val());
  const timezone = $("#timezone").val();
  const date = new Date($("#date").val());
  const times = prayTimes.getTimes(date, [lat, lng], timezone);

  $("#datelabel").html(toDate(date));
  $("#fajr").html(times.fajr);
  $("#sunrise").html(times.sunrise);
  $("#dhuhr").html(times.dhuhr);
  $("#sunset").html(times.sunset);
  $("#maghrib").html(times.maghrib);
  $("#midnight").html(times.midnight);
};

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    $("#latitude").val(latitude);
    $("#longitude").val(longitude);
    calc();
  });
};

$().ready(function () {
  $("#date").val(toDate(new Date()));
  getCurrentLocation();

  $("#latitude").on("keypress", calc);
  $("#longitude").on("keypress", calc);
  $("#timezone").on("keypress", calc);
  $("#submit").on("click", calc);
  $("#current").on("click", getCurrentLocation);
});

/*
const getLocation = async (lat, lng) => {
  const response = await fetch(
    `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat},${lng}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "46d7726abdmshbdb3e1e18931a93p1911d8jsn97f5fa1b22c0",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    }
  );

  return (await response.json()).results[0].locality;
};
*/