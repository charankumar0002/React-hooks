import { useEffect, useState } from "react";

export default function SortBy() {
    const bands = [
        {
          name: 'Nightwish',
          albums: 9,
          members: 6,
          formed_in: 1996,
          dob: 'Feb 13 2002'
        },
        {
          name: 'Metallica',
          albums: 10,
          members: 4,
          formed_in: 1981,
          dob: 'Jan 01 2018'
        },
        {
          name: 'Nirvana',
          albums: 3,
          members: 3,
          formed_in: 1987,
          dob: 'Mar 11 2012'
        },
      ];

      const [data, setData] = useState([]);
      const [sortType, setSortType] = useState('albums');

        useEffect(() => {
            const sortArray = type => {
            const types = {
                albums: 'albums',
                members: 'members',
                formed: 'formed_in',
                DOB : 'dob',
            };
            const sortProperty = types[type];
            if(sortProperty !== types.DOB ){

            const sorted = [...bands].sort((a, b) => a[sortProperty] - b[sortProperty]);
            setData(sorted);
            
            }
            else {
                let sorted = [...bands].sort((a, b) =>
                new Date(a.sortProperty) - new Date(b.sortProperty));
                setData(sorted);
            }
            
            };
        
            sortArray(sortType);
        },
        [bands,sortType]);
        


  return (
    <div className="App">
        <select onChange={(e) => setSortType(e.target.value)} >
            <option value="albums">Albums</option>
            <option value="members">Members</option>
            <option value="formed">Formed in</option>
            <option value="DOB">date of birth</option>
        </select>

       
        
    {data.map(band => (
      <div key={band.id} style={{ margin: '30px' }}>
        <div>{`Band: ${band.name}`}</div>
        <div>{`Albums: ${band.albums}`}</div>
        <div>{`Members: ${band.members}`}</div>
        <div>{`Year of founding: ${band.formed_in}`}</div>
        <div>{`date of birth: ${band.dob}`}</div>
      </div>
    ))}
  </div>
  )
}
