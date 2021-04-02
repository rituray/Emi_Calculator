import React, {useState} from 'react';
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {Table, TableCell, TableRow} from '@material-ui/core';
import {Pie} from 'react-chartjs-2';
import TableDetails from './TableDetails';
import SliderMarks2 from './SliderMarks2';


const PrettoSlider = withStyles({
  root:{color:"#4a277a",height:10},
  thumb:{height:25,width:25,backgroundColor:'white',border:'3px solid black',marginTop:-9,marginLeft:-9},
  track:{height:10,borderRadius:4},
  rail:{height:10,borderRadius:4},
})(Slider);


function Personal(){
  const[pAmount,setpAmount] = useState(2755000);
  const[interest,setinterest] = useState(7);
  const[duration,setDuration] = useState(40);
  const maxValue = 6000000; 
  const intMax = 20;
  const maxDuration =60;

  const intr =interest/1200;
  const emi= duration ? Math.round(pAmount * intr /(1-(Math.pow(1/(1+intr), duration)))):0;
  const totalAmt =duration *emi;
  var TotalAmountOfCredit =Math.round((emi/intr)*(1-Math.pow((1+intr), (-duration))));
  const TotalAmountOfInterest =Math.round(totalAmt - TotalAmountOfCredit);
  return (
    <div className="App">
      <div className="CalApp">
        { <h2 className="CalHeading"><u>PERSONAL LOAN CALCULATOR</u></h2> }
        <div>
          <Typography gutterBottom><strong>Personal Loan Amount</strong></Typography> 
          <PrettoSlider value={pAmount}
           marks={SliderMarks2.marksAmt2}
            onChange={(event,vAmt) => {setpAmount(vAmt)}} 
            defaultValue={pAmount} max={maxValue} />
         
        </div>
        <div>
          <Typography gutterBottom><strong>Interest Rate%</strong></Typography> 
          <PrettoSlider value={interest} marks={SliderMarks2.marksInt2}onChange={(event,vInt) => {setinterest(vInt);}} defaultValue={interest} max={intMax}/>
        </div>
        <div>
          <Typography gutterBottom><strong>Duration</strong></Typography> 
          <PrettoSlider value={duration}  marks={SliderMarks2.marksTenure2}onChange={(event,vDur) => {setDuration(vDur);}} defaultValue={duration} max={maxDuration}/>
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
                    backgroundColor:['coffee','#4a277a']
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

export default Personal;

