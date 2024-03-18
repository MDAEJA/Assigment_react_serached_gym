// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import ImagesContainer from './component/ImagesContainer';
import React,{ useEffect, useState } from 'react';

 
function App() {
    let [urldata,setdata] = useState([]);
    let [searchValue,setSearchValue] = useState("");
    let [searchdata,setSearchData] = useState([]);


    // let datacontain =[];
    const fetchData = async ()=>{
        const url = 'https://exercisedb.p.rapidapi.com/exercises'
        const option = {
            method :'GET',
            params: {limit: '20'},
            headers :{
                'X-RapidAPI-Key': 'd2817b268cmsh386415b35146721p126d7bjsnbb2fc93fa0b9',
                 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        }
        try{
        let response = await fetch(url,option);
        let data = await response.json();
        setdata(data)   
        console.log(urldata)
        }
        catch(error){
            console.log("getting an error");
        }
    }
    // function searched(){
    //   const serdata = urldata;
    //   console.log(serdata);
    //   setdata([]);
    //   let getValue = searchValue;
    //   let newarr = []
    //   serdata.forEach((ele)=>{
    //   let check =  ele.some((item)=>{
    //       item.name == getValue
    //     })
    //     if(check){
    //       newarr.push(ele);
    //     }
    //   })
    //   setSearchData(newarr);
      
    // }
    useEffect(()=>{
      fetchData()
    },[]);

    // useEffect(()=>{
    //   searched()
    // },[searchValue]);
  return (
   
   <>
   <Header></Header>
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'20px 0px'}}>
    <input  onChange={(e)=>
      {setSearchValue(e.target.value)}} type='text' placeholder='Search By Name' style={{padding:'10px 10px',borderRadius:'10px' }}></input>
   </div>
   {/* <button onClick={fetchData}>click me</button> */}
   <div style={{display:'flex',alignItems:'center',gap:'20px',flexWrap:'wrap',padding:'30px 10%',justifyContent:'center'}}>
    {
      urldata.length > 0 && urldata.map((item,index)=>{
         return <ImagesContainer gymname = {item.name} imgname={item.gifUrl} bodynamed={item.bodyPart} equip={item.equipment} ></ImagesContainer>
      })
    }
   
   </div>
   <button style={{padding:'5px 10px',backgroundColor:'rgb(21, 146, 230)',color:'white',textAlign:'center',margin:'30px 45%'}}>Show More</button>
   </>
  );
}

export default App;
// Where Fitness Meets Fun and Results Are Achieved
// Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.



