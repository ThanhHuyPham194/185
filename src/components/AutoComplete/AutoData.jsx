import React from 'react'
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import { useController } from 'react-hook-form';
const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

export default function AutoData({control,...props}) {

  const {field}=useController({control, name:props.name});
  
  return (
    <>
    <div className='autodata'>
    <AutoComplete
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1

    }
    
    {...field}
    {...props}
  />
  <i class="fa fa-angle-down"></i>
  </div>
  </>
  )
}
