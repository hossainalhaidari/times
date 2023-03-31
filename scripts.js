const prayTimes = new PrayTimes("Tehran");

$().ready(function () {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const date = new Date();
    const times = prayTimes.getTimes(date, [latitude, longitude]);

    $("#date").html(
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    $("#fajr").html(times.fajr);
    $("#sunrise").html(times.sunrise);
    $("#dhuhr").html(times.dhuhr);
    $("#sunset").html(times.sunset);
    $("#maghrib").html(times.maghrib);
    $("#midnight").html(times.midnight);
  });
});
