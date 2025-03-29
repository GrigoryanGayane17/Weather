import React from 'react';
import Slider from "react-slick";


function WeatherBar({data}) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div style={{padding: '50px', display: 'flex', justifyContent: 'center'}}
                         className="col-lg-6 col-md-12 col-sm-12">
                        <div style={{
                            padding: '50px',
                            backdropFilter: 'blur(5px)',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(33,203,225,0.1)',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                            maxWidth: '800px',
                            textAlign: 'center'
                        }}>
                            <h1>{data.city.name}</h1>
                            <h2>{data.list[0].main.temp}°C</h2>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-12 col-sm-12'}>
                        <div className="slider-container" style={{marginTop: '20px'}}>
                            <Slider {...settings}>
                                {data.list.map((item) => (
                                    <div
                                        key={item.dt}
                                        style={{
                                            padding: '20px',
                                            backgroundColor: 'rgba(0,0,0,0.75)',
                                            color: 'white',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            margin: '10px'
                                        }}
                                    >
                                        <p style={{fontSize: '18px', fontWeight: 'bold'}}>
                                            {new Date(item.dt * 1000).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                        <p>{item.weather[0].main}</p>
                                        <p>{item.main.temp}°C</p>
                                        <img
                                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                            alt={item.weather[0].description}
                                            style={{width: '50px', height: '50px'}}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default WeatherBar;
