import React, {useState} from 'react'
import {Query, gql, useQuery} from '@apollo/client'


const Store = () =>{
    const [isLoading, setIsLoadig] = useState(true)
    const GET_CATS = gql`
        query getCats {
            cats{
                id
                name
            }
        }   
    `
    const { loading, error, data } = useQuery(GET_CATS)
    //console.log('THis is loading', loading)
    //loading ? setIsLoadig(true): setIsLoadig(false)
    return (
            <div>
                <h1>This is query data</h1>
                {
                    data ? console.log("data is returned") : console.log("data is not returned")
                    
                }
            </div>
        )  

}

export default Store