import React, { Component } from 'react'
import FilterExample5 from './searchfilter5';

export default class Search extends Component {
    state = {
        userData: [
          { username: 'John', experience: '5 years', percentage: '90%', jobRole: 'Software Engineer' },
          { username: 'Jane', experience: '3 years', percentage: '85%', jobRole: 'UI/UX Designer' },
          { username: 'Bob', experience: '8 years', percentage: '95%', jobRole: 'Product Manager' },
        ],
      };
  render() {
    const { userData } = this.state;
    return (
        
       
           
        
       
              <div>
                <h1>User Data</h1>
                <FilterExample5 userData={userData} />
              </div>
   
    )
  }
}
