import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
require('react-datepicker/dist/react-datepicker.css');

const RenderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched && error && <span>{error}</span>}
  </div>
);

export default RenderDatePicker