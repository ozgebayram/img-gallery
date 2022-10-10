import React from 'react'
import data from '../helper/data';
import Picture from '../components/Picture';

const Homepage=()=> {
  return (
	<div >
		<h1>Autumn Picture Gallery</h1>
		<div>
			{data.map((i)=>{
				return <Picture data={i}/>
			})}
		</div>
	</div>
  )
}
export default Homepage;
