import React from 'react'

export const WeatherInfo = (props:any) => {
  return (
    <div>
      {
        props.error &&
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      }
      {
        props.temp ?
          <div className="card card-body">
          <p>
            Location: {props.city}, {props.country}
          </p>
          <p>
            Temperature: {props.temp} °C, {props.desc}
          </p>
          <p>
            Humidity: {props.hum}
          </p>
          </div>
        : <div></div>
      }
    </div>
  )
}
