import React from 'react'

export const WeatherFrom = (props:any) => {
  return (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group m-2">
                <input type="text" name="city" placeholder="Your city name"
                className="form-control" autoFocus/>
            </div>
            <div className="form-group m-2">
                <input type="text" name="country" placeholder="Your Country name"
                className="form-control" autoFocus/>
            </div>
            <button className="btn btn-success mx-auto">Start!</button>
        </form>
    </div>
  )
}
