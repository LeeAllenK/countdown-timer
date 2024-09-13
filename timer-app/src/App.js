import { useState, useEffect } from 'react'

const Timer = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const softwareEngineer = 'October 01, 2024'

  const getTime = () => {
    const time = Date.parse(softwareEngineer) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) * 24));
    setMinutes(Math.floor(time / 1000 / 60) % 60);
    setSeconds(Math.floor(time / 1000) % 60);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getTime(softwareEngineer);
    }, 1000)
    return () => clearTimeout(timer);
  }, [days, hours, minutes, seconds])

  return (
    <div>
      <h1>I have {days} days {hours} hours {minutes} minutes and {seconds} second(s) until I get a job as Software Engineer!</h1>

    </div>

  )
}

export default Timer;