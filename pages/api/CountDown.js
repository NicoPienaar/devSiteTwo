// import React, {useState, useEffect} from "react"
// import Button from '@material-ui/core/Button';
// import Confetti from 'react-confetti'
// import Head from 'next/head'
// // import styles from '../styles/Home.module.css'


// export default function Clock(props){
//     // fails in prerender
//     // const [difference, setDifference] = useState(props.eventDetails.Date - (new Date()));
//     const [difference, setDifference] = useState(0);
//     const [eventName, setEventName] = useState("");

//     const getReadableTimeFromMilliseconds = (milli) => {
//         var days = Math.floor(milli/1000/60/60/24);
//         if(days > 0){
//             milli -= days*1000*60*60*24;
//         }
//         var hours = Math.floor(milli/1000/60/60);
//         if(hours > 0){
//             milli -= hours*1000*60*60;
//         }
//         var minutes = Math.floor(milli/1000/60);
//         if(minutes > 0){
//             milli -= minutes*1000*60;
//         }
//         var seconds = Math.floor(milli/1000);
//         return (
//             <div className={styles.clock_container}>
//                 <h1 className={styles.days_remain}>{days} Days, and</h1>
//                 <h1 className={styles.main_timer}>{("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}</h1>
//             </div>
//         )
//     }

//     useEffect(() => {
//         setEventName(props.eventDetails.Name);
//         const interval = setInterval(() => {
//             setDifference(props.eventDetails.Date - (new Date()))
//         }, 1000);
//         return () => {clearInterval(interval)}
//     }, []);

//     return (
//         <div className={styles.clock_page}>
//             {difference < 0 ?
//             <div>
//                 <Confetti/>
//                 <div className={styles.clock_container}>
//                     <h1 className={styles.days_remain}>0 Days, and</h1>
//                     <h1 className={styles.main_timer_success}>00:00:00</h1>
//                 </div>
//             </div>
//             :
//             getReadableTimeFromMilliseconds(difference)
//             }
//             {/* fails in prerender. Have to hold Name in state and call setState in useEffect*/}
//             {/* <h1 style={{fontSize: '4rem'}} >until {props.eventDetails.Name}</h1> */}
//             <div className={styles.clock_container}>
//                 <h1 className={styles.until}>until {eventName}</h1>
//             </div>
//             <Button variant="contained" color="secondary" onClick={()=>{props.onClickBack()}}>BACK</Button>
//         </div>
//     )
// }