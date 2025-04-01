"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

const TravelPage = () => { 
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    tripType: 'round'
  });
  const [passengerData, setPassengerData] = useState({
    name: '',
    age: ''
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [selectedService, setSelectedService] = useState('livingroom');
  const [selectedDay, setSelectedDay] = useState('monday');
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showTicket, setShowTicket] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrorMessage('');
  };

  const handlePassengerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassengerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.from || !formData.to) {
      setErrorMessage('Please select both departure and destination locations.');
      return;
    }
    
    if (formData.tripType === 'round' && !formData.return) {
      setErrorMessage('Please select return date for round trip.');
      return;
    }
    
    setShowPassengerModal(true);
  };

  const handlePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerData.name || !passengerData.age) {
      setErrorMessage('Please enter both name and age.');
      return;
    }
    setShowPassengerModal(false);
    setShowTicket(true);
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  const printTicket = () => {
    window.print();
  };

  // Generate random flight details
  const flightNumber = `FL${Math.floor(Math.random() * 9000) + 1000}`;
  const departureTime = `${Math.floor(Math.random() * 12) + 1}:${Math.random() > 0.5 ? '00' : '30'} ${Math.random() > 0.5 ? 'AM' : 'PM'}`;
  const arrivalTime = `${Math.floor(Math.random() * 12) + 1}:${Math.random() > 0.5 ? '00' : '30'} ${Math.random() > 0.5 ? 'AM' : 'PM'}`;
  const seatNumber = `${String.fromCharCode(65 + Math.floor(Math.random() * 6))}${Math.floor(Math.random() * 30) + 1}`;
  const gateNumber = `G${Math.floor(Math.random() * 30) + 1}`;
  const bookingRef = Math.random().toString(36).substring(2, 10).toUpperCase();

  return (



<>

  <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>Flight - Travel and Tour</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/template/img//apple-touch-icon.png" />
      <link rel="stylesheet" href="/template/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/template/css/bootstrap-theme.min.css" />
      <link rel="stylesheet" href="/template/css/fontAwesome.css" />
      <link rel="stylesheet" href="/template/css/hero-slider.css" />
      <link rel="stylesheet" href="/template/css/owl-carousel.css" />
      <link rel="stylesheet" href="/template/css/datepicker.css" />
      <link rel="stylesheet" href="/template/css/tooplate-style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"
        rel="stylesheet"
      />
      <section className="banner" id="top">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-side">
                <div className="logo">
                  <img src="template/img/logo.png" alt="Flight Template" />
                </div>
                <div className="tabs-content">
                  <h4>Choose Your Direction:</h4>
                  <ul className="social-links">
                    <li>
                      <a href="http://facebook.com">
                        Find us on <em>Facebook</em>
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="http://youtube.com">
                        Our <em>YouTube</em> Channel
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="http://instagram.com">
                        Follow our <em>instagram</em>
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="page-direction-button">
                  <a href="contact.html">
                    <i className="fa fa-phone" />
                    Contact Us Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1">
              <section id="first-tab-group" className="tabgroup">
                <div id="tab1">
                  <div className="submit-form">
                    <h4>Check availability for <em>direction</em>:</h4>
                    <form id="form-submit" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="from">From:</label>
                            <select 
                              required 
                              name="from" 
                              value={formData.from}
                              onChange={handleChange}
                            >
                              <option value="">Select a location...</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="India">India</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea</option>
                              <option value="Laos">Laos</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Vietnam">Vietnam</option>
                            </select>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="to">To:</label>
                            <select required name="to" value={formData.to} onChange={handleChange}>
                              <option value="">Select a location...</option>
                              <option value="Cambodia">Cambodia</option>
                              <option value="Hong Kong">Hong Kong</option>
                              <option value="India">India</option>
                              <option value="Japan">Japan</option>
                              <option value="Korea">Korea</option>
                              <option value="Laos">Laos</option>
                              <option value="Myanmar">Myanmar</option>
                              <option value="Singapore">Singapore</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Vietnam">Vietnam</option>
                            </select>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="departure">Departure date:</label>
                            <input
                              name="departure"
                              type="date"
                              className="form-control"
                              id="departure"
                              required
                              value={formData.departure}
                              onChange={handleChange}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <label htmlFor="return">Return date:</label>
                            <input
                              name="return"
                              type="date"
                              className="form-control"
                              id="return"
                              required={formData.tripType === 'round'}
                              value={formData.return}
                              onChange={handleChange}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <div className="radio-select">
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                <label htmlFor="round">Round</label>
                                <input
                                  type="radio"
                                  name="tripType"
                                  id="round"
                                  value="round"
                                  checked={formData.tripType === 'round'}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="col-md-6 col-sm-6 col-xs-6">
                                <label htmlFor="oneway">Oneway</label>
                                <input
                                  type="radio"
                                  name="tripType"
                                  id="oneway"
                                  value="oneway"
                                  checked={formData.tripType === 'oneway'}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">
                              Order Ticket Now
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Passenger Details Modal */}
      {showPassengerModal && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
          <div className="modal-dialog" style={{ marginTop: '100px' }}>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Passenger Details</h4>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePassengerSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={passengerData.name}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      name="age"
                      value={passengerData.age}
                      onChange={handlePassengerChange}
                      required
                      min="1"
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
     {showTicket && (
  <div className="modal" style={{ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)', 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    zIndex: 1000
  }}>
    <div className="modal-dialog" style={{ 
      maxWidth: '650px',
      width: '90%',
      margin: '0 auto'
    }}>
      <div className="modal-content" style={{ 
        border: 'none', 
        borderRadius: '8px',
        overflow: 'hidden',
        background: 'white',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
      }}>
        <div id="ticket-to-print" style={{
          width: '100%',
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          color: '#333',
          position: 'relative'
        }}>
          {/* Airline Header with Logo */}
          <div style={{
            background: '#d50000',
            color: 'white',
            padding: '20px 25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '50px',
                height: '50px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{ width: '100%', height: '100%' }}>
                  <path d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4l-8 6.315v1.895l8-2.526V18l-2 2v2l3.5-1 3.5 1v-2l-2-2v-4.316l8 2.526z"/>
                </svg>
              </div>
              <div>
                <h2 style={{ 
                  margin: 0,
                  fontSize: '28px',
                  fontWeight: 'bold',
                  letterSpacing: '1px'
                }}>AN COMPANY</h2>
                <div style={{
                  fontSize: '16px',
                  letterSpacing: '2px'
                }}>BOARDING PASS</div>
              </div>
            </div>
            <div style={{
              background: 'white',
              color: '#d50000',
              padding: '8px 15px',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              {formData.tripType === 'round' ? 'ROUND TRIP' : 'ONE WAY'}
            </div>
          </div>

          {/* Detailed Flight Information */}
          <div style={{ padding: '25px' }}>
            {/* Passenger and Flight Details */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              <div style={{ width: '60%' }}>
                <div style={{ 
                  display: 'flex',
                  marginBottom: '15px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#f5f5f5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px'
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#d50000">
                      <path d="M12 4a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#666' }}>PASSENGER</div>
                    <div style={{ 
                      fontSize: '20px', 
                      fontWeight: 'bold',
                      borderBottom: '2px solid #eee',
                      paddingBottom: '5px'
                    }}>{passengerData.name.toUpperCase()}</div>
                    <div style={{ 
                      fontSize: '14px',
                      color: '#666',
                      marginTop: '5px'
                    }}>Age: {passengerData.age} | Seat: {seatNumber}</div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex',
                  marginBottom: '20px'
                }}>
                  <div style={{ width: '50%' }}>
                    <div style={{ fontSize: '14px', color: '#666' }}>FROM</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {formData.from}
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      color: '#d50000',
                      fontWeight: 'bold'
                    }}>
                      {formData.from.split(' ').map(word => word[0]).join('').toUpperCase()}
                    </div>
                  </div>
                  <div style={{ width: '50%' }}>
                    <div style={{ fontSize: '14px', color: '#666' }}>TO</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                      {formData.to}
                    </div>
                    <div style={{ 
                      fontSize: '16px',
                      color: '#d50000',
                      fontWeight: 'bold'
                    }}>
                      {formData.to.split(' ').map(word => word[0]).join('').toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ 
                width: '35%',
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '8px'
              }}>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px'
                }}>
                  <div>
                    <div style={{ fontSize: '14px', color: '#666' }}>FLIGHT</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>AC {Math.floor(Math.random() * 9000) + 1000}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#666' }}>DATE</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{formData.departure}</div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '14px', color: '#666' }}>CLASS</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>ECONOMY</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#666' }}>TERMINAL</div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>T2</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Flight Info Boxes */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '25px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '23%',
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '14px', color: '#666' }}>GATE</div>
                <div style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#d50000',
                  margin: '5px 0'
                }}>{gateNumber}</div>
                <div style={{ fontSize: '12px' }}>Closes 10 min before</div>
              </div>

              <div style={{
                width: '23%',
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '14px', color: '#666' }}>BOARDING</div>
                <div style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '5px 0'
                }}>{departureTime}</div>
                <div style={{ fontSize: '12px' }}>Zone {Math.floor(Math.random() * 5) + 1}</div>
              </div>

              <div style={{
                width: '23%',
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '14px', color: '#666' }}>BAGGAGE</div>
                <div style={{ 
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '5px 0'
                }}>2</div>
                <div style={{ fontSize: '12px' }}>23kg × 1 | 7kg × 1</div>
              </div>

              <div style={{
                width: '23%',
                background: '#f9f9f9',
                padding: '15px',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '14px', color: '#666' }}>TICKET</div>
                <div style={{ 
                  fontSize: '14px',
                  fontWeight: 'bold',
                  margin: '5px 0',
                  wordBreak: 'break-all'
                }}>
                  {Math.floor(Math.random() * 900) + 100} {Math.floor(Math.random() * 10000000000)}
                </div>
                <div style={{ fontSize: '12px' }}>ETKT</div>
              </div>
            </div>

            {/* Flight Timeline */}
            <div style={{
              background: '#f9f9f9',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px'
              }}>
                <div style={{ width: '30%' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{departureTime}</div>
                  <div style={{ fontSize: '14px' }}>{formData.departure}</div>
                </div>
                <div style={{ width: '40%', textAlign: 'center' }}>
                  <div style={{
                    height: '2px',
                    background: '#d50000',
                    position: 'relative',
                    margin: '10px 0'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '10px',
                      height: '10px',
                      background: '#d50000',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <div style={{ fontSize: '12px' }}>
                    {Math.floor(Math.random() * 10) + 2}h {Math.floor(Math.random() * 50) + 10}m
                  </div>
                </div>
                <div style={{ width: '30%', textAlign: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{arrivalTime}</div>
                  <div style={{ fontSize: '14px' }}>
                    {formData.tripType === 'round' ? formData.return : formData.departure}
                  </div>
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#666'
              }}>
                <div>{formData.from}</div>
                <div>NON-STOP</div>
                <div>{formData.to}</div>
              </div>
            </div>

            {/* Barcode Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px dashed #d50000',
              paddingTop: '15px'
            }}>
              <div style={{ fontSize: '12px', color: '#666' }}>
                <div>Boarding Pass #{Math.floor(Math.random() * 1000000)}</div>
                <div>Issued at: {new Date().toLocaleString()}</div>
              </div>
              <div style={{
                fontFamily: "'Libre Barcode 128', cursive",
                fontSize: '40px',
                lineHeight: '0.8'
              }}>
                {bookingRef}
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="modal-footer" style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            padding: '15px 25px',
            borderTop: '1px solid #ddd',
            backgroundColor: '#f8f9fa'
          }}>
            <button 
              type="button" 
              onClick={() => setShowTicket(false)}
              style={{
                padding: '12px 25px',
                fontSize: '16px',
                borderRadius: '4px',
                border: '1px solid #d50000',
                background: 'white',
                color: '#d50000',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Close Ticket
            </button>
            <button 
              type="button" 
              onClick={printTicket}
              style={{
                padding: '12px 25px',
                fontSize: '16px',
                borderRadius: '4px',
                border: 'none',
                background: '#d50000',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Print Boarding Pass
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap');
      `}</style>
  <div className="tabs-content" id="weather">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Check Weather For 5 NEXT Days</h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="col-md-12">
            <div className="weather-content">
              <div className="row">
                <div className="col-md-12">
                  <ul className="tabs clearfix" data-tabgroup="second-tab-group">
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map((day) => (
                      <li key={day}>
                        <a 
                          href={`#${day}`}
                          className={selectedDay === day ? 'active' : ''}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDaySelect(day);
                          }}
                        >
                          {day.charAt(0).toUpperCase() + day.slice(1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-12">
                  <section id="second-tab-group" className="weathergroup">
                    <div id={selectedDay}>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="weather-item">
                            <h6>Myanmar</h6>
                            <div className="weather-icon">
                              <img src="template/img/weather-icon-03.png" alt="" />
                            </div>
                            <span>32°C</span>
                            <ul className="time-weather">
                              <li>6AM <span>26°</span></li>
                              <li>12PM <span>32°</span></li>
                              <li>6PM <span>28°</span></li>
                              <li>12AM <span>22°</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="weather-item">
                            <h6>Thailand</h6>
                            <div className="weather-icon">
                              <img src="template/img/weather-icon-02.png" alt="" />
                            </div>
                            <span>28°C</span>
                            <ul className="time-weather">
                              <li>6AM <span>20°</span></li>
                              <li>12PM <span>28°</span></li>
                              <li>6PM <span>26°</span></li>
                              <li>12AM <span>18°</span></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="weather-item">
                            <h6>India</h6>
                            <div className="weather-icon">
                              <img src="template/img/weather-icon-01.png" alt="" />
                            </div>
                            <span>33°C</span>
                            <ul className="time-weather">
                              <li>6AM <span>26°</span></li>
                              <li>12PM <span>33°</span></li>
                              <li>6PM <span>29°</span></li>
                              <li>12AM <span>27°</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="service-item first-service">
            <div className="service-icon" />
            <h4>Easy Tooplate</h4>
            <p>
              Donec varius porttitor iaculis. Integer sollicitudin erat et
              ligula viverra vulputate. In in quam efficitur, pulvinar justo ut,
              tempor nunc. Phasellus pharetra quis odio.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-item second-service">
            <div className="service-icon" />
            <h4>Unique Ideas</h4>
            <p>
              Cras ligula diam, tristique at aliquam at, fermentum auctor
              turpis. Proin leo massa, iaculis elementum massa et, consectetur
              varius dolor. Fusce sed ipsum sit.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-item third-service">
            <div className="service-icon" />
            <h4>Best Support</h4>
            <p>
              Fusce leo dui. Mauris et justo eget arcu ultricies porta. Nulla
              facilisi. Nulla nec risus sit amet magna hendrerit venenatis. Sed
              porta tincidunt lectus eget ultrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="tabs-content" id="recommended-hotel">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Recommended Hotel For You</h2>
          </div>
        </div>
        <div className="wrapper">
          <div className="col-md-4">
            <ul className="tabs clearfix" data-tabgroup="third-tab-group">
              {[
                { id: 'livingroom', label: 'Living Room' },
                { id: 'suitroom', label: 'Suit Room' },
                { id: 'swimingpool', label: 'Swiming Pool' },
                { id: 'massage', label: 'Massage Service' },
                { id: 'fitness', label: 'Fitness Life' },
                { id: 'event', label: 'Evening Event' }
              ].map((service) => (
                <li key={service.id}>
                  <a 
                    href={`#${service.id}`}
                    className={selectedService === service.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceSelect(service.id);
                    }}
                  >
                    {service.label} <i className="fa fa-angle-right" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <section id="third-tab-group" className="recommendedgroup">
            <div id={selectedService}>
              {selectedService === 'livingroom' && (
                <div className="text-content">
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/rMxTreSFMgE"
                  ></iframe>
                </div>
              )}
              {selectedService === 'suitroom' && (
                <div className="row">
                  <div className="col-md-12">
                    <div id="owl-suiteroom" className="owl-carousel owl-theme">
                      <div className="item">
                        <div className="suiteroom-item">
                          <img src="template/img/suite-02.jpg" alt="" />
                          <div className="text-content">
                            <h4>Clean And Relaxing Room</h4>
                            <span>Aurora Resort</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="suiteroom-item">
                          <img src="template/img/suite-01.jpg" alt="" />
                          <div className="text-content">
                            <h4>Special Suite Room TV</h4>
                            <span>Khao Yai Hotel</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="suiteroom-item">
                          <img src="template/img/suite-03.jpg" alt="" />
                          <div className="text-content">
                            <h4>The Best Sitting</h4>
                            <span>Hotel Grand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedService === 'swimingpool' && (
                <>
                  <img src="template/img/swiming-pool.jpg" alt="" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-content">
                        <h4>Lovely View Swiming Pool For Special Guests</h4>
                        <span>Victoria Resort and Spa</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {selectedService === 'massage' && (
                <>
                  <img src="template/img/massage-service.jpg" alt="" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-content">
                        <h4>Perfect Place For Relaxation</h4>
                        <span>Napali Beach</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {selectedService === 'fitness' && (
                <>
                  <img src="template/img/fitness-service.jpg" alt="" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-content">
                        <h4>Insane Street Workout</h4>
                        <span>Hua Hin Beach</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {selectedService === 'event' && (
                <>
                  <img src="template/img/evening-event.jpg" alt="" />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-content">
                        <h4>Finest Winery Night</h4>
                        <span>Queen Restaurant</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <section id="most-visited">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Most Visited Places</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div id="owl-mostvisited" className="owl-carousel owl-theme">
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-01.jpg" alt="" />
                <div className="text-content">
                  <h4>River Views</h4>
                  <span>New York</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-02.jpg" alt="" />
                <div className="text-content">
                  <h4>Lorem ipsum dolor</h4>
                  <span>Tokyo</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-03.jpg" alt="" />
                <div className="text-content">
                  <h4>Proin dignissim</h4>
                  <span>Paris</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-04.jpg" alt="" />
                <div className="text-content">
                  <h4>Fusce sed ipsum</h4>
                  <span>Hollywood</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-02.jpg" alt="" />
                <div className="text-content">
                  <h4>Vivamus egestas</h4>
                  <span>Tokyo</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-01.jpg" alt="" />
                <div className="text-content">
                  <h4>Aliquam elit metus</h4>
                  <span>New York</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-03.jpg" alt="" />
                <div className="text-content">
                  <h4>Phasellus pharetra</h4>
                  <span>Paris</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-04.jpg" alt="" />
                <div className="text-content">
                  <h4>In in quam efficitur</h4>
                  <span>Hollywood</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-01.jpg" alt="" />
                <div className="text-content">
                  <h4>Sed faucibus odio</h4>
                  <span>NEW YORK</span>
                </div>
              </div>
            </div>
            <div className="item col-md-12">
              <div className="visited-item">
                <img src="template/img/place-02.jpg" alt="" />
                <div className="text-content">
                  <h4>Donec varius porttitor</h4>
                  <span>Tokyo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="primary-button">
            <a href="#" className="scroll-top">
              Back To Top
            </a>
          </div>
        </div>
        <div className="col-md-12">
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/tooplate">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-rss" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-behance" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-12">
          
        </div>
      </div>
    </div>
  </footer>
</>
 );
};

export default TravelPage;