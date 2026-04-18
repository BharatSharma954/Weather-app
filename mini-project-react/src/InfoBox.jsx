import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({ info }) {
  const INIT_URL="/weather.avif"
  let HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  let COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  let RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg="
  // let info = {
  //   city:"delhi",
  //   feelslike: 24.84,
  //   temp: 25.05,
  //   tempMin: 25.05,
  //   tempMax: 25.05,
  //   humidity: 47,
  //   weather: "haze",
  // };

let updateInfo=(result)=>{
setWeatherInfo(result);
}
  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>80? RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
          title="weather image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            Weather: {info.weather}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temp: {info.temp}°C <br />
            Feels Like: {info.feelslike}°C <br />
            Min Temp: {info.tempMin}°C <br />
            Max Temp: {info.tempMax}°C <br />
            Humidity: {info.humidity}%
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
}