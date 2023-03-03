import React from 'react';
import logo from './logo.svg';
import './App.css';

const getMinuteAndSecondBySecond = (count) => {
  const minute = Math.floor(count / 60);
  const second = count % 60;
  return {
    minute,
    second,
  }
}

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(pre => pre + 1);
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const { minute, second } = getMinuteAndSecondBySecond(count);

  return (
    <div style={{
      backgroundColor:'#47944F',
      display:'flex',
      // paddingLeft:550,
      flexDirection:'column',
      // justifyContent:'center',
      alignItems:'center'
    }}>
      
      <p style={{
        fontSize:120,
        fontWeight:700,

      }}>
        {`${minute} : ${second}`}
      </p>
      <div style={{
        display:'flex',
        color:'black',
        alignItems:'center'
      }}>
        <div style={{
          backgroundColor:'#7FBE85',
          width:100,
          height:100,
          borderRadius:80,
          borderColor:'black',
          borderStyle:'double',
          borderWidth:8,
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontSize:24,
          marginRight:254,
          fontWeight:700
        }}>
          <p>
            Vòng
          </p>
        </div>
        <div style={{
         backgroundColor:'white',
         width:10,
         height:10,
         borderRadius:70,
         marginRight:22
        }}>

        </div>
        <div style={{
         backgroundColor:'#90B691e',
         width:10,
         height:10,
         borderRadius:70 
        }}>

        </div>
        <div style={{
          backgroundColor:'#7FBE85',
          width:100,
          height:100,
          borderRadius:80,
          borderColor:'black',
          borderStyle:'double',
          borderWidth:8,
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontSize:24,
          marginLeft:254,
          fontWeight:700
        }}>
          <p>
            Bắt đầu
          </p>
        </div>

      </div>
      <div style={{
        backgroundColor:'grey',
        height:1
      }}>

      </div>
      <div style={{
        display:'flex',
        marginTop:50

      }}> 
      {[
        {
          image: 'image/gioQuocte.png',
          text:'Giờ quốc tế'
        },
        {
          image: 'image/baoThuc.png',
          text:'Báo thức'
        },
        {
          image: 'image/bamGio.png',
          text:'Bấm giờ'
        },
        {
          image: 'image/henGio.png',
          text:'Hẹn giờ'
        },
      ].map(item => {
        return(
          <div style={{
            display:'flex',
            flexDirection:'column',
            marginRight:95,
            marginLeft:95,
            fontWeight:'bold',
            alignItems:'center'
            // paddingTop:'auto'
          }}>
            <img src={item.image}
            style={{
              width:90,
              height:90
            }} />
            <p>
              {item.text}
            </p>
          </div>  
        )
      })}

      </div>
    
    </div>
  );
}

export default App;
