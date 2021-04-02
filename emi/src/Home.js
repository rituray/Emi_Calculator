import React, {useState} from 'react';
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Table, TableCell, TableRow} from '@material-ui/core';
import {Pie} from 'react-chartjs-2';
import TableDetails from './TableDetails';
import SliderMarks from './SliderMarks';


const PrettoSlider = withStyles({
  root:{color:"#27447a",height:10},
  thumb:{height:25,width:25,backgroundColor:'white',border:'3px solid black',marginTop:-9,marginLeft:-9},
  track:{height:10,borderRadius:4},
  rail:{height:10,borderRadius:4},
})(Slider);


function Home(){
  const[pAmount,setpAmount] = useState(2755000);
  const[interest,setinterest] = useState(7);
  const[duration,setDuration] = useState(147);
  const minValue=1000000;
  const maxValue = 100000000; 
  const intMax = 15;
  const maxDuration =360;

  const intr =interest/1200;
  const emi= duration ? Math.round(pAmount * intr /(1-(Math.pow(1/(1+intr), duration)))):0;
  const totalAmt =duration *emi;
  var TotalAmountOfCredit =Math.round((emi/intr)*(1-Math.pow((1+intr), (-duration))));
  const TotalAmountOfInterest =Math.round(totalAmt - TotalAmountOfCredit);
  return (
    <div className="App">
      <div className="CalApp">
        { <h2 className="CalHeading"><u>HOME LOAN CALCULATOR</u></h2> }
        <div>
          <Typography gutterBottom><strong>Home Loan Amount</strong></Typography> 
          <PrettoSlider value={pAmount}
           marks={SliderMarks.marksAmt1}
            onChange={(event,vAmt) => {setpAmount(vAmt)}} 
            defaultValue={pAmount} min={minValue} max={maxValue}  />
         
        </div>
        <div>
          <Typography gutterBottom><strong>Interest Rate%</strong></Typography> 
          <PrettoSlider value={interest} marks={SliderMarks.marksInt1}onChange={(event,vInt) => {setinterest(vInt);}} defaultValue={interest} max={intMax}/>
        </div>
        <div>
          <Typography gutterBottom><strong>Duration</strong></Typography> 
          <PrettoSlider value={duration}  marks={SliderMarks.marksTenure1}onChange={(event,vDur) => {setDuration(vDur);}} defaultValue={duration} max={maxDuration}/>
        </div>

        <div>
          <Table>
            <TableRow>
              <TableCell>
                <TableDetails pAmount={pAmount} totalAmt={totalAmt} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest}/>
              </TableCell>
              <TableCell>
                <Pie
                data={{
                  labels:['Total Interest','Total Amount'],
                  datasets:[{
                    data:[TotalAmountOfInterest,pAmount],
                    backgroundColor:['coffee','#27447a']
                  }]
                }}
                width={200}
                height={200}
                  
                  />
              </TableCell>
            </TableRow>
          </Table>
          </div>
      </div>
     
    </div>
  );
}

export default Home;
