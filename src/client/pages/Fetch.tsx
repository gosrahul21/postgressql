import React, {useState} from 'react';
import axios from 'axios';

function fetch(){
    console.log("fetch")
    const [data, setData] = useState(null);

    const getData = async ()=>{
        try {
            const {data} =await axios.get('http://localhost:8080/psql/users');
            setData(data)
        } catch (error) {
            setData(null);
        }
    }
    return <div>
        <h1>Get Data</h1>
        {
            data?.map((row: any)=>(
                <div style={{display:'flex', padding:'5px'}}>
                    
                    <div style={{marginLeft:'2px'}}>
                        Name: {row.name}
                    </div>

                    <div>
                        Email: {row.email}
                    </div>
                    
                </div>
                
                
            ))
        }
        <button onClick={getData}>
            Fetch Data
        </button>
    </div>
}

export default fetch;