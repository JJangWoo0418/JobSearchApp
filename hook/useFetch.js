import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);         //담아놓을 공간이 필요함
    const [isLoading, setIsLoading] = useState(false)   //서버에서 받아오는 동안 유저를 위한 것을 만들어야함 로딩(로딩도 상태가 바뀜)
    const [error, setError] = useState(null);   //서버관련된 상태에러가 떴을 때 알기 위해서 필요함
    //데이터를 가져올 때 위의 세가지 속성들을 주로 사용한다.
    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'a8cf502c26msh950feba2970f016p13d1a3jsn38080be4e1f9',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };
    const fetchData = async () => {
        setIsLoading(true)  //기다려야될 때 로딩 켜주고 (1)
        try{
            const response = await axios.request(options)    //비동기라서 쭉 사용되기 때문에 그냥 쓰면 안된다. async await을 사용해주어야함. 서버로부터 데이터를 받아야되는데 언제 올지 모름 그때까지 기다려야함 (await)
            setData(response.data.data)   //데이터가 제대로 왔다는 것
            setIsLoading(false) //데이터 다 왔을 때 로딩 꺼주고 (2) 하면 사용자가 아 불러오는구나 다 불러왔구나를 알 수 있음.
        }catch(error){  //안에껄 try로 실행 시켰는데 에러가 잡히면 setError를 사용하여 에러가 있다고 캐치함
            setError(error)
        }finally{
            setIsLoading(false) //에러가 없다면 마무리한다.
        }
    }
    useEffect(() => {   //{}여기 있는 함수를 실행시켜주는 역할 []은 예시로 error나 로딩을 넣으면 에러가 뜰 때 로딩이 될 때 {}함수를 실행시켜줘 라는 것, []을 공백으로 두면 반드시 한 번은 실행을 시킨다는 것이다.
        fetchData()
    }, [])
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }
    return {data, isLoading, error, refetch}
}
export default useFetch