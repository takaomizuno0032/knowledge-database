import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



export default function TopPageBackGround() {

    return (
        <video
            src='/videos/background_video.mp4'
            autoPlay
            loop
            webkit-playsinline="true"
            muted
            width='100%'
            height='100%'
            typeof='video/mp4'
            poster='/images/temp_background_image.png'
        >
        </video>
    );
}